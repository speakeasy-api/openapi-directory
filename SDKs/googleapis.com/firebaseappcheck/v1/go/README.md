# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/firebaseappcheck/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        Names: []string{
            "illum",
            "vel",
            "error",
        },
        OauthToken: "deserunt",
        Parent: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsAppAttestConfigBatchGet(ctx, req, operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `FirebaseappcheckProjectsAppsAppAttestConfigBatchGet` - Atomically gets the AppAttestConfigs for the specified list of apps.
* `FirebaseappcheckProjectsAppsDebugTokensCreate` - Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
* `FirebaseappcheckProjectsAppsDebugTokensDelete` - Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
* `FirebaseappcheckProjectsAppsDebugTokensList` - Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
* `FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGet` - Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
* `FirebaseappcheckProjectsAppsExchangeAppAttestAssertion` - Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
* `FirebaseappcheckProjectsAppsExchangeAppAttestAttestation` - Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
* `FirebaseappcheckProjectsAppsExchangeCustomToken` - Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
* `FirebaseappcheckProjectsAppsExchangeDebugToken` - Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
* `FirebaseappcheckProjectsAppsExchangeDeviceCheckToken` - Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
* `FirebaseappcheckProjectsAppsExchangePlayIntegrityToken` - Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
* `FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken` - Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.
* `FirebaseappcheckProjectsAppsExchangeRecaptchaV3Token` - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
* `FirebaseappcheckProjectsAppsExchangeSafetyNetToken` - Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
* `FirebaseappcheckProjectsAppsGenerateAppAttestChallenge` - Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
* `FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge` - Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
* `FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet` - Atomically gets the PlayIntegrityConfigs for the specified list of apps.
* `FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet` - Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
* `FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet` - Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
* `FirebaseappcheckProjectsAppsSafetyNetConfigBatchGet` - Atomically gets the SafetyNetConfigs for the specified list of apps.
* `FirebaseappcheckProjectsServicesBatchUpdate` - Atomically updates the specified Service configurations.
* `FirebaseappcheckProjectsServicesGet` - Gets the Service configuration for the specified service name.
* `FirebaseappcheckProjectsServicesList` - Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
* `FirebaseappcheckProjectsServicesPatch` - Updates the specified Service configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
