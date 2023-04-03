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
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GenerateAccessTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest req = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest() {{
                dollarXgafv = "2";
                generateAccessTokenRequest = new GenerateAccessTokenRequest() {{
                    delegates = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                    lifetime = "nulla";
                    scope = new String[]{{
                        add("illum"),
                        add("vel"),
                        add("error"),
                    }};
                }};
                accessToken = "deserunt";
                alt = "media";
                callback = "iure";
                fields = "magnam";
                key = "debitis";
                name = "ipsa";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "suscipit";
                uploadProtocol = "molestiae";
            }}            

            IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse res = sdk.projects.iamcredentialsProjectsServiceAccountsGenerateAccessToken(req, new IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.generateAccessTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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
