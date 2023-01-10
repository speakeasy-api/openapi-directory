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
            Parent: "eveniet",
        },
        QueryParams: operations.JobsProjectsClientEventsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "ut",
            Alt: "json",
            Callback: "deserunt",
            Fields: "ut",
            Key: "provident",
            OauthToken: "alias",
            PrettyPrint: true,
            QuotaUser: "atque",
            UploadType: "dolore",
            UploadProtocol: "voluptatem",
        },
        Request: &shared.CreateClientEventRequest{
            ClientEvent: &shared.ClientEvent{
                CreateTime: "est",
                EventID: "quo",
                ExtraInfo: map[string]string{
                    "accusantium": "tempora",
                    "voluptatibus": "corporis",
                    "ex": "voluptatem",
                },
                JobEvent: &shared.JobEvent{
                    Jobs: []string{
                        "dolorem",
                        "qui",
                    },
                    Type: "APPLICATION_COMPANY_SUBMIT",
                },
                ParentEventID: "consequatur",
                RequestID: "quaerat",
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