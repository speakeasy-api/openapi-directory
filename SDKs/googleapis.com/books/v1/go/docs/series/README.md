# Series

### Available Operations

* [BooksSeriesGet](#booksseriesget) - Returns Series metadata for the given series ids.
* [BooksSeriesMembershipGet](#booksseriesmembershipget) - Returns Series membership data given the series id.

## BooksSeriesGet

Returns Series metadata for the given series ids.

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
    res, err := s.Series.BooksSeriesGet(ctx, operations.BooksSeriesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        SeriesID: []string{
            "tenetur",
            "quasi",
            "at",
        },
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.BooksSeriesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Series != nil {
        // handle response
    }
}
```

## BooksSeriesMembershipGet

Returns Series membership data given the series id.

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
    res, err := s.Series.BooksSeriesMembershipGet(ctx, operations.BooksSeriesMembershipGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("temporibus"),
        PageSize: sdk.Int64(33074),
        PageToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        SeriesID: "laudantium",
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.BooksSeriesMembershipGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Seriesmembership != nil {
        // handle response
    }
}
```
