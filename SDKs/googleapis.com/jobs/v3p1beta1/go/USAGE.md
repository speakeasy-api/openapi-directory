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
            Parent: "unde",
        },
        QueryParams: operations.JobsProjectsClientEventsCreateQueryParams{
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
        Request: &shared.CreateClientEventRequest{
            ClientEvent: &shared.ClientEvent{
                CreateTime: "eum",
                EventID: "iusto",
                ExtraInfo: map[string]string{
                    "saepe": "inventore",
                    "sapiente": "enim",
                },
                JobEvent: &shared.JobEvent{
                    Jobs: []string{
                        "voluptatum",
                        "autem",
                    },
                    Type: "HIRED",
                },
                ParentEventID: "non",
                RequestID: "deleniti",
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