# Cards

### Available Operations

* [CreateCard](#createcard) - CreateCard
* [DisableCard](#disablecard) - DisableCard
* [ListCards](#listcards) - ListCards
* [RetrieveCard](#retrievecard) - RetrieveCard

## CreateCard

Adds a card on file to an existing merchant.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Cards.CreateCard(ctx, shared.CreateCardRequest{
        Card: shared.Card{
            BillingAddress: &shared.Address{
                AddressLine1: sdk.String("reiciendis"),
                AddressLine2: sdk.String("voluptatibus"),
                AddressLine3: sdk.String("vero"),
                AdministrativeDistrictLevel1: sdk.String("nihil"),
                AdministrativeDistrictLevel2: sdk.String("praesentium"),
                AdministrativeDistrictLevel3: sdk.String("voluptatibus"),
                Country: sdk.String("Austria"),
                FirstName: sdk.String("Lelah"),
                LastName: sdk.String("Klein"),
                Locality: sdk.String("cum"),
                Organization: sdk.String("perferendis"),
                PostalCode: sdk.String("42913"),
                Sublocality: sdk.String("dolore"),
                Sublocality2: sdk.String("iusto"),
                Sublocality3: sdk.String("dicta"),
            },
            Bin: sdk.String("harum"),
            CardBrand: sdk.String("enim"),
            CardType: sdk.String("accusamus"),
            CardholderName: sdk.String("commodi"),
            CustomerID: sdk.String("repudiandae"),
            Enabled: sdk.Bool(false),
            ExpMonth: sdk.Int64(64147),
            ExpYear: sdk.Int64(216822),
            Fingerprint: sdk.String("quidem"),
            ID: sdk.String("99d488e1-e91e-4450-ad2a-bd44269802d5"),
            Last4: sdk.String("alias"),
            PrepaidType: sdk.String("fugit"),
            ReferenceID: sdk.String("dolorum"),
            Version: sdk.Int64(569618),
        },
        IdempotencyKey: "tempora",
        SourceID: "facilis",
        VerificationToken: sdk.String("tempore"),
    }, operations.CreateCardSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCardResponse != nil {
        // handle response
    }
}
```

## DisableCard

Disables the card, preventing any further updates or charges.
Disabling an already disabled card is allowed but has no effect.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Cards.DisableCard(ctx, operations.DisableCardRequest{
        CardID: "labore",
    }, operations.DisableCardSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableCardResponse != nil {
        // handle response
    }
}
```

## ListCards

Retrieves a list of cards owned by the account making the request.
A max of 25 cards will be returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Cards.ListCards(ctx, operations.ListCardsRequest{
        Cursor: sdk.String("delectus"),
        CustomerID: sdk.String("eum"),
        IncludeDisabled: sdk.Bool(false),
        ReferenceID: sdk.String("non"),
        SortOrder: sdk.String("eligendi"),
    }, operations.ListCardsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCardsResponse != nil {
        // handle response
    }
}
```

## RetrieveCard

Retrieves details for a specific Card.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Cards.RetrieveCard(ctx, operations.RetrieveCardRequest{
        CardID: "sint",
    }, operations.RetrieveCardSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveCardResponse != nil {
        // handle response
    }
}
```
