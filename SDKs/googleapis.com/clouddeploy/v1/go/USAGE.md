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