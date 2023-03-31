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
        DollarXgafv: "2",
        TraceSinkInput: &shared.TraceSinkInput{
            Name: "provident",
            OutputConfig: &shared.OutputConfig{
                Destination: "distinctio",
            },
        },
        AccessToken: "quibusdam",
        Alt: "media",
        Callback: "nulla",
        Fields: "corrupti",
        Key: "illum",
        OauthToken: "vel",
        Parent: "error",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.Projects.CloudtraceProjectsTraceSinksCreate(ctx, req, operations.CloudtraceProjectsTraceSinksCreateSecurity{
        Option1: &operations.CloudtraceProjectsTraceSinksCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TraceSink != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->