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
            PoolName: "in",
            ProjectName: "in",
            Zone: "vel",
        },
        QueryParams: operations.ReplicapoolPoolsDeleteQueryParams{
            Alt: "json",
            Fields: "quaerat",
            Key: "dolor",
            OauthToken: "eos",
            PrettyPrint: true,
            QuotaUser: "recusandae",
            UserIP: "est",
        },
        Request: &shared.PoolsDeleteRequest{
            AbandonInstances: []string{
                "esse",
                "deserunt",
                "non",
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