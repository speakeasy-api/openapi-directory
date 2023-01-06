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
    
    req := operations.JobsProjectsClientEventsCreateRequest{
        Security: operations.JobsProjectsClientEventsCreateSecurity{
            Option1: &operations.JobsProjectsClientEventsCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.JobsProjectsClientEventsCreatePathParams{
            Parent: "voluptatem",
        },
        QueryParams: operations.JobsProjectsClientEventsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "quo",
            Alt: "proto",
            Callback: "eum",
            Fields: "veniam",
            Key: "hic",
            OauthToken: "id",
            PrettyPrint: true,
            QuotaUser: "exercitationem",
            UploadType: "architecto",
            UploadProtocol: "suscipit",
        },
        Request: &shared.CreateClientEventRequest{
            ClientEvent: &shared.ClientEvent{
                CreateTime: "dolores",
                EventID: "dolores",
                ExtraInfo: map[string]string{
                    "non": "facilis",
                },
                JobEvent: &shared.JobEvent{
                    Jobs: []string{
                        "accusantium",
                        "nihil",
                    },
                    Type: "VIEW",
                },
                ParentEventID: "velit",
                RequestID: "libero",
            },
        },
    }
    
    res, err := s.Projects.JobsProjectsClientEventsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientEvent != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->