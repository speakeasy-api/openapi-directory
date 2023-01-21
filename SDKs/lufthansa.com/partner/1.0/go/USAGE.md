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
    
    req := operations.BaggageTripAndContactRequest{
        Security: operations.BaggageTripAndContactSecurity{
            Auth: shared.SchemeAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BaggageTripAndContactPathParams{
            SearchID: "sit",
        },
        Headers: operations.BaggageTripAndContactHeaders{
            Accept: "voluptas",
        },
    }
    
    res, err := s.Baggage.BaggageTripAndContact(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BaggageTripAndContact200ApplicationJSONString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->