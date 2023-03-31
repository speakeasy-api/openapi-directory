# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/firebaseml/v1beta2/go
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

    req := operations.FirebasemlProjectsModelsCreateRequest{
        DollarXgafv: "2",
        ModelInput: &shared.ModelInput{
            DisplayName: "provident",
            Name: "distinctio",
            State: &shared.ModelState{
                Published: false,
                ValidationError: &shared.Status{
                    Code: 844266,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "corrupti": "illum",
                            "vel": "error",
                            "deserunt": "suscipit",
                            "iure": "magnam",
                        },
                        map[string]interface{}{
                            "ipsa": "delectus",
                            "tempora": "suscipit",
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                        },
                        map[string]interface{}{
                            "excepturi": "nisi",
                            "recusandae": "temporibus",
                        },
                    },
                    Message: "ab",
                },
            },
            Tags: []string{
                "veritatis",
                "deserunt",
            },
            TfliteModel: &shared.TfLiteModelInput{
                AutomlModel: "perferendis",
                GcsTfliteURI: "ipsam",
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
    res, err := s.Projects.FirebasemlProjectsModelsCreate(ctx, req, operations.FirebasemlProjectsModelsCreateSecurity{
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

* `FirebasemlProjectsModelsCreate` - Creates a model in Firebase ML. The longrunning operation will eventually return a Model
* `FirebasemlProjectsModelsDelete` - Deletes a model
* `FirebasemlProjectsModelsDownload` - Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.
* `FirebasemlProjectsModelsList` - Lists the models
* `FirebasemlProjectsModelsPatch` - Updates a model. The longrunning operation will eventually return a Model.
* `FirebasemlProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
