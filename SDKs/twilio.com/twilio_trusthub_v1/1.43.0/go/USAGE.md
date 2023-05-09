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
    res, err := s.CreateCustomerProfile(ctx, operations.CreateCustomerProfileCreateCustomerProfileRequest{
        Email: "Larue_Rau85@yahoo.com",
        FriendlyName: "corrupti",
        PolicySid: "illum",
        StatusCallback: sdk.String("http://physical-pegboard.info"),
    }, operations.CreateCustomerProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1CustomerProfile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->