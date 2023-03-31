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

    req := shared.VeteranStatusRequest{
        BirthDate: "1965-01-01",
        FirstName: "John",
        Gender: "M",
        LastName: "Doe",
        MiddleName: "Theodore",
        Ssn: "555-55-5555",
    }

    ctx := context.Background()
    res, err := s.VeteranConfirmationStatus.GetVeteranStatus(ctx, req, operations.GetVeteranStatusSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VeteranStatusConfirmation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->