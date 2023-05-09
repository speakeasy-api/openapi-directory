<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Reverse(ctx, operations.ReverseRequestBody{
        Coordinates: sdk.String("48.873662, 2.295063"),
        Countries: []string{
            "provident",
            "distinctio",
            "quibusdam",
        },
        CountryByIP: sdk.Bool(false),
        Language: operations.ReverseRequestBodyLanguageEnumFr.ToPointer(),
        MaxResults: sdk.Int64(602763),
        Types: []shared.TypesEnum{
            shared.TypesEnumStreet,
            shared.TypesEnumMinusTownhall,
            shared.TypesEnumCountry,
            shared.TypesEnumMinusStreet,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Results != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->