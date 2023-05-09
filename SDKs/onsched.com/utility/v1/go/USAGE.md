<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Health.GetUtilityV1HealthHeartbeat(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUtilityV1HealthHeartbeat200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->