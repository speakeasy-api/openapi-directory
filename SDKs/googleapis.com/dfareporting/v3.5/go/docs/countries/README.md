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
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        DartID: "a",
        Fields: sdk.String("quam"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "earum",
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("recusandae"),
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
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "facere",
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("ullam"),
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
