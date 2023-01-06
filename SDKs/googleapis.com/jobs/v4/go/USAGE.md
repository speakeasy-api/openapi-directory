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
    
    req := operations.JobsProjectsTenantsClientEventsCreateRequest{
        Security: operations.JobsProjectsTenantsClientEventsCreateSecurity{
            Option1: &operations.JobsProjectsTenantsClientEventsCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.JobsProjectsTenantsClientEventsCreatePathParams{
            Parent: "est",
        },
        QueryParams: operations.JobsProjectsTenantsClientEventsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "eius",
            Alt: "proto",
            Callback: "non",
            Fields: "et",
            Key: "sit",
            OauthToken: "qui",
            PrettyPrint: true,
            QuotaUser: "soluta",
            UploadType: "voluptatum",
            UploadProtocol: "non",
        },
        Request: &shared.ClientEvent{
            CreateTime: "delectus",
            EventID: "accusamus",
            EventNotes: "suscipit",
            JobEvent: &shared.JobEvent{
                Jobs: []string{
                    "dolores",
                },
                Type: "INTERVIEW_GRANTED",
            },
            RequestID: "quibusdam",
        },
    }
    
    res, err := s.Projects.JobsProjectsTenantsClientEventsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientEvent != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->