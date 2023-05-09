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
    res, err := s.Projects.DataplexProjectsLocationsDataAttributeBindingsCreate(ctx, operations.DataplexProjectsLocationsDataAttributeBindingsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDataplexV1DataAttributeBindingInput: &shared.GoogleCloudDataplexV1DataAttributeBindingInput{
            Attributes: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Description: sdk.String("nulla"),
            DisplayName: sdk.String("corrupti"),
            Etag: sdk.String("illum"),
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
                    Name: sdk.String("Alexandra Schulist"),
                },
                shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                    Attributes: []string{
                        "nisi",
                        "recusandae",
                        "temporibus",
                    },
                    Name: sdk.String("Erica Bogisich III"),
                },
            },
            Resource: sdk.String("repellendus"),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        DataAttributeBindingID: sdk.String("at"),
        Fields: sdk.String("at"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("molestiae"),
        Parent: "quod",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsDataAttributeBindingsCreateSecurity{
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


### [Projects](docs/projects/README.md)

* [DataplexProjectsLocationsDataAttributeBindingsCreate](docs/projects/README.md#dataplexprojectslocationsdataattributebindingscreate) - Create a DataAttributeBinding resource.
* [DataplexProjectsLocationsDataAttributeBindingsList](docs/projects/README.md#dataplexprojectslocationsdataattributebindingslist) - Lists DataAttributeBinding resources in a project and location.
* [DataplexProjectsLocationsDataScansCreate](docs/projects/README.md#dataplexprojectslocationsdatascanscreate) - Creates a DataScan resource.
* [DataplexProjectsLocationsDataScansList](docs/projects/README.md#dataplexprojectslocationsdatascanslist) - Lists DataScans.
* [DataplexProjectsLocationsDataTaxonomiesAttributesCreate](docs/projects/README.md#dataplexprojectslocationsdatataxonomiesattributescreate) - Create a DataAttribute resource.
* [DataplexProjectsLocationsDataTaxonomiesAttributesList](docs/projects/README.md#dataplexprojectslocationsdatataxonomiesattributeslist) - Lists Data Attribute resources in a DataTaxonomy.
* [DataplexProjectsLocationsDataTaxonomiesCreate](docs/projects/README.md#dataplexprojectslocationsdatataxonomiescreate) - Create a DataTaxonomy resource.
* [DataplexProjectsLocationsDataTaxonomiesList](docs/projects/README.md#dataplexprojectslocationsdatataxonomieslist) - Lists DataTaxonomy resources in a project and location.
* [DataplexProjectsLocationsLakesContentCreate](docs/projects/README.md#dataplexprojectslocationslakescontentcreate) - Create a content.
* [DataplexProjectsLocationsLakesContentList](docs/projects/README.md#dataplexprojectslocationslakescontentlist) - List content.
* [DataplexProjectsLocationsLakesContentitemsCreate](docs/projects/README.md#dataplexprojectslocationslakescontentitemscreate) - Create a content.
* [DataplexProjectsLocationsLakesContentitemsList](docs/projects/README.md#dataplexprojectslocationslakescontentitemslist) - List content.
* [DataplexProjectsLocationsLakesCreate](docs/projects/README.md#dataplexprojectslocationslakescreate) - Creates a lake resource.
* [DataplexProjectsLocationsLakesEnvironmentsCreate](docs/projects/README.md#dataplexprojectslocationslakesenvironmentscreate) - Create an environment resource.
* [DataplexProjectsLocationsLakesEnvironmentsList](docs/projects/README.md#dataplexprojectslocationslakesenvironmentslist) - Lists environments under the given lake.
* [DataplexProjectsLocationsLakesEnvironmentsSessionsList](docs/projects/README.md#dataplexprojectslocationslakesenvironmentssessionslist) - Lists session resources in an environment.
* [DataplexProjectsLocationsLakesList](docs/projects/README.md#dataplexprojectslocationslakeslist) - Lists lake resources in a project and location.
* [DataplexProjectsLocationsLakesTasksCreate](docs/projects/README.md#dataplexprojectslocationslakestaskscreate) - Creates a task resource within a lake.
* [DataplexProjectsLocationsLakesTasksJobsList](docs/projects/README.md#dataplexprojectslocationslakestasksjobslist) - Lists Jobs under the given task.
* [DataplexProjectsLocationsLakesTasksList](docs/projects/README.md#dataplexprojectslocationslakestaskslist) - Lists tasks under the given lake.
* [DataplexProjectsLocationsLakesTasksRun](docs/projects/README.md#dataplexprojectslocationslakestasksrun) - Run an on demand execution of a Task.
* [DataplexProjectsLocationsLakesZonesAssetsActionsList](docs/projects/README.md#dataplexprojectslocationslakeszonesassetsactionslist) - Lists action resources in an asset.
* [DataplexProjectsLocationsLakesZonesAssetsCreate](docs/projects/README.md#dataplexprojectslocationslakeszonesassetscreate) - Creates an asset resource.
* [DataplexProjectsLocationsLakesZonesAssetsGetIamPolicy](docs/projects/README.md#dataplexprojectslocationslakeszonesassetsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DataplexProjectsLocationsLakesZonesAssetsList](docs/projects/README.md#dataplexprojectslocationslakeszonesassetslist) - Lists asset resources in a zone.
* [DataplexProjectsLocationsLakesZonesAssetsPatch](docs/projects/README.md#dataplexprojectslocationslakeszonesassetspatch) - Updates an asset resource.
* [DataplexProjectsLocationsLakesZonesAssetsSetIamPolicy](docs/projects/README.md#dataplexprojectslocationslakeszonesassetssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [DataplexProjectsLocationsLakesZonesAssetsTestIamPermissions](docs/projects/README.md#dataplexprojectslocationslakeszonesassetstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [DataplexProjectsLocationsLakesZonesCreate](docs/projects/README.md#dataplexprojectslocationslakeszonescreate) - Creates a zone resource within a lake.
* [DataplexProjectsLocationsLakesZonesEntitiesCreate](docs/projects/README.md#dataplexprojectslocationslakeszonesentitiescreate) - Create a metadata entity.
* [DataplexProjectsLocationsLakesZonesEntitiesList](docs/projects/README.md#dataplexprojectslocationslakeszonesentitieslist) - List metadata entities in a zone.
* [DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate](docs/projects/README.md#dataplexprojectslocationslakeszonesentitiespartitionscreate) - Create a metadata partition.
* [DataplexProjectsLocationsLakesZonesEntitiesPartitionsList](docs/projects/README.md#dataplexprojectslocationslakeszonesentitiespartitionslist) - List metadata partitions of an entity.
* [DataplexProjectsLocationsLakesZonesEntitiesUpdate](docs/projects/README.md#dataplexprojectslocationslakeszonesentitiesupdate) - Update a metadata entity. Only supports full resource update.
* [DataplexProjectsLocationsLakesZonesList](docs/projects/README.md#dataplexprojectslocationslakeszoneslist) - Lists zone resources in a lake.
* [DataplexProjectsLocationsList](docs/projects/README.md#dataplexprojectslocationslist) - Lists information about the supported locations for this service.
* [DataplexProjectsLocationsOperationsCancel](docs/projects/README.md#dataplexprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [DataplexProjectsLocationsOperationsDelete](docs/projects/README.md#dataplexprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
* [DataplexProjectsLocationsOperationsGet](docs/projects/README.md#dataplexprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DataplexProjectsLocationsOperationsList](docs/projects/README.md#dataplexprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
