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
            AccessToken: "ea",
            Alt: "json",
            Callback: "voluptatem",
            Fields: "sed",
            Key: "sint",
            OauthToken: "nulla",
            OnBehalfOfContentOwner: "facilis",
            PrettyPrint: true,
            QuotaUser: "impedit",
            UploadType: "doloremque",
            UploadProtocol: "sint",
        },
        Request: &shared.Job{
            CreateTime: "similique",
            ExpireTime: "saepe",
            ID: "vel",
            Name: "excepturi",
            ReportTypeID: "molestias",
            SystemManaged: true,
        },
    }
    
    res, err := s.Jobs.YoutubereportingJobsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->