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
        Security: operations.WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.WorkloadmanagerProjectsLocationsEvaluationsCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            EvaluationID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.EvaluationInput{
            Description: "ullam",
            Labels: map[string]string{
                "inventore": "sapiente",
                "enim": "eum",
                "voluptatum": "autem",
                "vel": "non",
            },
            Name: "deleniti",
            ResourceFilter: &shared.ResourceFilter{
                GceInstanceFilter: &shared.GceInstanceFilter{
                    ServiceAccounts: []string{
                        "reprehenderit",
                        "molestiae",
                        "quo",
                    },
                },
                InclusionLabels: map[string]string{
                    "laboriosam": "dicta",
                },
                ResourceIDPatterns: []string{
                    "voluptatem",
                    "consequatur",
                    "fugiat",
                },
                Scopes: []string{
                    "omnis",
                    "eos",
                    "accusamus",
                    "accusamus",
                },
            },
            ResourceStatus: &shared.ResourceStatus{
                RulesNewerVersions: []string{
                    "rem",
                    "quibusdam",
                    "et",
                    "praesentium",
                },
                State: "ACTIVE",
            },
            RuleNames: []string{
                "soluta",
                "sed",
                "quisquam",
                "rerum",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.WorkloadmanagerProjectsLocationsEvaluationsCreate(ctx, req)
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
## SDK Available Operations


### Projects

* `WorkloadmanagerProjectsLocationsEvaluationsCreate` - Creates a new Evaluation in a given project and location.
* `WorkloadmanagerProjectsLocationsEvaluationsList` - Lists Evaluations in a given project and location.
* `WorkloadmanagerProjectsLocationsInsightsWriteInsight` - Write the data insights to workload manager data warehouse.
* `WorkloadmanagerProjectsLocationsList` - Lists information about the supported locations for this service.
* `WorkloadmanagerProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `WorkloadmanagerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `WorkloadmanagerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `WorkloadmanagerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
