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
        DollarXgafv: "2",
        CreateClientEventRequest: &shared.CreateClientEventRequest{
            ClientEvent: &shared.ClientEvent{
                CreateTime: "provident",
                EventID: "distinctio",
                ExtraInfo: map[string]string{
                    "unde": "nulla",
                    "corrupti": "illum",
                    "vel": "error",
                    "deserunt": "suscipit",
                },
                JobEvent: &shared.JobEvent{
                    Jobs: []string{
                        "magnam",
                        "debitis",
                    },
                    Type: "JOB_EVENT_TYPE_UNSPECIFIED",
                },
                ParentEventID: "delectus",
                RequestID: "tempora",
            },
        },
        AccessToken: "suscipit",
        Alt: "media",
        Callback: "minus",
        Fields: "placeat",
        Key: "voluptatum",
        OauthToken: "iusto",
        Parent: "excepturi",
        PrettyPrint: false,
        QuotaUser: "nisi",
        UploadType: "recusandae",
        UploadProtocol: "temporibus",
    }

    ctx := context.Background()
    res, err := s.Projects.JobsProjectsClientEventsCreate(ctx, req, operations.JobsProjectsClientEventsCreateSecurity{
        Option1: &operations.JobsProjectsClientEventsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientEvent != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->