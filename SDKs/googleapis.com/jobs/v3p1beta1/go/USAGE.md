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
            Parent: "sit",
        },
        QueryParams: operations.JobsProjectsClientEventsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.CreateClientEventRequest{
            ClientEvent: &shared.ClientEvent{
                CreateTime: "dicta",
                EventID: "debitis",
                ExtraInfo: map[string]string{
                    "et": "ut",
                },
                JobEvent: &shared.JobEvent{
                    Jobs: []string{
                        "et",
                        "voluptate",
                        "iste",
                    },
                    Type: "APPLICATION_COMPANY_SUBMIT",
                },
                ParentEventID: "totam",
                RequestID: "dolores",
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