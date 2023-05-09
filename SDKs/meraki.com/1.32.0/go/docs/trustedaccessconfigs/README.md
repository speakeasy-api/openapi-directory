# TrustedAccessConfigs

### Available Operations

* [GetNetworkSmTrustedAccessConfigs](#getnetworksmtrustedaccessconfigs) - List Trusted Access Configs

## GetNetworkSmTrustedAccessConfigs

List Trusted Access Configs

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TrustedAccessConfigs.GetNetworkSmTrustedAccessConfigs(ctx, operations.GetNetworkSmTrustedAccessConfigsRequest{
        EndingBefore: sdk.String("eius"),
        NetworkID: "laboriosam",
        PerPage: sdk.Int64(857155),
        StartingAfter: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmTrustedAccessConfigs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
