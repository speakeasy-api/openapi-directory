# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/translate/v3beta1/go
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

    req := operations.TranslateProjectsLocationsBatchTranslateDocumentRequest{
        DollarXgafv: "2",
        BatchTranslateDocumentRequest: &shared.BatchTranslateDocumentRequest{
            CustomizedAttribution: "provident",
            EnableShadowRemovalNativePdf: false,
            FormatConversions: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            Glossaries: map[string]shared.TranslateTextGlossaryConfig{
                "deserunt": shared.TranslateTextGlossaryConfig{
                    Glossary: "suscipit",
                    IgnoreCase: false,
                },
                "iure": shared.TranslateTextGlossaryConfig{
                    Glossary: "magnam",
                    IgnoreCase: false,
                },
                "debitis": shared.TranslateTextGlossaryConfig{
                    Glossary: "ipsa",
                    IgnoreCase: false,
                },
            },
            InputConfigs: []shared.BatchDocumentInputConfig{
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "tempora",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "suscipit",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "molestiae",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "minus",
                    },
                },
            },
            Models: map[string]string{
                "voluptatum": "iusto",
                "excepturi": "nisi",
                "recusandae": "temporibus",
                "ab": "quis",
            },
            OutputConfig: &shared.BatchDocumentOutputConfig{
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: "veritatis",
                },
            },
            SourceLanguageCode: "deserunt",
            TargetLanguageCodes: []string{
                "ipsam",
            },
        },
        AccessToken: "repellendus",
        Alt: "proto",
        Callback: "quo",
        Fields: "odit",
        Key: "at",
        OauthToken: "at",
        Parent: "maiores",
        PrettyPrint: false,
        QuotaUser: "molestiae",
        UploadType: "quod",
        UploadProtocol: "quod",
    }

    ctx := context.Background()
    res, err := s.Projects.TranslateProjectsLocationsBatchTranslateDocument(ctx, req, operations.TranslateProjectsLocationsBatchTranslateDocumentSecurity{
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


### Projects

* `TranslateProjectsLocationsBatchTranslateDocument` - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* `TranslateProjectsLocationsBatchTranslateText` - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* `TranslateProjectsLocationsDetectLanguage` - Detects the language of text within a request.
* `TranslateProjectsLocationsGetSupportedLanguages` - Returns a list of supported languages for translation.
* `TranslateProjectsLocationsGlossariesCreate` - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
* `TranslateProjectsLocationsGlossariesList` - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
* `TranslateProjectsLocationsList` - Lists information about the supported locations for this service.
* `TranslateProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `TranslateProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `TranslateProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `TranslateProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `TranslateProjectsLocationsOperationsWait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* `TranslateProjectsLocationsTranslateDocument` - Translates documents in synchronous mode.
* `TranslateProjectsLocationsTranslateText` - Translates input text and returns translated text.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
