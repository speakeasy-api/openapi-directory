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
    
    req := operations.AccessapprovalProjectsApprovalRequestsApproveRequest{
        Security: operations.AccessapprovalProjectsApprovalRequestsApproveSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AccessapprovalProjectsApprovalRequestsApprovePathParams{
            Name: "ab",
        },
        QueryParams: operations.AccessapprovalProjectsApprovalRequestsApproveQueryParams{
            DollarXgafv: "2",
            AccessToken: "rerum",
            Alt: "json",
            Callback: "doloremque",
            Fields: "pariatur",
            Key: "facilis",
            OauthToken: "consequatur",
            PrettyPrint: false,
            QuotaUser: "aut",
            UploadType: "illum",
            UploadProtocol: "rerum",
        },
        Request: &shared.ApproveApprovalRequestMessage{
            ExpireTime: "nobis",
        },
    }
    
    res, err := s.Projects.AccessapprovalProjectsApprovalRequestsApprove(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ApprovalRequest != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->