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

    req := operations.DeleteAPISpecificationRequest{
        Security: operations.DeleteAPISpecificationSecurity{
            APIKey: shared.SchemeAPIKey{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.DeleteAPISpecificationPathParams{
            ID: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.APISpecification.DeleteAPISpecification(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->