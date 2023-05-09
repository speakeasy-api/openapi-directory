# relyingparty

### Available Operations

* [identitytoolkitRelyingpartyCreateAuthUri](#identitytoolkitrelyingpartycreateauthuri) - Creates the URI used by the IdP to authenticate the user.
* [identitytoolkitRelyingpartyDeleteAccount](#identitytoolkitrelyingpartydeleteaccount) - Delete user account.
* [identitytoolkitRelyingpartyDownloadAccount](#identitytoolkitrelyingpartydownloadaccount) - Batch download user accounts.
* [identitytoolkitRelyingpartyEmailLinkSignin](#identitytoolkitrelyingpartyemaillinksignin) - Reset password for a user.
* [identitytoolkitRelyingpartyGetAccountInfo](#identitytoolkitrelyingpartygetaccountinfo) - Returns the account info.
* [identitytoolkitRelyingpartyGetOobConfirmationCode](#identitytoolkitrelyingpartygetoobconfirmationcode) - Get a code for user action confirmation.
* [identitytoolkitRelyingpartyGetProjectConfig](#identitytoolkitrelyingpartygetprojectconfig) - Get project configuration.
* [identitytoolkitRelyingpartyGetPublicKeys](#identitytoolkitrelyingpartygetpublickeys) - Get token signing public key.
* [identitytoolkitRelyingpartyGetRecaptchaParam](#identitytoolkitrelyingpartygetrecaptchaparam) - Get recaptcha secure param.
* [identitytoolkitRelyingpartyResetPassword](#identitytoolkitrelyingpartyresetpassword) - Reset password for a user.
* [identitytoolkitRelyingpartySendVerificationCode](#identitytoolkitrelyingpartysendverificationcode) - Send SMS verification code.
* [identitytoolkitRelyingpartySetAccountInfo](#identitytoolkitrelyingpartysetaccountinfo) - Set account info for a user.
* [identitytoolkitRelyingpartySetProjectConfig](#identitytoolkitrelyingpartysetprojectconfig) - Set project configuration.
* [identitytoolkitRelyingpartySignOutUser](#identitytoolkitrelyingpartysignoutuser) - Sign out user.
* [identitytoolkitRelyingpartySignupNewUser](#identitytoolkitrelyingpartysignupnewuser) - Signup new user.
* [identitytoolkitRelyingpartyUploadAccount](#identitytoolkitrelyingpartyuploadaccount) - Batch upload existing user accounts.
* [identitytoolkitRelyingpartyVerifyAssertion](#identitytoolkitrelyingpartyverifyassertion) - Verifies the assertion returned by the IdP.
* [identitytoolkitRelyingpartyVerifyCustomToken](#identitytoolkitrelyingpartyverifycustomtoken) - Verifies the developer asserted ID token.
* [identitytoolkitRelyingpartyVerifyPassword](#identitytoolkitrelyingpartyverifypassword) - Verifies the user entered password.
* [identitytoolkitRelyingpartyVerifyPhoneNumber](#identitytoolkitrelyingpartyverifyphonenumber) - Verifies ownership of a phone number and creates/updates the user account accordingly.

## identitytoolkitRelyingpartyCreateAuthUri

Creates the URI used by the IdP to authenticate the user.

### Example Usage

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
                    appId = "deserunt";
                    authFlowType = "perferendis";
                    clientId = "ipsam";
                    context = "repellendus";
                    continueUri = "sapiente";
                    customParameter = new java.util.HashMap<String, String>() {{
                        put("odit", "at");
                        put("at", "maiores");
                        put("molestiae", "quod");
                        put("quod", "esse");
                    }};
                    hostedDomain = "totam";
                    identifier = "porro";
                    oauthConsumerKey = "dolorum";
                    oauthScope = "dicta";
                    openidRealm = "nam";
                    otaApp = "officia";
                    providerId = "occaecati";
                    sessionId = "fugit";
                    tenantId = "deleniti";
                    tenantProjectNumber = "hic";
                }};;
                alt = AltEnum.JSON;
                fields = "optio";
                key = "totam";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "commodi";
                userIp = "molestiae";
            }};            

            IdentitytoolkitRelyingpartyCreateAuthUriResponse res = sdk.relyingparty.identitytoolkitRelyingpartyCreateAuthUri(req, new IdentitytoolkitRelyingpartyCreateAuthUriSecurity("modi", "qui") {{
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

## identitytoolkitRelyingpartyDeleteAccount

Delete user account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyDeleteAccountRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyDeleteAccountResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyDeleteAccountSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartyDeleteAccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyDeleteAccountRequest req = new IdentitytoolkitRelyingpartyDeleteAccountRequest() {{
                identitytoolkitRelyingpartyDeleteAccountRequest = new IdentitytoolkitRelyingpartyDeleteAccountRequest() {{
                    delegatedProjectNumber = "impedit";
                    idToken = "cum";
                    localId = "esse";
                }};;
                alt = AltEnum.JSON;
                fields = "ipsum";
                key = "excepturi";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                userIp = "ad";
            }};            

            IdentitytoolkitRelyingpartyDeleteAccountResponse res = sdk.relyingparty.identitytoolkitRelyingpartyDeleteAccount(req, new IdentitytoolkitRelyingpartyDeleteAccountSecurity("natus", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deleteAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartyDownloadAccount

Batch download user accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyDownloadAccountRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyDownloadAccountResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyDownloadAccountSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartyDownloadAccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyDownloadAccountRequest req = new IdentitytoolkitRelyingpartyDownloadAccountRequest() {{
                identitytoolkitRelyingpartyDownloadAccountRequest = new IdentitytoolkitRelyingpartyDownloadAccountRequest() {{
                    delegatedProjectNumber = "iste";
                    maxResults = 222321L;
                    nextPageToken = "natus";
                    targetProjectId = "laboriosam";
                }};;
                alt = AltEnum.JSON;
                fields = "hic";
                key = "saepe";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "in";
                userIp = "corporis";
            }};            

            IdentitytoolkitRelyingpartyDownloadAccountResponse res = sdk.relyingparty.identitytoolkitRelyingpartyDownloadAccount(req, new IdentitytoolkitRelyingpartyDownloadAccountSecurity() {{
                option1 = new IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1("iste", "iure") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.downloadAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartyEmailLinkSignin

Reset password for a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyEmailLinkSigninRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyEmailLinkSigninResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyEmailLinkSigninSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartyEmailLinkSigninRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyEmailLinkSigninRequest req = new IdentitytoolkitRelyingpartyEmailLinkSigninRequest() {{
                identitytoolkitRelyingpartyEmailLinkSigninRequest = new IdentitytoolkitRelyingpartyEmailLinkSigninRequest() {{
                    email = "Maxie96@hotmail.com";
                    idToken = "est";
                    oobCode = "mollitia";
                }};;
                alt = AltEnum.JSON;
                fields = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "corporis";
                userIp = "explicabo";
            }};            

            IdentitytoolkitRelyingpartyEmailLinkSigninResponse res = sdk.relyingparty.identitytoolkitRelyingpartyEmailLinkSignin(req, new IdentitytoolkitRelyingpartyEmailLinkSigninSecurity("nobis", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.emailLinkSigninResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartyGetAccountInfo

Returns the account info.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetAccountInfoRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetAccountInfoResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetAccountInfoSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartyGetAccountInfoRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyGetAccountInfoRequest req = new IdentitytoolkitRelyingpartyGetAccountInfoRequest() {{
                identitytoolkitRelyingpartyGetAccountInfoRequest = new IdentitytoolkitRelyingpartyGetAccountInfoRequest() {{
                    delegatedProjectNumber = "omnis";
                    email = new String[]{{
                        add("minima"),
                        add("excepturi"),
                    }};
                    idToken = "accusantium";
                    localId = new String[]{{
                        add("culpa"),
                        add("doloribus"),
                    }};
                    phoneNumber = new String[]{{
                        add("architecto"),
                        add("mollitia"),
                        add("dolorem"),
                        add("culpa"),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "consequuntur";
                key = "repellat";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "occaecati";
                userIp = "numquam";
            }};            

            IdentitytoolkitRelyingpartyGetAccountInfoResponse res = sdk.relyingparty.identitytoolkitRelyingpartyGetAccountInfo(req, new IdentitytoolkitRelyingpartyGetAccountInfoSecurity("commodi", "quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getAccountInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartyGetOobConfirmationCode

Get a code for user action confirmation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Relyingparty;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest req = new IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest() {{
                relyingparty = new Relyingparty() {{
                    androidInstallApp = false;
                    androidMinimumVersion = "molestiae";
                    androidPackageName = "velit";
                    canHandleCodeInApp = false;
                    captchaResp = "error";
                    challenge = "quia";
                    continueUrl = "quis";
                    email = "Marguerite13@gmail.com";
                    iOSAppStoreId = "quo";
                    iOSBundleId = "sequi";
                    idToken = "tenetur";
                    kind = "ipsam";
                    newEmail = "id";
                    requestType = "possimus";
                    userIp = "aut";
                }};;
                alt = AltEnum.JSON;
                fields = "quasi";
                key = "error";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "laborum";
                userIp = "quasi";
            }};            

            IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse res = sdk.relyingparty.identitytoolkitRelyingpartyGetOobConfirmationCode(req, new IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity("reiciendis", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getOobConfirmationCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartyGetProjectConfig

Get project configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetProjectConfigRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetProjectConfigResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetProjectConfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyGetProjectConfigRequest req = new IdentitytoolkitRelyingpartyGetProjectConfigRequest() {{
                alt = AltEnum.JSON;
                delegatedProjectNumber = "vero";
                fields = "nihil";
                key = "praesentium";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                projectNumber = "ipsa";
                quotaUser = "omnis";
                userIp = "voluptate";
            }};            

            IdentitytoolkitRelyingpartyGetProjectConfigResponse res = sdk.relyingparty.identitytoolkitRelyingpartyGetProjectConfig(req, new IdentitytoolkitRelyingpartyGetProjectConfigSecurity("cum", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.identitytoolkitRelyingpartyGetProjectConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartyGetPublicKeys

Get token signing public key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetPublicKeysRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetPublicKeysResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetPublicKeysSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyGetPublicKeysRequest req = new IdentitytoolkitRelyingpartyGetPublicKeysRequest() {{
                alt = AltEnum.JSON;
                fields = "doloremque";
                key = "reprehenderit";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "maiores";
                userIp = "dicta";
            }};            

            IdentitytoolkitRelyingpartyGetPublicKeysResponse res = sdk.relyingparty.identitytoolkitRelyingpartyGetPublicKeys(req, new IdentitytoolkitRelyingpartyGetPublicKeysSecurity("corporis", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.identitytoolkitRelyingpartyGetPublicKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartyGetRecaptchaParam

Get recaptcha secure param.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetRecaptchaParamRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetRecaptchaParamResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyGetRecaptchaParamSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyGetRecaptchaParamRequest req = new IdentitytoolkitRelyingpartyGetRecaptchaParamRequest() {{
                alt = AltEnum.JSON;
                fields = "iusto";
                key = "dicta";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "enim";
                userIp = "accusamus";
            }};            

            IdentitytoolkitRelyingpartyGetRecaptchaParamResponse res = sdk.relyingparty.identitytoolkitRelyingpartyGetRecaptchaParam(req, new IdentitytoolkitRelyingpartyGetRecaptchaParamSecurity("commodi", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getRecaptchaParamResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartyResetPassword

Reset password for a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyResetPasswordRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyResetPasswordResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyResetPasswordSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartyResetPasswordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyResetPasswordRequest req = new IdentitytoolkitRelyingpartyResetPasswordRequest() {{
                identitytoolkitRelyingpartyResetPasswordRequest = new IdentitytoolkitRelyingpartyResetPasswordRequest() {{
                    email = "Curt_Pouros@gmail.com";
                    newPassword = "pariatur";
                    oldPassword = "modi";
                    oobCode = "praesentium";
                }};;
                alt = AltEnum.JSON;
                fields = "rem";
                key = "voluptates";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "repudiandae";
                userIp = "sint";
            }};            

            IdentitytoolkitRelyingpartyResetPasswordResponse res = sdk.relyingparty.identitytoolkitRelyingpartyResetPassword(req, new IdentitytoolkitRelyingpartyResetPasswordSecurity("veritatis", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.resetPasswordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartySendVerificationCode

Send SMS verification code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySendVerificationCodeRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySendVerificationCodeResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySendVerificationCodeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartySendVerificationCodeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartySendVerificationCodeRequest req = new IdentitytoolkitRelyingpartySendVerificationCodeRequest() {{
                identitytoolkitRelyingpartySendVerificationCodeRequest = new IdentitytoolkitRelyingpartySendVerificationCodeRequest() {{
                    iosReceipt = "incidunt";
                    iosSecret = "enim";
                    phoneNumber = "consequatur";
                    recaptchaToken = "est";
                }};;
                alt = AltEnum.JSON;
                fields = "quibusdam";
                key = "explicabo";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "distinctio";
                userIp = "quibusdam";
            }};            

            IdentitytoolkitRelyingpartySendVerificationCodeResponse res = sdk.relyingparty.identitytoolkitRelyingpartySendVerificationCode(req, new IdentitytoolkitRelyingpartySendVerificationCodeSecurity("labore", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.identitytoolkitRelyingpartySendVerificationCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartySetAccountInfo

Set account info for a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySetAccountInfoRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySetAccountInfoResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySetAccountInfoSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartySetAccountInfoRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartySetAccountInfoRequest req = new IdentitytoolkitRelyingpartySetAccountInfoRequest() {{
                identitytoolkitRelyingpartySetAccountInfoRequest = new IdentitytoolkitRelyingpartySetAccountInfoRequest() {{
                    captchaChallenge = "qui";
                    captchaResponse = "aliquid";
                    createdAt = "cupiditate";
                    customAttributes = "quos";
                    delegatedProjectNumber = "perferendis";
                    deleteAttribute = new String[]{{
                        add("assumenda"),
                    }};
                    deleteProvider = new String[]{{
                        add("alias"),
                        add("fugit"),
                    }};
                    disableUser = false;
                    displayName = "dolorum";
                    email = "Dominique.Prosacco96@yahoo.com";
                    emailVerified = false;
                    idToken = "eum";
                    instanceId = "non";
                    lastLoginAt = "eligendi";
                    localId = "sint";
                    oobCode = "aliquid";
                    password = "provident";
                    phoneNumber = "necessitatibus";
                    photoUrl = "sint";
                    provider = new String[]{{
                        add("dolor"),
                        add("debitis"),
                        add("a"),
                    }};
                    returnSecureToken = false;
                    upgradeToFederatedLogin = false;
                    validSince = "dolorum";
                }};;
                alt = AltEnum.JSON;
                fields = "in";
                key = "in";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "maiores";
                userIp = "rerum";
            }};            

            IdentitytoolkitRelyingpartySetAccountInfoResponse res = sdk.relyingparty.identitytoolkitRelyingpartySetAccountInfo(req, new IdentitytoolkitRelyingpartySetAccountInfoSecurity("dicta", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.setAccountInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartySetProjectConfig

Set project configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySetProjectConfigRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySetProjectConfigResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySetProjectConfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EmailTemplate;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartySetProjectConfigRequest;
import org.openapis.openapi.models.shared.IdpConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartySetProjectConfigRequest req = new IdentitytoolkitRelyingpartySetProjectConfigRequest() {{
                identitytoolkitRelyingpartySetProjectConfigRequest = new IdentitytoolkitRelyingpartySetProjectConfigRequest() {{
                    allowPasswordUser = false;
                    apiKey = "cumque";
                    authorizedDomains = new String[]{{
                        add("ea"),
                        add("aliquid"),
                        add("laborum"),
                        add("accusamus"),
                    }};
                    changeEmailTemplate = new EmailTemplate() {{
                        body = "non";
                        format = "occaecati";
                        from = "enim";
                        fromDisplayName = "accusamus";
                        replyTo = "delectus";
                        subject = "quidem";
                    }};;
                    delegatedProjectNumber = "provident";
                    enableAnonymousUser = false;
                    idpConfig = new org.openapis.openapi.models.shared.IdpConfig[]{{
                        add(new IdpConfig() {{
                            clientId = "id";
                            enabled = false;
                            experimentPercent = 501324;
                            provider = "deleniti";
                            secret = "sapiente";
                            whitelistedAudiences = new String[]{{
                                add("deserunt"),
                            }};
                        }}),
                        add(new IdpConfig() {{
                            clientId = "nisi";
                            enabled = false;
                            experimentPercent = 423855;
                            provider = "natus";
                            secret = "omnis";
                            whitelistedAudiences = new String[]{{
                                add("perferendis"),
                                add("nihil"),
                            }};
                        }}),
                        add(new IdpConfig() {{
                            clientId = "magnam";
                            enabled = false;
                            experimentPercent = 716075;
                            provider = "id";
                            secret = "labore";
                            whitelistedAudiences = new String[]{{
                                add("suscipit"),
                                add("natus"),
                            }};
                        }}),
                    }};
                    legacyResetPasswordTemplate = new EmailTemplate() {{
                        body = "nobis";
                        format = "eum";
                        from = "vero";
                        fromDisplayName = "aspernatur";
                        replyTo = "architecto";
                        subject = "magnam";
                    }};;
                    resetPasswordTemplate = new EmailTemplate() {{
                        body = "et";
                        format = "excepturi";
                        from = "ullam";
                        fromDisplayName = "provident";
                        replyTo = "quos";
                        subject = "sint";
                    }};;
                    useEmailSending = false;
                    verifyEmailTemplate = new EmailTemplate() {{
                        body = "accusantium";
                        format = "mollitia";
                        from = "reiciendis";
                        fromDisplayName = "mollitia";
                        replyTo = "ad";
                        subject = "eum";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "dolor";
                key = "necessitatibus";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "nemo";
                userIp = "quasi";
            }};            

            IdentitytoolkitRelyingpartySetProjectConfigResponse res = sdk.relyingparty.identitytoolkitRelyingpartySetProjectConfig(req, new IdentitytoolkitRelyingpartySetProjectConfigSecurity("iure", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.identitytoolkitRelyingpartySetProjectConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartySignOutUser

Sign out user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySignOutUserRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySignOutUserResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySignOutUserSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartySignOutUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartySignOutUserRequest req = new IdentitytoolkitRelyingpartySignOutUserRequest() {{
                identitytoolkitRelyingpartySignOutUserRequest = new IdentitytoolkitRelyingpartySignOutUserRequest() {{
                    instanceId = "debitis";
                    localId = "eius";
                }};;
                alt = AltEnum.JSON;
                fields = "maxime";
                key = "deleniti";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "in";
                userIp = "architecto";
            }};            

            IdentitytoolkitRelyingpartySignOutUserResponse res = sdk.relyingparty.identitytoolkitRelyingpartySignOutUser(req, new IdentitytoolkitRelyingpartySignOutUserSecurity("architecto", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.identitytoolkitRelyingpartySignOutUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartySignupNewUser

Signup new user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySignupNewUserRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySignupNewUserResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartySignupNewUserSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartySignupNewUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartySignupNewUserRequest req = new IdentitytoolkitRelyingpartySignupNewUserRequest() {{
                identitytoolkitRelyingpartySignupNewUserRequest = new IdentitytoolkitRelyingpartySignupNewUserRequest() {{
                    captchaChallenge = "ullam";
                    captchaResponse = "expedita";
                    disabled = false;
                    displayName = "nihil";
                    email = "Roman_Cormier3@hotmail.com";
                    emailVerified = false;
                    idToken = "consequuntur";
                    instanceId = "praesentium";
                    localId = "natus";
                    password = "magni";
                    phoneNumber = "sunt";
                    photoUrl = "quo";
                    tenantId = "illum";
                    tenantProjectNumber = "pariatur";
                }};;
                alt = AltEnum.JSON;
                fields = "maxime";
                key = "ea";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "odit";
                userIp = "ea";
            }};            

            IdentitytoolkitRelyingpartySignupNewUserResponse res = sdk.relyingparty.identitytoolkitRelyingpartySignupNewUser(req, new IdentitytoolkitRelyingpartySignupNewUserSecurity("accusantium", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.signupNewUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartyUploadAccount

Batch upload existing user accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyUploadAccountRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyUploadAccountResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyUploadAccountSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyUploadAccountSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyUploadAccountSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartyUploadAccountRequest;
import org.openapis.openapi.models.shared.UserInfo;
import org.openapis.openapi.models.shared.UserInfoProviderUserInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyUploadAccountRequest req = new IdentitytoolkitRelyingpartyUploadAccountRequest() {{
                identitytoolkitRelyingpartyUploadAccountRequest = new IdentitytoolkitRelyingpartyUploadAccountRequest() {{
                    allowOverwrite = false;
                    blockSize = 982575;
                    cpuMemCost = 697429;
                    delegatedProjectNumber = "ipsam";
                    dkLen = 453543;
                    hashAlgorithm = "autem";
                    memoryCost = 722056;
                    parallelization = 50588;
                    rounds = 866383;
                    saltSeparator = "nemo";
                    sanityCheck = false;
                    signerKey = "voluptatibus";
                    targetProjectId = "perferendis";
                    users = new org.openapis.openapi.models.shared.UserInfo[]{{
                        add(new UserInfo() {{
                            createdAt = "amet";
                            customAttributes = "aut";
                            customAuth = false;
                            disabled = false;
                            displayName = "cumque";
                            email = "Tyreek.Renner33@yahoo.com";
                            emailVerified = false;
                            lastLoginAt = "totam";
                            localId = "dignissimos";
                            passwordHash = "eaque";
                            passwordUpdatedAt = 3389.85;
                            phoneNumber = "nesciunt";
                            photoUrl = "eos";
                            providerUserInfo = new org.openapis.openapi.models.shared.UserInfoProviderUserInfo[]{{
                                add(new UserInfoProviderUserInfo() {{
                                    displayName = "dolores";
                                    email = "Jalyn.Fadel94@hotmail.com";
                                    federatedId = "recusandae";
                                    phoneNumber = "omnis";
                                    photoUrl = "facilis";
                                    providerId = "perspiciatis";
                                    rawId = "voluptatem";
                                    screenName = "porro";
                                }}),
                            }};
                            rawPassword = "consequuntur";
                            salt = "blanditiis";
                            screenName = "error";
                            validSince = "eaque";
                            version = 577229;
                        }}),
                        add(new UserInfo() {{
                            createdAt = "rerum";
                            customAttributes = "adipisci";
                            customAuth = false;
                            disabled = false;
                            displayName = "asperiores";
                            email = "Dolly_Morar86@hotmail.com";
                            emailVerified = false;
                            lastLoginAt = "provident";
                            localId = "nobis";
                            passwordHash = "libero";
                            passwordUpdatedAt = 9644.9;
                            phoneNumber = "quaerat";
                            photoUrl = "quos";
                            providerUserInfo = new org.openapis.openapi.models.shared.UserInfoProviderUserInfo[]{{
                                add(new UserInfoProviderUserInfo() {{
                                    displayName = "dolorem";
                                    email = "Dameon94@gmail.com";
                                    federatedId = "excepturi";
                                    phoneNumber = "cum";
                                    photoUrl = "voluptate";
                                    providerId = "dignissimos";
                                    rawId = "reiciendis";
                                    screenName = "amet";
                                }}),
                                add(new UserInfoProviderUserInfo() {{
                                    displayName = "dolorum";
                                    email = "Arvid43@gmail.com";
                                    federatedId = "odio";
                                    phoneNumber = "quaerat";
                                    photoUrl = "accusamus";
                                    providerId = "quidem";
                                    rawId = "voluptatibus";
                                    screenName = "voluptas";
                                }}),
                            }};
                            rawPassword = "natus";
                            salt = "eos";
                            screenName = "atque";
                            validSince = "sit";
                            version = 854614;
                        }}),
                        add(new UserInfo() {{
                            createdAt = "ab";
                            customAttributes = "soluta";
                            customAuth = false;
                            disabled = false;
                            displayName = "dolorum";
                            email = "Jacinthe_Pagac@yahoo.com";
                            emailVerified = false;
                            lastLoginAt = "necessitatibus";
                            localId = "distinctio";
                            passwordHash = "asperiores";
                            passwordUpdatedAt = 4694.97;
                            phoneNumber = "ipsum";
                            photoUrl = "voluptate";
                            providerUserInfo = new org.openapis.openapi.models.shared.UserInfoProviderUserInfo[]{{
                                add(new UserInfoProviderUserInfo() {{
                                    displayName = "saepe";
                                    email = "Brigitte75@gmail.com";
                                    federatedId = "accusamus";
                                    phoneNumber = "ad";
                                    photoUrl = "saepe";
                                    providerId = "suscipit";
                                    rawId = "deserunt";
                                    screenName = "provident";
                                }}),
                                add(new UserInfoProviderUserInfo() {{
                                    displayName = "minima";
                                    email = "Josianne87@hotmail.com";
                                    federatedId = "quaerat";
                                    phoneNumber = "tempora";
                                    photoUrl = "vel";
                                    providerId = "quod";
                                    rawId = "officiis";
                                    screenName = "qui";
                                }}),
                                add(new UserInfoProviderUserInfo() {{
                                    displayName = "dolorum";
                                    email = "Jacky.Pfeffer@hotmail.com";
                                    federatedId = "quisquam";
                                    phoneNumber = "tenetur";
                                    photoUrl = "amet";
                                    providerId = "tempore";
                                    rawId = "accusamus";
                                    screenName = "numquam";
                                }}),
                            }};
                            rawPassword = "enim";
                            salt = "dolorem";
                            screenName = "sapiente";
                            validSince = "totam";
                            version = 471752;
                        }}),
                        add(new UserInfo() {{
                            createdAt = "sit";
                            customAttributes = "expedita";
                            customAuth = false;
                            disabled = false;
                            displayName = "neque";
                            email = "Hermann_Renner@gmail.com";
                            emailVerified = false;
                            lastLoginAt = "quam";
                            localId = "ipsum";
                            passwordHash = "incidunt";
                            passwordUpdatedAt = 1864.58;
                            phoneNumber = "cupiditate";
                            photoUrl = "maxime";
                            providerUserInfo = new org.openapis.openapi.models.shared.UserInfoProviderUserInfo[]{{
                                add(new UserInfoProviderUserInfo() {{
                                    displayName = "soluta";
                                    email = "Marguerite13@gmail.com";
                                    federatedId = "dolores";
                                    phoneNumber = "distinctio";
                                    photoUrl = "facilis";
                                    providerId = "aliquid";
                                    rawId = "quam";
                                    screenName = "molestias";
                                }}),
                                add(new UserInfoProviderUserInfo() {{
                                    displayName = "temporibus";
                                    email = "Conor48@gmail.com";
                                    federatedId = "sunt";
                                    phoneNumber = "ullam";
                                    photoUrl = "nam";
                                    providerId = "hic";
                                    rawId = "voluptatem";
                                    screenName = "cumque";
                                }}),
                                add(new UserInfoProviderUserInfo() {{
                                    displayName = "soluta";
                                    email = "August8@hotmail.com";
                                    federatedId = "nobis";
                                    phoneNumber = "quos";
                                    photoUrl = "tempore";
                                    providerId = "cupiditate";
                                    rawId = "aperiam";
                                    screenName = "delectus";
                                }}),
                                add(new UserInfoProviderUserInfo() {{
                                    displayName = "dolorem";
                                    email = "Edmund.Fisher6@gmail.com";
                                    federatedId = "aut";
                                    phoneNumber = "quas";
                                    photoUrl = "itaque";
                                    providerId = "consequatur";
                                    rawId = "est";
                                    screenName = "repellendus";
                                }}),
                            }};
                            rawPassword = "porro";
                            salt = "doloribus";
                            screenName = "ut";
                            validSince = "facilis";
                            version = 586410;
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "qui";
                key = "quae";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "odio";
                userIp = "occaecati";
            }};            

            IdentitytoolkitRelyingpartyUploadAccountResponse res = sdk.relyingparty.identitytoolkitRelyingpartyUploadAccount(req, new IdentitytoolkitRelyingpartyUploadAccountSecurity() {{
                option1 = new IdentitytoolkitRelyingpartyUploadAccountSecurityOption1("voluptatibus", "quisquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.uploadAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartyVerifyAssertion

Verifies the assertion returned by the IdP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyVerifyAssertionRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyVerifyAssertionResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyVerifyAssertionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartyVerifyAssertionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyVerifyAssertionRequest req = new IdentitytoolkitRelyingpartyVerifyAssertionRequest() {{
                identitytoolkitRelyingpartyVerifyAssertionRequest = new IdentitytoolkitRelyingpartyVerifyAssertionRequest() {{
                    autoCreate = false;
                    delegatedProjectNumber = "vero";
                    idToken = "omnis";
                    instanceId = "quis";
                    pendingIdToken = "ipsum";
                    postBody = "delectus";
                    requestUri = "voluptate";
                    returnIdpCredential = false;
                    returnRefreshToken = false;
                    returnSecureToken = false;
                    sessionId = "consectetur";
                    tenantId = "vero";
                    tenantProjectNumber = "tenetur";
                }};;
                alt = AltEnum.JSON;
                fields = "dignissimos";
                key = "hic";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quod";
                userIp = "odio";
            }};            

            IdentitytoolkitRelyingpartyVerifyAssertionResponse res = sdk.relyingparty.identitytoolkitRelyingpartyVerifyAssertion(req, new IdentitytoolkitRelyingpartyVerifyAssertionSecurity("similique", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.verifyAssertionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartyVerifyCustomToken

Verifies the developer asserted ID token.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyVerifyCustomTokenResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyVerifyCustomTokenRequest req = new IdentitytoolkitRelyingpartyVerifyCustomTokenRequest() {{
                identitytoolkitRelyingpartyVerifyCustomTokenRequest = new IdentitytoolkitRelyingpartyVerifyCustomTokenRequest() {{
                    delegatedProjectNumber = "vero";
                    instanceId = "ducimus";
                    returnSecureToken = false;
                    token = "dolore";
                }};;
                alt = AltEnum.JSON;
                fields = "quibusdam";
                key = "illum";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "natus";
                userIp = "impedit";
            }};            

            IdentitytoolkitRelyingpartyVerifyCustomTokenResponse res = sdk.relyingparty.identitytoolkitRelyingpartyVerifyCustomToken(req, new IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity("aut", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.verifyCustomTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartyVerifyPassword

Verifies the user entered password.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyVerifyPasswordRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyVerifyPasswordResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyVerifyPasswordSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartyVerifyPasswordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyVerifyPasswordRequest req = new IdentitytoolkitRelyingpartyVerifyPasswordRequest() {{
                identitytoolkitRelyingpartyVerifyPasswordRequest = new IdentitytoolkitRelyingpartyVerifyPasswordRequest() {{
                    captchaChallenge = "exercitationem";
                    captchaResponse = "nulla";
                    delegatedProjectNumber = "fugit";
                    email = "Willie_Wyman@hotmail.com";
                    idToken = "ducimus";
                    instanceId = "alias";
                    password = "officia";
                    pendingIdToken = "tempora";
                    returnSecureToken = false;
                    tenantId = "ipsam";
                    tenantProjectNumber = "ea";
                }};;
                alt = AltEnum.JSON;
                fields = "aspernatur";
                key = "vel";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "magnam";
                userIp = "ratione";
            }};            

            IdentitytoolkitRelyingpartyVerifyPasswordResponse res = sdk.relyingparty.identitytoolkitRelyingpartyVerifyPassword(req, new IdentitytoolkitRelyingpartyVerifyPasswordSecurity("ex", "laudantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.verifyPasswordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitRelyingpartyVerifyPhoneNumber

Verifies ownership of a phone number and creates/updates the user account accordingly.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest req = new IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest() {{
                identitytoolkitRelyingpartyVerifyPhoneNumberRequest = new IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest() {{
                    code = "dicta";
                    idToken = "dolor";
                    operation = "maiores";
                    phoneNumber = "quasi";
                    sessionInfo = "ex";
                    temporaryProof = "nulla";
                    verificationProof = "excepturi";
                }};;
                alt = AltEnum.JSON;
                fields = "voluptatibus";
                key = "nostrum";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quisquam";
                userIp = "saepe";
            }};            

            IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse res = sdk.relyingparty.identitytoolkitRelyingpartyVerifyPhoneNumber(req, new IdentitytoolkitRelyingpartyVerifyPhoneNumberSecurity("ea", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.identitytoolkitRelyingpartyVerifyPhoneNumberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
