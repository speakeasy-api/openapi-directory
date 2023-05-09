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
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartyCreateAuthUriRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyCreateAuthUriRequest req = new IdentitytoolkitRelyingpartyCreateAuthUriRequest() {{
                identitytoolkitRelyingpartyCreateAuthUriRequest = new IdentitytoolkitRelyingpartyCreateAuthUriRequest() {{
                    appId = "corrupti";
                    authFlowType = "provident";
                    clientId = "distinctio";
                    context = "quibusdam";
                    continueUri = "unde";
                    customParameter = new java.util.HashMap<String, String>() {{
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                    }};
                    hostedDomain = "debitis";
                    identifier = "ipsa";
                    oauthConsumerKey = "delectus";
                    oauthScope = "tempora";
                    openidRealm = "suscipit";
                    otaApp = "molestiae";
                    providerId = "minus";
                    sessionId = "placeat";
                    tenantId = "voluptatum";
                    tenantProjectNumber = "iusto";
                }};;
                alt = AltEnum.JSON;
                fields = "excepturi";
                key = "nisi";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                userIp = "ab";
            }};            

            IdentitytoolkitRelyingpartyCreateAuthUriResponse res = sdk.relyingparty.identitytoolkitRelyingpartyCreateAuthUri(req, new IdentitytoolkitRelyingpartyCreateAuthUriSecurity("quis", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createAuthUriResponse != null) {
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


### [relyingparty](docs/relyingparty/README.md)

* [identitytoolkitRelyingpartyCreateAuthUri](docs/relyingparty/README.md#identitytoolkitrelyingpartycreateauthuri) - Creates the URI used by the IdP to authenticate the user.
* [identitytoolkitRelyingpartyDeleteAccount](docs/relyingparty/README.md#identitytoolkitrelyingpartydeleteaccount) - Delete user account.
* [identitytoolkitRelyingpartyDownloadAccount](docs/relyingparty/README.md#identitytoolkitrelyingpartydownloadaccount) - Batch download user accounts.
* [identitytoolkitRelyingpartyEmailLinkSignin](docs/relyingparty/README.md#identitytoolkitrelyingpartyemaillinksignin) - Reset password for a user.
* [identitytoolkitRelyingpartyGetAccountInfo](docs/relyingparty/README.md#identitytoolkitrelyingpartygetaccountinfo) - Returns the account info.
* [identitytoolkitRelyingpartyGetOobConfirmationCode](docs/relyingparty/README.md#identitytoolkitrelyingpartygetoobconfirmationcode) - Get a code for user action confirmation.
* [identitytoolkitRelyingpartyGetProjectConfig](docs/relyingparty/README.md#identitytoolkitrelyingpartygetprojectconfig) - Get project configuration.
* [identitytoolkitRelyingpartyGetPublicKeys](docs/relyingparty/README.md#identitytoolkitrelyingpartygetpublickeys) - Get token signing public key.
* [identitytoolkitRelyingpartyGetRecaptchaParam](docs/relyingparty/README.md#identitytoolkitrelyingpartygetrecaptchaparam) - Get recaptcha secure param.
* [identitytoolkitRelyingpartyResetPassword](docs/relyingparty/README.md#identitytoolkitrelyingpartyresetpassword) - Reset password for a user.
* [identitytoolkitRelyingpartySendVerificationCode](docs/relyingparty/README.md#identitytoolkitrelyingpartysendverificationcode) - Send SMS verification code.
* [identitytoolkitRelyingpartySetAccountInfo](docs/relyingparty/README.md#identitytoolkitrelyingpartysetaccountinfo) - Set account info for a user.
* [identitytoolkitRelyingpartySetProjectConfig](docs/relyingparty/README.md#identitytoolkitrelyingpartysetprojectconfig) - Set project configuration.
* [identitytoolkitRelyingpartySignOutUser](docs/relyingparty/README.md#identitytoolkitrelyingpartysignoutuser) - Sign out user.
* [identitytoolkitRelyingpartySignupNewUser](docs/relyingparty/README.md#identitytoolkitrelyingpartysignupnewuser) - Signup new user.
* [identitytoolkitRelyingpartyUploadAccount](docs/relyingparty/README.md#identitytoolkitrelyingpartyuploadaccount) - Batch upload existing user accounts.
* [identitytoolkitRelyingpartyVerifyAssertion](docs/relyingparty/README.md#identitytoolkitrelyingpartyverifyassertion) - Verifies the assertion returned by the IdP.
* [identitytoolkitRelyingpartyVerifyCustomToken](docs/relyingparty/README.md#identitytoolkitrelyingpartyverifycustomtoken) - Verifies the developer asserted ID token.
* [identitytoolkitRelyingpartyVerifyPassword](docs/relyingparty/README.md#identitytoolkitrelyingpartyverifypassword) - Verifies the user entered password.
* [identitytoolkitRelyingpartyVerifyPhoneNumber](docs/relyingparty/README.md#identitytoolkitrelyingpartyverifyphonenumber) - Verifies ownership of a phone number and creates/updates the user account accordingly.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
