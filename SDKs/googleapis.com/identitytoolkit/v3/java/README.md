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

import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriQueryParams;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriResponse;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartyCreateAuthUriRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyCreateAuthUriRequest req = new IdentitytoolkitRelyingpartyCreateAuthUriRequest() {{
                security = new IdentitytoolkitRelyingpartyCreateAuthUriSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new IdentitytoolkitRelyingpartyCreateAuthUriQueryParams() {{
                    alt = "json";
                    fields = "corrupti";
                    key = "provident";
                    oauthToken = "distinctio";
                    prettyPrint = false;
                    quotaUser = "quibusdam";
                    userIp = "unde";
                }};
                request = new IdentitytoolkitRelyingpartyCreateAuthUriRequest() {{
                    appId = "nulla";
                    authFlowType = "corrupti";
                    clientId = "illum";
                    context = "vel";
                    continueUri = "error";
                    customParameter = new java.util.HashMap<String, String>() {{
                        put("suscipit", "iure");
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    hostedDomain = "tempora";
                    identifier = "suscipit";
                    oauthConsumerKey = "molestiae";
                    oauthScope = "minus";
                    openidRealm = "placeat";
                    otaApp = "voluptatum";
                    providerId = "iusto";
                    sessionId = "excepturi";
                    tenantId = "nisi";
                    tenantProjectNumber = "recusandae";
                }};
            }};            

            IdentitytoolkitRelyingpartyCreateAuthUriResponse res = sdk.relyingparty.identitytoolkitRelyingpartyCreateAuthUri(req);

            if (res.createAuthUriResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### relyingparty

* `identitytoolkitRelyingpartyCreateAuthUri` - Creates the URI used by the IdP to authenticate the user.
* `identitytoolkitRelyingpartyDeleteAccount` - Delete user account.
* `identitytoolkitRelyingpartyDownloadAccount` - Batch download user accounts.
* `identitytoolkitRelyingpartyEmailLinkSignin` - Reset password for a user.
* `identitytoolkitRelyingpartyGetAccountInfo` - Returns the account info.
* `identitytoolkitRelyingpartyGetOobConfirmationCode` - Get a code for user action confirmation.
* `identitytoolkitRelyingpartyGetProjectConfig` - Get project configuration.
* `identitytoolkitRelyingpartyGetPublicKeys` - Get token signing public key.
* `identitytoolkitRelyingpartyGetRecaptchaParam` - Get recaptcha secure param.
* `identitytoolkitRelyingpartyResetPassword` - Reset password for a user.
* `identitytoolkitRelyingpartySendVerificationCode` - Send SMS verification code.
* `identitytoolkitRelyingpartySetAccountInfo` - Set account info for a user.
* `identitytoolkitRelyingpartySetProjectConfig` - Set project configuration.
* `identitytoolkitRelyingpartySignOutUser` - Sign out user.
* `identitytoolkitRelyingpartySignupNewUser` - Signup new user.
* `identitytoolkitRelyingpartyUploadAccount` - Batch upload existing user accounts.
* `identitytoolkitRelyingpartyVerifyAssertion` - Verifies the assertion returned by the IdP.
* `identitytoolkitRelyingpartyVerifyCustomToken` - Verifies the developer asserted ID token.
* `identitytoolkitRelyingpartyVerifyPassword` - Verifies the user entered password.
* `identitytoolkitRelyingpartyVerifyPhoneNumber` - Verifies ownership of a phone number and creates/updates the user account accordingly.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
