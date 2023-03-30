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
                                            PhaseID: "dolor",
                                            Profiles: []string{
                                                "sed",
                                                "quisquam",
                                                "rerum",
                                            },
                                            Verify: false,
                                        },
                                        shared.PhaseConfig{
                                            Percentage: 582020,
                                            PhaseID: "qui",
                                            Profiles: []string{
                                                "rerum",
                                                "possimus",
                                                "occaecati",
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
                                            Deployment: "odit",
                                            HTTPRoute: "esse",
                                            Service: "rem",
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: "voluptatem",
                                            Service: "amet",
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "est",
                    },
                    shared.Stage{
                        Profiles: []string{
                            "blanditiis",
                            "numquam",
                            "similique",
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
                                            PhaseID: "voluptatem",
                                            Profiles: []string{
                                                "modi",
                                                "et",
                                                "iure",
                                            },
                                            Verify: false,
                                        },
                                        shared.PhaseConfig{
                                            Percentage: 943749,
                                            PhaseID: "ut",
                                            Profiles: []string{
                                                "qui",
                                                "ea",
                                                "laborum",
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
                                            Deployment: "iusto",
                                            HTTPRoute: "ut",
                                            Service: "optio",
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: "aspernatur",
                                            Service: "inventore",
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "ut",
                    },
                    shared.Stage{
                        Profiles: []string{
                            "et",
                            "libero",
                            "ipsum",
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
                                            PhaseID: "ipsam",
                                            Profiles: []string{
                                                "commodi",
                                                "quia",
                                                "similique",
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
                                            Deployment: "eaque",
                                            HTTPRoute: "odio",
                                            Service: "harum",
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: "doloribus",
                                            Service: "a",
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
                    shared.Stage{
                        Profiles: []string{
                            "non",
                            "quidem",
                            "neque",
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
                                            PhaseID: "et",
                                            Profiles: []string{
                                                "nesciunt",
                                                "laboriosam",
                                                "aut",
                                            },
                                            Verify: false,
                                        },
                                        shared.PhaseConfig{
                                            Percentage: 674752,
                                            PhaseID: "expedita",
                                            Profiles: []string{
                                                "eos",
                                                "omnis",
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
                                            Deployment: "adipisci",
                                            HTTPRoute: "hic",
                                            Service: "consequatur",
                                        },
                                        ServiceNetworking: &shared.ServiceNetworking{
                                            Deployment: "distinctio",
                                            Service: "qui",
                                        },
                                    },
                                },
                            },
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "perferendis",
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