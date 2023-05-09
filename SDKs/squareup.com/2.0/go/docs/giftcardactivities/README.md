# GiftCardActivities

### Available Operations

* [CreateGiftCardActivity](#creategiftcardactivity) - CreateGiftCardActivity
* [ListGiftCardActivities](#listgiftcardactivities) - ListGiftCardActivities

## CreateGiftCardActivity

Creates a gift card activity. For more information, see 
[GiftCardActivity](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#giftcardactivity) and 
[Using activated gift cards](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#using-activated-gift-cards).

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
    res, err := s.GiftCardActivities.CreateGiftCardActivity(ctx, shared.CreateGiftCardActivityRequest{
        GiftCardActivity: shared.GiftCardActivity{
            ActivateActivityDetails: &shared.GiftCardActivityActivate{
                AmountMoney: &shared.Money{
                    Amount: sdk.Int64(475060),
                    Currency: sdk.String("quaerat"),
                },
                BuyerPaymentInstrumentIds: []string{
                    "blanditiis",
                    "quaerat",
                    "odit",
                },
                LineItemUID: sdk.String("ab"),
                OrderID: sdk.String("unde"),
                ReferenceID: sdk.String("nemo"),
            },
            AdjustDecrementActivityDetails: &shared.GiftCardActivityAdjustDecrement{
                AmountMoney: shared.Money{
                    Amount: sdk.Int64(213405),
                    Currency: sdk.String("rerum"),
                },
                Reason: "ut",
            },
            AdjustIncrementActivityDetails: &shared.GiftCardActivityAdjustIncrement{
                AmountMoney: shared.Money{
                    Amount: sdk.Int64(274622),
                    Currency: sdk.String("quidem"),
                },
                Reason: "nulla",
            },
            BlockActivityDetails: &shared.GiftCardActivityBlock{
                Reason: "nesciunt",
            },
            ClearBalanceActivityDetails: &shared.GiftCardActivityClearBalance{
                Reason: "quisquam",
            },
            CreatedAt: sdk.String("labore"),
            DeactivateActivityDetails: &shared.GiftCardActivityDeactivate{
                Reason: "sequi",
            },
            GiftCardBalanceMoney: &shared.Money{
                Amount: sdk.Int64(86885),
                Currency: sdk.String("veniam"),
            },
            GiftCardGan: sdk.String("unde"),
            GiftCardID: sdk.String("assumenda"),
            ID: sdk.String("33e5953c-0011-4398-a3aa-41e6c31cc2f1"),
            ImportActivityDetails: &shared.GiftCardActivityImport{
                AmountMoney: shared.Money{
                    Amount: sdk.Int64(942436),
                    Currency: sdk.String("porro"),
                },
            },
            ImportReversalActivityDetails: &shared.GiftCardActivityImportReversal{
                AmountMoney: shared.Money{
                    Amount: sdk.Int64(735484),
                    Currency: sdk.String("ullam"),
                },
            },
            LoadActivityDetails: &shared.GiftCardActivityLoad{
                AmountMoney: &shared.Money{
                    Amount: sdk.Int64(123593),
                    Currency: sdk.String("quisquam"),
                },
                BuyerPaymentInstrumentIds: []string{
                    "id",
                    "ut",
                    "et",
                },
                LineItemUID: sdk.String("reiciendis"),
                OrderID: sdk.String("reiciendis"),
                ReferenceID: sdk.String("distinctio"),
            },
            LocationID: "itaque",
            RedeemActivityDetails: &shared.GiftCardActivityRedeem{
                AmountMoney: shared.Money{
                    Amount: sdk.Int64(610766),
                    Currency: sdk.String("quod"),
                },
                PaymentID: sdk.String("quidem"),
                ReferenceID: sdk.String("temporibus"),
            },
            RefundActivityDetails: &shared.GiftCardActivityRefund{
                AmountMoney: &shared.Money{
                    Amount: sdk.Int64(437979),
                    Currency: sdk.String("natus"),
                },
                PaymentID: sdk.String("ipsam"),
                RedeemActivityID: "repudiandae",
                ReferenceID: sdk.String("earum"),
            },
            Type: "commodi",
            UnblockActivityDetails: &shared.GiftCardActivityUnblock{
                Reason: "veniam",
            },
            UnlinkedActivityRefundActivityDetails: &shared.GiftCardActivityUnlinkedActivityRefund{
                AmountMoney: shared.Money{
                    Amount: sdk.Int64(893425),
                    Currency: sdk.String("doloremque"),
                },
                PaymentID: sdk.String("esse"),
                ReferenceID: sdk.String("aliquid"),
            },
        },
        IdempotencyKey: "porro",
    }, operations.CreateGiftCardActivitySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGiftCardActivityResponse != nil {
        // handle response
    }
}
```

## ListGiftCardActivities

Lists gift card activities. By default, you get gift card activities for all
gift cards in the seller's account. You can optionally specify query parameters to
filter the list. For example, you can get a list of gift card activities for a gift card,
for all gift cards in a specific region, or for activities within a time window.

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
    res, err := s.GiftCardActivities.ListGiftCardActivities(ctx, operations.ListGiftCardActivitiesRequest{
        BeginTime: sdk.String("quisquam"),
        Cursor: sdk.String("molestiae"),
        EndTime: sdk.String("mollitia"),
        GiftCardID: sdk.String("quidem"),
        Limit: sdk.Int64(962171),
        LocationID: sdk.String("eum"),
        SortOrder: sdk.String("beatae"),
        Type: sdk.String("suscipit"),
    }, operations.ListGiftCardActivitiesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGiftCardActivitiesResponse != nil {
        // handle response
    }
}
```
