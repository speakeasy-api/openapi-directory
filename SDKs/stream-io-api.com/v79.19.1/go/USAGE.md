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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                Jwt: shared.SchemeJwt{
                    APIKey: "YOUR_API_KEY_HERE",
                },
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
                StreamAuthType: shared.SchemeStreamAuthType{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            },
        }),
    )

    req := operations.GetCallToken1Request{
        Request: shared.GetCallTokenRequest{
            User: map[string]interface{}{
                "deserunt": "porro",
                "nulla": "id",
                "vero": "perspiciatis",
            },
            UserID: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.GetCallToken1(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCallTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->