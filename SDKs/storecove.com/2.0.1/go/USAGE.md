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
            Bearer: shared.SchemeBearer{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateAdditionalTaxIdentifierRequest{
        PathParams: operations.CreateAdditionalTaxIdentifierPathParams{
            LegalEntityID: 548814,
        },
        Request: shared.AdditionalTaxIdentifierCreate{
            Country: "Montenegro",
            County: "porro",
            Identifier: "nulla",
            Scheme: "id",
            Superscheme: "vero",
            ThirdPartyPassword: "perspiciatis",
            ThirdPartyUsername: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.AdditionalTaxIdentifiers.CreateAdditionalTaxIdentifier(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AdditionalTaxIdentifier != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->