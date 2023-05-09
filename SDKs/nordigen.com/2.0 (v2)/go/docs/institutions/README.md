# Institutions

### Available Operations

* [RetrieveAllSupportedInstitutionsInAGivenCountry](#retrieveallsupportedinstitutionsinagivencountry) - List all available institutions
* [RetrieveInstitution](#retrieveinstitution) - Get details about a specific Institution

## RetrieveAllSupportedInstitutionsInAGivenCountry

List all available institutions

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Institutions.RetrieveAllSupportedInstitutionsInAGivenCountry(ctx, operations.RetrieveAllSupportedInstitutionsInAGivenCountryRequest{
        Country: sdk.String("Marshall Islands"),
        PaymentsEnabled: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Integrations != nil {
        // handle response
    }
}
```

## RetrieveInstitution

Get details about a specific Institution

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Institutions.RetrieveInstitution(ctx, operations.RetrieveInstitutionRequest{
        ID: "0afa563e-2516-4fe4-88b7-11e5b7fd2ed0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IntegrationRetrieve != nil {
        // handle response
    }
}
```
