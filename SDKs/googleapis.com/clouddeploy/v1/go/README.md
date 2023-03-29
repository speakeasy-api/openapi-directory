# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/clouddeploy/v1/go
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

    req := operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest{
        Security: operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ClouddeployProjectsLocationsDeliveryPipelinesCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            DeliveryPipelineID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
            ValidateOnly: false,
        },
        Request: &shared.DeliveryPipelineInput{
            Annotations: map[string]string{
                "saepe": "inventore",
                "sapiente": "enim",
            },
            Condition: &shared.PipelineCondition{
                PipelineReadyCondition: &shared.PipelineReadyCondition{
                    Status: false,
                    UpdateTime: "eum",
                },
                TargetsPresentCondition: &shared.TargetsPresentCondition{
                    MissingTargets: []string{
                        "autem",
                        "vel",
                    },
                    Status: false,
                    UpdateTime: "non",
                },
                TargetsTypeCondition: &shared.TargetsTypeCondition{
                    ErrorDetails: "deleniti",
                    Status: false,
                },
            },
            Description: "similique",
            Etag: "reprehenderit",
            Labels: map[string]string{
                "quo": "quasi",
                "laboriosam": "dicta",
                "est": "voluptatem",
                "consequatur": "fugiat",
            },
            Name: "a",
            SerialPipeline: &shared.SerialPipeline{
                Stages: []shared.Stage{
                    shared.Stage{
                        Profiles: []string{
                            "accusamus",
                        },
                        Strategy: &shared.Strategy{
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "accusamus",
                    },
                    shared.Stage{
                        Profiles: []string{
                            "rem",
                            "quibusdam",
                            "et",
                            "praesentium",
                        },
                        Strategy: &shared.Strategy{
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "occaecati",
                    },
                    shared.Stage{
                        Profiles: []string{
                            "soluta",
                            "sed",
                            "quisquam",
                            "rerum",
                        },
                        Strategy: &shared.Strategy{
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "culpa",
                    },
                    shared.Stage{
                        Profiles: []string{
                            "sed",
                        },
                        Strategy: &shared.Strategy{
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "rerum",
                    },
                },
            },
            Suspended: false,
        },
    }

    ctx := context.Background()
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesCreate(ctx, req)
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

* `ClouddeployProjectsLocationsDeliveryPipelinesCreate` - Creates a new DeliveryPipeline in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesList` - Lists DeliveryPipelines in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon` - Abandons a Release in the Delivery Pipeline.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreate` - Creates a new Release in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesList` - Lists Releases in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove` - Approves a Rollout.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate` - Creates a new Rollout in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList` - Lists JobRuns in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList` - Lists Rollouts in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob` - Retries the specified Job in a Rollout.
* `ClouddeployProjectsLocationsList` - Lists information about the supported locations for this service.
* `ClouddeployProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `ClouddeployProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `ClouddeployProjectsLocationsTargetsCreate` - Creates a new Target in a given project and location.
* `ClouddeployProjectsLocationsTargetsDelete` - Deletes a single Target.
* `ClouddeployProjectsLocationsTargetsGet` - Gets details of a single Target.
* `ClouddeployProjectsLocationsTargetsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `ClouddeployProjectsLocationsTargetsList` - Lists Targets in a given project and location.
* `ClouddeployProjectsLocationsTargetsPatch` - Updates the parameters of a single Target.
* `ClouddeployProjectsLocationsTargetsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `ClouddeployProjectsLocationsTargetsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
