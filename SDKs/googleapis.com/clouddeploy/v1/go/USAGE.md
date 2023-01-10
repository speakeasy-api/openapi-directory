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
            Parent: "in",
        },
        QueryParams: operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "rerum",
            Alt: "proto",
            Callback: "vero",
            DeliveryPipelineID: "et",
            Fields: "dolor",
            Key: "quibusdam",
            OauthToken: "sit",
            PrettyPrint: true,
            QuotaUser: "eum",
            RequestID: "natus",
            UploadType: "ipsa",
            UploadProtocol: "et",
            ValidateOnly: false,
        },
        Request: &shared.DeliveryPipelineInput{
            Annotations: map[string]string{
                "sapiente": "iure",
            },
            Condition: &shared.PipelineCondition{
                PipelineReadyCondition: &shared.PipelineReadyCondition{
                    Status: true,
                    UpdateTime: "omnis",
                },
                TargetsPresentCondition: &shared.TargetsPresentCondition{
                    MissingTargets: []string{
                        "fugit",
                    },
                    Status: true,
                    UpdateTime: "inventore",
                },
            },
            Description: "a",
            Etag: "laboriosam",
            Labels: map[string]string{
                "voluptates": "laborum",
                "eligendi": "est",
            },
            Name: "inventore",
            SerialPipeline: &shared.SerialPipeline{
                Stages: []shared.Stage{
                    shared.Stage{
                        Profiles: []string{
                            "sapiente",
                        },
                        Strategy: &shared.Strategy{
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "aliquam",
                    },
                    shared.Stage{
                        Profiles: []string{
                            "dolores",
                            "vel",
                            "cumque",
                        },
                        Strategy: &shared.Strategy{
                            Standard: &shared.Standard{
                                Verify: true,
                            },
                        },
                        TargetID: "nihil",
                    },
                },
            },
            Suspended: true,
        },
    }
    
    res, err := s.Projects.ClouddeployProjectsLocationsDeliveryPipelinesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->