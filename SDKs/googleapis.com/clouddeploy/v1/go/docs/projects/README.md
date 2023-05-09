# Projects

### Available Operations

* [ClouddeployProjectsLocationsDeliveryPipelinesCreate](#clouddeployprojectslocationsdeliverypipelinescreate) - Creates a new DeliveryPipeline in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesList](#clouddeployprojectslocationsdeliverypipelineslist) - Lists DeliveryPipelines in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon](#clouddeployprojectslocationsdeliverypipelinesreleasesabandon) - Abandons a Release in the Delivery Pipeline.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreate](#clouddeployprojectslocationsdeliverypipelinesreleasescreate) - Creates a new Release in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesList](#clouddeployprojectslocationsdeliverypipelinesreleaseslist) - Lists Releases in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsadvance) - Advances a Rollout in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsapprove) - Approves a Rollout.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutscreate) - Creates a new Rollout in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsignorejob) - Ignores the specified Job in a Rollout.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunslist) - Lists JobRuns in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunsterminate) - Terminates a Job Run in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutslist) - Lists Rollouts in a given project and location.
* [ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsretryjob) - Retries the specified Job in a Rollout.
* [ClouddeployProjectsLocationsList](#clouddeployprojectslocationslist) - Lists information about the supported locations for this service.
* [ClouddeployProjectsLocationsOperationsCancel](#clouddeployprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ClouddeployProjectsLocationsOperationsList](#clouddeployprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [ClouddeployProjectsLocationsTargetsCreate](#clouddeployprojectslocationstargetscreate) - Creates a new Target in a given project and location.
* [ClouddeployProjectsLocationsTargetsDelete](#clouddeployprojectslocationstargetsdelete) - Deletes a single Target.
* [ClouddeployProjectsLocationsTargetsGet](#clouddeployprojectslocationstargetsget) - Gets details of a single Target.
* [ClouddeployProjectsLocationsTargetsGetIamPolicy](#clouddeployprojectslocationstargetsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [ClouddeployProjectsLocationsTargetsList](#clouddeployprojectslocationstargetslist) - Lists Targets in a given project and location.
* [ClouddeployProjectsLocationsTargetsPatch](#clouddeployprojectslocationstargetspatch) - Updates the parameters of a single Target.
* [ClouddeployProjectsLocationsTargetsSetIamPolicy](#clouddeployprojectslocationstargetssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [ClouddeployProjectsLocationsTargetsTestIamPermissions](#clouddeployprojectslocationstargetstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## ClouddeployProjectsLocationsDeliveryPipelinesCreate

Creates a new DeliveryPipeline in a given project and location.

### Example Usage

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
                "laborum": "quasi",
                "reiciendis": "voluptatibus",
                "vero": "nihil",
                "praesentium": "voluptatibus",
            },
            Condition: &shared.PipelineCondition{
                PipelineReadyCondition: &shared.PipelineReadyCondition{
                    Status: sdk.Bool(false),
                    UpdateTime: sdk.String("ipsa"),
                },
                TargetsPresentCondition: &shared.TargetsPresentCondition{
                    MissingTargets: []string{
                        "voluptate",
                        "cum",
                        "perferendis",
                    },
                    Status: sdk.Bool(false),
                    UpdateTime: sdk.String("doloremque"),
                },
                TargetsTypeCondition: &shared.TargetsTypeCondition{
                    ErrorDetails: sdk.String("reprehenderit"),
                    Status: sdk.Bool(false),
                },
            },
            Description: sdk.String("ut"),
            Etag: sdk.String("maiores"),
            Labels: map[string]string{
                "corporis": "dolore",
            },
            Name: sdk.String("Mildred Pfeffer"),
            SerialPipeline: &shared.SerialPipeline{
                Stages: []shared.Stage{
                    shared.Stage{
                        Profiles: []string{
                            "quae",
                            "ipsum",
                            "quidem",
                            "molestias",
                        },
                        Strategy: &shared.Strategy{
                            Canary: &shared.Canary{
                                CanaryDeployment: &shared.CanaryDeployment{
                                    Percentages: []int{
                                        865103,
                                        265389,
                                        508969,
                                    },
                                    Verify: sdk.Bool(false),
                                },
                                CustomCanaryDeployment: &shared.CustomCanaryDeployment{
                                    PhaseConfigs: []shared.PhaseConfig{
                                        shared.PhaseConfig{
                                            Percentage: sdk.Int(916723),
                                            PhaseID: sdk.String("quasi"),
                                            Profiles: []string{
                                                "sint",
                                                "veritatis",
                                                "itaque",
                                                "incidunt",
                                            },
                                            Verify: sdk.Bool(false),
                                        },
                                        shared.PhaseConfig{
                                            Percentage: sdk.Int(318569),
                                            PhaseID: sdk.String("consequatur"),
                                            Profiles: []string{
                                                "quibusdam",
                                                "explicabo",
                                                "deserunt",
                                            },
                                            Verify: sdk.Bool(false),
                                        },
                                        shared.PhaseConfig{
                                            Percentage: sdk.Int(716327),
                                            PhaseID: sdk.String("quibusdam"),
                                            Profiles: []string{
                                                "modi",
                                                "qui",
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
                                            Deployment: sdk.String("aliquid"),
                                            HTTPRoute: sdk.String("cupiditate"),
                                            Service: sdk.String("quos"),
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: sdk.String("perferendis"),
                                            Service: sdk.String("magni"),
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: sdk.Bool(false),
                            },
                        },
                        TargetID: sdk.String("assumenda"),
                    },
                    shared.Stage{
                        Profiles: []string{
                            "alias",
                            "fugit",
                        },
                        Strategy: &shared.Strategy{
                            Canary: &shared.Canary{
                                CanaryDeployment: &shared.CanaryDeployment{
                                    Percentages: []int{
                                        569618,
                                        270008,
                                        703737,
                                    },
                                    Verify: sdk.Bool(false),
                                },
                                CustomCanaryDeployment: &shared.CustomCanaryDeployment{
                                    PhaseConfigs: []shared.PhaseConfig{
                                        shared.PhaseConfig{
                                            Percentage: sdk.Int(288476),
                                            PhaseID: sdk.String("delectus"),
                                            Profiles: []string{
                                                "non",
                                                "eligendi",
                                            },
                                            Verify: sdk.Bool(false),
                                        },
                                        shared.PhaseConfig{
                                            Percentage: sdk.Int(576157),
                                            PhaseID: sdk.String("aliquid"),
                                            Profiles: []string{
                                                "necessitatibus",
                                                "sint",
                                                "officia",
                                            },
                                            Verify: sdk.Bool(false),
                                        },
                                        shared.PhaseConfig{
                                            Percentage: sdk.Int(223081),
                                            PhaseID: sdk.String("debitis"),
                                            Profiles: []string{
                                                "dolorum",
                                                "in",
                                                "in",
                                                "illum",
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
                                            HTTPRoute: sdk.String("rerum"),
                                            Service: sdk.String("dicta"),
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: sdk.String("magnam"),
                                            Service: sdk.String("cumque"),
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: sdk.Bool(false),
                            },
                        },
                        TargetID: sdk.String("facere"),
                    },
                },
            },
            Suspended: sdk.Bool(false),
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        DeliveryPipelineID: sdk.String("accusamus"),
        Fields: sdk.String("non"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("enim"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        RequestID: sdk.String("quidem"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("nam"),
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

## ClouddeployProjectsLocationsDeliveryPipelinesList

Lists DeliveryPipelines in a given project and location.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesList(ctx, operations.ClouddeployProjectsLocationsDeliveryPipelinesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("amet"),
        Filter: sdk.String("deserunt"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("vel"),
        OrderBy: sdk.String("natus"),
        PageSize: sdk.Int64(606393),
        PageToken: sdk.String("molestiae"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.ClouddeployProjectsLocationsDeliveryPipelinesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeliveryPipelinesResponse != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon

Abandons a Release in the Delivery Pipeline.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon(ctx, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "labore": "suscipit",
            "natus": "nobis",
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("magnam"),
        Name: "Miriam Hermann",
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AbandonReleaseResponse != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreate

Creates a new Release in a given project and location.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreate(ctx, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReleaseInput: &shared.ReleaseInput{
            Annotations: map[string]string{
                "eum": "dolor",
                "necessitatibus": "odit",
            },
            BuildArtifacts: []shared.BuildArtifact{
                shared.BuildArtifact{
                    Image: sdk.String("quasi"),
                    Tag: sdk.String("iure"),
                },
                shared.BuildArtifact{
                    Image: sdk.String("doloribus"),
                    Tag: sdk.String("debitis"),
                },
            },
            Condition: &shared.ReleaseCondition{
                ReleaseReadyCondition: &shared.ReleaseReadyCondition{
                    Status: sdk.Bool(false),
                },
                SkaffoldSupportedCondition: &shared.SkaffoldSupportedCondition{
                    MaintenanceModeTime: sdk.String("eius"),
                    SkaffoldSupportState: shared.SkaffoldSupportedConditionSkaffoldSupportStateEnumSkaffoldSupportStateUnsupported.ToPointer(),
                    Status: sdk.Bool(false),
                    SupportExpirationTime: sdk.String("deleniti"),
                },
            },
            DeliveryPipelineSnapshot: &shared.DeliveryPipelineInput{
                Annotations: map[string]string{
                    "in": "architecto",
                    "architecto": "repudiandae",
                    "ullam": "expedita",
                },
                Condition: &shared.PipelineCondition{
                    PipelineReadyCondition: &shared.PipelineReadyCondition{
                        Status: sdk.Bool(false),
                        UpdateTime: sdk.String("nihil"),
                    },
                    TargetsPresentCondition: &shared.TargetsPresentCondition{
                        MissingTargets: []string{
                            "quibusdam",
                            "sed",
                            "saepe",
                            "pariatur",
                        },
                        Status: sdk.Bool(false),
                        UpdateTime: sdk.String("accusantium"),
                    },
                    TargetsTypeCondition: &shared.TargetsTypeCondition{
                        ErrorDetails: sdk.String("consequuntur"),
                        Status: sdk.Bool(false),
                    },
                },
                Description: sdk.String("praesentium"),
                Etag: sdk.String("natus"),
                Labels: map[string]string{
                    "sunt": "quo",
                },
                Name: sdk.String("Ervin Schoen"),
                SerialPipeline: &shared.SerialPipeline{
                    Stages: []shared.Stage{
                        shared.Stage{
                            Profiles: []string{
                                "accusantium",
                                "ab",
                            },
                            Strategy: &shared.Strategy{
                                Canary: &shared.Canary{
                                    CanaryDeployment: &shared.CanaryDeployment{
                                        Percentages: []int{
                                            697429,
                                            373291,
                                            453543,
                                            420075,
                                        },
                                        Verify: sdk.Bool(false),
                                    },
                                    CustomCanaryDeployment: &shared.CustomCanaryDeployment{
                                        PhaseConfigs: []shared.PhaseConfig{
                                            shared.PhaseConfig{
                                                Percentage: sdk.Int(50588),
                                                PhaseID: sdk.String("pariatur"),
                                                Profiles: []string{
                                                    "voluptatibus",
                                                    "perferendis",
                                                },
                                                Verify: sdk.Bool(false),
                                            },
                                            shared.PhaseConfig{
                                                Percentage: sdk.Int(855804),
                                                PhaseID: sdk.String("amet"),
                                                Profiles: []string{
                                                    "cumque",
                                                },
                                                Verify: sdk.Bool(false),
                                            },
                                            shared.PhaseConfig{
                                                Percentage: sdk.Int(359978),
                                                PhaseID: sdk.String("hic"),
                                                Profiles: []string{
                                                    "nobis",
                                                    "dolores",
                                                    "quis",
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
                                                Deployment: sdk.String("totam"),
                                                HTTPRoute: sdk.String("dignissimos"),
                                                Service: sdk.String("eaque"),
                                            },
                                            ServiceNetworking: &shared.ServiceNetworking{
                                                Deployment: sdk.String("quis"),
                                                Service: sdk.String("nesciunt"),
                                            },
                                        },
                                    },
                                },
                                Standard: &shared.Standard{
                                    Verify: sdk.Bool(false),
                                },
                            },
                            TargetID: sdk.String("eos"),
                        },
                    },
                },
                Suspended: sdk.Bool(false),
            },
            Description: sdk.String("perferendis"),
            Etag: sdk.String("dolores"),
            Labels: map[string]string{
                "quam": "dolor",
                "vero": "nostrum",
                "hic": "recusandae",
                "omnis": "facilis",
            },
            Name: sdk.String("George Sawayn"),
            SkaffoldConfigPath: sdk.String("error"),
            SkaffoldConfigURI: sdk.String("eaque"),
            SkaffoldVersion: sdk.String("occaecati"),
        },
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("earum"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("iste"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        ReleaseID: sdk.String("pariatur"),
        RequestID: sdk.String("provident"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("libero"),
        ValidateOnly: sdk.Bool(false),
    }, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity{
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

## ClouddeployProjectsLocationsDeliveryPipelinesReleasesList

Lists Releases in a given project and location.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesReleasesList(ctx, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("dolorem"),
        Filter: sdk.String("dolorem"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("qui"),
        OrderBy: sdk.String("ipsum"),
        PageSize: sdk.Int64(944373),
        PageToken: sdk.String("excepturi"),
        Parent: "cum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReleasesResponse != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance

Advances a Rollout in a given project and location.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance(ctx, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AdvanceRolloutRequest: &shared.AdvanceRolloutRequest{
            PhaseID: sdk.String("dolorum"),
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("iure"),
        Name: "Bertha Thompson",
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("atque"),
    }, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvanceRolloutResponse != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove

Approves a Rollout.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove(ctx, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ApproveRolloutRequest: &shared.ApproveRolloutRequest{
            Approved: sdk.Bool(false),
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("iusto"),
        Name: "Sonya Leuschke",
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApproveRolloutResponse != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate

Creates a new Rollout in a given project and location.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate(ctx, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RolloutInput: &shared.RolloutInput{
            Annotations: map[string]string{
                "saepe": "eius",
                "aspernatur": "perferendis",
                "amet": "optio",
            },
            Description: sdk.String("accusamus"),
            Etag: sdk.String("ad"),
            Labels: map[string]string{
                "suscipit": "deserunt",
                "provident": "minima",
                "repellendus": "totam",
                "similique": "alias",
            },
            Name: sdk.String("Alex Goodwin"),
            TargetID: sdk.String("officiis"),
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("esse"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("iusto"),
        Parent: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        RequestID: sdk.String("tenetur"),
        RolloutID: sdk.String("amet"),
        StartingPhaseID: sdk.String("tempore"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("numquam"),
        ValidateOnly: sdk.Bool(false),
    }, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity{
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

## ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob

Ignores the specified Job in a Rollout.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob(ctx, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        IgnoreJobRequest: &shared.IgnoreJobRequest{
            JobID: sdk.String("dolorem"),
            PhaseID: sdk.String("sapiente"),
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("neque"),
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        Rollout: "libero",
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IgnoreJobResponse != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList

Lists JobRuns in a given project and location.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList(ctx, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("cupiditate"),
        Filter: sdk.String("maxime"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("soluta"),
        OrderBy: sdk.String("dicta"),
        PageSize: sdk.Int64(674848),
        PageToken: sdk.String("totam"),
        Parent: "incidunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobRunsResponse != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate

Terminates a Job Run in a given project and location.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate(ctx, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "quam": "molestias",
            "temporibus": "qui",
        },
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("odio"),
        Key: sdk.String("sunt"),
        Name: "Miss Candice Weimann",
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminateJobRunResponse != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList

Lists Rollouts in a given project and location.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList(ctx, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("cupiditate"),
        Filter: sdk.String("aperiam"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("dolorem"),
        OrderBy: sdk.String("dolore"),
        PageSize: sdk.Int64(286915),
        PageToken: sdk.String("adipisci"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("aut"),
    }, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRolloutsResponse != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob

Retries the specified Job in a Rollout.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob(ctx, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RetryJobRequest: &shared.RetryJobRequest{
            JobID: sdk.String("itaque"),
            PhaseID: sdk.String("consequatur"),
        },
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        Rollout: "qui",
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetryJobResponse != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsList(ctx, operations.ClouddeployProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("vero"),
        Filter: sdk.String("omnis"),
        Key: sdk.String("quis"),
        Name: "Dixie Klocko",
        OauthToken: sdk.String("tenetur"),
        PageSize: sdk.Int64(492268),
        PageToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("odio"),
    }, operations.ClouddeployProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsOperationsCancel(ctx, operations.ClouddeployProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "vero": "ducimus",
            "dolore": "quibusdam",
            "illum": "sequi",
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("exercitationem"),
        Name: "Louis Sauer",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("alias"),
    }, operations.ClouddeployProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsOperationsList(ctx, operations.ClouddeployProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("aspernatur"),
        Filter: sdk.String("vel"),
        Key: sdk.String("possimus"),
        Name: "Paula Jacobs I",
        OauthToken: sdk.String("maiores"),
        PageSize: sdk.Int64(97844),
        PageToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.ClouddeployProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsTargetsCreate

Creates a new Target in a given project and location.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsTargetsCreate(ctx, operations.ClouddeployProjectsLocationsTargetsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TargetInput: &shared.TargetInput{
            Annotations: map[string]string{
                "quisquam": "saepe",
                "ea": "impedit",
                "corporis": "veniam",
                "aliquid": "inventore",
            },
            AnthosCluster: &shared.AnthosCluster{
                Membership: sdk.String("magnam"),
            },
            Description: sdk.String("ea"),
            Etag: sdk.String("quo"),
            ExecutionConfigs: []shared.ExecutionConfig{
                shared.ExecutionConfig{
                    ArtifactStorage: sdk.String("recusandae"),
                    DefaultPool: &shared.DefaultPool{
                        ArtifactStorage: sdk.String("aspernatur"),
                        ServiceAccount: sdk.String("minima"),
                    },
                    ExecutionTimeout: sdk.String("eaque"),
                    PrivatePool: &shared.PrivatePool{
                        ArtifactStorage: sdk.String("a"),
                        ServiceAccount: sdk.String("libero"),
                        WorkerPool: sdk.String("aut"),
                    },
                    ServiceAccount: sdk.String("aut"),
                    Usages: []shared.ExecutionConfigUsagesEnum{
                        shared.ExecutionConfigUsagesEnumVerify,
                        shared.ExecutionConfigUsagesEnumRender,
                        shared.ExecutionConfigUsagesEnumExecutionEnvironmentUsageUnspecified,
                    },
                    WorkerPool: sdk.String("accusamus"),
                },
            },
            Gke: &shared.GkeCluster{
                Cluster: sdk.String("inventore"),
                InternalIP: sdk.Bool(false),
            },
            Labels: map[string]string{
                "et": "dolorum",
                "laborum": "placeat",
            },
            MultiTarget: &shared.MultiTarget{
                TargetIds: []string{
                    "eum",
                },
            },
            Name: sdk.String("Vicky Lynch"),
            RequireApproval: sdk.Bool(false),
            Run: &shared.CloudRunLocation{
                Location: sdk.String("voluptas"),
            },
        },
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("provident"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        RequestID: sdk.String("magnam"),
        TargetID: sdk.String("odio"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("esse"),
        ValidateOnly: sdk.Bool(false),
    }, operations.ClouddeployProjectsLocationsTargetsCreateSecurity{
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

## ClouddeployProjectsLocationsTargetsDelete

Deletes a single Target.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsTargetsDelete(ctx, operations.ClouddeployProjectsLocationsTargetsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("rem"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Etag: sdk.String("quidem"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("ut"),
        Name: "Yolanda Shields",
        OauthToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        RequestID: sdk.String("ipsa"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("quidem"),
        ValidateOnly: sdk.Bool(false),
    }, operations.ClouddeployProjectsLocationsTargetsDeleteSecurity{
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

## ClouddeployProjectsLocationsTargetsGet

Gets details of a single Target.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsTargetsGet(ctx, operations.ClouddeployProjectsLocationsTargetsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("eius"),
        Name: "Brittany Bernier II",
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.ClouddeployProjectsLocationsTargetsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Target != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsTargetsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsTargetsGetIamPolicy(ctx, operations.ClouddeployProjectsLocationsTargetsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("dignissimos"),
        OptionsRequestedPolicyVersion: sdk.Int64(76956),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        Resource: "totam",
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.ClouddeployProjectsLocationsTargetsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsTargetsList

Lists Targets in a given project and location.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsTargetsList(ctx, operations.ClouddeployProjectsLocationsTargetsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("dolores"),
        Filter: sdk.String("deserunt"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("accusantium"),
        OrderBy: sdk.String("porro"),
        PageSize: sdk.Int64(430402),
        PageToken: sdk.String("quas"),
        Parent: "praesentium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.ClouddeployProjectsLocationsTargetsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTargetsResponse != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsTargetsPatch

Updates the parameters of a single Target.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsTargetsPatch(ctx, operations.ClouddeployProjectsLocationsTargetsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TargetInput: &shared.TargetInput{
            Annotations: map[string]string{
                "incidunt": "atque",
                "explicabo": "minima",
                "nisi": "fugit",
            },
            AnthosCluster: &shared.AnthosCluster{
                Membership: sdk.String("sapiente"),
            },
            Description: sdk.String("consequuntur"),
            Etag: sdk.String("ratione"),
            ExecutionConfigs: []shared.ExecutionConfig{
                shared.ExecutionConfig{
                    ArtifactStorage: sdk.String("saepe"),
                    DefaultPool: &shared.DefaultPool{
                        ArtifactStorage: sdk.String("occaecati"),
                        ServiceAccount: sdk.String("atque"),
                    },
                    ExecutionTimeout: sdk.String("et"),
                    PrivatePool: &shared.PrivatePool{
                        ArtifactStorage: sdk.String("esse"),
                        ServiceAccount: sdk.String("eveniet"),
                        WorkerPool: sdk.String("accusamus"),
                    },
                    ServiceAccount: sdk.String("veritatis"),
                    Usages: []shared.ExecutionConfigUsagesEnum{
                        shared.ExecutionConfigUsagesEnumVerify,
                        shared.ExecutionConfigUsagesEnumDeploy,
                    },
                    WorkerPool: sdk.String("vero"),
                },
            },
            Gke: &shared.GkeCluster{
                Cluster: sdk.String("aliquid"),
                InternalIP: sdk.Bool(false),
            },
            Labels: map[string]string{
                "saepe": "vel",
            },
            MultiTarget: &shared.MultiTarget{
                TargetIds: []string{
                    "molestiae",
                    "rerum",
                    "occaecati",
                },
            },
            Name: sdk.String("Miss Verna Roob"),
            RequireApproval: sdk.Bool(false),
            Run: &shared.CloudRunLocation{
                Location: sdk.String("adipisci"),
            },
        },
        AccessToken: sdk.String("cumque"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequatur"),
        Fields: sdk.String("minus"),
        Key: sdk.String("quaerat"),
        Name: "Glenn Koch",
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        RequestID: sdk.String("quas"),
        UpdateMask: sdk.String("esse"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("a"),
        ValidateOnly: sdk.Bool(false),
    }, operations.ClouddeployProjectsLocationsTargetsPatchSecurity{
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

## ClouddeployProjectsLocationsTargetsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsTargetsSetIamPolicy(ctx, operations.ClouddeployProjectsLocationsTargetsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quia",
                                    "eveniet",
                                    "asperiores",
                                    "facere",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quasi",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "aliquid",
                                    "tenetur",
                                    "quae",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "in",
                                    "eius",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("illum"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "aliquam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ullam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "nisi",
                                    "aut",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("qui"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "deleniti",
                                    "itaque",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "omnis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "at",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ipsa",
                                    "minima",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("consectetur"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("iste"),
                            Expression: sdk.String("temporibus"),
                            Location: sdk.String("accusantium"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "laudantium",
                        },
                        Role: sdk.String("eum"),
                    },
                },
                Etag: sdk.String("mollitia"),
                Version: sdk.Int(68074),
            },
            UpdateMask: sdk.String("corrupti"),
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        Resource: "voluptas",
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.ClouddeployProjectsLocationsTargetsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## ClouddeployProjectsLocationsTargetsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

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
    res, err := s.Projects.ClouddeployProjectsLocationsTargetsTestIamPermissions(ctx, operations.ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "natus",
                "velit",
                "voluptatibus",
                "voluptas",
            },
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        Resource: "maxime",
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("officia"),
    }, operations.ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```
