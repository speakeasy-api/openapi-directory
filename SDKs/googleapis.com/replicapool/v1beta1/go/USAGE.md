<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Pools.ReplicapoolPoolsDelete(ctx, operations.ReplicapoolPoolsDeleteRequest{
        PoolsDeleteRequest: &shared.PoolsDeleteRequest{
            AbandonInstances: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PoolName: "illum",
        PrettyPrint: sdk.Bool(false),
        ProjectName: "vel",
        QuotaUser: sdk.String("error"),
        UserIP: sdk.String("deserunt"),
        Zone: "suscipit",
    }, operations.ReplicapoolPoolsDeleteSecurity{
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