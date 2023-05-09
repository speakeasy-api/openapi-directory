<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOauthV1AccessTokensTokenGetRequest;
import org.openapis.openapi.models.operations.GetOauthV1AccessTokensTokenGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOauthV1AccessTokensTokenGetRequest req = new GetOauthV1AccessTokensTokenGetRequest("corrupti");            

            GetOauthV1AccessTokensTokenGetResponse res = sdk.accessTokens.getOauthV1AccessTokensTokenGet(req);

            if (res.accessTokenInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->