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
            Parent: "sed",
        },
        QueryParams: operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "non",
            Alt: "json",
            Callback: "et",
            DeliveryPipelineID: "recusandae",
            Fields: "fugiat",
            Key: "consequatur",
            OauthToken: "pariatur",
            PrettyPrint: false,
            QuotaUser: "voluptas",
            RequestID: "non",
            UploadType: "minima",
            UploadProtocol: "nihil",
            ValidateOnly: false,
        },
        Request: &shared.DeliveryPipelineInput{
            Annotations: map[string]string{
                "ipsum": "cum",
                "similique": "minima",
            },
            Condition: &shared.PipelineCondition{
                PipelineReadyCondition: &shared.PipelineReadyCondition{
                    Status: true,
                    UpdateTime: "ut",
                },
                TargetsPresentCondition: &shared.TargetsPresentCondition{
                    MissingTargets: []string{
                        "asperiores",
                        "natus",
                    },
                    Status: false,
                    UpdateTime: "harum",
                },
            },
            Description: "voluptatem",
            Etag: "nesciunt",
            Labels: map[string]string{
                "ut": "quo",
                "commodi": "id",
                "officiis": "nulla",
            },
            Name: "aut",
            SerialPipeline: &shared.SerialPipeline{
                Stages: []shared.Stage{
                    shared.Stage{
                        Profiles: []string{
                            "dolores",
                        },
                        Strategy: &shared.Strategy{
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "delectus",
                    },
                    shared.Stage{
                        Profiles: []string{
                            "non",
                        },
                        Strategy: &shared.Strategy{
                            Standard: &shared.Standard{
                                Verify: false,
                            },
                        },
                        TargetID: "ut",
                    },
                },
            },
            Suspended: false,
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