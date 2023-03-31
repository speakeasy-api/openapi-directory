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
        DollarXgafv: "2",
        DeliveryPipelineInput: &shared.DeliveryPipelineInput{
            Annotations: map[string]string{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            Condition: &shared.PipelineCondition{
                PipelineReadyCondition: &shared.PipelineReadyCondition{
                    Status: false,
                    UpdateTime: "vel",
                },
                TargetsPresentCondition: &shared.TargetsPresentCondition{
                    MissingTargets: []string{
                        "deserunt",
                        "suscipit",
                        "iure",
                    },
                    Status: false,
                    UpdateTime: "magnam",
                },
                TargetsTypeCondition: &shared.TargetsTypeCondition{
                    ErrorDetails: "debitis",
                    Status: false,
                },
            },
            Description: "ipsa",
            Etag: "delectus",
            Labels: map[string]string{
                "suscipit": "molestiae",
                "minus": "placeat",
            },
            Name: "voluptatum",
            SerialPipeline: &shared.SerialPipeline{
                Stages: []shared.Stage{
                    shared.Stage{
                        Profiles: []string{
                            "nisi",
                            "recusandae",
                            "temporibus",
                        },
                        Strategy: &shared.Strategy{
                            Canary: &shared.Canary{
                                CanaryDeployment: &shared.CanaryDeployment{
                                    Percentages: []int{
                                        337396,
                                    },
                                    Verify: false,
                                },
                                CustomCanaryDeployment: &shared.CustomCanaryDeployment{
                                    PhaseConfigs: []shared.PhaseConfig{
                                        shared.PhaseConfig{
                                            Percentage: 648172,
                                            PhaseID: "perferendis",
                                            Profiles: []string{
                                                "repellendus",
                                                "sapiente",
                                            },
                                            Verify: false,
                                        },
                                    },
                                },
                                RuntimeConfig: &shared.RuntimeConfig{
                                    CloudRun: &shared.CloudRunConfig{
                                        AutomaticTrafficControl: false,
                                    },
                                    Kubernetes: &shared.KubernetesConfig{
                                        GatewayServiceMesh: &shared.GatewayServiceMesh{
                                            Deployment: "quo",
                                            HTTPRoute: "odit",
                                            Service: "at",
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: "at",
                                            Service: "maiores",
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "molestiae",
                    },
                    shared.Stage{
                        Profiles: []string{
                            "quod",
                            "esse",
                            "totam",
                            "porro",
                        },
                        Strategy: &shared.Strategy{
                            Canary: &shared.Canary{
                                CanaryDeployment: &shared.CanaryDeployment{
                                    Percentages: []int{
                                        118274,
                                        720633,
                                        639921,
                                    },
                                    Verify: false,
                                },
                                CustomCanaryDeployment: &shared.CustomCanaryDeployment{
                                    PhaseConfigs: []shared.PhaseConfig{
                                        shared.PhaseConfig{
                                            Percentage: 143353,
                                            PhaseID: "deleniti",
                                            Profiles: []string{
                                                "optio",
                                                "totam",
                                                "beatae",
                                                "commodi",
                                            },
                                            Verify: false,
                                        },
                                        shared.PhaseConfig{
                                            Percentage: 473600,
                                            PhaseID: "modi",
                                            Profiles: []string{
                                                "impedit",
                                            },
                                            Verify: false,
                                        },
                                        shared.PhaseConfig{
                                            Percentage: 736918,
                                            PhaseID: "esse",
                                            Profiles: []string{
                                                "excepturi",
                                            },
                                            Verify: false,
                                        },
                                    },
                                },
                                RuntimeConfig: &shared.RuntimeConfig{
                                    CloudRun: &shared.CloudRunConfig{
                                        AutomaticTrafficControl: false,
                                    },
                                    Kubernetes: &shared.KubernetesConfig{
                                        GatewayServiceMesh: &shared.GatewayServiceMesh{
                                            Deployment: "aspernatur",
                                            HTTPRoute: "perferendis",
                                            Service: "ad",
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: "natus",
                                            Service: "sed",
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "iste",
                    },
                },
            },
            Suspended: false,
        },
        AccessToken: "dolor",
        Alt: "media",
        Callback: "laboriosam",
        DeliveryPipelineID: "hic",
        Fields: "saepe",
        Key: "fuga",
        OauthToken: "in",
        Parent: "corporis",
        PrettyPrint: false,
        QuotaUser: "iste",
        RequestID: "iure",
        UploadType: "saepe",
        UploadProtocol: "quidem",
        ValidateOnly: false,
    }

    ctx := context.Background()
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesCreate(ctx, req, operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity{
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

* `ClouddeployProjectsLocationsDeliveryPipelinesCreate` - Creates a new DeliveryPipeline in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesList` - Lists DeliveryPipelines in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon` - Abandons a Release in the Delivery Pipeline.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreate` - Creates a new Release in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesList` - Lists Releases in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance` - Advances a Rollout in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove` - Approves a Rollout.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate` - Creates a new Rollout in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob` - Ignores the specified Job in a Rollout.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList` - Lists JobRuns in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate` - Terminates a Job Run in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList` - Lists Rollouts in a given project and location.
* `ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob` - Retries the specified Job in a Rollout.
* `ClouddeployProjectsLocationsList` - Lists information about the supported locations for this service.
* `ClouddeployProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `ClouddeployProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `ClouddeployProjectsLocationsTargetsCreate` - Creates a new Target in a given project and location.
* `ClouddeployProjectsLocationsTargetsDelete` - Deletes a single Target.
* `ClouddeployProjectsLocationsTargetsGet` - Gets details of a single Target.
* `ClouddeployProjectsLocationsTargetsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `ClouddeployProjectsLocationsTargetsList` - Lists Targets in a given project and location.
* `ClouddeployProjectsLocationsTargetsPatch` - Updates the parameters of a single Target.
* `ClouddeployProjectsLocationsTargetsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `ClouddeployProjectsLocationsTargetsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
