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
            Name: "sit",
        },
        QueryParams: operations.AccessapprovalProjectsApprovalRequestsApproveQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.ApproveApprovalRequestMessage{
            ExpireTime: "dicta",
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