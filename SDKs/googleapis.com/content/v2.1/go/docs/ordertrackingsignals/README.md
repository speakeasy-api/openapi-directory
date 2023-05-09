# Ordertrackingsignals

### Available Operations

* [ContentOrdertrackingsignalsCreate](#contentordertrackingsignalscreate) - Creates new order tracking signal.

## ContentOrdertrackingsignalsCreate

Creates new order tracking signal.

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
    res, err := s.Ordertrackingsignals.ContentOrdertrackingsignalsCreate(ctx, operations.ContentOrdertrackingsignalsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrderTrackingSignalInput: &shared.OrderTrackingSignalInput{
            CustomerShippingFee: &shared.PriceAmount{
                Currency: sdk.String("doloremque"),
                Value: sdk.String("fugiat"),
            },
            DeliveryPostalCode: sdk.String("numquam"),
            DeliveryRegionCode: sdk.String("doloremque"),
            LineItems: []shared.OrderTrackingSignalLineItemDetails{
                shared.OrderTrackingSignalLineItemDetails{
                    Brand: sdk.String("nobis"),
                    Gtin: sdk.String("similique"),
                    LineItemID: sdk.String("porro"),
                    Mpn: sdk.String("impedit"),
                    ProductDescription: sdk.String("nisi"),
                    ProductID: sdk.String("cumque"),
                    ProductTitle: sdk.String("soluta"),
                    Quantity: sdk.String("fugiat"),
                    Sku: sdk.String("laboriosam"),
                    Upc: sdk.String("nam"),
                },
                shared.OrderTrackingSignalLineItemDetails{
                    Brand: sdk.String("enim"),
                    Gtin: sdk.String("maiores"),
                    LineItemID: sdk.String("consectetur"),
                    Mpn: sdk.String("necessitatibus"),
                    ProductDescription: sdk.String("maxime"),
                    ProductID: sdk.String("cupiditate"),
                    ProductTitle: sdk.String("voluptatem"),
                    Quantity: sdk.String("provident"),
                    Sku: sdk.String("adipisci"),
                    Upc: sdk.String("accusantium"),
                },
                shared.OrderTrackingSignalLineItemDetails{
                    Brand: sdk.String("magnam"),
                    Gtin: sdk.String("repellat"),
                    LineItemID: sdk.String("omnis"),
                    Mpn: sdk.String("explicabo"),
                    ProductDescription: sdk.String("vel"),
                    ProductID: sdk.String("cum"),
                    ProductTitle: sdk.String("id"),
                    Quantity: sdk.String("possimus"),
                    Sku: sdk.String("fugit"),
                    Upc: sdk.String("ipsam"),
                },
            },
            MerchantID: sdk.String("nostrum"),
            OrderCreatedTime: &shared.DateTime{
                Day: sdk.Int(196852),
                Hours: sdk.Int(529310),
                Minutes: sdk.Int(98759),
                Month: sdk.Int(622566),
                Nanos: sdk.Int(748606),
                Seconds: sdk.Int(269600),
                TimeZone: &shared.TimeZone{
                    ID: sdk.String("74b0ed20-e562-448f-bf63-9a910abdcab6"),
                    Version: sdk.String("fugit"),
                },
                UtcOffset: sdk.String("suscipit"),
                Year: sdk.Int(453880),
            },
            OrderID: sdk.String("nisi"),
            ShipmentLineItemMapping: []shared.OrderTrackingSignalShipmentLineItemMapping{
                shared.OrderTrackingSignalShipmentLineItemMapping{
                    LineItemID: sdk.String("provident"),
                    Quantity: sdk.String("laboriosam"),
                    ShipmentID: sdk.String("accusamus"),
                },
                shared.OrderTrackingSignalShipmentLineItemMapping{
                    LineItemID: sdk.String("ab"),
                    Quantity: sdk.String("itaque"),
                    ShipmentID: sdk.String("quisquam"),
                },
            },
            ShippingInfo: []shared.OrderTrackingSignalShippingInfo{
                shared.OrderTrackingSignalShippingInfo{
                    ActualDeliveryTime: &shared.DateTime{
                        Day: sdk.Int(4929),
                        Hours: sdk.Int(181622),
                        Minutes: sdk.Int(163263),
                        Month: sdk.Int(112224),
                        Nanos: sdk.Int(696828),
                        Seconds: sdk.Int(193334),
                        TimeZone: &shared.TimeZone{
                            ID: sdk.String("35d89acb-3ecf-4da8-90c5-49ef03004978"),
                            Version: sdk.String("officia"),
                        },
                        UtcOffset: sdk.String("ex"),
                        Year: sdk.Int(101770),
                    },
                    CarrierName: sdk.String("a"),
                    CarrierServiceName: sdk.String("laborum"),
                    EarliestDeliveryPromiseTime: &shared.DateTime{
                        Day: sdk.Int(84288),
                        Hours: sdk.Int(801816),
                        Minutes: sdk.Int(951103),
                        Month: sdk.Int(185313),
                        Nanos: sdk.Int(34989),
                        Seconds: sdk.Int(415125),
                        TimeZone: &shared.TimeZone{
                            ID: sdk.String("88f77c1f-fc71-4dca-963f-2a3c80a97ff3"),
                            Version: sdk.String("adipisci"),
                        },
                        UtcOffset: sdk.String("non"),
                        Year: sdk.Int(763140),
                    },
                    LatestDeliveryPromiseTime: &shared.DateTime{
                        Day: sdk.Int(850196),
                        Hours: sdk.Int(870183),
                        Minutes: sdk.Int(945320),
                        Month: sdk.Int(562066),
                        Nanos: sdk.Int(371295),
                        Seconds: sdk.Int(456222),
                        TimeZone: &shared.TimeZone{
                            ID: sdk.String("a9e61876-c6ab-421d-a9df-c94d6fecd799"),
                            Version: sdk.String("dolor"),
                        },
                        UtcOffset: sdk.String("sint"),
                        Year: sdk.Int(44252),
                    },
                    OriginPostalCode: sdk.String("eaque"),
                    OriginRegionCode: sdk.String("eum"),
                    ShipmentID: sdk.String("laboriosam"),
                    ShippedTime: &shared.DateTime{
                        Day: sdk.Int(672627),
                        Hours: sdk.Int(422276),
                        Minutes: sdk.Int(828481),
                        Month: sdk.Int(129631),
                        Nanos: sdk.Int(852689),
                        Seconds: sdk.Int(41306),
                        TimeZone: &shared.TimeZone{
                            ID: sdk.String("00355338-cec0-486f-a21e-9152cb311916"),
                            Version: sdk.String("ducimus"),
                        },
                        UtcOffset: sdk.String("libero"),
                        Year: sdk.Int(562065),
                    },
                    ShippingStatus: shared.OrderTrackingSignalShippingInfoShippingStatusEnumDelivered.ToPointer(),
                    TrackingID: sdk.String("ipsum"),
                },
            },
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("voluptatem"),
        MerchantID: "non",
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("repellendus"),
    }, operations.ContentOrdertrackingsignalsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderTrackingSignal != nil {
        // handle response
    }
}
```
