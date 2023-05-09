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
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odio"),
        CountryDartIds: []string{
            "mollitia",
            "repudiandae",
        },
        DartIds: []string{
            "voluptate",
            "cum",
            "esse",
        },
        Fields: sdk.String("alias"),
        Key: sdk.String("consequuntur"),
        NamePrefix: sdk.String("architecto"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nemo",
        QuotaUser: sdk.String("magni"),
        RegionDartIds: []string{
            "quaerat",
        },
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("rerum"),
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
