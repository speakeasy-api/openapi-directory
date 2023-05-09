# healthyhomecoach

## Overview

Healthy Home Coach specific methods

### Available Operations

* [gethomecoachsdata](#gethomecoachsdata) - The method gethomecoachsdata Returns data from a user Healthy Home Coach Station (measures and device specific data).

## gethomecoachsdata

The method gethomecoachsdata Returns data from a user Healthy Home Coach Station (measures and device specific data).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GethomecoachsdataRequest;
import org.openapis.openapi.models.operations.GethomecoachsdataResponse;
import org.openapis.openapi.models.operations.GethomecoachsdataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GethomecoachsdataRequest req = new GethomecoachsdataRequest() {{
                deviceId = "corrupti";
            }};            

            GethomecoachsdataResponse res = sdk.healthyhomecoach.gethomecoachsdata(req, new GethomecoachsdataSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naHealthyHomeCoachDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
