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
    
    req := operations.ReplicapoolPoolsDeleteRequest{
        Security: operations.ReplicapoolPoolsDeleteSecurity{
            Option1: &operations.ReplicapoolPoolsDeleteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.ReplicapoolPoolsDeletePathParams{
            PoolName: "error",
            ProjectName: "sint",
            Zone: "commodi",
        },
        QueryParams: operations.ReplicapoolPoolsDeleteQueryParams{
            Alt: "json",
            Fields: "et",
            Key: "veniam",
            OauthToken: "necessitatibus",
            PrettyPrint: true,
            QuotaUser: "sed",
            UserIP: "nihil",
        },
        Request: &shared.PoolsDeleteRequest{
            AbandonInstances: []string{
                "qui",
            },
        },
    }
    
    res, err := s.Pools.ReplicapoolPoolsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->