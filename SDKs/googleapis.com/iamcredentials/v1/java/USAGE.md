<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse;
import org.openapis.openapi.models.shared.GenerateAccessTokenRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    name = "corrupti";
                }};
                queryParams = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GenerateAccessTokenRequest() {{
                    delegates = new String[]{{
                        add("iure"),
                        add("magnam"),
                    }};
                    lifetime = "debitis";
                    scope = new String[]{{
                        add("delectus"),
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