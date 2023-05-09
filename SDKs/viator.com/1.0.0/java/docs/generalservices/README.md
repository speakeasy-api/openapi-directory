# generalServices

## Overview

General services

### Available Operations

* [healthCheck](#healthcheck) - /health/check

## healthCheck

Health check
Use this service to determine whether the Viator API is presently online and that your API key is valid. You should receive a response identical to the example shown. If you have not yet received an API key, please request one from your business development partner. If you have not yet signed up as a Viator merchant partner and would like to, please visit our [distribution partner website](https://www.viator.com/distribution-partners?mcid=58463#api-solutions)."


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthCheckRequest;
import org.openapis.openapi.models.operations.HealthCheckResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            HealthCheckRequest req = new HealthCheckRequest("en-US");            

            HealthCheckResponse res = sdk.generalServices.healthCheck(req);

            if (res.healthCheck200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
