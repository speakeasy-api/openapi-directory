<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateAccount(ctx, operations.CreateAccountCreateAccountRequest{
        FriendlyName: sdk.String("corrupti"),
    }, operations.CreateAccountSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010Account != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->