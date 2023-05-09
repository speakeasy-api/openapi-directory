# Labels

## Overview

Print shipping labels for any of the top global carriers in minutes—instead of weeks. Simply [connect your existing carrier accounts](https://www.shipengine.com/docs/carriers/setup/) in the API dashboard, and then [begin creating labels](https://www.shipengine.com/docs/shipping/use-a-carrier-service/).


Follow this quick start guide to create your first shipping label with ShipEngine
<https://www.shipengine.com/docs/labels/create-a-label/>
### Available Operations

* [CreateLabel](#createlabel) - Purchase Label
* [CreateLabelFromRate](#createlabelfromrate) - Purchase Label with Rate ID
* [CreateLabelFromShipment](#createlabelfromshipment) - Purchase Label with Shipment ID
* [CreateReturnLabel](#createreturnlabel) - Create a return label
* [GetLabelByExternalShipmentID](#getlabelbyexternalshipmentid) - Get Label By External Shipment ID
* [GetLabelByID](#getlabelbyid) - Get Label By ID
* [GetTrackingLogFromLabel](#gettrackinglogfromlabel) - Get Label Tracking Information
* [ListLabels](#listlabels) - List labels
* [VoidLabel](#voidlabel) - Void a Label By ID

## CreateLabel

Purchase and print a label for shipment

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Labels.CreateLabel(ctx, shared.CreateLabelRequestBodyInput{
        ChargeEvent: shared.LabelChargeEventEnumOnCarrierAcceptance.ToPointer(),
        DisplayScheme: shared.CreateLabelRequestBodyDisplaySchemeEnumLabel.ToPointer(),
        IsReturnLabel: sdk.Bool(false),
        LabelDownloadType: shared.CreateLabelRequestBodyLabelDownloadTypeEnumInline.ToPointer(),
        LabelFormat: shared.CreateLabelRequestBodyLabelFormatEnumZpl.ToPointer(),
        LabelImageID: sdk.String("img_DtBXupDBxREpHnwEXhTfgK"),
        LabelLayout: shared.CreateLabelRequestBodyLabelLayoutEnumLetter.ToPointer(),
        OutboundLabelID: sdk.String("se-28529731"),
        RmaNumber: sdk.String("molestiae"),
        ShipFromServicePointID: sdk.String("614940"),
        ShipToServicePointID: sdk.String("614940"),
        Shipment: shared.CreateLabelRequestBodyPartialShipmentInput{
            AdvancedOptions: shared.AdvancedShipmentOptions{
                BillToAccount: sdk.String("quod"),
                BillToCountryCode: sdk.String("CA"),
                BillToParty: shared.AdvancedShipmentOptionsBillToPartyEnumThirdParty.ToPointer(),
                BillToPostalCode: sdk.String("esse"),
                CollectOnDelivery: &shared.CollectOnDelivery{
                    PaymentAmount: &shared.PaymentAmount{
                        Amount: sdk.Float64(5204.78),
                        Currency: sdk.String("porro"),
                    },
                    PaymentType: shared.CollectOnDeliveryPaymentTypeEnumCashEquivalent.ToPointer(),
                },
                ContainsAlcohol: sdk.Bool(false),
                CustomField1: sdk.String("dicta"),
                CustomField2: sdk.String("nam"),
                CustomField3: sdk.String("officia"),
                DeliveredDutyPaid: sdk.Bool(false),
                DryIce: sdk.Bool(false),
                DryIceWeight: &shared.AdvancedShipmentOptionsWeight{
                    Unit: shared.WeightUnitEnumGram,
                    Value: 1433.53,
                },
                FedexFreight: &shared.AdvancedShipmentOptionsFedexFreight{
                    BookingConfirmation: sdk.String("deleniti"),
                    ShipperLoadAndCount: sdk.String("hic"),
                },
                FreightClass: sdk.String("77.5"),
                NonMachinable: sdk.Bool(false),
                OriginType: shared.AdvancedShipmentOptionsOriginTypeEnumDropOff.ToPointer(),
                SaturdayDelivery: sdk.Bool(false),
                ShipperRelease: sdk.Bool(false),
                ThirdPartyConsignee: sdk.Bool(false),
                UseUpsGroundFreightPricing: sdk.Bool(false),
            },
            CarrierID: "se-28529731",
            Confirmation: shared.CreateLabelRequestBodyPartialShipmentDeliveryConfirmationEnumAdultSignature,
            Customs: shared.CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput{
                Contents: shared.CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsPackageContentsEnumMerchandise,
                CustomsItems: []shared.CustomsItemInput{
                    shared.CustomsItemInput{
                        CountryOfOrigin: sdk.String("CA"),
                        Description: sdk.String("molestiae"),
                        HarmonizedTariffCode: sdk.String("3926.1"),
                        Quantity: sdk.Int(264555),
                        Sku: sdk.String("qui"),
                        SkuDescription: sdk.String("impedit"),
                        UnitOfMeasure: sdk.String("cum"),
                        Value: &shared.MonetaryValue{
                            Amount: 4561.5,
                            Currency: "ipsum",
                        },
                        Weight: &shared.Weight{
                            Unit: shared.WeightUnitEnumGram,
                            Value: 1352.18,
                        },
                    },
                    shared.CustomsItemInput{
                        CountryOfOrigin: sdk.String("CA"),
                        Description: sdk.String("perferendis"),
                        HarmonizedTariffCode: sdk.String("3926.1"),
                        Quantity: sdk.Int(324141),
                        Sku: sdk.String("natus"),
                        SkuDescription: sdk.String("sed"),
                        UnitOfMeasure: sdk.String("iste"),
                        Value: &shared.MonetaryValue{
                            Amount: 2223.21,
                            Currency: "natus",
                        },
                        Weight: &shared.Weight{
                            Unit: shared.WeightUnitEnumOunce,
                            Value: 9437.49,
                        },
                    },
                },
                NonDelivery: shared.CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsNonDeliveryEnumTreatAsAbandoned,
            },
            ExternalOrderID: sdk.String("fuga"),
            ExternalShipmentID: sdk.String("in"),
            InsuranceProvider: shared.CreateLabelRequestBodyPartialShipmentInsuranceProviderEnumShipsurance,
            IsReturn: sdk.Bool(false),
            Items: []shared.ShipmentItem{
                shared.ShipmentItem{
                    Asin: sdk.String("B00005N5PF"),
                    ExternalOrderID: sdk.String("iure"),
                    ExternalOrderItemID: sdk.String("saepe"),
                    Name: sdk.String("Roger Beier"),
                    OrderSourceCode: shared.OrderSourceNameEnumStitchLabs.ToPointer(),
                    Quantity: sdk.Int(670638),
                    SalesOrderID: sdk.String("dolores"),
                    SalesOrderItemID: sdk.String("dolorem"),
                    Sku: sdk.String("corporis"),
                },
                shared.ShipmentItem{
                    Asin: sdk.String("B00005N5PF"),
                    ExternalOrderID: sdk.String("explicabo"),
                    ExternalOrderItemID: sdk.String("nobis"),
                    Name: sdk.String("Guadalupe Hickle"),
                    OrderSourceCode: shared.OrderSourceNameEnumAmazonCa.ToPointer(),
                    Quantity: sdk.Int(438601),
                    SalesOrderID: sdk.String("culpa"),
                    SalesOrderItemID: sdk.String("doloribus"),
                    Sku: sdk.String("sapiente"),
                },
                shared.ShipmentItem{
                    Asin: sdk.String("B00005N5PF"),
                    ExternalOrderID: sdk.String("architecto"),
                    ExternalOrderItemID: sdk.String("mollitia"),
                    Name: sdk.String("Cecilia Crooks"),
                    OrderSourceCode: shared.OrderSourceNameEnumSellerActive.ToPointer(),
                    Quantity: sdk.Int(253291),
                    SalesOrderID: sdk.String("commodi"),
                    SalesOrderItemID: sdk.String("quam"),
                    Sku: sdk.String("molestiae"),
                },
            },
            OrderSourceCode: shared.OrderSourceNameEnumCratejoy.ToPointer(),
            OriginType: shared.CreateLabelRequestBodyPartialShipmentOriginTypeEnumDropOff.ToPointer(),
            Packages: []shared.PackageInput{
                shared.PackageInput{
                    ContentDescription: sdk.String("Hand knitted wool socks"),
                    Dimensions: &shared.Dimensions{
                        Height: 3380.07,
                        Length: 1103.75,
                        Unit: shared.DimensionsDimensionUnitEnumCentimeter,
                        Width: 6563.3,
                    },
                    ExternalPackageID: sdk.String("enim"),
                    InsuredValue: &shared.PackageMonetaryValue{
                        Amount: 1381.83,
                        Currency: "quo",
                    },
                    LabelMessages: &shared.LabelMessages{
                        Reference1: "sequi",
                        Reference2: "tenetur",
                        Reference3: "ipsam",
                    },
                    PackageCode: sdk.String("small_flat_rate_box"),
                    PackageID: sdk.String("se-28529731"),
                    Weight: shared.Weight{
                        Unit: shared.WeightUnitEnumGram,
                        Value: 8209.94,
                    },
                },
            },
            ReturnTo: shared.ShippingAddress{
                AddressLine1: "1999 Bishop Grandin Blvd.",
                AddressLine2: sdk.String("Unit 408"),
                AddressLine3: sdk.String("Building #7"),
                AddressResidentialIndicator: shared.ShippingAddressAddressResidentialIndicatorEnumNo,
                CityLocality: "Winnipeg",
                CompanyName: sdk.String("The Home Depot"),
                CountryCode: "CA",
                Email: sdk.String("example@example.com"),
                Instructions: sdk.String("aut"),
                Name: "John Doe",
                Phone: "+1 204-253-9411 ext. 123",
                PostalCode: "78756-3717",
                StateProvince: "Manitoba",
            },
            ServiceCode: "usps_first_class_mail",
            ShipDate: types.MustTimeFromString("2018-09-23T00:00:00.000Z"),
            ShipFrom: shared.ShippingAddress{
                AddressLine1: "1999 Bishop Grandin Blvd.",
                AddressLine2: sdk.String("Unit 408"),
                AddressLine3: sdk.String("Building #7"),
                AddressResidentialIndicator: shared.ShippingAddressAddressResidentialIndicatorEnumNo,
                CityLocality: "Winnipeg",
                CompanyName: sdk.String("The Home Depot"),
                CountryCode: "CA",
                Email: sdk.String("example@example.com"),
                Instructions: sdk.String("quasi"),
                Name: "John Doe",
                Phone: "+1 204-253-9411 ext. 123",
                PostalCode: "78756-3717",
                StateProvince: "Manitoba",
            },
            ShipTo: shared.ShippingAddress{
                AddressLine1: "1999 Bishop Grandin Blvd.",
                AddressLine2: sdk.String("Unit 408"),
                AddressLine3: sdk.String("Building #7"),
                AddressResidentialIndicator: shared.ShippingAddressAddressResidentialIndicatorEnumNo,
                CityLocality: "Winnipeg",
                CompanyName: sdk.String("The Home Depot"),
                CountryCode: "CA",
                Email: sdk.String("example@example.com"),
                Instructions: sdk.String("error"),
                Name: "John Doe",
                Phone: "+1 204-253-9411 ext. 123",
                PostalCode: "78756-3717",
                StateProvince: "Manitoba",
            },
            ShipmentNumber: sdk.String("temporibus"),
            TaxIdentifiers: []shared.TaxIdentifier{
                shared.TaxIdentifier{
                    IdentifierType: shared.IdentifierTypeEnumVat,
                    IssuingAuthority: "reiciendis",
                    TaxableEntityType: shared.TaxableEntityTypeEnumRecipient,
                    Value: "vero",
                },
                shared.TaxIdentifier{
                    IdentifierType: shared.IdentifierTypeEnumEin,
                    IssuingAuthority: "praesentium",
                    TaxableEntityType: shared.TaxableEntityTypeEnumRecipient,
                    Value: "ipsa",
                },
                shared.TaxIdentifier{
                    IdentifierType: shared.IdentifierTypeEnumTin,
                    IssuingAuthority: "voluptate",
                    TaxableEntityType: shared.TaxableEntityTypeEnumRecipient,
                    Value: "perferendis",
                },
            },
            WarehouseID: "se-28529731",
        },
        TestLabel: sdk.Bool(false),
        ValidateAddress: shared.CreateLabelRequestBodyValidateAddressEnumNoValidation.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLabelResponseBody != nil {
        // handle response
    }
}
```

## CreateLabelFromRate

When retrieving rates for shipments using the `/rates` endpoint, the returned information contains a `rate_id` property that can be used
to generate a label without having to refill in the shipment information repeatedly.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Labels.CreateLabelFromRate(ctx, operations.CreateLabelFromRateRequest{
        CreateLabelFromRateRequestBody: shared.CreateLabelFromRateRequestBody{
            DisplayScheme: shared.CreateLabelFromRateRequestBodyDisplaySchemeEnumQrCode.ToPointer(),
            LabelDownloadType: shared.LabelDownloadTypeEnumURL.ToPointer(),
            LabelFormat: shared.CreateLabelFromRateRequestBodyLabelFormatEnumZpl.ToPointer(),
            LabelLayout: shared.CreateLabelFromRateRequestBodyLabelLayoutEnumFourx6.ToPointer(),
            ValidateAddress: shared.ValidateAddressEnumValidateOnly.ToPointer(),
        },
        RateID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLabelFromRateResponseBody != nil {
        // handle response
    }
}
```

## CreateLabelFromShipment

Purchase a label using a shipment ID that has already been created with the desired address and
package info.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Labels.CreateLabelFromShipment(ctx, operations.CreateLabelFromShipmentRequest{
        CreateLabelFromShipmentRequestBody: shared.CreateLabelFromShipmentRequestBody{
            DisplayScheme: shared.CreateLabelFromShipmentRequestBodyDisplaySchemeEnumLabel.ToPointer(),
            LabelDownloadType: shared.LabelDownloadTypeEnumURL.ToPointer(),
            LabelFormat: shared.CreateLabelFromShipmentRequestBodyLabelFormatEnumPdf.ToPointer(),
            LabelLayout: shared.CreateLabelFromShipmentRequestBodyLabelLayoutEnumLetter.ToPointer(),
            ValidateAddress: shared.ValidateAddressEnumNoValidation.ToPointer(),
        },
        ShipmentID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLabelFromShipmentResponseBody != nil {
        // handle response
    }
}
```

## CreateReturnLabel

Create a return label

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Labels.CreateReturnLabel(ctx, operations.CreateReturnLabelRequest{
        CreateReturnLabelRequestBody: shared.CreateReturnLabelRequestBody{
            ChargeEvent: shared.LabelChargeEventEnumOnCarrierAcceptance.ToPointer(),
            DisplayScheme: shared.CreateReturnLabelRequestBodyDisplaySchemeEnumQrCode.ToPointer(),
            LabelDownloadType: shared.CreateReturnLabelRequestBodyLabelDownloadTypeEnumInline.ToPointer(),
            LabelFormat: shared.CreateReturnLabelRequestBodyLabelFormatEnumPdf.ToPointer(),
            LabelImageID: sdk.String("img_DtBXupDBxREpHnwEXhTfgK"),
            LabelLayout: shared.CreateReturnLabelRequestBodyLabelLayoutEnumFourx6.ToPointer(),
        },
        LabelID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReturnLabelResponseBody != nil {
        // handle response
    }
}
```

## GetLabelByExternalShipmentID

Find a label by using the external shipment id that was used during label creation


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Labels.GetLabelByExternalShipmentID(ctx, operations.GetLabelByExternalShipmentIDRequest{
        ExternalShipmentID: "quidem",
        LabelDownloadType: shared.LabelDownloadTypeEnumInline.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLabelByExternalShipmentIDResponseBody != nil {
        // handle response
    }
}
```

## GetLabelByID

Retrieve information for individual labels.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Labels.GetLabelByID(ctx, operations.GetLabelByIDRequest{
        LabelDownloadType: shared.LabelDownloadTypeEnumInline.ToPointer(),
        LabelID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLabelByIDResponseBody != nil {
        // handle response
    }
}
```

## GetTrackingLogFromLabel

Retrieve the label's tracking information

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Labels.GetTrackingLogFromLabel(ctx, operations.GetTrackingLogFromLabelRequest{
        LabelID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTrackingLogFromLabelResponseBody != nil {
        // handle response
    }
}
```

## ListLabels

This endpoint returns a list of labels that you've [created](https://www.shipengine.com/docs/labels/create-a-label/). You can optionally filter the results as well as control their sort order and the number of results returned at a time.

By default, all labels are returned, 25 at a time, starting with the most recently created ones.  You can combine multiple filter options to narrow-down the results.  For example, if you only want to get your UPS labels for your east coast warehouse you could query by both `warehouse_id` and `carrier_id`


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Labels.ListLabels(ctx, operations.ListLabelsRequest{
        BatchID: sdk.String("se-28529731"),
        CarrierID: sdk.String("se-28529731"),
        CreatedAtEnd: types.MustTimeFromString("2022-03-16T09:33:50.291Z"),
        CreatedAtStart: types.MustTimeFromString("2021-12-15T00:41:38.329Z"),
        LabelStatus: shared.LabelStatusEnumVoided.ToPointer(),
        Page: sdk.Int(93940),
        PageSize: sdk.Int(921158),
        RateID: sdk.String("se-28529731"),
        ServiceCode: sdk.String("usps_first_class_mail"),
        ShipmentID: sdk.String("se-28529731"),
        SortBy: operations.ListLabelsSortByEnumCreatedAt.ToPointer(),
        SortDir: operations.ListLabelsSortDirSortDirEnumAsc.ToPointer(),
        TrackingNumber: sdk.String("itaque"),
        WarehouseID: sdk.String("se-28529731"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLabelsResponseBody != nil {
        // handle response
    }
}
```

## VoidLabel

Void a label by ID to get a refund.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Labels.VoidLabel(ctx, operations.VoidLabelRequest{
        LabelID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoidLabelResponseBody != nil {
        // handle response
    }
}
```
