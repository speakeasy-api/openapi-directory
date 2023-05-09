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