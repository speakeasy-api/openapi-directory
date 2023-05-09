# Projects

### Available Operations

* [FirebaseappcheckProjectsAppsAppAttestConfigBatchGet](#firebaseappcheckprojectsappsappattestconfigbatchget) - Atomically gets the AppAttestConfigs for the specified list of apps.
* [FirebaseappcheckProjectsAppsDebugTokensCreate](#firebaseappcheckprojectsappsdebugtokenscreate) - Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
* [FirebaseappcheckProjectsAppsDebugTokensDelete](#firebaseappcheckprojectsappsdebugtokensdelete) - Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
* [FirebaseappcheckProjectsAppsDebugTokensList](#firebaseappcheckprojectsappsdebugtokenslist) - Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
* [FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGet](#firebaseappcheckprojectsappsdevicecheckconfigbatchget) - Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
* [FirebaseappcheckProjectsAppsExchangeAppAttestAssertion](#firebaseappcheckprojectsappsexchangeappattestassertion) - Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
* [FirebaseappcheckProjectsAppsExchangeAppAttestAttestation](#firebaseappcheckprojectsappsexchangeappattestattestation) - Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
* [FirebaseappcheckProjectsAppsExchangeCustomToken](#firebaseappcheckprojectsappsexchangecustomtoken) - Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
* [FirebaseappcheckProjectsAppsExchangeDebugToken](#firebaseappcheckprojectsappsexchangedebugtoken) - Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
* [FirebaseappcheckProjectsAppsExchangeDeviceCheckToken](#firebaseappcheckprojectsappsexchangedevicechecktoken) - Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
* [FirebaseappcheckProjectsAppsExchangePlayIntegrityToken](#firebaseappcheckprojectsappsexchangeplayintegritytoken) - Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
* [FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken](#firebaseappcheckprojectsappsexchangerecaptchaenterprisetoken) - Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.
* [FirebaseappcheckProjectsAppsExchangeRecaptchaV3Token](#firebaseappcheckprojectsappsexchangerecaptchav3token) - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
* [FirebaseappcheckProjectsAppsExchangeSafetyNetToken](#firebaseappcheckprojectsappsexchangesafetynettoken) - Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
* [FirebaseappcheckProjectsAppsGenerateAppAttestChallenge](#firebaseappcheckprojectsappsgenerateappattestchallenge) - Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
* [FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge](#firebaseappcheckprojectsappsgenerateplayintegritychallenge) - Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
* [FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet](#firebaseappcheckprojectsappsplayintegrityconfigbatchget) - Atomically gets the PlayIntegrityConfigs for the specified list of apps.
* [FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet](#firebaseappcheckprojectsappsrecaptchaenterpriseconfigbatchget) - Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
* [FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet](#firebaseappcheckprojectsappsrecaptchav3configbatchget) - Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
* [FirebaseappcheckProjectsAppsSafetyNetConfigBatchGet](#firebaseappcheckprojectsappssafetynetconfigbatchget) - Atomically gets the SafetyNetConfigs for the specified list of apps.
* [FirebaseappcheckProjectsServicesBatchUpdate](#firebaseappcheckprojectsservicesbatchupdate) - Atomically updates the specified Service configurations.
* [FirebaseappcheckProjectsServicesGet](#firebaseappcheckprojectsservicesget) - Gets the Service configuration for the specified service name.
* [FirebaseappcheckProjectsServicesList](#firebaseappcheckprojectsserviceslist) - Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
* [FirebaseappcheckProjectsServicesPatch](#firebaseappcheckprojectsservicespatch) - Updates the specified Service configuration.

## FirebaseappcheckProjectsAppsAppAttestConfigBatchGet

Atomically gets the AppAttestConfigs for the specified list of apps.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsAppAttestConfigBatchGet(ctx, operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        Names: []string{
            "voluptatum",
            "iusto",
            "excepturi",
            "nisi",
        },
        OauthToken: sdk.String("recusandae"),
        Parent: "temporibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsDebugTokensCreate

Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsDebugTokensCreate(ctx, operations.FirebaseappcheckProjectsAppsDebugTokensCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleFirebaseAppcheckV1DebugToken: &shared.GoogleFirebaseAppcheckV1DebugToken{
            DisplayName: sdk.String("perferendis"),
            Name: sdk.String("Estelle Will"),
            Token: sdk.String("at"),
        },
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("quod"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("esse"),
        Parent: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.FirebaseappcheckProjectsAppsDebugTokensCreateSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1DebugToken != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsDebugTokensDelete

Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsDebugTokensDelete(ctx, operations.FirebaseappcheckProjectsAppsDebugTokensDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("hic"),
        Name: "Everett Breitenberg",
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("cum"),
    }, operations.FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsDebugTokensList

Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsDebugTokensList(ctx, operations.FirebaseappcheckProjectsAppsDebugTokensListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(149675),
        PageToken: sdk.String("iste"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
    }, operations.FirebaseappcheckProjectsAppsDebugTokensListSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1ListDebugTokensResponse != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGet

Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGet(ctx, operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("iste"),
        Key: sdk.String("iure"),
        Names: []string{
            "quidem",
            "architecto",
            "ipsa",
            "reiciendis",
        },
        OauthToken: sdk.String("est"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsExchangeAppAttestAssertion

Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsExchangeAppAttestAssertion(ctx, operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest: &shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest{
            Artifact: sdk.String("explicabo"),
            Assertion: sdk.String("nobis"),
            Challenge: sdk.String("enim"),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        App: "minima",
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1AppCheckToken != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsExchangeAppAttestAttestation

Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsExchangeAppAttestAttestation(ctx, operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest: &shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest{
            AttestationStatement: sdk.String("dolorem"),
            Challenge: sdk.String("culpa"),
            KeyID: sdk.String("consequuntur"),
        },
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        App: "occaecati",
        Callback: sdk.String("numquam"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("quia"),
    }, operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsExchangeCustomToken

Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsExchangeCustomToken(ctx, operations.FirebaseappcheckProjectsAppsExchangeCustomTokenRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest: &shared.GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest{
            CustomToken: sdk.String("vitae"),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        App: "enim",
        Callback: sdk.String("odit"),
        Fields: sdk.String("quo"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.FirebaseappcheckProjectsAppsExchangeCustomTokenSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsExchangeCustomTokenSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1AppCheckToken != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsExchangeDebugToken

Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsExchangeDebugToken(ctx, operations.FirebaseappcheckProjectsAppsExchangeDebugTokenRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest: &shared.GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest{
            DebugToken: sdk.String("quasi"),
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumProto.ToPointer(),
        App: "laborum",
        Callback: sdk.String("quasi"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1AppCheckToken != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsExchangeDeviceCheckToken

Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsExchangeDeviceCheckToken(ctx, operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest: &shared.GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest{
            DeviceToken: sdk.String("omnis"),
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        App: "perferendis",
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1AppCheckToken != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsExchangePlayIntegrityToken

Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsExchangePlayIntegrityToken(ctx, operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest: &shared.GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest{
            PlayIntegrityToken: sdk.String("dicta"),
        },
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        App: "accusamus",
        Callback: sdk.String("commodi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1AppCheckToken != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken

Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken(ctx, operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest: &shared.GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest{
            RecaptchaEnterpriseToken: sdk.String("modi"),
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        App: "voluptates",
        Callback: sdk.String("quasi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("enim"),
    }, operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1AppCheckToken != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsExchangeRecaptchaV3Token

Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsExchangeRecaptchaV3Token(ctx, operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest: &shared.GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest{
            RecaptchaV3Token: sdk.String("est"),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        App: "deserunt",
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1AppCheckToken != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsExchangeSafetyNetToken

Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsExchangeSafetyNetToken(ctx, operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest: &shared.GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest{
            SafetyNetToken: sdk.String("perferendis"),
        },
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumProto.ToPointer(),
        App: "ipsam",
        Callback: sdk.String("alias"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1AppCheckToken != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsGenerateAppAttestChallenge

Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsGenerateAppAttestChallenge(ctx, operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "eum": "non",
            "eligendi": "sint",
            "aliquid": "provident",
            "necessitatibus": "sint",
        },
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        App: "debitis",
        Callback: sdk.String("a"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge

Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge(ctx, operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "cumque": "facere",
            "ea": "aliquid",
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        App: "non",
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("nam"),
    }, operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet

Atomically gets the PlayIntegrityConfigs for the specified list of apps.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet(ctx, operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("amet"),
        Key: sdk.String("deserunt"),
        Names: []string{
            "vel",
            "natus",
        },
        OauthToken: sdk.String("omnis"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet

Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet(ctx, operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("natus"),
        Names: []string{
            "eum",
            "vero",
            "aspernatur",
        },
        OauthToken: sdk.String("architecto"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet

Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet(ctx, operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("reiciendis"),
        Names: []string{
            "ad",
            "eum",
            "dolor",
        },
        OauthToken: sdk.String("necessitatibus"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("iure"),
    }, operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsAppsSafetyNetConfigBatchGet

Atomically gets the SafetyNetConfigs for the specified list of apps.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGet(ctx, operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("facilis"),
        Names: []string{
            "architecto",
            "architecto",
        },
        OauthToken: sdk.String("repudiandae"),
        Parent: "ullam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurity{
        Option1: &operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsServicesBatchUpdate

Atomically updates the specified Service configurations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsServicesBatchUpdate(ctx, operations.FirebaseappcheckProjectsServicesBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleFirebaseAppcheckV1BatchUpdateServicesRequest: &shared.GoogleFirebaseAppcheckV1BatchUpdateServicesRequest{
            Requests: []shared.GoogleFirebaseAppcheckV1UpdateServiceRequest{
                shared.GoogleFirebaseAppcheckV1UpdateServiceRequest{
                    Service: &shared.GoogleFirebaseAppcheckV1Service{
                        EnforcementMode: shared.GoogleFirebaseAppcheckV1ServiceEnforcementModeEnumEnforced.ToPointer(),
                        Name: sdk.String("Edward Crooks"),
                    },
                    UpdateMask: sdk.String("magni"),
                },
            },
            UpdateMask: sdk.String("sunt"),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("excepturi"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("ab"),
    }, operations.FirebaseappcheckProjectsServicesBatchUpdateSecurity{
        Option1: &operations.FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1BatchUpdateServicesResponse != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsServicesGet

Gets the Service configuration for the specified service name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsServicesGet(ctx, operations.FirebaseappcheckProjectsServicesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("autem"),
        Key: sdk.String("nam"),
        Name: "Meredith Hickle PhD",
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.FirebaseappcheckProjectsServicesGetSecurity{
        Option1: &operations.FirebaseappcheckProjectsServicesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1Service != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsServicesList

Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsServicesList(ctx, operations.FirebaseappcheckProjectsServicesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("quis"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("dignissimos"),
        PageSize: sdk.Int64(54338),
        PageToken: sdk.String("quis"),
        Parent: "nesciunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.FirebaseappcheckProjectsServicesListSecurity{
        Option1: &operations.FirebaseappcheckProjectsServicesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1ListServicesResponse != nil {
        // handle response
    }
}
```

## FirebaseappcheckProjectsServicesPatch

Updates the specified Service configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsServicesPatch(ctx, operations.FirebaseappcheckProjectsServicesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleFirebaseAppcheckV1Service: &shared.GoogleFirebaseAppcheckV1Service{
            EnforcementMode: shared.GoogleFirebaseAppcheckV1ServiceEnforcementModeEnumUnenforced.ToPointer(),
            Name: sdk.String("Eula Hegmann"),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("porro"),
        Name: "Ms. Vickie Mraz",
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UpdateMask: sdk.String("earum"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("iste"),
    }, operations.FirebaseappcheckProjectsServicesPatchSecurity{
        Option1: &operations.FirebaseappcheckProjectsServicesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1Service != nil {
        // handle response
    }
}
```
