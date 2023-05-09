# environments

## Overview

Everything about Otoroshi Environments

### Available Operations

* [allLines](#alllines) - Get all environments
* [servicesForALine](#servicesforaline) - Get all services for an environment

## allLines

Get all environments provided by the current Otoroshi instance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllLinesResponse;
import org.openapis.openapi.models.operations.AllLinesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllLinesResponse res = sdk.environments.allLines(new AllLinesSecurity("possimus", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.environment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicesForALine

Get all services for an environment provided by the current Otoroshi instance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicesForALineRequest;
import org.openapis.openapi.models.operations.ServicesForALineResponse;
import org.openapis.openapi.models.operations.ServicesForALineSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicesForALineRequest req = new ServicesForALineRequest("ratione");            

            ServicesForALineResponse res = sdk.environments.servicesForALine(req, new ServicesForALineSecurity("ex", "laudantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.services != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
