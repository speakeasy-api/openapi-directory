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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.GetAuthValidate(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuthValidate200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->