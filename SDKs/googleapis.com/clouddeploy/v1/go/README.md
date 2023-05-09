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
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesCreate(ctx, operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DeliveryPipelineInput: &shared.DeliveryPipelineInput{
            Annotations: map[string]string{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            Condition: &shared.PipelineCondition{
                PipelineReadyCondition: &shared.PipelineReadyCondition{
                    Status: sdk.Bool(false),
                    UpdateTime: sdk.String("vel"),
                },
                TargetsPresentCondition: &shared.TargetsPresentCondition{
                    MissingTargets: []string{
                        "deserunt",
                        "suscipit",
                        "iure",
                    },
                    Status: sdk.Bool(false),
                    UpdateTime: sdk.String("magnam"),
                },
                TargetsTypeCondition: &shared.TargetsTypeCondition{
                    ErrorDetails: sdk.String("debitis"),
                    Status: sdk.Bool(false),
                },
            },
            Description: sdk.String("ipsa"),
            Etag: sdk.String("delectus"),
            Labels: map[string]string{
                "suscipit": "molestiae",
                "minus": "placeat",
            },
            Name: sdk.String("Ted Mante"),
            SerialPipeline: &shared.SerialPipeline{
                Stages: []shared.Stage{
                    shared.Stage{
                        Profiles: []string{
                            "quis",
                        },
                        Strategy: &shared.Strategy{
                            Canary: &shared.Canary{
                                CanaryDeployment: &shared.CanaryDeployment{
                                    Percentages: []int{
                                        648172,
                                    },
                                    Verify: sdk.Bool(false),
                                },
                                CustomCanaryDeployment: &shared.CustomCanaryDeployment{
                                    PhaseConfigs: []shared.PhaseConfig{
                                        shared.PhaseConfig{
                                            Percentage: sdk.Int(368241),
                                            PhaseID: sdk.String("repellendus"),
                                            Profiles: []string{
                                                "quo",
                                                "odit",
                                                "at",
                                                "at",
                                            },
                                            Verify: sdk.Bool(false),
                                        },
                                    },
                                },
                                RuntimeConfig: &shared.RuntimeConfig{
                                    CloudRun: &shared.CloudRunConfig{
                                        AutomaticTrafficControl: sdk.Bool(false),
                                    },
                                    Kubernetes: &shared.KubernetesConfig{
                                        GatewayServiceMesh: &shared.GatewayServiceMesh{
                                            Deployment: sdk.String("maiores"),
                                            HTTPRoute: sdk.String("molestiae"),
                                            Service: sdk.String("quod"),
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: sdk.String("quod"),
                                            Service: sdk.String("esse"),
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: sdk.Bool(false),
                            },
                        },
                        TargetID: sdk.String("totam"),
                    },
                    shared.Stage{
                        Profiles: []string{
                            "dolorum",
                            "dicta",
                            "nam",
                            "officia",
                        },
                        Strategy: &shared.Strategy{
                            Canary: &shared.Canary{
                                CanaryDeployment: &shared.CanaryDeployment{
                                    Percentages: []int{
                                        143353,
                                        537373,
                                        944669,
                                    },
                                    Verify: sdk.Bool(false),
                                },
                                CustomCanaryDeployment: &shared.CustomCanaryDeployment{
                                    PhaseConfigs: []shared.PhaseConfig{
                                        shared.PhaseConfig{
                                            Percentage: sdk.Int(521848),
                                            PhaseID: sdk.String("beatae"),
                                            Profiles: []string{
                                                "molestiae",
                                                "modi",
                                            },
                                            Verify: sdk.Bool(false),
                                        },
                                        shared.PhaseConfig{
                                            Percentage: sdk.Int(186332),
                                            PhaseID: sdk.String("impedit"),
                                            Profiles: []string{
                                                "esse",
                                                "ipsum",
                                                "excepturi",
                                            },
                                            Verify: sdk.Bool(false),
                                        },
                                        shared.PhaseConfig{
                                            Percentage: sdk.Int(135218),
                                            PhaseID: sdk.String("perferendis"),
                                            Profiles: []string{
                                                "natus",
                                                "sed",
                                            },
                                            Verify: sdk.Bool(false),
                                        },
                                        shared.PhaseConfig{
                                            Percentage: sdk.Int(612096),
                                            PhaseID: sdk.String("dolor"),
                                            Profiles: []string{
                                                "laboriosam",
                                                "hic",
                                                "saepe",
                                            },
                                            Verify: sdk.Bool(false),
                                        },
                                    },
                                },
                                RuntimeConfig: &shared.RuntimeConfig{
                                    CloudRun: &shared.CloudRunConfig{
                                        AutomaticTrafficControl: sdk.Bool(false),
                                    },
                                    Kubernetes: &shared.KubernetesConfig{
                                        GatewayServiceMesh: &shared.GatewayServiceMesh{
                                            Deployment: sdk.String("fuga"),
                                            HTTPRoute: sdk.String("in"),
                                            Service: sdk.String("corporis"),
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: sdk.String("iste"),
                                            Service: sdk.String("iure"),
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: sdk.Bool(false),
                            },
                        },
                        TargetID: sdk.String("saepe"),
                    },
                    shared.Stage{
                        Profiles: []string{
                            "architecto",
                            "ipsa",
                            "reiciendis",
                        },
                        Strategy: &shared.Strategy{
                            Canary: &shared.Canary{
                                CanaryDeployment: &shared.CanaryDeployment{
                                    Percentages: []int{
                                        653140,
                                        670638,
                                        170909,
                                    },
                                    Verify: sdk.Bool(false),
                                },
                                CustomCanaryDeployment: &shared.CustomCanaryDeployment{
                                    PhaseConfigs: []shared.PhaseConfig{
                                        shared.PhaseConfig{
                                            Percentage: sdk.Int(358152),
                                            PhaseID: sdk.String("explicabo"),
                                            Profiles: []string{
                                                "enim",
                                                "omnis",
                                                "nemo",
                                                "minima",
                                            },
                                            Verify: sdk.Bool(false),
                                        },
                                    },
                                },
                                RuntimeConfig: &shared.RuntimeConfig{
                                    CloudRun: &shared.CloudRunConfig{
                                        AutomaticTrafficControl: sdk.Bool(false),
                                    },
                                    Kubernetes: &shared.KubernetesConfig{
                                        GatewayServiceMesh: &shared.GatewayServiceMesh{
                                            Deployment: sdk.String("excepturi"),
                                            HTTPRoute: sdk.String("accusantium"),
                                            Service: sdk.String("iure"),
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: sdk.String("culpa"),
                                            Service: sdk.String("doloribus"),
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: sdk.Bool(false),
                            },
                        },
                        TargetID: sdk.String("sapiente"),
                    },
                    shared.Stage{
                        Profiles: []string{
                            "mollitia",
                        },
                        Strategy: &shared.Strategy{
                            Canary: &shared.Canary{
                                CanaryDeployment: &shared.CanaryDeployment{
                                    Percentages: []int{
                                        635059,
                                    },
                                    Verify: sdk.Bool(false),
                                },
                                CustomCanaryDeployment: &shared.CustomCanaryDeployment{
                                    PhaseConfigs: []shared.PhaseConfig{
                                        shared.PhaseConfig{
                                            Percentage: sdk.Int(995300),
                                            PhaseID: sdk.String("mollitia"),
                                            Profiles: []string{
                                                "numquam",
                                                "commodi",
                                                "quam",
                                            },
                                            Verify: sdk.Bool(false),
                                        },
                                    },
                                },
                                RuntimeConfig: &shared.RuntimeConfig{
                                    CloudRun: &shared.CloudRunConfig{
                                        AutomaticTrafficControl: sdk.Bool(false),
                                    },
                                    Kubernetes: &shared.KubernetesConfig{
                                        GatewayServiceMesh: &shared.GatewayServiceMesh{
                                            Deployment: sdk.String("molestiae"),
                                            HTTPRoute: sdk.String("velit"),
                                            Service: sdk.String("error"),
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: sdk.String("quia"),
                                            Service: sdk.String("quis"),
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: sdk.Bool(false),
                            },
                        },
                        TargetID: sdk.String("vitae"),
                    },
                },
            },
            Suspended: sdk.Bool(false),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        DeliveryPipelineID: sdk.String("odit"),
        Fields: sdk.String("quo"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("tenetur"),
        Parent: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        RequestID: sdk.String("possimus"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("quasi"),
        ValidateOnly: sdk.Bool(false),
    }, operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity{
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

* [ClouddeployProjectsLocationsDeliveryPipelinesCreate](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinescreate) - Creates a new DeliveryPipeline in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesList](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelineslist) - Lists DeliveryPipelines in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesabandon) - Abandons a Release in the Delivery Pipeline.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreate](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasescreate) - Creates a new Release in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesList](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleaseslist) - Lists Releases in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsadvance) - Advances a Rollout in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsapprove) - Approves a Rollout.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutscreate) - Creates a new Rollout in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsignorejob) - Ignores the specified Job in a Rollout.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunslist) - Lists JobRuns in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunsterminate) - Terminates a Job Run in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutslist) - Lists Rollouts in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsretryjob) - Retries the specified Job in a Rollout.
* [ClouddeployProjectsLocationsList](docs/projects/README.md#clouddeployprojectslocationslist) - Lists information about the supported locations for this service.
* [ClouddeployProjectsLocationsOperationsCancel](docs/projects/README.md#clouddeployprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ClouddeployProjectsLocationsOperationsList](docs/projects/README.md#clouddeployprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [ClouddeployProjectsLocationsTargetsCreate](docs/projects/README.md#clouddeployprojectslocationstargetscreate) - Creates a new Target in a given project and location.
* [ClouddeployProjectsLocationsTargetsDelete](docs/projects/README.md#clouddeployprojectslocationstargetsdelete) - Deletes a single Target.
* [ClouddeployProjectsLocationsTargetsGet](docs/projects/README.md#clouddeployprojectslocationstargetsget) - Gets details of a single Target.
* [ClouddeployProjectsLocationsTargetsGetIamPolicy](docs/projects/README.md#clouddeployprojectslocationstargetsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [ClouddeployProjectsLocationsTargetsList](docs/projects/README.md#clouddeployprojectslocationstargetslist) - Lists Targets in a given project and location.
* [ClouddeployProjectsLocationsTargetsPatch](docs/projects/README.md#clouddeployprojectslocationstargetspatch) - Updates the parameters of a single Target.
* [ClouddeployProjectsLocationsTargetsSetIamPolicy](docs/projects/README.md#clouddeployprojectslocationstargetssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [ClouddeployProjectsLocationsTargetsTestIamPermissions](docs/projects/README.md#clouddeployprojectslocationstargetstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
