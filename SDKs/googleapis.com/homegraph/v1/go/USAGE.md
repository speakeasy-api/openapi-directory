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
            AgentUserID: "voluptatem",
        },
        QueryParams: operations.HomegraphAgentUsersDeleteQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptatum",
            Alt: "json",
            Callback: "ut",
            Fields: "consectetur",
            Key: "minima",
            OauthToken: "laudantium",
            PrettyPrint: false,
            QuotaUser: "aut",
            RequestID: "amet",
            UploadType: "rerum",
            UploadProtocol: "reprehenderit",
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