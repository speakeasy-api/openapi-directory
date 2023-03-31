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
        PoolsDeleteRequest: &shared.PoolsDeleteRequest{
            AbandonInstances: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        Alt: "json",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PoolName: "illum",
        PrettyPrint: false,
        ProjectName: "vel",
        QuotaUser: "error",
        UserIP: "deserunt",
        Zone: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Pools.ReplicapoolPoolsDelete(ctx, req, operations.ReplicapoolPoolsDeleteSecurity{
        Option1: &operations.ReplicapoolPoolsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->