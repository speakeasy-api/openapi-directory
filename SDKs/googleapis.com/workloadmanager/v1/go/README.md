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
    res, err := s.Projects.WorkloadmanagerProjectsLocationsEvaluationsCreate(ctx, operations.WorkloadmanagerProjectsLocationsEvaluationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EvaluationInput: &shared.EvaluationInput{
            Description: sdk.String("provident"),
            Labels: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            Name: sdk.String("Doug Hoppe"),
            ResourceFilter: &shared.ResourceFilter{
                GceInstanceFilter: &shared.GceInstanceFilter{
                    ServiceAccounts: []string{
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    },
                },
                InclusionLabels: map[string]string{
                    "minus": "placeat",
                    "voluptatum": "iusto",
                },
                ResourceIDPatterns: []string{
                    "nisi",
                    "recusandae",
                    "temporibus",
                },
                Scopes: []string{
                    "quis",
                },
            },
            ResourceStatus: &shared.ResourceStatus{
                RulesNewerVersions: []string{
                    "deserunt",
                },
                State: shared.ResourceStatusStateEnumStateUnspecified.ToPointer(),
            },
            RuleNames: []string{
                "repellendus",
                "sapiente",
            },
            Schedule: sdk.String("quo"),
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        EvaluationID: sdk.String("maiores"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quod"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        RequestID: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity{
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

* [WorkloadmanagerProjectsLocationsEvaluationsCreate](docs/projects/README.md#workloadmanagerprojectslocationsevaluationscreate) - Creates a new Evaluation in a given project and location.
* [WorkloadmanagerProjectsLocationsEvaluationsExecutionsList](docs/projects/README.md#workloadmanagerprojectslocationsevaluationsexecutionslist) - Lists Executions in a given project and location.
* [WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsList](docs/projects/README.md#workloadmanagerprojectslocationsevaluationsexecutionsresultslist) - List the running result of a single Execution.
* [WorkloadmanagerProjectsLocationsEvaluationsExecutionsRun](docs/projects/README.md#workloadmanagerprojectslocationsevaluationsexecutionsrun) - Creates a new Execution in a given project and location.
* [WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesList](docs/projects/README.md#workloadmanagerprojectslocationsevaluationsexecutionsscannedresourceslist) - List all scanned resources for a single Execution.
* [WorkloadmanagerProjectsLocationsEvaluationsList](docs/projects/README.md#workloadmanagerprojectslocationsevaluationslist) - Lists Evaluations in a given project and location.
* [WorkloadmanagerProjectsLocationsInsightsWriteInsight](docs/projects/README.md#workloadmanagerprojectslocationsinsightswriteinsight) - Write the data insights to workload manager data warehouse.
* [WorkloadmanagerProjectsLocationsList](docs/projects/README.md#workloadmanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [WorkloadmanagerProjectsLocationsOperationsCancel](docs/projects/README.md#workloadmanagerprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [WorkloadmanagerProjectsLocationsOperationsDelete](docs/projects/README.md#workloadmanagerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [WorkloadmanagerProjectsLocationsOperationsGet](docs/projects/README.md#workloadmanagerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [WorkloadmanagerProjectsLocationsOperationsList](docs/projects/README.md#workloadmanagerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [WorkloadmanagerProjectsLocationsRulesList](docs/projects/README.md#workloadmanagerprojectslocationsruleslist) - Lists rules in a given project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
