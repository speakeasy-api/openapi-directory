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