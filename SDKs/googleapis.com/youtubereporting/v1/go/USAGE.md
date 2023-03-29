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
        Security: operations.YoutubereportingJobsCreateSecurity{
            Option1: &operations.YoutubereportingJobsCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.YoutubereportingJobsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            OnBehalfOfContentOwner: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.Job{
            CreateTime: "eum",
            ExpireTime: "iusto",
            ID: "ullam",
            Name: "saepe",
            ReportTypeID: "inventore",
            SystemManaged: false,
        },
    }

    ctx := context.Background()
    res, err := s.Jobs.YoutubereportingJobsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->