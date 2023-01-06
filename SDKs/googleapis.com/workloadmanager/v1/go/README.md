# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "sed",
        },
        QueryParams: operations.WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "soluta",
            Alt: "proto",
            Callback: "amet",
            EvaluationID: "pariatur",
            Fields: "laboriosam",
            Key: "et",
            OauthToken: "consequatur",
            PrettyPrint: false,
            QuotaUser: "dolorem",
            RequestID: "animi",
            UploadType: "molestiae",
            UploadProtocol: "ipsa",
        },
        Request: &shared.EvaluationInput{
            Description: "quasi",
            Labels: map[string]string{
                "voluptatibus": "voluptas",
                "quos": "est",
                "saepe": "quo",
            },
            Name: "enim",
            ResourceFilter: &shared.ResourceFilter{
                GceInstanceFilter: &shared.GceInstanceFilter{
                    ServiceAccounts: []string{
                        "asperiores",
                        "quibusdam",
                    },
                },
                InclusionLabels: map[string]string{
                    "minima": "maxime",
                    "porro": "blanditiis",
                },
                ResourceIDPatterns: []string{
                    "repellendus",
                    "asperiores",
                },
                Scopes: []string{
                    "animi",
                    "quaerat",
                },
            },
            ResourceStatus: &shared.ResourceStatus{
                RulesNewerVersions: []string{
                    "qui",
                },
                State: "STATE_UNSPECIFIED",
            },
            RuleNames: []string{
                "qui",
                "quis",
            },
        },
    }
    
    res, err := s.Projects.WorkloadmanagerProjectsLocationsEvaluationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `WorkloadmanagerProjectsLocationsEvaluationsCreate` - Creates a new Evaluation in a given project and location.
* `WorkloadmanagerProjectsLocationsEvaluationsList` - Lists Evaluations in a given project and location.
* `WorkloadmanagerProjectsLocationsList` - Lists information about the supported locations for this service.
* `WorkloadmanagerProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `WorkloadmanagerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `WorkloadmanagerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `WorkloadmanagerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
