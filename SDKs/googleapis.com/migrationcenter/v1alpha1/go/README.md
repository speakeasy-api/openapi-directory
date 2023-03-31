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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.MigrationcenterProjectsLocationsAssetsAggregateValuesRequest{
        DollarXgafv: "2",
        AggregateAssetsValuesRequest: &shared.AggregateAssetsValuesRequest{
            Aggregations: []shared.Aggregation{
                shared.Aggregation{
                    Count: map[string]interface{}{
                        "quibusdam": "unde",
                        "nulla": "corrupti",
                        "illum": "vel",
                    },
                    Field: "error",
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
                    Field: "repellendus",
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
                    Field: "cum",
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
            Filter: "in",
        },
        AccessToken: "corporis",
        Alt: "media",
        Callback: "iure",
        Fields: "saepe",
        Key: "quidem",
        OauthToken: "architecto",
        Parent: "ipsa",
        PrettyPrint: false,
        QuotaUser: "reiciendis",
        UploadType: "est",
        UploadProtocol: "mollitia",
    }

    ctx := context.Background()
    res, err := s.Projects.MigrationcenterProjectsLocationsAssetsAggregateValues(ctx, req, operations.MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity{
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


### Projects

* `MigrationcenterProjectsLocationsAssetsAggregateValues` - Aggregates the requested fields based on provided function.
* `MigrationcenterProjectsLocationsAssetsBatchDelete` - Deletes list of Assets.
* `MigrationcenterProjectsLocationsAssetsBatchUpdate` - Updates the parameters of a list of assets.
* `MigrationcenterProjectsLocationsAssetsList` - Lists all the assets in a given project and location.
* `MigrationcenterProjectsLocationsAssetsReportAssetFrames` - Reports a set of frames.
* `MigrationcenterProjectsLocationsGroupsAddAssets` - Adds assets to a group.
* `MigrationcenterProjectsLocationsGroupsCreate` - Creates a new group in a given project and location.
* `MigrationcenterProjectsLocationsGroupsList` - Lists all groups in a given project and location.
* `MigrationcenterProjectsLocationsGroupsRemoveAssets` - Removes assets from a group.
* `MigrationcenterProjectsLocationsImportJobsCreate` - Creates an import job.
* `MigrationcenterProjectsLocationsImportJobsImportDataFilesCreate` - Creates an import data file.
* `MigrationcenterProjectsLocationsImportJobsImportDataFilesList` - List import data files.
* `MigrationcenterProjectsLocationsImportJobsList` - Lists all import jobs.
* `MigrationcenterProjectsLocationsImportJobsRun` - Runs an import job.
* `MigrationcenterProjectsLocationsImportJobsValidate` - Validates an import job.
* `MigrationcenterProjectsLocationsList` - Lists information about the supported locations for this service.
* `MigrationcenterProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `MigrationcenterProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `MigrationcenterProjectsLocationsPreferenceSetsCreate` - Creates a new preference set in a given project and location.
* `MigrationcenterProjectsLocationsPreferenceSetsList` - Lists all the preference sets in a given project and location.
* `MigrationcenterProjectsLocationsSourcesCreate` - Creates a new source in a given project and location.
* `MigrationcenterProjectsLocationsSourcesDelete` - Deletes a source.
* `MigrationcenterProjectsLocationsSourcesGet` - Gets the details of a source.
* `MigrationcenterProjectsLocationsSourcesList` - Lists all the sources in a given project and location.
* `MigrationcenterProjectsLocationsSourcesPatch` - Updates the parameters of a source.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
