<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            Oauth2TokeninfoRequest req = new Oauth2TokeninfoRequest() {{
                queryParams = new Oauth2TokeninfoQueryParams() {{
                    accessToken = "dolorem";
                    alt = "json";
                    fields = "et";
                    idToken = "dolorem";
                    key = "molestias";
                    oauthToken = "adipisci";
                    prettyPrint = false;
                    quotaUser = "inventore";
                    userIp = "velit";
                }};
            }};

            Oauth2TokeninfoResponse res = sdk.oauth2Tokeninfo(req);

            if (res.tokeninfo.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->