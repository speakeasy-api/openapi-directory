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
            Filter: "amet",
            Licensee: "eligendi",
            Limit: 2863341056198605984,
            Page: 5786436482557991478,
            PostcodeOutward: "voluptatem",
            Query: "fuga",
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