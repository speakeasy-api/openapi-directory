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
    
    req := operations.GetglobalnumberinfoRequest{
        QueryParams: operations.GetglobalnumberinfoQueryParams{
            Intlnumber: "sit",
            License: "voluptas",
        },
    }
    
    res, err := s.GlobalPhoneNumberInformation.Getglobalnumberinfo(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getglobalnumberinfo200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->