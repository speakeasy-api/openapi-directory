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

    req := operations.AddressSearchRequest{
        Security: operations.AddressSearchSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            UserToken: shared.SchemeUserToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.AddressSearchQueryParams{
            Filter: "unde",
            Licensee: "deserunt",
            Limit: 10,
            Page: 715190,
            PostcodeOutward: "nulla",
            Query: "id",
        },
    }

    ctx := context.Background()
    res, err := s.Addresses.AddressSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddressSearchResponseSchema != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->