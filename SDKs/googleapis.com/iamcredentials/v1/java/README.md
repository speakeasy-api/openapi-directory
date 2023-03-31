# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `iamcredentialsProjectsServiceAccountsGenerateAccessToken` - Generates an OAuth 2.0 access token for a service account.
* `iamcredentialsProjectsServiceAccountsGenerateIdToken` - Generates an OpenID Connect ID token for a service account.
* `iamcredentialsProjectsServiceAccountsSignBlob` - Signs a blob using a service account's system-managed private key.
* `iamcredentialsProjectsServiceAccountsSignJwt` - Signs a JWT using a service account's system-managed private key.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
