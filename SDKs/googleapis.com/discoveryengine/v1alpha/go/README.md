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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest{
        DollarXgafv: "2",
        GoogleCloudDiscoveryengineV1alphaDocument: &shared.GoogleCloudDiscoveryengineV1alphaDocument{
            ID: "provident",
            JSONData: "distinctio",
            Name: "quibusdam",
            ParentDocumentID: "unde",
            SchemaID: "nulla",
            StructData: map[string]interface{}{
                "illum": "vel",
                "error": "deserunt",
                "suscipit": "iure",
            },
        },
        AccessToken: "magnam",
        Alt: "proto",
        Callback: "ipsa",
        DocumentID: "delectus",
        Fields: "tempora",
        Key: "suscipit",
        OauthToken: "molestiae",
        Parent: "minus",
        PrettyPrint: false,
        QuotaUser: "placeat",
        UploadType: "voluptatum",
        UploadProtocol: "iusto",
    }

    ctx := context.Background()
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(ctx, req, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity{
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


### Projects

* `DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate` - Creates a Document.
* `DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete` - Deletes a Document.
* `DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImport` - Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
* `DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsList` - Gets a list of Documents.
* `DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch` - Updates a Document.
* `DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommend` - Makes a recommendation, which requires a contextual user event.
* `DiscoveryengineProjectsLocationsDataStoresUserEventsCollect` - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
* `DiscoveryengineProjectsLocationsDataStoresUserEventsImport` - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* `DiscoveryengineProjectsLocationsDataStoresUserEventsWrite` - Writes a single user event.
* `DiscoveryengineProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `DiscoveryengineProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
