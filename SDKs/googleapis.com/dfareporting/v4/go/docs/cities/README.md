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
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("non"),
        CountryDartIds: []string{
            "nostrum",
            "dignissimos",
        },
        DartIds: []string{
            "corporis",
        },
        Fields: sdk.String("ipsa"),
        Key: sdk.String("occaecati"),
        NamePrefix: sdk.String("dolorum"),
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "recusandae",
        QuotaUser: sdk.String("deleniti"),
        RegionDartIds: []string{
            "doloremque",
            "quibusdam",
        },
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("minus"),
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
