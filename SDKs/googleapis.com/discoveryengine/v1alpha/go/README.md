# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/discoveryengine/v1alpha/go
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
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(ctx, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDiscoveryengineV1alphaDocument: &shared.GoogleCloudDiscoveryengineV1alphaDocument{
            ID: sdk.String("9bd9d8d6-9a67-44e0-b467-cc8796ed151a"),
            JSONData: sdk.String("perferendis"),
            Name: sdk.String("Estelle Will"),
            ParentDocumentID: sdk.String("at"),
            SchemaID: sdk.String("at"),
            StructData: map[string]interface{}{
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
                "dolorum": "dicta",
            },
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        DocumentID: sdk.String("fugit"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("optio"),
        Parent: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDiscoveryengineV1alphaDocument != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate](docs/projects/README.md#discoveryengineprojectslocationsdatastoresbranchesdocumentscreate) - Creates a Document.
* [DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete](docs/projects/README.md#discoveryengineprojectslocationsdatastoresbranchesdocumentsdelete) - Deletes a Document.
* [DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImport](docs/projects/README.md#discoveryengineprojectslocationsdatastoresbranchesdocumentsimport) - Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
* [DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsList](docs/projects/README.md#discoveryengineprojectslocationsdatastoresbranchesdocumentslist) - Gets a list of Documents.
* [DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch](docs/projects/README.md#discoveryengineprojectslocationsdatastoresbranchesdocumentspatch) - Updates a Document.
* [DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurge](docs/projects/README.md#discoveryengineprojectslocationsdatastoresbranchesdocumentspurge) - Permanently deletes all selected Documents under a branch. This process is asynchronous. If the request is valid, the removal will be enquired and processed offlines. Depending on the number of Documents, this operation could take hours to complete. Before the operation completes, some Documents may still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a sample of Documents that would be deleted, set PurgeDocumentsRequest.force to false.
* [DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommend](docs/projects/README.md#discoveryengineprojectslocationsdatastoresservingconfigsrecommend) - Makes a recommendation, which requires a contextual user event.
* [DiscoveryengineProjectsLocationsDataStoresUserEventsCollect](docs/projects/README.md#discoveryengineprojectslocationsdatastoresusereventscollect) - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
* [DiscoveryengineProjectsLocationsDataStoresUserEventsImport](docs/projects/README.md#discoveryengineprojectslocationsdatastoresusereventsimport) - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* [DiscoveryengineProjectsLocationsDataStoresUserEventsWrite](docs/projects/README.md#discoveryengineprojectslocationsdatastoresusereventswrite) - Writes a single user event.
* [DiscoveryengineProjectsOperationsGet](docs/projects/README.md#discoveryengineprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DiscoveryengineProjectsOperationsList](docs/projects/README.md#discoveryengineprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
