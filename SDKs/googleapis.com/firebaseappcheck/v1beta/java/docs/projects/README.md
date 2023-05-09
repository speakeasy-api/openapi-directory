# projects

### Available Operations

* [firebaseappcheckProjectsAppsAppAttestConfigBatchGet](#firebaseappcheckprojectsappsappattestconfigbatchget) - Atomically gets the AppAttestConfigs for the specified list of apps.
* [firebaseappcheckProjectsAppsDebugTokensCreate](#firebaseappcheckprojectsappsdebugtokenscreate) - Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
* [firebaseappcheckProjectsAppsDebugTokensDelete](#firebaseappcheckprojectsappsdebugtokensdelete) - Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
* [firebaseappcheckProjectsAppsDebugTokensList](#firebaseappcheckprojectsappsdebugtokenslist) - Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
* [firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet](#firebaseappcheckprojectsappsdevicecheckconfigbatchget) - Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
* [firebaseappcheckProjectsAppsExchangeAppAttestAssertion](#firebaseappcheckprojectsappsexchangeappattestassertion) - Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeAppAttestAttestation](#firebaseappcheckprojectsappsexchangeappattestattestation) - Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
* [firebaseappcheckProjectsAppsExchangeCustomToken](#firebaseappcheckprojectsappsexchangecustomtoken) - Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeDebugToken](#firebaseappcheckprojectsappsexchangedebugtoken) - Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
* [firebaseappcheckProjectsAppsExchangeDeviceCheckToken](#firebaseappcheckprojectsappsexchangedevicechecktoken) - Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangePlayIntegrityToken](#firebaseappcheckprojectsappsexchangeplayintegritytoken) - Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken](#firebaseappcheckprojectsappsexchangerecaptchaenterprisetoken) - Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an App Check token AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeRecaptchaToken](#firebaseappcheckprojectsappsexchangerecaptchatoken) - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeRecaptchaV3Token](#firebaseappcheckprojectsappsexchangerecaptchav3token) - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeSafetyNetToken](#firebaseappcheckprojectsappsexchangesafetynettoken) - Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsGenerateAppAttestChallenge](#firebaseappcheckprojectsappsgenerateappattestchallenge) - Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
* [firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge](#firebaseappcheckprojectsappsgenerateplayintegritychallenge) - Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
* [firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet](#firebaseappcheckprojectsappsplayintegrityconfigbatchget) - Atomically gets the PlayIntegrityConfigs for the specified list of apps.
* [firebaseappcheckProjectsAppsRecaptchaConfigBatchGet](#firebaseappcheckprojectsappsrecaptchaconfigbatchget) - Atomically gets the RecaptchaConfigs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
* [firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet](#firebaseappcheckprojectsappsrecaptchaenterpriseconfigbatchget) - Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
* [firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet](#firebaseappcheckprojectsappsrecaptchav3configbatchget) - Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
* [firebaseappcheckProjectsAppsSafetyNetConfigBatchGet](#firebaseappcheckprojectsappssafetynetconfigbatchget) - Atomically gets the SafetyNetConfigs for the specified list of apps.
* [firebaseappcheckProjectsServicesBatchUpdate](#firebaseappcheckprojectsservicesbatchupdate) - Atomically updates the specified Service configurations.
* [firebaseappcheckProjectsServicesGet](#firebaseappcheckprojectsservicesget) - Gets the Service configuration for the specified service name.
* [firebaseappcheckProjectsServicesList](#firebaseappcheckprojectsserviceslist) - Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
* [firebaseappcheckProjectsServicesPatch](#firebaseappcheckprojectsservicespatch) - Updates the specified Service configuration.
* [firebaseappcheckProjectsVerifyAppCheckToken](#firebaseappcheckprojectsverifyappchecktoken) - Verifies the given App Check token and returns token usage signals that callers may act upon. This method currently only supports App Check tokens exchanged from the following attestation providers: * Play Integrity API * App Attest * DeviceCheck (`DCDevice` tokens) * reCAPTCHA Enterprise * reCAPTCHA v3 * Custom providers App Check tokens exchanged from debug secrets are also supported. Calling this method on an otherwise valid App Check token with an unsupported provider will cause an HTTP 400 error to be returned. Returns whether this token was already consumed before this call. If this is the first time this method has seen the given App Check token, the field `already_consumed` will contain the value `false`. The given token will then be marked as `already_consumed` for all future invocations of this method for that token. Note that if the given App Check token is invalid, an HTTP 403 error is returned instead of a response object, regardless whether the token was already consumed. Currently, when evaluating whether an App Check token was already consumed, only calls to this exact method are counted. Use of the App Check token elsewhere will not mark the token as being already consumed.

## firebaseappcheckProjectsAppsAppAttestConfigBatchGet

Atomically gets the AppAttestConfigs for the specified list of apps.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "iusto";
                key = "excepturi";
                names = new String[]{{
                    add("recusandae"),
                    add("temporibus"),
                }};
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "veritatis";
                uploadProtocol = "deserunt";
            }};            

            FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsAppAttestConfigBatchGet(req, new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1("perferendis", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsDebugTokensCreate

Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensCreateRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensCreateResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensCreateSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaDebugToken;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsDebugTokensCreateRequest req = new FirebaseappcheckProjectsAppsDebugTokensCreateRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                googleFirebaseAppcheckV1betaDebugToken = new GoogleFirebaseAppcheckV1betaDebugToken() {{
                    displayName = "quo";
                    name = "Teri Strosin";
                    token = "quod";
                }};;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            FirebaseappcheckProjectsAppsDebugTokensCreateResponse res = sdk.projects.firebaseappcheckProjectsAppsDebugTokensCreate(req, new FirebaseappcheckProjectsAppsDebugTokensCreateSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1("fugit", "deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaDebugToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsDebugTokensDelete

Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensDeleteRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensDeleteResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsDebugTokensDeleteRequest req = new FirebaseappcheckProjectsAppsDebugTokensDeleteRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "molestiae";
                key = "modi";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "cum";
                uploadProtocol = "esse";
            }};            

            FirebaseappcheckProjectsAppsDebugTokensDeleteResponse res = sdk.projects.firebaseappcheckProjectsAppsDebugTokensDelete(req, new FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1("ipsum", "excepturi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsDebugTokensList

Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensListRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensListResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensListSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDebugTokensListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsDebugTokensListRequest req = new FirebaseappcheckProjectsAppsDebugTokensListRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "iste";
                key = "dolor";
                oauthToken = "natus";
                pageSize = 386489L;
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "fuga";
                uploadProtocol = "in";
            }};            

            FirebaseappcheckProjectsAppsDebugTokensListResponse res = sdk.projects.firebaseappcheckProjectsAppsDebugTokensList(req, new FirebaseappcheckProjectsAppsDebugTokensListSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1("corporis", "iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaListDebugTokensResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet

Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "reiciendis";
                key = "est";
                names = new String[]{{
                    add("laborum"),
                    add("dolores"),
                    add("dolorem"),
                }};
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "nobis";
                uploadProtocol = "enim";
            }};            

            FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet(req, new FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1("omnis", "nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsExchangeAppAttestAssertion

Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest req = new FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                googleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest = new GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest() {{
                    artifact = "accusantium";
                    assertion = "iure";
                    challenge = "culpa";
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "mollitia";
                key = "dolorem";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse res = sdk.projects.firebaseappcheckProjectsAppsExchangeAppAttestAssertion(req, new FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1("occaecati", "numquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaAppCheckToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsExchangeAppAttestAttestation

Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest req = new FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest = new GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest() {{
                    attestationStatement = "molestiae";
                    challenge = "velit";
                    keyId = "error";
                }};;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "laborum";
                key = "animi";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "quo";
                uploadProtocol = "sequi";
            }};            

            FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse res = sdk.projects.firebaseappcheckProjectsAppsExchangeAppAttestAttestation(req, new FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1("tenetur", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsExchangeCustomToken

Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeCustomTokenRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeCustomTokenResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeCustomTokenSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeCustomTokenSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeCustomTokenSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeCustomTokenRequest req = new FirebaseappcheckProjectsAppsExchangeCustomTokenRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                googleFirebaseAppcheckV1betaExchangeCustomTokenRequest = new GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest() {{
                    customToken = "aut";
                }};;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "laborum";
                key = "quasi";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "vero";
                uploadProtocol = "nihil";
            }};            

            FirebaseappcheckProjectsAppsExchangeCustomTokenResponse res = sdk.projects.firebaseappcheckProjectsAppsExchangeCustomToken(req, new FirebaseappcheckProjectsAppsExchangeCustomTokenSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsExchangeCustomTokenSecurityOption1("praesentium", "voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaAppCheckToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsExchangeDebugToken

Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeDebugTokenRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeDebugTokenResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeDebugTokenRequest req = new FirebaseappcheckProjectsAppsExchangeDebugTokenRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                googleFirebaseAppcheckV1betaExchangeDebugTokenRequest = new GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest() {{
                    debugToken = "voluptate";
                }};;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "reprehenderit";
                key = "ut";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "corporis";
                uploadProtocol = "dolore";
            }};            

            FirebaseappcheckProjectsAppsExchangeDebugTokenResponse res = sdk.projects.firebaseappcheckProjectsAppsExchangeDebugToken(req, new FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1("iusto", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaAppCheckToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsExchangeDeviceCheckToken

Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest req = new FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest = new GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest() {{
                    deviceToken = "accusamus";
                }};;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "ipsum";
                key = "quidem";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "pariatur";
                uploadProtocol = "modi";
            }};            

            FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse res = sdk.projects.firebaseappcheckProjectsAppsExchangeDeviceCheckToken(req, new FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1("praesentium", "rem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaAppCheckToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsExchangePlayIntegrityToken

Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest req = new FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest = new GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest() {{
                    playIntegrityToken = "repudiandae";
                }};;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "incidunt";
                key = "enim";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
            }};            

            FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse res = sdk.projects.firebaseappcheckProjectsAppsExchangePlayIntegrityToken(req, new FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1("deserunt", "distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaAppCheckToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken

Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an App Check token AppCheckToken.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest req = new FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest = new GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest() {{
                    recaptchaEnterpriseToken = "modi";
                }};;
                accessToken = "qui";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "quos";
                key = "perferendis";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "ipsam";
                uploadProtocol = "alias";
            }};            

            FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse res = sdk.projects.firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken(req, new FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1("fugit", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaAppCheckToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsExchangeRecaptchaToken

Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest req = new FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest = new GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest() {{
                    recaptchaToken = "facilis";
                }};;
                accessToken = "tempore";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "eum";
                key = "non";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "aliquid";
                uploadProtocol = "provident";
            }};            

            FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse res = sdk.projects.firebaseappcheckProjectsAppsExchangeRecaptchaToken(req, new FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1("necessitatibus", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaAppCheckToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsExchangeRecaptchaV3Token

Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest req = new FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest = new GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest() {{
                    recaptchaV3Token = "debitis";
                }};;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "in";
                key = "illum";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "dicta";
                uploadProtocol = "magnam";
            }};            

            FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse res = sdk.projects.firebaseappcheckProjectsAppsExchangeRecaptchaV3Token(req, new FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1("cumque", "facere") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaAppCheckToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsExchangeSafetyNetToken

Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest req = new FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest = new GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest() {{
                    safetyNetToken = "laborum";
                }};;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "enim";
                key = "accusamus";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "provident";
                uploadProtocol = "nam";
            }};            

            FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse res = sdk.projects.firebaseappcheckProjectsAppsExchangeSafetyNetToken(req, new FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1("id", "blanditiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaAppCheckToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsGenerateAppAttestChallenge

Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest req = new FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("deserunt", "nisi");
                }};
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "molestiae";
                key = "perferendis";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "distinctio";
                uploadProtocol = "id";
            }};            

            FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse res = sdk.projects.firebaseappcheckProjectsAppsGenerateAppAttestChallenge(req, new FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1("labore", "labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge

Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest req = new FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("eum", "vero");
                    put("aspernatur", "architecto");
                    put("magnam", "et");
                }};
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "quos";
                key = "sint";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "reiciendis";
                uploadProtocol = "mollitia";
            }};            

            FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse res = sdk.projects.firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge(req, new FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1("ad", "eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet

Atomically gets the PlayIntegrityConfigs for the specified list of apps.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "iure";
                key = "doloribus";
                names = new String[]{{
                    add("eius"),
                    add("maxime"),
                    add("deleniti"),
                    add("facilis"),
                }};
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "architecto";
                uploadProtocol = "repudiandae";
            }};            

            FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet(req, new FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1("ullam", "expedita") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsRecaptchaConfigBatchGet

Atomically gets the RecaptchaConfigs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "pariatur";
                key = "accusantium";
                names = new String[]{{
                    add("praesentium"),
                }};
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "sunt";
                uploadProtocol = "quo";
            }};            

            FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsRecaptchaConfigBatchGet(req, new FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1("illum", "pariatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet

Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest("maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "accusantium";
                key = "ab";
                names = new String[]{{
                    add("quidem"),
                    add("ipsam"),
                    add("voluptate"),
                    add("autem"),
                }};
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "pariatur";
                uploadProtocol = "nemo";
            }};            

            FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet(req, new FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1("voluptatibus", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet

Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "hic";
                key = "libero";
                names = new String[]{{
                    add("dolores"),
                    add("quis"),
                    add("totam"),
                }};
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "quis";
                uploadProtocol = "nesciunt";
            }};            

            FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet(req, new FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1("eos", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsSafetyNetConfigBatchGet

Atomically gets the SafetyNetConfigs for the specified list of apps.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quam";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "nostrum";
                key = "hic";
                names = new String[]{{
                    add("omnis"),
                    add("facilis"),
                    add("perspiciatis"),
                    add("voluptatem"),
                }};
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "blanditiis";
                uploadProtocol = "error";
            }};            

            FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsSafetyNetConfigBatchGet(req, new FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption1("eaque", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsServicesBatchUpdate

Atomically updates the specified Service configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesBatchUpdateRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesBatchUpdateResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesBatchUpdateSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesBatchUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaService;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaUpdateServiceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsServicesBatchUpdateRequest req = new FirebaseappcheckProjectsServicesBatchUpdateRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1betaBatchUpdateServicesRequest = new GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaUpdateServiceRequest[]{{
                        add(new GoogleFirebaseAppcheckV1betaUpdateServiceRequest() {{
                            service = new GoogleFirebaseAppcheckV1betaService() {{
                                enforcementMode = GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum.ENFORCED;
                                name = "Sheryl Parisian";
                            }};
                            updateMask = "provident";
                        }}),
                        add(new GoogleFirebaseAppcheckV1betaUpdateServiceRequest() {{
                            service = new GoogleFirebaseAppcheckV1betaService() {{
                                enforcementMode = GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum.ENFORCED;
                                name = "Toby Hahn";
                            }};
                            updateMask = "dolorem";
                        }}),
                        add(new GoogleFirebaseAppcheckV1betaUpdateServiceRequest() {{
                            service = new GoogleFirebaseAppcheckV1betaService() {{
                                enforcementMode = GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum.OFF;
                                name = "Norma Erdman";
                            }};
                            updateMask = "cum";
                        }}),
                        add(new GoogleFirebaseAppcheckV1betaUpdateServiceRequest() {{
                            service = new GoogleFirebaseAppcheckV1betaService() {{
                                enforcementMode = GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum.UNENFORCED;
                                name = "Johanna Farrell";
                            }};
                            updateMask = "veritatis";
                        }}),
                    }};
                    updateMask = "ipsa";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "odio";
                fields = "quaerat";
                key = "accusamus";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "voluptas";
                uploadProtocol = "natus";
            }};            

            FirebaseappcheckProjectsServicesBatchUpdateResponse res = sdk.projects.firebaseappcheckProjectsServicesBatchUpdate(req, new FirebaseappcheckProjectsServicesBatchUpdateSecurity() {{
                option1 = new FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1("eos", "atque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaBatchUpdateServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsServicesGet

Gets the Service configuration for the specified service name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesGetRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesGetResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesGetSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsServicesGetRequest req = new FirebaseappcheckProjectsServicesGetRequest("sit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "iusto";
                key = "voluptate";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "omnis";
                uploadProtocol = "necessitatibus";
            }};            

            FirebaseappcheckProjectsServicesGetResponse res = sdk.projects.firebaseappcheckProjectsServicesGet(req, new FirebaseappcheckProjectsServicesGetSecurity() {{
                option1 = new FirebaseappcheckProjectsServicesGetSecurityOption1("distinctio", "asperiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaService != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsServicesList

Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesListRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesListResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesListSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesListSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsServicesListRequest req = new FirebaseappcheckProjectsServicesListRequest("nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "eius";
                key = "aspernatur";
                oauthToken = "perferendis";
                pageSize = 229219L;
                pageToken = "optio";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "ad";
                uploadProtocol = "saepe";
            }};            

            FirebaseappcheckProjectsServicesListResponse res = sdk.projects.firebaseappcheckProjectsServicesList(req, new FirebaseappcheckProjectsServicesListSecurity() {{
                option1 = new FirebaseappcheckProjectsServicesListSecurityOption1("suscipit", "deserunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaListServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsServicesPatch

Updates the specified Service configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesPatchRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesPatchResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesPatchSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesPatchSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsServicesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaService;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsServicesPatchRequest req = new FirebaseappcheckProjectsServicesPatchRequest("provident") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1betaService = new GoogleFirebaseAppcheckV1betaService() {{
                    enforcementMode = GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum.ENFORCED;
                    name = "Donnie Abbott";
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "officiis";
                key = "qui";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "a";
                updateMask = "esse";
                uploadType = "harum";
                uploadProtocol = "iusto";
            }};            

            FirebaseappcheckProjectsServicesPatchResponse res = sdk.projects.firebaseappcheckProjectsServicesPatch(req, new FirebaseappcheckProjectsServicesPatchSecurity() {{
                option1 = new FirebaseappcheckProjectsServicesPatchSecurityOption1("ipsum", "quisquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaService != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsVerifyAppCheckToken

Verifies the given App Check token and returns token usage signals that callers may act upon. This method currently only supports App Check tokens exchanged from the following attestation providers: * Play Integrity API * App Attest * DeviceCheck (`DCDevice` tokens) * reCAPTCHA Enterprise * reCAPTCHA v3 * Custom providers App Check tokens exchanged from debug secrets are also supported. Calling this method on an otherwise valid App Check token with an unsupported provider will cause an HTTP 400 error to be returned. Returns whether this token was already consumed before this call. If this is the first time this method has seen the given App Check token, the field `already_consumed` will contain the value `false`. The given token will then be marked as `already_consumed` for all future invocations of this method for that token. Note that if the given App Check token is invalid, an HTTP 403 error is returned instead of a response object, regardless whether the token was already consumed. Currently, when evaluating whether an App Check token was already consumed, only calls to this exact method are counted. Use of the App Check token elsewhere will not mark the token as being already consumed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsVerifyAppCheckTokenRequest;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsVerifyAppCheckTokenResponse;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsVerifyAppCheckTokenSecurity;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsVerifyAppCheckTokenSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseappcheckProjectsVerifyAppCheckTokenSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsVerifyAppCheckTokenRequest req = new FirebaseappcheckProjectsVerifyAppCheckTokenRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest = new GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest() {{
                    appCheckToken = "tempore";
                }};;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "dolorem";
                key = "sapiente";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "sit";
                uploadProtocol = "expedita";
            }};            

            FirebaseappcheckProjectsVerifyAppCheckTokenResponse res = sdk.projects.firebaseappcheckProjectsVerifyAppCheckToken(req, new FirebaseappcheckProjectsVerifyAppCheckTokenSecurity() {{
                option1 = new FirebaseappcheckProjectsVerifyAppCheckTokenSecurityOption1("neque", "sed") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
