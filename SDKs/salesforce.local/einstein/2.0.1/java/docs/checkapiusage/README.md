# checkAPIUsage

## Overview

Resources that let you get API usage information.

### Available Operations

* [getApiUsagePlansV2](#getapiusageplansv2) - Get API Isage

## getApiUsagePlansV2

Returns prediction usage on a monthly basis for the current calendar month and future months. Each apiusage object in the response corresponds to a calendar month in your plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiUsagePlansV2Response;
import org.openapis.openapi.models.operations.GetApiUsagePlansV2Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiUsagePlansV2Response res = sdk.checkAPIUsage.getApiUsagePlansV2(new GetApiUsagePlansV2Security("distinctio") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.apiUsageList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
