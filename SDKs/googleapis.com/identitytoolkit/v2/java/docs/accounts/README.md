# accounts

### Available Operations

* [identitytoolkitAccountsMfaEnrollmentFinalize](#identitytoolkitaccountsmfaenrollmentfinalize) - Finishes enrolling a second factor for the user.
* [identitytoolkitAccountsMfaEnrollmentStart](#identitytoolkitaccountsmfaenrollmentstart) - Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
* [identitytoolkitAccountsMfaEnrollmentWithdraw](#identitytoolkitaccountsmfaenrollmentwithdraw) - Revokes one second factor from the enrolled second factors for an account.
* [identitytoolkitAccountsMfaSignInFinalize](#identitytoolkitaccountsmfasigninfinalize) - Verifies the MFA challenge and performs sign-in
* [identitytoolkitAccountsMfaSignInStart](#identitytoolkitaccountsmfasigninstart) - Sends the MFA challenge
* [identitytoolkitAccountsPasskeyEnrollmentFinalize](#identitytoolkitaccountspasskeyenrollmentfinalize) - Finishes enrolling a passkey credential for the user.
* [identitytoolkitAccountsPasskeyEnrollmentStart](#identitytoolkitaccountspasskeyenrollmentstart) - Step one of the passkey enrollment process. Returns a challenge and parameters for creation of the passkey credential.
* [identitytoolkitAccountsPasskeySignInFinalize](#identitytoolkitaccountspasskeysigninfinalize) - Verifies the passkey assertion and signs the user in.
* [identitytoolkitAccountsPasskeySignInStart](#identitytoolkitaccountspasskeysigninstart) - Creates and returns the passkey challenge
* [identitytoolkitAccountsRevokeToken](#identitytoolkitaccountsrevoketoken) - Revokes a user's token from an Identity Provider (IdP). This is done by manually providing an IdP credential, and the token types for revocation. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

## identitytoolkitAccountsMfaEnrollmentFinalize

Finishes enrolling a second factor for the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest req = new IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest = new GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest() {{
                    displayName = "voluptatum";
                    idToken = "iusto";
                    phoneVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo() {{
                        androidVerificationProof = "excepturi";
                        code = "nisi";
                        phoneNumber = "recusandae";
                        sessionInfo = "temporibus";
                    }};;
                    tenantId = "ab";
                    totpVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo() {{
                        sessionInfo = "quis";
                        verificationCode = "veritatis";
                    }};;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "repellendus";
                key = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse res = sdk.accounts.identitytoolkitAccountsMfaEnrollmentFinalize(req, new IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity("maiores", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitAccountsMfaEnrollmentStart

Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentStartRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentStartResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentStartSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2AutoRetrievalInfo;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitAccountsMfaEnrollmentStartRequest req = new IdentitytoolkitAccountsMfaEnrollmentStartRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIdentitytoolkitV2StartMfaEnrollmentRequest = new GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest() {{
                    idToken = "quod";
                    phoneEnrollmentInfo = new GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo() {{
                        autoRetrievalInfo = new GoogleCloudIdentitytoolkitV2AutoRetrievalInfo() {{
                            appSignatureHash = "esse";
                        }};;
                        iosReceipt = "totam";
                        iosSecret = "porro";
                        phoneNumber = "dolorum";
                        playIntegrityToken = "dicta";
                        recaptchaToken = "nam";
                        safetyNetToken = "officia";
                    }};;
                    tenantId = "occaecati";
                    totpEnrollmentInfo = new java.util.HashMap<String, Object>() {{
                        put("deleniti", "hic");
                    }};
                }};;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "commodi";
                key = "molestiae";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "impedit";
                uploadProtocol = "cum";
            }};            

            IdentitytoolkitAccountsMfaEnrollmentStartResponse res = sdk.accounts.identitytoolkitAccountsMfaEnrollmentStart(req, new IdentitytoolkitAccountsMfaEnrollmentStartSecurity("esse", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIdentitytoolkitV2StartMfaEnrollmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitAccountsMfaEnrollmentWithdraw

Revokes one second factor from the enrolled second factors for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2WithdrawMfaRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest req = new IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIdentitytoolkitV2WithdrawMfaRequest = new GoogleCloudIdentitytoolkitV2WithdrawMfaRequest() {{
                    idToken = "aspernatur";
                    mfaEnrollmentId = "perferendis";
                    tenantId = "ad";
                }};;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolor";
                key = "natus";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "saepe";
                uploadProtocol = "fuga";
            }};            

            IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse res = sdk.accounts.identitytoolkitAccountsMfaEnrollmentWithdraw(req, new IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity("in", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIdentitytoolkitV2WithdrawMfaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitAccountsMfaSignInFinalize

Verifies the MFA challenge and performs sign-in

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaSignInFinalizeRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaSignInFinalizeResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaSignInFinalizeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitAccountsMfaSignInFinalizeRequest req = new IdentitytoolkitAccountsMfaSignInFinalizeRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIdentitytoolkitV2FinalizeMfaSignInRequest = new GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest() {{
                    mfaEnrollmentId = "iure";
                    mfaPendingCredential = "saepe";
                    phoneVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo() {{
                        androidVerificationProof = "quidem";
                        code = "architecto";
                        phoneNumber = "ipsa";
                        sessionInfo = "reiciendis";
                    }};;
                    tenantId = "est";
                    totpVerificationInfo = new GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo() {{
                        verificationCode = "mollitia";
                    }};;
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "corporis";
                key = "explicabo";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "omnis";
                uploadProtocol = "nemo";
            }};            

            IdentitytoolkitAccountsMfaSignInFinalizeResponse res = sdk.accounts.identitytoolkitAccountsMfaSignInFinalize(req, new IdentitytoolkitAccountsMfaSignInFinalizeSecurity("minima", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIdentitytoolkitV2FinalizeMfaSignInResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitAccountsMfaSignInStart

Sends the MFA challenge

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaSignInStartRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaSignInStartResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaSignInStartSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2AutoRetrievalInfo;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2StartMfaSignInRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitAccountsMfaSignInStartRequest req = new IdentitytoolkitAccountsMfaSignInStartRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudIdentitytoolkitV2StartMfaSignInRequest = new GoogleCloudIdentitytoolkitV2StartMfaSignInRequest() {{
                    mfaEnrollmentId = "iure";
                    mfaPendingCredential = "culpa";
                    phoneSignInInfo = new GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo() {{
                        autoRetrievalInfo = new GoogleCloudIdentitytoolkitV2AutoRetrievalInfo() {{
                            appSignatureHash = "doloribus";
                        }};;
                        iosReceipt = "sapiente";
                        iosSecret = "architecto";
                        phoneNumber = "mollitia";
                        playIntegrityToken = "dolorem";
                        recaptchaToken = "culpa";
                        safetyNetToken = "consequuntur";
                    }};;
                    tenantId = "repellat";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                fields = "commodi";
                key = "quam";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "error";
                uploadProtocol = "quia";
            }};            

            IdentitytoolkitAccountsMfaSignInStartResponse res = sdk.accounts.identitytoolkitAccountsMfaSignInStart(req, new IdentitytoolkitAccountsMfaSignInStartSecurity("quis", "vitae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIdentitytoolkitV2StartMfaSignInResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitAccountsPasskeyEnrollmentFinalize

Finishes enrolling a passkey credential for the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsPasskeyEnrollmentFinalizeRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsPasskeyEnrollmentFinalizeResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsPasskeyEnrollmentFinalizeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2AuthenticatorAttestationResponse;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2AuthenticatorRegistrationResponse;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitAccountsPasskeyEnrollmentFinalizeRequest req = new IdentitytoolkitAccountsPasskeyEnrollmentFinalizeRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest = new GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest() {{
                    authenticatorRegistrationResponse = new GoogleCloudIdentitytoolkitV2AuthenticatorRegistrationResponse() {{
                        authenticatorAttestationResponse = new GoogleCloudIdentitytoolkitV2AuthenticatorAttestationResponse() {{
                            attestationObject = "animi";
                            clientDataJson = "enim";
                            transports = new String[]{{
                                add("quo"),
                            }};
                        }};;
                        credentialId = "sequi";
                        credentialType = "tenetur";
                    }};;
                    idToken = "ipsam";
                    tenantId = "id";
                }};;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "quasi";
                fields = "error";
                key = "temporibus";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "reiciendis";
                uploadProtocol = "voluptatibus";
            }};            

            IdentitytoolkitAccountsPasskeyEnrollmentFinalizeResponse res = sdk.accounts.identitytoolkitAccountsPasskeyEnrollmentFinalize(req, new IdentitytoolkitAccountsPasskeyEnrollmentFinalizeSecurity("vero", "nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitAccountsPasskeyEnrollmentStart

Step one of the passkey enrollment process. Returns a challenge and parameters for creation of the passkey credential.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsPasskeyEnrollmentStartRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsPasskeyEnrollmentStartResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsPasskeyEnrollmentStartSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitAccountsPasskeyEnrollmentStartRequest req = new IdentitytoolkitAccountsPasskeyEnrollmentStartRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest = new GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest() {{
                    idToken = "voluptatibus";
                    tenantId = "ipsa";
                }};;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "cum";
                fields = "perferendis";
                key = "doloremque";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "maiores";
                uploadProtocol = "dicta";
            }};            

            IdentitytoolkitAccountsPasskeyEnrollmentStartResponse res = sdk.accounts.identitytoolkitAccountsPasskeyEnrollmentStart(req, new IdentitytoolkitAccountsPasskeyEnrollmentStartSecurity("corporis", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIdentitytoolkitV2StartPasskeyEnrollmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitAccountsPasskeySignInFinalize

Verifies the passkey assertion and signs the user in.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsPasskeySignInFinalizeRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsPasskeySignInFinalizeResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsPasskeySignInFinalizeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2AuthenticatorAssertionResponse;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2AuthenticatorAuthenticationResponse;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2FinalizePasskeySignInRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitAccountsPasskeySignInFinalizeRequest req = new IdentitytoolkitAccountsPasskeySignInFinalizeRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudIdentitytoolkitV2FinalizePasskeySignInRequest = new GoogleCloudIdentitytoolkitV2FinalizePasskeySignInRequest() {{
                    authenticatorAuthenticationResponse = new GoogleCloudIdentitytoolkitV2AuthenticatorAuthenticationResponse() {{
                        authenticatorAssertionResponse = new GoogleCloudIdentitytoolkitV2AuthenticatorAssertionResponse() {{
                            authenticatorData = "dicta";
                            clientDataJson = "harum";
                            signature = "enim";
                            userHandle = "accusamus";
                        }};;
                        credentialId = "commodi";
                        credentialType = "repudiandae";
                    }};;
                    sessionId = "quae";
                    tenantId = "ipsum";
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "pariatur";
                key = "modi";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "voluptates";
                uploadProtocol = "quasi";
            }};            

            IdentitytoolkitAccountsPasskeySignInFinalizeResponse res = sdk.accounts.identitytoolkitAccountsPasskeySignInFinalize(req, new IdentitytoolkitAccountsPasskeySignInFinalizeSecurity("repudiandae", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIdentitytoolkitV2FinalizePasskeySignInResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitAccountsPasskeySignInStart

Creates and returns the passkey challenge

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsPasskeySignInStartRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsPasskeySignInStartResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsPasskeySignInStartSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2StartPasskeySignInRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitAccountsPasskeySignInStartRequest req = new IdentitytoolkitAccountsPasskeySignInStartRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudIdentitytoolkitV2StartPasskeySignInRequest = new GoogleCloudIdentitytoolkitV2StartPasskeySignInRequest() {{
                    sessionId = "itaque";
                    tenantId = "incidunt";
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "quibusdam";
                key = "explicabo";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "quibusdam";
                uploadProtocol = "labore";
            }};            

            IdentitytoolkitAccountsPasskeySignInStartResponse res = sdk.accounts.identitytoolkitAccountsPasskeySignInStart(req, new IdentitytoolkitAccountsPasskeySignInStartSecurity("modi", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIdentitytoolkitV2StartPasskeySignInResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## identitytoolkitAccountsRevokeToken

Revokes a user's token from an Identity Provider (IdP). This is done by manually providing an IdP credential, and the token types for revocation. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsRevokeTokenRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsRevokeTokenResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsRevokeTokenSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2RevokeTokenRequest;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2RevokeTokenRequestTokenTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitAccountsRevokeTokenRequest req = new IdentitytoolkitAccountsRevokeTokenRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudIdentitytoolkitV2RevokeTokenRequest = new GoogleCloudIdentitytoolkitV2RevokeTokenRequest() {{
                    idToken = "cupiditate";
                    providerId = "quos";
                    redirectUri = "perferendis";
                    tenantId = "magni";
                    token = "assumenda";
                    tokenType = GoogleCloudIdentitytoolkitV2RevokeTokenRequestTokenTypeEnum.REFRESH_TOKEN;
                }};;
                accessToken = "alias";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "excepturi";
                key = "tempora";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "labore";
                uploadProtocol = "delectus";
            }};            

            IdentitytoolkitAccountsRevokeTokenResponse res = sdk.accounts.identitytoolkitAccountsRevokeToken(req, new IdentitytoolkitAccountsRevokeTokenSecurity("eum", "non") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIdentitytoolkitV2RevokeTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
