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

    req := operations.YoutubereportingJobsCreateRequest{
        DollarXgafv: "2",
        Job: &shared.Job{
            CreateTime: "provident",
            ExpireTime: "distinctio",
            ID: "quibusdam",
            Name: "unde",
            ReportTypeID: "nulla",
            SystemManaged: false,
        },
        AccessToken: "corrupti",
        Alt: "proto",
        Callback: "vel",
        Fields: "error",
        Key: "deserunt",
        OauthToken: "suscipit",
        OnBehalfOfContentOwner: "iure",
        PrettyPrint: false,
        QuotaUser: "magnam",
        UploadType: "debitis",
        UploadProtocol: "ipsa",
    }

    ctx := context.Background()
    res, err := s.Jobs.YoutubereportingJobsCreate(ctx, req, operations.YoutubereportingJobsCreateSecurity{
        Option1: &operations.YoutubereportingJobsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->