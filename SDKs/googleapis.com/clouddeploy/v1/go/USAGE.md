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
            Parent: "sit",
        },
        QueryParams: operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            DeliveryPipelineID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            RequestID: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
            ValidateOnly: true,
        },
        Request: &shared.DeliveryPipelineInput{
            Annotations: map[string]string{
                "ut": "dolorem",
            },
            Condition: &shared.PipelineCondition{
                PipelineReadyCondition: &shared.PipelineReadyCondition{
                    Status: false,
                    UpdateTime: "voluptate",
                },
                TargetsPresentCondition: &shared.TargetsPresentCondition{
                    MissingTargets: []string{
                        "vitae",
                        "totam",
                        "dolores",
                    },
                    Status: false,
                    UpdateTime: "debitis",
                },
                TargetsTypeCondition: &shared.TargetsTypeCondition{
                    ErrorDetails: "vel",
                    Status: false,
                },
            },
            Description: "dolore",
            Etag: "id",
            Labels: map[string]string{
                "accusantium": "totam",
            },
            Name: "commodi",
            SerialPipeline: &shared.SerialPipeline{
                Stages: []shared.Stage{
                    shared.Stage{
                        Profiles: []string{
                            "aut",
                            "odit",
                        },
                        Strategy: &shared.Strategy{
                            Standard: &shared.Standard{
                                Verify: true,
                            },
                        },
                        TargetID: "voluptas",
                    },
                    shared.Stage{
                        Profiles: []string{
                            "aut",
                            "illo",
                        },
                        Strategy: &shared.Strategy{
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "officiis",
                    },
                    shared.Stage{
                        Profiles: []string{
                            "consectetur",
                            "nobis",
                        },
                        Strategy: &shared.Strategy{
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "qui",
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