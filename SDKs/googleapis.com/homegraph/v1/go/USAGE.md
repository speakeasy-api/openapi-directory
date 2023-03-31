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

    req := operations.HomegraphAgentUsersDeleteRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        AgentUserID: "distinctio",
        Alt: "proto",
        Callback: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        RequestID: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.AgentUsers.HomegraphAgentUsersDelete(ctx, req, operations.HomegraphAgentUsersDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->