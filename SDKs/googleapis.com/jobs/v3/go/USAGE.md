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
            Parent: "aut",
        },
        QueryParams: operations.JobsProjectsClientEventsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "ipsam",
            Alt: "media",
            Callback: "similique",
            Fields: "est",
            Key: "optio",
            OauthToken: "dolor",
            PrettyPrint: true,
            QuotaUser: "dolore",
            UploadType: "itaque",
            UploadProtocol: "hic",
        },
        Request: &shared.CreateClientEventRequest{
            ClientEvent: &shared.ClientEvent{
                CreateTime: "velit",
                EventID: "ad",
                ExtraInfo: map[string]string{
                    "sit": "similique",
                    "reprehenderit": "vero",
                },
                JobEvent: &shared.JobEvent{
                    Jobs: []string{
                        "tempora",
                        "harum",
                        "aut",
                    },
                    Type: "APPLICATION_START_FROM_SEARCH",
                },
                ParentEventID: "mollitia",
                RequestID: "et",
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