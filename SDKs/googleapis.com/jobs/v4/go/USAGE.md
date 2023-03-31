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
        DollarXgafv: "2",
        ClientEvent: &shared.ClientEvent{
            CreateTime: "provident",
            EventID: "distinctio",
            EventNotes: "quibusdam",
            JobEvent: &shared.JobEvent{
                Jobs: []string{
                    "nulla",
                    "corrupti",
                    "illum",
                },
                Type: "APPLICATION_QUICK_SUBMISSION",
            },
            RequestID: "error",
        },
        AccessToken: "deserunt",
        Alt: "media",
        Callback: "iure",
        Fields: "magnam",
        Key: "debitis",
        OauthToken: "ipsa",
        Parent: "delectus",
        PrettyPrint: false,
        QuotaUser: "tempora",
        UploadType: "suscipit",
        UploadProtocol: "molestiae",
    }

    ctx := context.Background()
    res, err := s.Projects.JobsProjectsTenantsClientEventsCreate(ctx, req, operations.JobsProjectsTenantsClientEventsCreateSecurity{
        Option1: &operations.JobsProjectsTenantsClientEventsCreateSecurityOption1{
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