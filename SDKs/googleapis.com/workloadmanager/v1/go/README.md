# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/workloadmanager/v1/go
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

    req := operations.WorkloadmanagerProjectsLocationsEvaluationsCreateRequest{
        DollarXgafv: "2",
        EvaluationInput: &shared.EvaluationInput{
            Description: "provident",
            Labels: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            Name: "error",
            ResourceFilter: &shared.ResourceFilter{
                GceInstanceFilter: &shared.GceInstanceFilter{
                    ServiceAccounts: []string{
                        "suscipit",
                        "iure",
                        "magnam",
                    },
                },
                InclusionLabels: map[string]string{
                    "ipsa": "delectus",
                    "tempora": "suscipit",
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
                ResourceIDPatterns: []string{
                    "excepturi",
                    "nisi",
                },
                Scopes: []string{
                    "temporibus",
                    "ab",
                    "quis",
                    "veritatis",
                },
            },
            ResourceStatus: &shared.ResourceStatus{
                RulesNewerVersions: []string{
                    "perferendis",
                    "ipsam",
                    "repellendus",
                },
                State: "DELETING",
            },
            RuleNames: []string{
                "odit",
                "at",
                "at",
                "maiores",
            },
        },
        AccessToken: "molestiae",
        Alt: "proto",
        Callback: "quod",
        EvaluationID: "esse",
        Fields: "totam",
        Key: "porro",
        OauthToken: "dolorum",
        Parent: "dicta",
        PrettyPrint: false,
        QuotaUser: "nam",
        RequestID: "officia",
        UploadType: "occaecati",
        UploadProtocol: "fugit",
    }

    ctx := context.Background()
    res, err := s.Projects.WorkloadmanagerProjectsLocationsEvaluationsCreate(ctx, req, operations.WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity{
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

* `WorkloadmanagerProjectsLocationsEvaluationsCreate` - Creates a new Evaluation in a given project and location.
* `WorkloadmanagerProjectsLocationsEvaluationsList` - Lists Evaluations in a given project and location.
* `WorkloadmanagerProjectsLocationsInsightsWriteInsight` - Write the data insights to workload manager data warehouse.
* `WorkloadmanagerProjectsLocationsList` - Lists information about the supported locations for this service.
* `WorkloadmanagerProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `WorkloadmanagerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `WorkloadmanagerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `WorkloadmanagerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
