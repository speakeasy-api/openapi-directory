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

    req := operations.CreateAdministrationRequest{
        PathParams: operations.CreateAdministrationPathParams{
            LegalEntityID: 548814,
        },
        Request: shared.AdministrationCreate{
            Email: "Michale_Sporer@yahoo.com",
            LegalEntityID: 544883,
            PackageVersion: "peppol_bis_v3",
            Packaging: "ubl",
            SenderEmailIdentityID: 623564,
        },
    }

    ctx := context.Background()
    res, err := s.Administrations.CreateAdministration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Administration != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->