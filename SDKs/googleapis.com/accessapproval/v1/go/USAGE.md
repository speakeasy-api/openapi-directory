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

    req := operations.AccessapprovalProjectsApprovalRequestsApproveRequest{
        DollarXgafv: "2",
        ApproveApprovalRequestMessage: &shared.ApproveApprovalRequestMessage{
            ExpireTime: "provident",
        },
        AccessToken: "distinctio",
        Alt: "proto",
        Callback: "unde",
        Fields: "nulla",
        Key: "corrupti",
        Name: "illum",
        OauthToken: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Projects.AccessapprovalProjectsApprovalRequestsApprove(ctx, req, operations.AccessapprovalProjectsApprovalRequestsApproveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApprovalRequest != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->