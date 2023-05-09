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
    res, err := s.GetEvent(ctx, operations.GetEventRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    }, operations.GetEventSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditEvent != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->