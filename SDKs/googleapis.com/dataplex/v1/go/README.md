# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/dataplex/v1/go
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

    req := operations.DataplexProjectsLocationsDataAttributeBindingsCreateRequest{
        DollarXgafv: "2",
        GoogleCloudDataplexV1DataAttributeBindingInput: &shared.GoogleCloudDataplexV1DataAttributeBindingInput{
            Attributes: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Description: "nulla",
            DisplayName: "corrupti",
            Etag: "illum",
            Labels: map[string]string{
                "error": "deserunt",
                "suscipit": "iure",
            },
            Paths: []shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                    Attributes: []string{
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    },
                    Name: "molestiae",
                },
                shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                    Attributes: []string{
                        "placeat",
                        "voluptatum",
                        "iusto",
                        "excepturi",
                    },
                    Name: "nisi",
                },
            },
            Resource: "recusandae",
        },
        AccessToken: "temporibus",
        Alt: "json",
        Callback: "quis",
        DataAttributeBindingID: "veritatis",
        Fields: "deserunt",
        Key: "perferendis",
        OauthToken: "ipsam",
        Parent: "repellendus",
        PrettyPrint: false,
        QuotaUser: "sapiente",
        UploadType: "quo",
        UploadProtocol: "odit",
        ValidateOnly: false,
    }

    ctx := context.Background()
    res, err := s.Projects.DataplexProjectsLocationsDataAttributeBindingsCreate(ctx, req, operations.DataplexProjectsLocationsDataAttributeBindingsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `DataplexProjectsLocationsDataAttributeBindingsCreate` - Create a DataAttributeBinding resource.
* `DataplexProjectsLocationsDataAttributeBindingsList` - Lists DataAttributeBinding resources in a project and location.
* `DataplexProjectsLocationsDataScansCreate` - Creates a DataScan resource.
* `DataplexProjectsLocationsDataScansList` - Lists DataScans.
* `DataplexProjectsLocationsDataTaxonomiesAttributesCreate` - Create a DataAttribute resource.
* `DataplexProjectsLocationsDataTaxonomiesAttributesList` - Lists Data Attribute resources in a DataTaxonomy.
* `DataplexProjectsLocationsDataTaxonomiesCreate` - Create a DataTaxonomy resource.
* `DataplexProjectsLocationsDataTaxonomiesList` - Lists DataTaxonomy resources in a project and location.
* `DataplexProjectsLocationsLakesContentCreate` - Create a content.
* `DataplexProjectsLocationsLakesContentList` - List content.
* `DataplexProjectsLocationsLakesContentitemsCreate` - Create a content.
* `DataplexProjectsLocationsLakesContentitemsList` - List content.
* `DataplexProjectsLocationsLakesCreate` - Creates a lake resource.
* `DataplexProjectsLocationsLakesEnvironmentsCreate` - Create an environment resource.
* `DataplexProjectsLocationsLakesEnvironmentsList` - Lists environments under the given lake.
* `DataplexProjectsLocationsLakesEnvironmentsSessionsList` - Lists session resources in an environment.
* `DataplexProjectsLocationsLakesList` - Lists lake resources in a project and location.
* `DataplexProjectsLocationsLakesTasksCreate` - Creates a task resource within a lake.
* `DataplexProjectsLocationsLakesTasksJobsList` - Lists Jobs under the given task.
* `DataplexProjectsLocationsLakesTasksList` - Lists tasks under the given lake.
* `DataplexProjectsLocationsLakesTasksRun` - Run an on demand execution of a Task.
* `DataplexProjectsLocationsLakesZonesAssetsActionsList` - Lists action resources in an asset.
* `DataplexProjectsLocationsLakesZonesAssetsCreate` - Creates an asset resource.
* `DataplexProjectsLocationsLakesZonesAssetsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `DataplexProjectsLocationsLakesZonesAssetsList` - Lists asset resources in a zone.
* `DataplexProjectsLocationsLakesZonesAssetsPatch` - Updates an asset resource.
* `DataplexProjectsLocationsLakesZonesAssetsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `DataplexProjectsLocationsLakesZonesAssetsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `DataplexProjectsLocationsLakesZonesCreate` - Creates a zone resource within a lake.
* `DataplexProjectsLocationsLakesZonesEntitiesCreate` - Create a metadata entity.
* `DataplexProjectsLocationsLakesZonesEntitiesList` - List metadata entities in a zone.
* `DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate` - Create a metadata partition.
* `DataplexProjectsLocationsLakesZonesEntitiesPartitionsList` - List metadata partitions of an entity.
* `DataplexProjectsLocationsLakesZonesEntitiesUpdate` - Update a metadata entity. Only supports full resource update.
* `DataplexProjectsLocationsLakesZonesList` - Lists zone resources in a lake.
* `DataplexProjectsLocationsList` - Lists information about the supported locations for this service.
* `DataplexProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `DataplexProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
* `DataplexProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `DataplexProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
