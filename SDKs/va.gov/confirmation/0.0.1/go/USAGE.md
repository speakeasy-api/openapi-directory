<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetVeteranStatusRequest{
        Security: operations.GetVeteranStatusSecurity{
            Apikey: shared.SchemeApikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: shared.VeteranStatusRequest{
            BirthDate: "autem",
            FirstName: "doloribus",
            Gender: "M",
            LastName: "tempora",
            MiddleName: "porro",
            Ssn: "in",
        },
    }
    
    res, err := s.VeteranConfirmationStatus.GetVeteranStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VeteranStatusConfirmation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->