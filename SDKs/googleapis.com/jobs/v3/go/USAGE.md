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
            Parent: "commodi",
        },
        QueryParams: operations.JobsProjectsClientEventsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "et",
            Alt: "proto",
            Callback: "eaque",
            Fields: "dolores",
            Key: "voluptatem",
            OauthToken: "sed",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "enim",
            UploadProtocol: "sunt",
        },
        Request: &shared.CreateClientEventRequest{
            ClientEvent: &shared.ClientEvent{
                CreateTime: "vero",
                EventID: "nisi",
                ExtraInfo: map[string]string{
                    "qui": "consequatur",
                },
                JobEvent: &shared.JobEvent{
                    Jobs: []string{
                        "veritatis",
                    },
                    Type: "APPLICATION_REDIRECT",
                },
                ParentEventID: "fugiat",
                RequestID: "dolor",
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