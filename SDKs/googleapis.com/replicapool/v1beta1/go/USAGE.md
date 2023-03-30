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
            PoolName: "corrupti",
            ProjectName: "provident",
            Zone: "distinctio",
        },
        QueryParams: operations.ReplicapoolPoolsDeleteQueryParams{
            Alt: "json",
            Fields: "quibusdam",
            Key: "unde",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "corrupti",
            UserIP: "illum",
        },
        Request: &shared.PoolsDeleteRequest{
            AbandonInstances: []string{
                "error",
                "deserunt",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Pools.ReplicapoolPoolsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->