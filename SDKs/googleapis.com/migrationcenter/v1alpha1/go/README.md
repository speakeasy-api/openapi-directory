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
        Security: operations.MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.MigrationcenterProjectsLocationsAssetsAggregateValuesPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.MigrationcenterProjectsLocationsAssetsAggregateValuesQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.AggregateAssetsValuesRequest{
            Aggregations: []shared.Aggregation{
                shared.Aggregation{
                    Count: map[string]interface{}{
                        "magnam": "debitis",
                        "ipsa": "delectus",
                    },
                    Field: "tempora",
                    Frequency: map[string]interface{}{
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                    Histogram: &shared.AggregationHistogram{
                        LowerBounds: []float64{
                            5680.45,
                            3927.85,
                        },
                    },
                    Sum: map[string]interface{}{
                        "temporibus": "ab",
                        "quis": "veritatis",
                        "deserunt": "perferendis",
                        "ipsam": "repellendus",
                    },
                },
                shared.Aggregation{
                    Count: map[string]interface{}{
                        "quo": "odit",
                        "at": "at",
                        "maiores": "molestiae",
                        "quod": "quod",
                    },
                    Field: "esse",
                    Frequency: map[string]interface{}{
                        "porro": "dolorum",
                        "dicta": "nam",
                        "officia": "occaecati",
                    },
                    Histogram: &shared.AggregationHistogram{
                        LowerBounds: []float64{
                            5373.73,
                        },
                    },
                    Sum: map[string]interface{}{
                        "optio": "totam",
                        "beatae": "commodi",
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                },
            },
            Filter: "cum",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.MigrationcenterProjectsLocationsAssetsAggregateValues(ctx, req)
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
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
