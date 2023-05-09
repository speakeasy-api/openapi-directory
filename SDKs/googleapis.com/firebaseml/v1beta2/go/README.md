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
    res, err := s.Projects.FirebasemlProjectsModelsCreate(ctx, operations.FirebasemlProjectsModelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ModelInput: &shared.ModelInput{
            DisplayName: sdk.String("provident"),
            Name: sdk.String("Ellis Mitchell"),
            State: &shared.ModelState{
                Published: sdk.Bool(false),
                ValidationError: &shared.Status{
                    Code: sdk.Int(847252),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "deserunt": "suscipit",
                            "iure": "magnam",
                            "debitis": "ipsa",
                        },
                        map[string]interface{}{
                            "tempora": "suscipit",
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                            "iusto": "excepturi",
                        },
                    },
                    Message: sdk.String("nisi"),
                },
            },
            Tags: []string{
                "temporibus",
                "ab",
                "quis",
                "veritatis",
            },
            TfliteModel: &shared.TfLiteModelInput{
                AutomlModel: sdk.String("deserunt"),
                GcsTfliteURI: sdk.String("perferendis"),
            },
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("quo"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("at"),
        Parent: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("quod"),
    }, operations.FirebasemlProjectsModelsCreateSecurity{
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


### [Projects](docs/projects/README.md)

* [FirebasemlProjectsModelsCreate](docs/projects/README.md#firebasemlprojectsmodelscreate) - Creates a model in Firebase ML. The longrunning operation will eventually return a Model
* [FirebasemlProjectsModelsDelete](docs/projects/README.md#firebasemlprojectsmodelsdelete) - Deletes a model
* [FirebasemlProjectsModelsDownload](docs/projects/README.md#firebasemlprojectsmodelsdownload) - Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.
* [FirebasemlProjectsModelsList](docs/projects/README.md#firebasemlprojectsmodelslist) - Lists the models
* [FirebasemlProjectsModelsPatch](docs/projects/README.md#firebasemlprojectsmodelspatch) - Updates a model. The longrunning operation will eventually return a Model.
* [FirebasemlProjectsOperationsGet](docs/projects/README.md#firebasemlprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
