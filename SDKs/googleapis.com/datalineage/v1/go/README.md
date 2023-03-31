# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/datalineage/v1/go
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

    req := operations.DatalineageProjectsLocationsBatchSearchLinkProcessesRequest{
        DollarXgafv: "2",
        GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest: &shared.GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest{
            Links: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            PageSize: 857946,
            PageToken: "corrupti",
        },
        AccessToken: "illum",
        Alt: "media",
        Callback: "error",
        Fields: "deserunt",
        Key: "suscipit",
        OauthToken: "iure",
        Parent: "magnam",
        PrettyPrint: false,
        QuotaUser: "debitis",
        UploadType: "ipsa",
        UploadProtocol: "delectus",
    }

    ctx := context.Background()
    res, err := s.Projects.DatalineageProjectsLocationsBatchSearchLinkProcesses(ctx, req, operations.DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `DatalineageProjectsLocationsBatchSearchLinkProcesses` - Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
* `DatalineageProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DatalineageProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `DatalineageProjectsLocationsProcessesCreate` - Creates a new process.
* `DatalineageProjectsLocationsProcessesList` - List processes in the given project and location. List order is descending by insertion time.
* `DatalineageProjectsLocationsProcessesRunsCreate` - Creates a new run.
* `DatalineageProjectsLocationsProcessesRunsLineageEventsCreate` - Creates a new lineage event.
* `DatalineageProjectsLocationsProcessesRunsLineageEventsDelete` - Deletes the lineage event with the specified name.
* `DatalineageProjectsLocationsProcessesRunsLineageEventsGet` - Gets details of a specified lineage event.
* `DatalineageProjectsLocationsProcessesRunsLineageEventsList` - Lists lineage events in the given project and location. The list order is not defined.
* `DatalineageProjectsLocationsProcessesRunsList` - Lists runs in the given project and location. List order is descending by `start_time`.
* `DatalineageProjectsLocationsProcessesRunsPatch` - Updates a run.
* `DatalineageProjectsLocationsSearchLinks` - Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
