<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
                UserToken: shared.SchemeUserToken{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
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
            Filter: "sit",
            Licensee: "voluptas",
            Limit: 6050128673802995827,
            Page: 501233450539197794,
            PostcodeOutward: "consequuntur",
            Query: "dolor",
        },
    }
    
    res, err := s.Addresses.AddressSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddressSearchResponseSchema != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->