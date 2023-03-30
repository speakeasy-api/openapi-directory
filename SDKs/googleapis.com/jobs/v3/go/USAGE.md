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
            Parent: "corrupti",
        },
        QueryParams: operations.JobsProjectsClientEventsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.CreateClientEventRequest{
            ClientEvent: &shared.ClientEvent{
                CreateTime: "suscipit",
                EventID: "iure",
                ExtraInfo: map[string]string{
                    "debitis": "ipsa",
                    "delectus": "tempora",
                },
                JobEvent: &shared.JobEvent{
                    Jobs: []string{
                        "molestiae",
                        "minus",
                    },
                    Type: "HIRED",
                },
                ParentEventID: "voluptatum",
                RequestID: "iusto",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.JobsProjectsClientEventsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientEvent != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->