<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
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
            Parent: "unde",
        },
        QueryParams: operations.JobsProjectsTenantsClientEventsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.ClientEvent{
            CreateTime: "eum",
            EventID: "iusto",
            EventNotes: "ullam",
            JobEvent: &shared.JobEvent{
                Jobs: []string{
                    "inventore",
                    "sapiente",
                    "enim",
                    "eum",
                },
                Type: "APPLICATION_REDIRECT",
            },
            RequestID: "autem",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.JobsProjectsTenantsClientEventsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientEvent != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->