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
    
    req := operations.HomegraphAgentUsersDeleteRequest{
        Security: operations.HomegraphAgentUsersDeleteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.HomegraphAgentUsersDeletePathParams{
            AgentUserID: "aut",
        },
        QueryParams: operations.HomegraphAgentUsersDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "harum",
            Alt: "media",
            Callback: "et",
            Fields: "ut",
            Key: "facilis",
            OauthToken: "molestiae",
            PrettyPrint: false,
            QuotaUser: "porro",
            RequestID: "aut",
            UploadType: "enim",
            UploadProtocol: "iusto",
        },
    }
    
    res, err := s.AgentUsers.HomegraphAgentUsersDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->