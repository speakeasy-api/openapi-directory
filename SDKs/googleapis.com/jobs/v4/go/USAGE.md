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
            Parent: "sit",
        },
        QueryParams: operations.JobsProjectsTenantsClientEventsCreateQueryParams{
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
        Request: &shared.ClientEvent{
            CreateTime: "dicta",
            EventID: "debitis",
            EventNotes: "voluptatum",
            JobEvent: &shared.JobEvent{
                Jobs: []string{
                    "ut",
                },
                Type: "VIEW",
            },
            RequestID: "et",
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