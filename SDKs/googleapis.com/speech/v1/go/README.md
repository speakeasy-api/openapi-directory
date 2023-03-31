# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/speech/v1/go
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

    req := operations.SpeechOperationsGetRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        Name: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Operations.SpeechOperationsGet(ctx, req, operations.SpeechOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Operations

* `SpeechOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `SpeechOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Projects

* `SpeechProjectsLocationsCustomClassesCreate` - Create a custom class.
* `SpeechProjectsLocationsCustomClassesList` - List custom classes.
* `SpeechProjectsLocationsPhraseSetsCreate` - Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.
* `SpeechProjectsLocationsPhraseSetsDelete` - Delete a phrase set.
* `SpeechProjectsLocationsPhraseSetsGet` - Get a phrase set.
* `SpeechProjectsLocationsPhraseSetsList` - List phrase sets.
* `SpeechProjectsLocationsPhraseSetsPatch` - Update a phrase set.

### Speech

* `SpeechSpeechLongrunningrecognize` - Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).
* `SpeechSpeechRecognize` - Performs synchronous speech recognition: receive results after all audio has been sent and processed.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
