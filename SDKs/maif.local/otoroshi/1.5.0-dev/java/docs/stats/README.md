# stats

## Overview

Everything about Otoroshi stats

### Available Operations

* [globalLiveStats](#globallivestats) - Get global otoroshi stats
* [serviceLiveStats](#servicelivestats) - Get live feed of otoroshi stats

## globalLiveStats

Get global otoroshi stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GlobalLiveStatsResponse;
import org.openapis.openapi.models.operations.GlobalLiveStatsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GlobalLiveStatsResponse res = sdk.stats.globalLiveStats(new GlobalLiveStatsSecurity("rem", "magni") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.stats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceLiveStats

Get live feed of global otoroshi stats (global) or for a service {id}

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceLiveStatsRequest;
import org.openapis.openapi.models.operations.ServiceLiveStatsResponse;
import org.openapis.openapi.models.operations.ServiceLiveStatsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceLiveStatsRequest req = new ServiceLiveStatsRequest("quae");            

            ServiceLiveStatsResponse res = sdk.stats.serviceLiveStats(req, new ServiceLiveStatsSecurity("quas", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.stats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
