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
    
    req := operations.AddExpiryListingsRequest{
        Request: operations.AddExpiryListingsRequests{
            AftermarketListingExpiryCreates: []interface{}{
                "voluptas",
            },
            ApplicationXML: []byte("culpa"),
            TextXML: []byte("expedita"),
        },
    }
    
    res, err := s.V1.AddExpiryListings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->