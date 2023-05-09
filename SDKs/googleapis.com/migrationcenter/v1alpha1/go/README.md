# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/migrationcenter/v1alpha1/go
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
    res, err := s.Projects.MigrationcenterProjectsLocationsAssetsAggregateValues(ctx, operations.MigrationcenterProjectsLocationsAssetsAggregateValuesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AggregateAssetsValuesRequest: &shared.AggregateAssetsValuesRequest{
            Aggregations: []shared.Aggregation{
                shared.Aggregation{
                    Count: map[string]interface{}{
                        "quibusdam": "unde",
                        "nulla": "corrupti",
                        "illum": "vel",
                    },
                    Field: sdk.String("error"),
                    Frequency: map[string]interface{}{
                        "suscipit": "iure",
                        "magnam": "debitis",
                        "ipsa": "delectus",
                    },
                    Histogram: &shared.AggregationHistogram{
                        LowerBounds: []float64{
                            3834.41,
                            4776.65,
                        },
                    },
                    Sum: map[string]interface{}{
                        "placeat": "voluptatum",
                        "iusto": "excepturi",
                        "nisi": "recusandae",
                        "temporibus": "ab",
                    },
                },
                shared.Aggregation{
                    Count: map[string]interface{}{
                        "veritatis": "deserunt",
                        "perferendis": "ipsam",
                    },
                    Field: sdk.String("repellendus"),
                    Frequency: map[string]interface{}{
                        "quo": "odit",
                        "at": "at",
                        "maiores": "molestiae",
                        "quod": "quod",
                    },
                    Histogram: &shared.AggregationHistogram{
                        LowerBounds: []float64{
                            5204.78,
                            7805.29,
                        },
                    },
                    Sum: map[string]interface{}{
                        "dicta": "nam",
                        "officia": "occaecati",
                        "fugit": "deleniti",
                    },
                },
                shared.Aggregation{
                    Count: map[string]interface{}{
                        "optio": "totam",
                        "beatae": "commodi",
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                    Field: sdk.String("cum"),
                    Frequency: map[string]interface{}{
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                    Histogram: &shared.AggregationHistogram{
                        LowerBounds: []float64{
                            6176.36,
                            1496.75,
                        },
                    },
                    Sum: map[string]interface{}{
                        "dolor": "natus",
                        "laboriosam": "hic",
                        "saepe": "fuga",
                    },
                },
            },
            Filter: sdk.String("in"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("architecto"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AggregateAssetsValuesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [MigrationcenterProjectsLocationsAssetsAggregateValues](docs/projects/README.md#migrationcenterprojectslocationsassetsaggregatevalues) - Aggregates the requested fields based on provided function.
* [MigrationcenterProjectsLocationsAssetsBatchDelete](docs/projects/README.md#migrationcenterprojectslocationsassetsbatchdelete) - Deletes list of Assets.
* [MigrationcenterProjectsLocationsAssetsBatchUpdate](docs/projects/README.md#migrationcenterprojectslocationsassetsbatchupdate) - Updates the parameters of a list of assets.
* [MigrationcenterProjectsLocationsAssetsList](docs/projects/README.md#migrationcenterprojectslocationsassetslist) - Lists all the assets in a given project and location.
* [MigrationcenterProjectsLocationsAssetsReportAssetFrames](docs/projects/README.md#migrationcenterprojectslocationsassetsreportassetframes) - Reports a set of frames.
* [MigrationcenterProjectsLocationsGroupsAddAssets](docs/projects/README.md#migrationcenterprojectslocationsgroupsaddassets) - Adds assets to a group.
* [MigrationcenterProjectsLocationsGroupsCreate](docs/projects/README.md#migrationcenterprojectslocationsgroupscreate) - Creates a new group in a given project and location.
* [MigrationcenterProjectsLocationsGroupsList](docs/projects/README.md#migrationcenterprojectslocationsgroupslist) - Lists all groups in a given project and location.
* [MigrationcenterProjectsLocationsGroupsRemoveAssets](docs/projects/README.md#migrationcenterprojectslocationsgroupsremoveassets) - Removes assets from a group.
* [MigrationcenterProjectsLocationsImportJobsCreate](docs/projects/README.md#migrationcenterprojectslocationsimportjobscreate) - Creates an import job.
* [MigrationcenterProjectsLocationsImportJobsImportDataFilesCreate](docs/projects/README.md#migrationcenterprojectslocationsimportjobsimportdatafilescreate) - Creates an import data file.
* [MigrationcenterProjectsLocationsImportJobsImportDataFilesList](docs/projects/README.md#migrationcenterprojectslocationsimportjobsimportdatafileslist) - List import data files.
* [MigrationcenterProjectsLocationsImportJobsList](docs/projects/README.md#migrationcenterprojectslocationsimportjobslist) - Lists all import jobs.
* [MigrationcenterProjectsLocationsImportJobsRun](docs/projects/README.md#migrationcenterprojectslocationsimportjobsrun) - Runs an import job.
* [MigrationcenterProjectsLocationsImportJobsValidate](docs/projects/README.md#migrationcenterprojectslocationsimportjobsvalidate) - Validates an import job.
* [MigrationcenterProjectsLocationsList](docs/projects/README.md#migrationcenterprojectslocationslist) - Lists information about the supported locations for this service.
* [MigrationcenterProjectsLocationsOperationsCancel](docs/projects/README.md#migrationcenterprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [MigrationcenterProjectsLocationsOperationsList](docs/projects/README.md#migrationcenterprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [MigrationcenterProjectsLocationsPreferenceSetsCreate](docs/projects/README.md#migrationcenterprojectslocationspreferencesetscreate) - Creates a new preference set in a given project and location.
* [MigrationcenterProjectsLocationsPreferenceSetsList](docs/projects/README.md#migrationcenterprojectslocationspreferencesetslist) - Lists all the preference sets in a given project and location.
* [MigrationcenterProjectsLocationsReportConfigsCreate](docs/projects/README.md#migrationcenterprojectslocationsreportconfigscreate) - Creates a report configuration.
* [MigrationcenterProjectsLocationsReportConfigsList](docs/projects/README.md#migrationcenterprojectslocationsreportconfigslist) - Lists ReportConfigs in a given project and location.
* [MigrationcenterProjectsLocationsReportConfigsReportsCreate](docs/projects/README.md#migrationcenterprojectslocationsreportconfigsreportscreate) - Creates a report.
* [MigrationcenterProjectsLocationsReportConfigsReportsList](docs/projects/README.md#migrationcenterprojectslocationsreportconfigsreportslist) - Lists Reports in a given ReportConfig.
* [MigrationcenterProjectsLocationsSourcesCreate](docs/projects/README.md#migrationcenterprojectslocationssourcescreate) - Creates a new source in a given project and location.
* [MigrationcenterProjectsLocationsSourcesDelete](docs/projects/README.md#migrationcenterprojectslocationssourcesdelete) - Deletes a source.
* [MigrationcenterProjectsLocationsSourcesErrorFramesGet](docs/projects/README.md#migrationcenterprojectslocationssourceserrorframesget) - Gets the details of an error frame.
* [MigrationcenterProjectsLocationsSourcesErrorFramesList](docs/projects/README.md#migrationcenterprojectslocationssourceserrorframeslist) - Lists all error frames in a given source and location.
* [MigrationcenterProjectsLocationsSourcesList](docs/projects/README.md#migrationcenterprojectslocationssourceslist) - Lists all the sources in a given project and location.
* [MigrationcenterProjectsLocationsSourcesPatch](docs/projects/README.md#migrationcenterprojectslocationssourcespatch) - Updates the parameters of a source.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
