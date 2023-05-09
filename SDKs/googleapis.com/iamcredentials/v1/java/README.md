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
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GenerateAccessTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest req = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                generateAccessTokenRequest = new GenerateAccessTokenRequest() {{
                    delegates = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                    lifetime = "corrupti";
                    scope = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                }};;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "ipsa";
                key = "delectus";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "molestiae";
                uploadProtocol = "minus";
            }};            

            IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse res = sdk.projects.iamcredentialsProjectsServiceAccountsGenerateAccessToken(req, new IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity("placeat", "voluptatum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.generateAccessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [iamcredentialsProjectsServiceAccountsGenerateAccessToken](docs/projects/README.md#iamcredentialsprojectsserviceaccountsgenerateaccesstoken) - Generates an OAuth 2.0 access token for a service account.
* [iamcredentialsProjectsServiceAccountsGenerateIdToken](docs/projects/README.md#iamcredentialsprojectsserviceaccountsgenerateidtoken) - Generates an OpenID Connect ID token for a service account.
* [iamcredentialsProjectsServiceAccountsSignBlob](docs/projects/README.md#iamcredentialsprojectsserviceaccountssignblob) - Signs a blob using a service account's system-managed private key.
* [iamcredentialsProjectsServiceAccountsSignJwt](docs/projects/README.md#iamcredentialsprojectsserviceaccountssignjwt) - Signs a JWT using a service account's system-managed private key.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
