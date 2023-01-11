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

            IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest req = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest() {{
                security = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams() {{
                    name = "sit";
                }};
                queryParams = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new GenerateAccessTokenRequest() {{
                    delegates = new String[]() {{
                        add("debitis"),
                        add("voluptatum"),
                        add("et"),
                    }};
                    lifetime = "ut";
                    scope = new String[]() {{
                        add("et"),
                        add("voluptate"),
                        add("iste"),
                    }};
                }};
            }};

            IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse res = sdk.projects.iamcredentialsProjectsServiceAccountsGenerateAccessToken(req);

            if (res.generateAccessTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->