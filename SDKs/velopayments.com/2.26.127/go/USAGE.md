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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Countries.ListPaymentChannelRulesV1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentChannelRulesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->