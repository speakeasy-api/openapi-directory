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
                    accessToken = "illo";
                    alt = "json";
                    fields = "fuga";
                    idToken = "et";
                    key = "nobis";
                    oauthToken = "odio";
                    prettyPrint = true;
                    quotaUser = "ea";
                    userIp = "asperiores";
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