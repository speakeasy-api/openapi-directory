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
* [firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken](#firebaseappcheckprojectsappsexchangerecaptchaenterprisetoken) - Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeRecaptchaV3Token](#firebaseappcheckprojectsappsexchangerecaptchav3token) - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeSafetyNetToken](#firebaseappcheckprojectsappsexchangesafetynettoken) - Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsGenerateAppAttestChallenge](#firebaseappcheckprojectsappsgenerateappattestchallenge) - Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
* [firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge](#firebaseappcheckprojectsappsgenerateplayintegritychallenge) - Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
* [firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet](#firebaseappcheckprojectsappsplayintegrityconfigbatchget) - Atomically gets the PlayIntegrityConfigs for the specified list of apps.
* [firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet](#firebaseappcheckprojectsappsrecaptchaenterpriseconfigbatchget) - Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
* [firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet](#firebaseappcheckprojectsappsrecaptchav3configbatchget) - Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
* [firebaseappcheckProjectsAppsSafetyNetConfigBatchGet](#firebaseappcheckprojectsappssafetynetconfigbatchget) - Atomically gets the SafetyNetConfigs for the specified list of apps.
* [firebaseappcheckProjectsServicesBatchUpdate](#firebaseappcheckprojectsservicesbatchupdate) - Atomically updates the specified Service configurations.
* [firebaseappcheckProjectsServicesGet](#firebaseappcheckprojectsservicesget) - Gets the Service configuration for the specified service name.
* [firebaseappcheckProjectsServicesList](#firebaseappcheckprojectsserviceslist) - Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
* [firebaseappcheckProjectsServicesPatch](#firebaseappcheckprojectsservicespatch) - Updates the specified Service configuration.

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

            if (res.googleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1DebugToken;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsDebugTokensCreateRequest req = new FirebaseappcheckProjectsAppsDebugTokensCreateRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                googleFirebaseAppcheckV1DebugToken = new GoogleFirebaseAppcheckV1DebugToken() {{
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

            if (res.googleFirebaseAppcheckV1DebugToken != null) {
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

            if (res.googleFirebaseAppcheckV1ListDebugTokensResponse != null) {
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

            if (res.googleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest req = new FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                googleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest = new GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest() {{
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

            if (res.googleFirebaseAppcheckV1AppCheckToken != null) {
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
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest req = new FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest = new GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest() {{
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

            if (res.googleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeCustomTokenRequest req = new FirebaseappcheckProjectsAppsExchangeCustomTokenRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                googleFirebaseAppcheckV1ExchangeCustomTokenRequest = new GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest() {{
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

            if (res.googleFirebaseAppcheckV1AppCheckToken != null) {
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
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeDebugTokenRequest req = new FirebaseappcheckProjectsAppsExchangeDebugTokenRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                googleFirebaseAppcheckV1ExchangeDebugTokenRequest = new GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest() {{
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

            if (res.googleFirebaseAppcheckV1AppCheckToken != null) {
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
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest req = new FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest = new GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest() {{
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

            if (res.googleFirebaseAppcheckV1AppCheckToken != null) {
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
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest req = new FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest = new GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest() {{
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

            if (res.googleFirebaseAppcheckV1AppCheckToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken

Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.

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
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest req = new FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest = new GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest() {{
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

            if (res.googleFirebaseAppcheckV1AppCheckToken != null) {
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
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest req = new FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest = new GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest() {{
                    recaptchaV3Token = "facilis";
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

            FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse res = sdk.projects.firebaseappcheckProjectsAppsExchangeRecaptchaV3Token(req, new FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1("necessitatibus", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1AppCheckToken != null) {
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
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest req = new FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest = new GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest() {{
                    safetyNetToken = "debitis";
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

            FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse res = sdk.projects.firebaseappcheckProjectsAppsExchangeSafetyNetToken(req, new FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1("cumque", "facere") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1AppCheckToken != null) {
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

            FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest req = new FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("accusamus", "non");
                    put("occaecati", "enim");
                    put("accusamus", "delectus");
                }};
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "id";
                key = "blanditiis";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "amet";
                uploadProtocol = "deserunt";
            }};            

            FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse res = sdk.projects.firebaseappcheckProjectsAppsGenerateAppAttestChallenge(req, new FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1("nisi", "vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1GenerateAppAttestChallengeResponse != null) {
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

            FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest req = new FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest("natus") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("perferendis", "nihil");
                    put("magnam", "distinctio");
                }};
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "suscipit";
                key = "natus";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "vero";
                uploadProtocol = "aspernatur";
            }};            

            FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse res = sdk.projects.firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge(req, new FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1("architecto", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse != null) {
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

            FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest("et") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ullam";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "sint";
                key = "accusantium";
                names = new String[]{{
                    add("reiciendis"),
                    add("mollitia"),
                    add("ad"),
                }};
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "necessitatibus";
                uploadProtocol = "odit";
            }};            

            FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet(req, new FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1("nemo", "quasi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse != null) {
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

            FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "maxime";
                fields = "deleniti";
                key = "facilis";
                names = new String[]{{
                    add("architecto"),
                    add("architecto"),
                }};
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "expedita";
                uploadProtocol = "nihil";
            }};            

            FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet(req, new FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1("repellat", "quibusdam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse != null) {
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

            FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "praesentium";
                key = "natus";
                names = new String[]{{
                    add("sunt"),
                }};
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "pariatur";
                uploadProtocol = "maxime";
            }};            

            FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet(req, new FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1("ea", "excepturi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse != null) {
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

            FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest("odit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "quidem";
                key = "ipsam";
                names = new String[]{{
                    add("autem"),
                    add("nam"),
                }};
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "nemo";
                uploadProtocol = "voluptatibus";
            }};            

            FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsSafetyNetConfigBatchGet(req, new FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurity() {{
                option1 = new FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption1("perferendis", "fugiat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1BatchUpdateServicesRequest;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1Service;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1UpdateServiceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsServicesBatchUpdateRequest req = new FirebaseappcheckProjectsServicesBatchUpdateRequest("amet") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1BatchUpdateServicesRequest = new GoogleFirebaseAppcheckV1BatchUpdateServicesRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1UpdateServiceRequest[]{{
                        add(new GoogleFirebaseAppcheckV1UpdateServiceRequest() {{
                            service = new GoogleFirebaseAppcheckV1Service() {{
                                enforcementMode = GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum.UNENFORCED;
                                name = "Pete Rohan";
                            }};
                            updateMask = "totam";
                        }}),
                        add(new GoogleFirebaseAppcheckV1UpdateServiceRequest() {{
                            service = new GoogleFirebaseAppcheckV1Service() {{
                                enforcementMode = GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum.UNENFORCED;
                                name = "Beatrice Dooley Sr.";
                            }};
                            updateMask = "minus";
                        }}),
                        add(new GoogleFirebaseAppcheckV1UpdateServiceRequest() {{
                            service = new GoogleFirebaseAppcheckV1Service() {{
                                enforcementMode = GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum.UNENFORCED;
                                name = "Eula Hegmann";
                            }};
                            updateMask = "omnis";
                        }}),
                        add(new GoogleFirebaseAppcheckV1UpdateServiceRequest() {{
                            service = new GoogleFirebaseAppcheckV1Service() {{
                                enforcementMode = GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum.ENFORCED;
                                name = "George Sawayn";
                            }};
                            updateMask = "error";
                        }}),
                    }};
                    updateMask = "eaque";
                }};;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "asperiores";
                key = "earum";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "dolorum";
                uploadProtocol = "deleniti";
            }};            

            FirebaseappcheckProjectsServicesBatchUpdateResponse res = sdk.projects.firebaseappcheckProjectsServicesBatchUpdate(req, new FirebaseappcheckProjectsServicesBatchUpdateSecurity() {{
                option1 = new FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1("pariatur", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1BatchUpdateServicesResponse != null) {
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

            FirebaseappcheckProjectsServicesGetRequest req = new FirebaseappcheckProjectsServicesGetRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "quos";
                fields = "aliquid";
                key = "dolorem";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "qui";
                uploadProtocol = "ipsum";
            }};            

            FirebaseappcheckProjectsServicesGetResponse res = sdk.projects.firebaseappcheckProjectsServicesGet(req, new FirebaseappcheckProjectsServicesGetSecurity() {{
                option1 = new FirebaseappcheckProjectsServicesGetSecurityOption1("hic", "excepturi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1Service != null) {
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

            FirebaseappcheckProjectsServicesListRequest req = new FirebaseappcheckProjectsServicesListRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "dolorum";
                key = "numquam";
                oauthToken = "veritatis";
                pageSize = 58029L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "odio";
                uploadProtocol = "quaerat";
            }};            

            FirebaseappcheckProjectsServicesListResponse res = sdk.projects.firebaseappcheckProjectsServicesList(req, new FirebaseappcheckProjectsServicesListSecurity() {{
                option1 = new FirebaseappcheckProjectsServicesListSecurityOption1("accusamus", "quidem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1ListServicesResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1Service;
import org.openapis.openapi.models.shared.GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappcheckProjectsServicesPatchRequest req = new FirebaseappcheckProjectsServicesPatchRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppcheckV1Service = new GoogleFirebaseAppcheckV1Service() {{
                    enforcementMode = GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum.UNENFORCED;
                    name = "Kay Bailey DDS";
                }};;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "dolorum";
                key = "deleniti";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                updateMask = "distinctio";
                uploadType = "asperiores";
                uploadProtocol = "nihil";
            }};            

            FirebaseappcheckProjectsServicesPatchResponse res = sdk.projects.firebaseappcheckProjectsServicesPatch(req, new FirebaseappcheckProjectsServicesPatchSecurity() {{
                option1 = new FirebaseappcheckProjectsServicesPatchSecurityOption1("ipsum", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirebaseAppcheckV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
