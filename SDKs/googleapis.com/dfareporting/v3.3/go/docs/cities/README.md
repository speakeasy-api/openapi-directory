# Cities

### Available Operations

* [DfareportingCitiesList](#dfareportingcitieslist) - Retrieves a list of cities, possibly filtered.

## DfareportingCitiesList

Retrieves a list of cities, possibly filtered.

### Example Usage

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Cities.DfareportingCitiesList(ctx, operations.DfareportingCitiesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veniam"),
        CountryDartIds: []string{
            "minus",
            "excepturi",
            "porro",
        },
        DartIds: []string{
            "maiores",
        },
        Fields: sdk.String("veniam"),
        Key: sdk.String("autem"),
        NamePrefix: sdk.String("esse"),
        OauthToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aperiam",
        QuotaUser: sdk.String("itaque"),
        RegionDartIds: []string{
            "corporis",
        },
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("odio"),
    }, operations.DfareportingCitiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CitiesListResponse != nil {
        // handle response
    }
}
```
