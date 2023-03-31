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

    req := shared.RedactTransaction{
        ID: "209ab3c7536542b91e8b5aef032f6861",
        Product: "sms",
        Type: "outbound",
    }

    ctx := context.Background()
    res, err := s.RedactMessage(ctx, req, operations.RedactMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
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