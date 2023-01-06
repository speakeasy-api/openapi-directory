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
            DollarXgafv: "1",
            AccessToken: "incidunt",
            Alt: "proto",
            Callback: "laudantium",
            Fields: "explicabo",
            Key: "natus",
            OauthToken: "eligendi",
            OnBehalfOfContentOwner: "quis",
            PrettyPrint: false,
            QuotaUser: "neque",
            UploadType: "cupiditate",
            UploadProtocol: "mollitia",
        },
        Request: &shared.Job{
            CreateTime: "minus",
            ExpireTime: "excepturi",
            ID: "dolor",
            Name: "iusto",
            ReportTypeID: "in",
            SystemManaged: false,
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