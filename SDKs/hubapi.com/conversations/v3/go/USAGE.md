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

    req := operations.PostVisitorIdentificationV3TokensCreateGenerateTokenRequest{
        Security: operations.PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity{
            Hapikey: &shared.SchemeHapikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: shared.IdentificationTokenGenerationRequest{
            Email: "Larue_Rau85@yahoo.com",
            FirstName: "Karley",
            LastName: "Stamm",
        },
    }

    ctx := context.Background()
    res, err := s.Generate.PostVisitorIdentificationV3TokensCreateGenerateToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentificationTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->