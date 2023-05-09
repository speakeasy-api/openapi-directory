# v1

### Available Operations

* [cloudsearchInitializeCustomer](#cloudsearchinitializecustomer) - Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.

## cloudsearchInitializeCustomer

Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchInitializeCustomerRequest;
import org.openapis.openapi.models.operations.CloudsearchInitializeCustomerResponse;
import org.openapis.openapi.models.operations.CloudsearchInitializeCustomerSecurity;
import org.openapis.openapi.models.operations.CloudsearchInitializeCustomerSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchInitializeCustomerSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchInitializeCustomerSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchInitializeCustomerRequest req = new CloudsearchInitializeCustomerRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("eos", "totam");
                    put("dicta", "voluptatem");
                    put("velit", "dolor");
                    put("sunt", "a");
                }};
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "atque";
                fields = "beatae";
                key = "at";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "esse";
                uploadProtocol = "voluptatem";
            }};            

            CloudsearchInitializeCustomerResponse res = sdk.v1.cloudsearchInitializeCustomer(req, new CloudsearchInitializeCustomerSecurity() {{
                option1 = new CloudsearchInitializeCustomerSecurityOption1("perferendis", "rerum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
