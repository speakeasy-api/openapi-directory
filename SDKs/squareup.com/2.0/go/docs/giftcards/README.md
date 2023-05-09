# GiftCards

### Available Operations

* [CreateGiftCard](#creategiftcard) - CreateGiftCard
* [LinkCustomerToGiftCard](#linkcustomertogiftcard) - LinkCustomerToGiftCard
* [ListGiftCards](#listgiftcards) - ListGiftCards
* [RetrieveGiftCard](#retrievegiftcard) - RetrieveGiftCard
* [RetrieveGiftCardFromGAN](#retrievegiftcardfromgan) - RetrieveGiftCardFromGAN
* [RetrieveGiftCardFromNonce](#retrievegiftcardfromnonce) - RetrieveGiftCardFromNonce
* [UnlinkCustomerFromGiftCard](#unlinkcustomerfromgiftcard) - UnlinkCustomerFromGiftCard

## CreateGiftCard

Creates a digital gift card or registers a physical (plastic) gift card. You must activate the gift card before 
it can be used for payment. For more information, see 
[Selling gift cards](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#selling-square-gift-cards).

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
    res, err := s.GiftCards.CreateGiftCard(ctx, shared.CreateGiftCardRequest{
        GiftCard: shared.GiftCard{
            BalanceMoney: &shared.Money{
                Amount: sdk.Int64(911547),
                Currency: sdk.String("mollitia"),
            },
            CreatedAt: sdk.String("ipsam"),
            CustomerIds: []string{
                "molestiae",
                "inventore",
                "vel",
                "modi",
            },
            Gan: sdk.String("dicta"),
            GanSource: sdk.String("provident"),
            ID: sdk.String("34b90f2e-09d1-49d2-bc2f-9e2e105944b9"),
            State: sdk.String("amet"),
            Type: "enim",
        },
        IdempotencyKey: "illum",
        LocationID: "sed",
    }, operations.CreateGiftCardSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGiftCardResponse != nil {
        // handle response
    }
}
```

## LinkCustomerToGiftCard

Links a customer to a gift card

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
    res, err := s.GiftCards.LinkCustomerToGiftCard(ctx, operations.LinkCustomerToGiftCardRequest{
        LinkCustomerToGiftCardRequest: shared.LinkCustomerToGiftCardRequest{
            CustomerID: "adipisci",
        },
        GiftCardID: "reprehenderit",
    }, operations.LinkCustomerToGiftCardSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCustomerToGiftCardResponse != nil {
        // handle response
    }
}
```

## ListGiftCards

Lists all gift cards. You can specify optional filters to retrieve 
a subset of the gift cards.

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
    res, err := s.GiftCards.ListGiftCards(ctx, operations.ListGiftCardsRequest{
        Cursor: sdk.String("id"),
        CustomerID: sdk.String("ducimus"),
        Limit: sdk.Int64(174757),
        State: sdk.String("asperiores"),
        Type: sdk.String("occaecati"),
    }, operations.ListGiftCardsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGiftCardsResponse != nil {
        // handle response
    }
}
```

## RetrieveGiftCard

Retrieves a gift card using its ID.

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
    res, err := s.GiftCards.RetrieveGiftCard(ctx, operations.RetrieveGiftCardRequest{
        ID: "0849d6ae-d4ae-4cb7-937c-d9222c9ff574",
    }, operations.RetrieveGiftCardSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveGiftCardResponse != nil {
        // handle response
    }
}
```

## RetrieveGiftCardFromGAN

Retrieves a gift card using the gift card account number (GAN).

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
    res, err := s.GiftCards.RetrieveGiftCardFromGAN(ctx, shared.RetrieveGiftCardFromGANRequest{
        Gan: "iste",
    }, operations.RetrieveGiftCardFromGANSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveGiftCardFromGANResponse != nil {
        // handle response
    }
}
```

## RetrieveGiftCardFromNonce

Retrieves a gift card using a nonce (a secure token) that represents the gift card.

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
    res, err := s.GiftCards.RetrieveGiftCardFromNonce(ctx, shared.RetrieveGiftCardFromNonceRequest{
        Nonce: "inventore",
    }, operations.RetrieveGiftCardFromNonceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveGiftCardFromNonceResponse != nil {
        // handle response
    }
}
```

## UnlinkCustomerFromGiftCard

Unlinks a customer from a gift card

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
    res, err := s.GiftCards.UnlinkCustomerFromGiftCard(ctx, operations.UnlinkCustomerFromGiftCardRequest{
        UnlinkCustomerFromGiftCardRequest: shared.UnlinkCustomerFromGiftCardRequest{
            CustomerID: "error",
        },
        GiftCardID: "id",
    }, operations.UnlinkCustomerFromGiftCardSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnlinkCustomerFromGiftCardResponse != nil {
        // handle response
    }
}
```
