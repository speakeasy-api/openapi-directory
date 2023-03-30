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

    req := operations.CloudtraceProjectsTraceSinksCreateRequest{
        Security: operations.CloudtraceProjectsTraceSinksCreateSecurity{
            Option1: &operations.CloudtraceProjectsTraceSinksCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.CloudtraceProjectsTraceSinksCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.CloudtraceProjectsTraceSinksCreateQueryParams{
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
        Request: &shared.TraceSinkInput{
            Name: "suscipit",
            OutputConfig: &shared.OutputConfig{
                Destination: "iure",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.CloudtraceProjectsTraceSinksCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TraceSink != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->