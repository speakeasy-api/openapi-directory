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
            Parent: "corrupti",
        },
        QueryParams: operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            DeliveryPipelineID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            RequestID: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
            ValidateOnly: false,
        },
        Request: &shared.DeliveryPipelineInput{
            Annotations: map[string]string{
                "debitis": "ipsa",
                "delectus": "tempora",
            },
            Condition: &shared.PipelineCondition{
                PipelineReadyCondition: &shared.PipelineReadyCondition{
                    Status: false,
                    UpdateTime: "suscipit",
                },
                TargetsPresentCondition: &shared.TargetsPresentCondition{
                    MissingTargets: []string{
                        "minus",
                        "placeat",
                    },
                    Status: false,
                    UpdateTime: "voluptatum",
                },
                TargetsTypeCondition: &shared.TargetsTypeCondition{
                    ErrorDetails: "iusto",
                    Status: false,
                },
            },
            Description: "excepturi",
            Etag: "nisi",
            Labels: map[string]string{
                "temporibus": "ab",
                "quis": "veritatis",
                "deserunt": "perferendis",
                "ipsam": "repellendus",
            },
            Name: "sapiente",
            SerialPipeline: &shared.SerialPipeline{
                Stages: []shared.Stage{
                    shared.Stage{
                        Profiles: []string{
                            "at",
                        },
                        Strategy: &shared.Strategy{
                            Canary: &shared.Canary{
                                CanaryDeployment: &shared.CanaryDeployment{
                                    Percentages: []int{
                                        978619,
                                        473608,
                                        799159,
                                        800911,
                                    },
                                    Verify: false,
                                },
                                CustomCanaryDeployment: &shared.CustomCanaryDeployment{
                                    PhaseConfigs: []shared.PhaseConfig{
                                        shared.PhaseConfig{
                                            Percentage: 520478,
                                            PhaseID: "porro",
                                            Profiles: []string{
                                                "dicta",
                                                "nam",
                                                "officia",
                                            },
                                            Verify: false,
                                        },
                                        shared.PhaseConfig{
                                            Percentage: 582020,
                                            PhaseID: "fugit",
                                            Profiles: []string{
                                                "hic",
                                                "optio",
                                                "totam",
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
                                            Deployment: "beatae",
                                            HTTPRoute: "commodi",
                                            Service: "molestiae",
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: "modi",
                                            Service: "qui",
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "impedit",
                    },
                    shared.Stage{
                        Profiles: []string{
                            "esse",
                            "ipsum",
                            "excepturi",
                        },
                        Strategy: &shared.Strategy{
                            Canary: &shared.Canary{
                                CanaryDeployment: &shared.CanaryDeployment{
                                    Percentages: []int{
                                        18789,
                                    },
                                    Verify: false,
                                },
                                CustomCanaryDeployment: &shared.CustomCanaryDeployment{
                                    PhaseConfigs: []shared.PhaseConfig{
                                        shared.PhaseConfig{
                                            Percentage: 617636,
                                            PhaseID: "sed",
                                            Profiles: []string{
                                                "dolor",
                                                "natus",
                                                "laboriosam",
                                            },
                                            Verify: false,
                                        },
                                        shared.PhaseConfig{
                                            Percentage: 943749,
                                            PhaseID: "saepe",
                                            Profiles: []string{
                                                "in",
                                                "corporis",
                                                "iste",
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
                                            Deployment: "iure",
                                            HTTPRoute: "saepe",
                                            Service: "quidem",
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: "architecto",
                                            Service: "ipsa",
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "reiciendis",
                    },
                    shared.Stage{
                        Profiles: []string{
                            "mollitia",
                            "laborum",
                            "dolores",
                        },
                        Strategy: &shared.Strategy{
                            Canary: &shared.Canary{
                                CanaryDeployment: &shared.CanaryDeployment{
                                    Percentages: []int{
                                        358152,
                                    },
                                    Verify: false,
                                },
                                CustomCanaryDeployment: &shared.CustomCanaryDeployment{
                                    PhaseConfigs: []shared.PhaseConfig{
                                        shared.PhaseConfig{
                                            Percentage: 750686,
                                            PhaseID: "enim",
                                            Profiles: []string{
                                                "nemo",
                                                "minima",
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
                                            Deployment: "accusantium",
                                            HTTPRoute: "iure",
                                            Service: "culpa",
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: "doloribus",
                                            Service: "sapiente",
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "architecto",
                    },
                    shared.Stage{
                        Profiles: []string{
                            "dolorem",
                            "culpa",
                            "consequuntur",
                        },
                        Strategy: &shared.Strategy{
                            Canary: &shared.Canary{
                                CanaryDeployment: &shared.CanaryDeployment{
                                    Percentages: []int{
                                        653108,
                                        581850,
                                        253291,
                                        414369,
                                    },
                                    Verify: false,
                                },
                                CustomCanaryDeployment: &shared.CustomCanaryDeployment{
                                    PhaseConfigs: []shared.PhaseConfig{
                                        shared.PhaseConfig{
                                            Percentage: 474697,
                                            PhaseID: "velit",
                                            Profiles: []string{
                                                "quia",
                                                "quis",
                                                "vitae",
                                            },
                                            Verify: false,
                                        },
                                        shared.PhaseConfig{
                                            Percentage: 674752,
                                            PhaseID: "animi",
                                            Profiles: []string{
                                                "odit",
                                                "quo",
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
                                            Deployment: "sequi",
                                            HTTPRoute: "tenetur",
                                            Service: "ipsam",
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: "id",
                                            Service: "possimus",
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "aut",
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