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
            Parent: "amet",
        },
        QueryParams: operations.JobsProjectsTenantsClientEventsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "adipisci",
            Alt: "media",
            Callback: "sit",
            Fields: "suscipit",
            Key: "aliquam",
            OauthToken: "nobis",
            PrettyPrint: true,
            QuotaUser: "eum",
            UploadType: "consequatur",
            UploadProtocol: "perspiciatis",
        },
        Request: &shared.ClientEvent{
            CreateTime: "hic",
            EventID: "facilis",
            EventNotes: "molestiae",
            JobEvent: &shared.JobEvent{
                Jobs: []string{
                    "molestiae",
                },
                Type: "SENT_CV",
            },
            RequestID: "error",
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