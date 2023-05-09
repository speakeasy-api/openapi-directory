# services

### Available Operations

* [getV05HiServicesServiceId](#getv05hiservicesserviceid) - Get bridge service details/profile by the serviceId provided.

## getV05HiServicesServiceId

This API is meant for displaying the bridge service details by the serviceId provided .


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV05HiServicesServiceIdRequest;
import org.openapis.openapi.models.operations.GetV05HiServicesServiceIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV05HiServicesServiceIdRequest req = new GetV05HiServicesServiceIdRequest("labore", "expedita");            

            GetV05HiServicesServiceIdResponse res = sdk.services.getV05HiServicesServiceId(req);

            if (res.serviceProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
