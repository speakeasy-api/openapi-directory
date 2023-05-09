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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facere"),
        DartID: "ducimus",
        Fields: sdk.String("nisi"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "necessitatibus",
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("veritatis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("similique"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "est",
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("nemo"),
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
