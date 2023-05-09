<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveAccountBalancesV2Request;
import org.openapis.openapi.models.operations.RetrieveAccountBalancesV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrieveAccountBalancesV2Request req = new RetrieveAccountBalancesV2Request("9bd9d8d6-9a67-44e0-b467-cc8796ed151a");            

            RetrieveAccountBalancesV2Response res = sdk.accounts.retrieveAccountBalancesV2(req);

            if (res.retrieveAccountBalancesV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->