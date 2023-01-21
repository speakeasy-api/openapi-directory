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
            PoolName: "sit",
            ProjectName: "voluptas",
            Zone: "culpa",
        },
        QueryParams: operations.ReplicapoolPoolsDeleteQueryParams{
            Alt: "json",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UserIP: "et",
        },
        Request: &shared.PoolsDeleteRequest{
            AbandonInstances: []string{
                "rerum",
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