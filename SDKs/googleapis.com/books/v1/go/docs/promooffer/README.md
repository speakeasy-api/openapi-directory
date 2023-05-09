# Promooffer

### Available Operations

* [BooksPromoofferAccept](#bookspromoofferaccept) - Accepts the promo offer.
* [BooksPromoofferDismiss](#bookspromoofferdismiss) - Marks the promo offer as dismissed.
* [BooksPromoofferGet](#bookspromoofferget) - Returns a list of promo offers available to the user

## BooksPromoofferAccept

Accepts the promo offer.

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
    res, err := s.Promooffer.BooksPromoofferAccept(ctx, operations.BooksPromoofferAcceptRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AndroidID: sdk.String("cumque"),
        Callback: sdk.String("consequuntur"),
        Device: sdk.String("consequatur"),
        Fields: sdk.String("minus"),
        Key: sdk.String("quaerat"),
        Manufacturer: sdk.String("sapiente"),
        Model: sdk.String("consectetur"),
        OauthToken: sdk.String("esse"),
        OfferID: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        Product: sdk.String("provident"),
        QuotaUser: sdk.String("a"),
        Serial: sdk.String("nulla"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("esse"),
        VolumeID: sdk.String("quasi"),
    }, operations.BooksPromoofferAcceptSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## BooksPromoofferDismiss

Marks the promo offer as dismissed.

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
    res, err := s.Promooffer.BooksPromoofferDismiss(ctx, operations.BooksPromoofferDismissRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AndroidID: sdk.String("pariatur"),
        Callback: sdk.String("possimus"),
        Device: sdk.String("quia"),
        Fields: sdk.String("eveniet"),
        Key: sdk.String("asperiores"),
        Manufacturer: sdk.String("facere"),
        Model: sdk.String("veritatis"),
        OauthToken: sdk.String("consequuntur"),
        OfferID: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        Product: sdk.String("similique"),
        QuotaUser: sdk.String("culpa"),
        Serial: sdk.String("aliquid"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("quae"),
    }, operations.BooksPromoofferDismissSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## BooksPromoofferGet

Returns a list of promo offers available to the user

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
    res, err := s.Promooffer.BooksPromoofferGet(ctx, operations.BooksPromoofferGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AndroidID: sdk.String("eius"),
        Callback: sdk.String("libero"),
        Device: sdk.String("illum"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("accusantium"),
        Manufacturer: sdk.String("aliquam"),
        Model: sdk.String("sapiente"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        Product: sdk.String("ullam"),
        QuotaUser: sdk.String("reprehenderit"),
        Serial: sdk.String("ullam"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("aut"),
    }, operations.BooksPromoofferGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Offers != nil {
        // handle response
    }
}
```
