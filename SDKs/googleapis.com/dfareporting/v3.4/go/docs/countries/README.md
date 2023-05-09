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
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("est"),
        DartID: "repellendus",
        Fields: sdk.String("dolor"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quasi",
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("doloremque"),
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
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("enim"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "consequuntur",
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("doloribus"),
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
