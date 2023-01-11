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
                    name = "sed";
                }};
                queryParams = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "molestiae";
                    alt = "json";
                    callback = "provident";
                    fields = "et";
                    key = "autem";
                    oauthToken = "at";
                    prettyPrint = false;
                    quotaUser = "distinctio";
                    uploadType = "aliquam";
                    uploadProtocol = "qui";
                }};
                request = new GenerateAccessTokenRequest() {{
                    delegates = new String[]() {{
                        add("in"),
                        add("harum"),
                    }};
                    lifetime = "veniam";
                    scope = new String[]() {{
                        add("quam"),
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