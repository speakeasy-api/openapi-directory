# Countries

### Available Operations

* [DfareportingCountriesGet](#dfareportingcountriesget) - Gets one country by ID.
* [DfareportingCountriesList](#dfareportingcountrieslist) - Retrieves a list of countries.

## DfareportingCountriesGet

Gets one country by ID.

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
    res, err := s.Countries.DfareportingCountriesGet(ctx, operations.DfareportingCountriesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facilis"),
        DartID: "doloremque",
        Fields: sdk.String("illo"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "enim",
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.DfareportingCountriesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Country != nil {
        // handle response
    }
}
```

## DfareportingCountriesList

Retrieves a list of countries.

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
    res, err := s.Countries.DfareportingCountriesList(ctx, operations.DfareportingCountriesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("ad"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quos",
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.DfareportingCountriesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CountriesListResponse != nil {
        // handle response
    }
}
```
