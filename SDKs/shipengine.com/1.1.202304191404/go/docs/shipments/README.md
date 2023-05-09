# Shipments

## Overview

Shipments are at the center of the ShipEngine API.  A shipment is the first step in [creating a shipping label](https://www.shipengine.com/docs/labels/create-a-label/), or [creating a manifest](https://www.shipengine.com/docs/shipping/manifests/).  It's also essential for [getting shipping rates](https://www.shipengine.com/docs/rates/).


Learn about the shipment object model concept, and how to persist and re-use shipment data inside ShipEngine.

<https://www.shipengine.com/docs/shipping/create-a-shipment/>
### Available Operations

* [CancelShipments](#cancelshipments) - Cancel a Shipment
* [CreateShipments](#createshipments) - Create Shipments
* [GetShipmentByExternalID](#getshipmentbyexternalid) - Get Shipment By External ID
* [GetShipmentByID](#getshipmentbyid) - Get Shipment By ID
* [ListShipmentRates](#listshipmentrates) - Get Shipment Rates
* [ListShipments](#listshipments) - List Shipments
* [ParseShipment](#parseshipment) - Parse shipping info
* [TagShipment](#tagshipment) - Add Tag to Shipment
* [UntagShipment](#untagshipment) - Remove Tag from Shipment
* [UpdateShipment](#updateshipment) - Update Shipment By ID

## CancelShipments

Mark a shipment cancelled, if it is no longer needed or being used by your organized. Any label associated with the shipment needs to be voided first
An example use case would be if a batch label creation job is going to run at a set time and only queries `pending` shipments. Marking a shipment as cancelled
would remove it from this process


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
    res, err := s.Shipments.CancelShipments(ctx, operations.CancelShipmentsRequest{
        ShipmentID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```

## CreateShipments

Create one or multiple shipments.

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
    res, err := s.Shipments.CreateShipments(ctx, shared.CreateShipmentsRequestBodyInput{
        Shipments: []shared.AddressValidatingShipmentInput{
            shared.AddressValidatingShipmentInput{
                AdvancedOptions: &shared.AdvancedShipmentOptions{
                    BillToAccount: sdk.String("labore"),
                    BillToCountryCode: sdk.String("CA"),
                    BillToParty: shared.AdvancedShipmentOptionsBillToPartyEnumRecipient.ToPointer(),
                    BillToPostalCode: sdk.String("natus"),
                    CollectOnDelivery: &shared.CollectOnDelivery{
                        PaymentAmount: &shared.PaymentAmount{
                            Amount: sdk.Float64(7491.7),
                            Currency: sdk.String("eum"),
                        },
                        PaymentType: shared.CollectOnDeliveryPaymentTypeEnumNone.ToPointer(),
                    },
                    ContainsAlcohol: sdk.Bool(false),
                    CustomField1: sdk.String("aspernatur"),
                    CustomField2: sdk.String("architecto"),
                    CustomField3: sdk.String("magnam"),
                    DeliveredDutyPaid: sdk.Bool(false),
                    DryIce: sdk.Bool(false),
                    DryIceWeight: &shared.AdvancedShipmentOptionsWeight{
                        Unit: shared.WeightUnitEnumPound,
                        Value: 5699.65,
                    },
                    FedexFreight: &shared.AdvancedShipmentOptionsFedexFreight{
                        BookingConfirmation: sdk.String("ullam"),
                        ShipperLoadAndCount: sdk.String("provident"),
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
                Confirmation: shared.AddressValidatingShipmentDeliveryConfirmationEnumDirectSignature.ToPointer(),
                Customs: &shared.AddressValidatingShipmentInternationalShipmentOptionsInput{
                    Contents: shared.AddressValidatingShipmentInternationalShipmentOptionsPackageContentsEnumMerchandise,
                    CustomsItems: []shared.CustomsItemInput{
                        shared.CustomsItemInput{
                            CountryOfOrigin: sdk.String("CA"),
                            Description: sdk.String("reiciendis"),
                            HarmonizedTariffCode: sdk.String("3926.1"),
                            Quantity: sdk.Int(652103),
                            Sku: sdk.String("ad"),
                            SkuDescription: sdk.String("eum"),
                            UnitOfMeasure: sdk.String("dolor"),
                            Value: &shared.MonetaryValue{
                                Amount: 8965.47,
                                Currency: "odit",
                            },
                            Weight: &shared.Weight{
                                Unit: shared.WeightUnitEnumOunce,
                                Value: 972.6,
                            },
                        },
                        shared.CustomsItemInput{
                            CountryOfOrigin: sdk.String("CA"),
                            Description: sdk.String("iure"),
                            HarmonizedTariffCode: sdk.String("3926.1"),
                            Quantity: sdk.Int(984043),
                            Sku: sdk.String("debitis"),
                            SkuDescription: sdk.String("eius"),
                            UnitOfMeasure: sdk.String("maxime"),
                            Value: &shared.MonetaryValue{
                                Amount: 5370.23,
                                Currency: "facilis",
                            },
                            Weight: &shared.Weight{
                                Unit: shared.WeightUnitEnumOunce,
                                Value: 1002.26,
                            },
                        },
                        shared.CustomsItemInput{
                            CountryOfOrigin: sdk.String("CA"),
                            Description: sdk.String("architecto"),
                            HarmonizedTariffCode: sdk.String("3926.1"),
                            Quantity: sdk.Int(919483),
                            Sku: sdk.String("ullam"),
                            SkuDescription: sdk.String("expedita"),
                            UnitOfMeasure: sdk.String("nihil"),
                            Value: &shared.MonetaryValue{
                                Amount: 9988.48,
                                Currency: "quibusdam",
                            },
                            Weight: &shared.Weight{
                                Unit: shared.WeightUnitEnumPound,
                                Value: 9046.48,
                            },
                        },
                    },
                    NonDelivery: shared.AddressValidatingShipmentInternationalShipmentOptionsNonDeliveryEnumTreatAsAbandoned,
                },
                ExternalOrderID: sdk.String("accusantium"),
                ExternalShipmentID: sdk.String("consequuntur"),
                InsuranceProvider: shared.AddressValidatingShipmentInsuranceProviderEnumCarrier.ToPointer(),
                IsReturn: sdk.Bool(false),
                Items: []shared.ShipmentItem{
                    shared.ShipmentItem{
                        Asin: sdk.String("B00005N5PF"),
                        ExternalOrderID: sdk.String("magni"),
                        ExternalOrderItemID: sdk.String("sunt"),
                        Name: sdk.String("Gilberto Streich"),
                        OrderSourceCode: shared.OrderSourceNameEnumSellerActive.ToPointer(),
                        Quantity: sdk.Int(139972),
                        SalesOrderID: sdk.String("ea"),
                        SalesOrderItemID: sdk.String("accusantium"),
                        Sku: sdk.String("ab"),
                    },
                    shared.ShipmentItem{
                        Asin: sdk.String("B00005N5PF"),
                        ExternalOrderID: sdk.String("maiores"),
                        ExternalOrderItemID: sdk.String("quidem"),
                        Name: sdk.String("Colleen Johnston PhD"),
                        OrderSourceCode: shared.OrderSourceNameEnumJane.ToPointer(),
                        Quantity: sdk.Int(975522),
                        SalesOrderID: sdk.String("perferendis"),
                        SalesOrderItemID: sdk.String("fugiat"),
                        Sku: sdk.String("amet"),
                    },
                    shared.ShipmentItem{
                        Asin: sdk.String("B00005N5PF"),
                        ExternalOrderID: sdk.String("aut"),
                        ExternalOrderItemID: sdk.String("cumque"),
                        Name: sdk.String("Mindy Renner"),
                        OrderSourceCode: shared.OrderSourceNameEnumEtsy.ToPointer(),
                        Quantity: sdk.Int(521037),
                        SalesOrderID: sdk.String("dignissimos"),
                        SalesOrderItemID: sdk.String("eaque"),
                        Sku: sdk.String("quis"),
                    },
                },
                OrderSourceCode: shared.OrderSourceNameEnumChannelAdvisor.ToPointer(),
                OriginType: shared.AddressValidatingShipmentOriginTypeEnumPickup.ToPointer(),
                Packages: []shared.PackageInput{
                    shared.PackageInput{
                        ContentDescription: sdk.String("Hand knitted wool socks"),
                        Dimensions: &shared.Dimensions{
                            Height: 1709.86,
                            Length: 7936.98,
                            Unit: shared.DimensionsDimensionUnitEnumInch,
                            Width: 2239.24,
                        },
                        ExternalPackageID: sdk.String("vero"),
                        InsuredValue: &shared.PackageMonetaryValue{
                            Amount: 3453.52,
                            Currency: "hic",
                        },
                        LabelMessages: &shared.LabelMessages{
                            Reference1: "recusandae",
                            Reference2: "omnis",
                            Reference3: "facilis",
                        },
                        PackageCode: sdk.String("small_flat_rate_box"),
                        PackageID: sdk.String("se-28529731"),
                        Weight: shared.Weight{
                            Unit: shared.WeightUnitEnumGram,
                            Value: 318.38,
                        },
                    },
                },
                ReturnTo: &shared.ShippingAddress{
                    AddressLine1: "1999 Bishop Grandin Blvd.",
                    AddressLine2: sdk.String("Unit 408"),
                    AddressLine3: sdk.String("Building #7"),
                    AddressResidentialIndicator: shared.ShippingAddressAddressResidentialIndicatorEnumNo,
                    CityLocality: "Winnipeg",
                    CompanyName: sdk.String("The Home Depot"),
                    CountryCode: "CA",
                    Email: sdk.String("example@example.com"),
                    Instructions: sdk.String("porro"),
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
                    Instructions: sdk.String("consequuntur"),
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
                    Instructions: sdk.String("blanditiis"),
                    Name: "John Doe",
                    Phone: "+1 204-253-9411 ext. 123",
                    PostalCode: "78756-3717",
                    StateProvince: "Manitoba",
                },
                ShipmentNumber: sdk.String("error"),
                TaxIdentifiers: []shared.TaxIdentifier{
                    shared.TaxIdentifier{
                        IdentifierType: shared.IdentifierTypeEnumTin,
                        IssuingAuthority: "rerum",
                        TaxableEntityType: shared.TaxableEntityTypeEnumShipper,
                        Value: "asperiores",
                    },
                },
                ValidateAddress: shared.AddressValidatingShipmentValidateAddressEnumValidateAndClean.ToPointer(),
                WarehouseID: sdk.String("se-28529731"),
            },
            shared.AddressValidatingShipmentInput{
                AdvancedOptions: &shared.AdvancedShipmentOptions{
                    BillToAccount: sdk.String("modi"),
                    BillToCountryCode: sdk.String("CA"),
                    BillToParty: shared.AdvancedShipmentOptionsBillToPartyEnumThirdParty.ToPointer(),
                    BillToPostalCode: sdk.String("dolorum"),
                    CollectOnDelivery: &shared.CollectOnDelivery{
                        PaymentAmount: &shared.PaymentAmount{
                            Amount: sdk.Float64(5356.33),
                            Currency: sdk.String("pariatur"),
                        },
                        PaymentType: shared.CollectOnDeliveryPaymentTypeEnumCashEquivalent.ToPointer(),
                    },
                    ContainsAlcohol: sdk.Bool(false),
                    CustomField1: sdk.String("nobis"),
                    CustomField2: sdk.String("libero"),
                    CustomField3: sdk.String("delectus"),
                    DeliveredDutyPaid: sdk.Bool(false),
                    DryIce: sdk.Bool(false),
                    DryIceWeight: &shared.AdvancedShipmentOptionsWeight{
                        Unit: shared.WeightUnitEnumOunce,
                        Value: 5542.42,
                    },
                    FedexFreight: &shared.AdvancedShipmentOptionsFedexFreight{
                        BookingConfirmation: sdk.String("aliquid"),
                        ShipperLoadAndCount: sdk.String("dolorem"),
                    },
                    FreightClass: sdk.String("77.5"),
                    NonMachinable: sdk.Bool(false),
                    OriginType: shared.AdvancedShipmentOptionsOriginTypeEnumPickup.ToPointer(),
                    SaturdayDelivery: sdk.Bool(false),
                    ShipperRelease: sdk.Bool(false),
                    ThirdPartyConsignee: sdk.Bool(false),
                    UseUpsGroundFreightPricing: sdk.Bool(false),
                },
                CarrierID: "se-28529731",
                Confirmation: shared.AddressValidatingShipmentDeliveryConfirmationEnumDelivery.ToPointer(),
                Customs: &shared.AddressValidatingShipmentInternationalShipmentOptionsInput{
                    Contents: shared.AddressValidatingShipmentInternationalShipmentOptionsPackageContentsEnumMerchandise,
                    CustomsItems: []shared.CustomsItemInput{
                        shared.CustomsItemInput{
                            CountryOfOrigin: sdk.String("CA"),
                            Description: sdk.String("hic"),
                            HarmonizedTariffCode: sdk.String("3926.1"),
                            Quantity: sdk.Int(569574),
                            Sku: sdk.String("cum"),
                            SkuDescription: sdk.String("voluptate"),
                            UnitOfMeasure: sdk.String("dignissimos"),
                            Value: &shared.MonetaryValue{
                                Amount: 9702.37,
                                Currency: "amet",
                            },
                            Weight: &shared.Weight{
                                Unit: shared.WeightUnitEnumGram,
                                Value: 2543.56,
                            },
                        },
                    },
                    NonDelivery: shared.AddressValidatingShipmentInternationalShipmentOptionsNonDeliveryEnumReturnToSender,
                },
                ExternalOrderID: sdk.String("ipsa"),
                ExternalShipmentID: sdk.String("ipsa"),
                InsuranceProvider: shared.AddressValidatingShipmentInsuranceProviderEnumShipsurance.ToPointer(),
                IsReturn: sdk.Bool(false),
                Items: []shared.ShipmentItem{
                    shared.ShipmentItem{
                        Asin: sdk.String("B00005N5PF"),
                        ExternalOrderID: sdk.String("quaerat"),
                        ExternalOrderItemID: sdk.String("accusamus"),
                        Name: sdk.String("Jan Hodkiewicz"),
                        OrderSourceCode: shared.OrderSourceNameEnumPaypal.ToPointer(),
                        Quantity: sdk.Int(24678),
                        SalesOrderID: sdk.String("fugiat"),
                        SalesOrderItemID: sdk.String("ab"),
                        Sku: sdk.String("soluta"),
                    },
                    shared.ShipmentItem{
                        Asin: sdk.String("B00005N5PF"),
                        ExternalOrderID: sdk.String("dolorum"),
                        ExternalOrderItemID: sdk.String("iusto"),
                        Name: sdk.String("Sonya Leuschke"),
                        OrderSourceCode: shared.OrderSourceNameEnumSquarespace.ToPointer(),
                        Quantity: sdk.Int(990339),
                        SalesOrderID: sdk.String("nihil"),
                        SalesOrderItemID: sdk.String("ipsum"),
                        Sku: sdk.String("voluptate"),
                    },
                },
                OrderSourceCode: shared.OrderSourceNameEnumStitchLabs.ToPointer(),
                OriginType: shared.AddressValidatingShipmentOriginTypeEnumDropOff.ToPointer(),
                Packages: []shared.PackageInput{
                    shared.PackageInput{
                        ContentDescription: sdk.String("Hand knitted wool socks"),
                        Dimensions: &shared.Dimensions{
                            Height: 1372.2,
                            Length: 206.51,
                            Unit: shared.DimensionsDimensionUnitEnumInch,
                            Width: 7583.79,
                        },
                        ExternalPackageID: sdk.String("accusamus"),
                        InsuredValue: &shared.PackageMonetaryValue{
                            Amount: 3200.17,
                            Currency: "saepe",
                        },
                        LabelMessages: &shared.LabelMessages{
                            Reference1: "suscipit",
                            Reference2: "deserunt",
                            Reference3: "provident",
                        },
                        PackageCode: sdk.String("small_flat_rate_box"),
                        PackageID: sdk.String("se-28529731"),
                        Weight: shared.Weight{
                            Unit: shared.WeightUnitEnumOunce,
                            Value: 8310.49,
                        },
                    },
                    shared.PackageInput{
                        ContentDescription: sdk.String("Hand knitted wool socks"),
                        Dimensions: &shared.Dimensions{
                            Height: 5197.11,
                            Length: 6289.82,
                            Unit: shared.DimensionsDimensionUnitEnumInch,
                            Width: 8726.51,
                        },
                        ExternalPackageID: sdk.String("quaerat"),
                        InsuredValue: &shared.PackageMonetaryValue{
                            Amount: 2735.42,
                            Currency: "vel",
                        },
                        LabelMessages: &shared.LabelMessages{
                            Reference1: "quod",
                            Reference2: "officiis",
                            Reference3: "qui",
                        },
                        PackageCode: sdk.String("small_flat_rate_box"),
                        PackageID: sdk.String("se-28529731"),
                        Weight: shared.Weight{
                            Unit: shared.WeightUnitEnumGram,
                            Value: 9527.92,
                        },
                    },
                },
                ReturnTo: &shared.ShippingAddress{
                    AddressLine1: "1999 Bishop Grandin Blvd.",
                    AddressLine2: sdk.String("Unit 408"),
                    AddressLine3: sdk.String("Building #7"),
                    AddressResidentialIndicator: shared.ShippingAddressAddressResidentialIndicatorEnumNo,
                    CityLocality: "Winnipeg",
                    CompanyName: sdk.String("The Home Depot"),
                    CountryCode: "CA",
                    Email: sdk.String("example@example.com"),
                    Instructions: sdk.String("esse"),
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
                    Instructions: sdk.String("harum"),
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
                    Instructions: sdk.String("iusto"),
                    Name: "John Doe",
                    Phone: "+1 204-253-9411 ext. 123",
                    PostalCode: "78756-3717",
                    StateProvince: "Manitoba",
                },
                ShipmentNumber: sdk.String("ipsum"),
                TaxIdentifiers: []shared.TaxIdentifier{
                    shared.TaxIdentifier{
                        IdentifierType: shared.IdentifierTypeEnumVoec,
                        IssuingAuthority: "amet",
                        TaxableEntityType: shared.TaxableEntityTypeEnumRecipient,
                        Value: "accusamus",
                    },
                    shared.TaxIdentifier{
                        IdentifierType: shared.IdentifierTypeEnumSsn,
                        IssuingAuthority: "enim",
                        TaxableEntityType: shared.TaxableEntityTypeEnumShipper,
                        Value: "sapiente",
                    },
                    shared.TaxIdentifier{
                        IdentifierType: shared.IdentifierTypeEnumTin,
                        IssuingAuthority: "nihil",
                        TaxableEntityType: shared.TaxableEntityTypeEnumShipper,
                        Value: "expedita",
                    },
                    shared.TaxIdentifier{
                        IdentifierType: shared.IdentifierTypeEnumEori,
                        IssuingAuthority: "sed",
                        TaxableEntityType: shared.TaxableEntityTypeEnumShipper,
                        Value: "libero",
                    },
                },
                ValidateAddress: shared.AddressValidatingShipmentValidateAddressEnumValidateOnly.ToPointer(),
                WarehouseID: sdk.String("se-28529731"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateShipmentsResponseBody != nil {
        // handle response
    }
}
```

## GetShipmentByExternalID

Query Shipments created using your own custom ID convention using this endpint

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
    res, err := s.Shipments.GetShipmentByExternalID(ctx, operations.GetShipmentByExternalIDRequest{
        ExternalShipmentID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetShipmentByExternalIDResponseBody != nil {
        // handle response
    }
}
```

## GetShipmentByID

Get an individual shipment based on its ID

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
    res, err := s.Shipments.GetShipmentByID(ctx, operations.GetShipmentByIDRequest{
        ShipmentID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetShipmentByIDResponseBody != nil {
        // handle response
    }
}
```

## ListShipmentRates

Get Rates for the shipment information associated with the shipment ID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Shipments.ListShipmentRates(ctx, operations.ListShipmentRatesRequest{
        CreatedAtStart: types.MustTimeFromString("2022-10-14T13:38:40.307Z"),
        ShipmentID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListShipmentRatesResponseBody != nil {
        // handle response
    }
}
```

## ListShipments

Get list of Shipments

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
    res, err := s.Shipments.ListShipments(ctx, operations.ListShipmentsRequest{
        BatchID: sdk.String("se-28529731"),
        CreatedAtEnd: types.MustTimeFromString("2022-10-24T22:37:32.805Z"),
        CreatedAtStart: types.MustTimeFromString("2021-05-21T11:11:37.334Z"),
        ModifiedAtEnd: types.MustTimeFromString("2020-10-04T22:45:05.165Z"),
        ModifiedAtStart: types.MustTimeFromString("2022-04-29T16:20:13.800Z"),
        Page: sdk.Int(517379),
        PageSize: sdk.Int(276894),
        SalesOrderID: sdk.String("aspernatur"),
        ShipmentStatus: shared.ShipmentStatusEnumPending.ToPointer(),
        SortBy: shared.ShipmentsSortByEnumCreatedAt.ToPointer(),
        SortDir: operations.ListShipmentsSortDirSortDirEnumDesc.ToPointer(),
        Tag: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListShipmentsResponseBody != nil {
        // handle response
    }
}
```

## ParseShipment

The shipment-recognition API makes it easy for you to extract shipping data from unstructured text, including people's names, addresses, package weights and dimensions, insurance and delivery requirements, and more.

Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's shipment-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed shipment data is returned in the same structure that's used for other ShipEngine APIs, so you can easily use the parsed data to create a shipping label.

> **Note:** Shipment recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.


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
    res, err := s.Shipments.ParseShipment(ctx, shared.ParseShipmentRequestBodyInput{
        Shipment: &shared.PartialShipmentInput{
            AdvancedOptions: &shared.AdvancedShipmentOptions{
                BillToAccount: sdk.String("quam"),
                BillToCountryCode: sdk.String("CA"),
                BillToParty: shared.AdvancedShipmentOptionsBillToPartyEnumThirdParty.ToPointer(),
                BillToPostalCode: sdk.String("temporibus"),
                CollectOnDelivery: &shared.CollectOnDelivery{
                    PaymentAmount: &shared.PaymentAmount{
                        Amount: sdk.Float64(1832.8),
                        Currency: sdk.String("neque"),
                    },
                    PaymentType: shared.CollectOnDeliveryPaymentTypeEnumAny.ToPointer(),
                },
                ContainsAlcohol: sdk.Bool(false),
                CustomField1: sdk.String("magni"),
                CustomField2: sdk.String("odio"),
                CustomField3: sdk.String("sunt"),
                DeliveredDutyPaid: sdk.Bool(false),
                DryIce: sdk.Bool(false),
                DryIceWeight: &shared.AdvancedShipmentOptionsWeight{
                    Unit: shared.WeightUnitEnumOunce,
                    Value: 7220.81,
                },
                FedexFreight: &shared.AdvancedShipmentOptionsFedexFreight{
                    BookingConfirmation: sdk.String("hic"),
                    ShipperLoadAndCount: sdk.String("voluptatem"),
                },
                FreightClass: sdk.String("77.5"),
                NonMachinable: sdk.Bool(false),
                OriginType: shared.AdvancedShipmentOptionsOriginTypeEnumDropOff.ToPointer(),
                SaturdayDelivery: sdk.Bool(false),
                ShipperRelease: sdk.Bool(false),
                ThirdPartyConsignee: sdk.Bool(false),
                UseUpsGroundFreightPricing: sdk.Bool(false),
            },
            CarrierID: sdk.String("se-28529731"),
            Confirmation: shared.PartialShipmentDeliveryConfirmationEnumDeliveryMailed.ToPointer(),
            Customs: &shared.PartialShipmentInternationalShipmentOptionsInput{
                Contents: shared.PartialShipmentInternationalShipmentOptionsPackageContentsEnumReturnedGoods,
                CustomsItems: []shared.CustomsItemInput{
                    shared.CustomsItemInput{
                        CountryOfOrigin: sdk.String("CA"),
                        Description: sdk.String("saepe"),
                        HarmonizedTariffCode: sdk.String("3926.1"),
                        Quantity: sdk.Int(217450),
                        Sku: sdk.String("veritatis"),
                        SkuDescription: sdk.String("nobis"),
                        UnitOfMeasure: sdk.String("quos"),
                        Value: &shared.MonetaryValue{
                            Amount: 7316.94,
                            Currency: "cupiditate",
                        },
                        Weight: &shared.Weight{
                            Unit: shared.WeightUnitEnumPound,
                            Value: 9619.37,
                        },
                    },
                },
                NonDelivery: shared.PartialShipmentInternationalShipmentOptionsNonDeliveryEnumReturnToSender,
            },
            ExternalOrderID: sdk.String("dolore"),
            ExternalShipmentID: sdk.String("labore"),
            InsuranceProvider: shared.PartialShipmentInsuranceProviderEnumNone.ToPointer(),
            IsReturn: sdk.Bool(false),
            Items: []shared.ShipmentItem{
                shared.ShipmentItem{
                    Asin: sdk.String("B00005N5PF"),
                    ExternalOrderID: sdk.String("architecto"),
                    ExternalOrderItemID: sdk.String("quae"),
                    Name: sdk.String("Miss Billie Ward"),
                    OrderSourceCode: shared.OrderSourceNameEnumThreeDcart.ToPointer(),
                    Quantity: sdk.Int(984330),
                    SalesOrderID: sdk.String("ut"),
                    SalesOrderItemID: sdk.String("facilis"),
                    Sku: sdk.String("cupiditate"),
                },
                shared.ShipmentItem{
                    Asin: sdk.String("B00005N5PF"),
                    ExternalOrderID: sdk.String("qui"),
                    ExternalOrderItemID: sdk.String("quae"),
                    Name: sdk.String("Darren McClure"),
                    OrderSourceCode: shared.OrderSourceNameEnumWalmart.ToPointer(),
                    Quantity: sdk.Int(606476),
                    SalesOrderID: sdk.String("quis"),
                    SalesOrderItemID: sdk.String("ipsum"),
                    Sku: sdk.String("delectus"),
                },
                shared.ShipmentItem{
                    Asin: sdk.String("B00005N5PF"),
                    ExternalOrderID: sdk.String("voluptate"),
                    ExternalOrderItemID: sdk.String("consectetur"),
                    Name: sdk.String("Roman Kulas"),
                    OrderSourceCode: shared.OrderSourceNameEnumThreeDcart.ToPointer(),
                    Quantity: sdk.Int(486160),
                    SalesOrderID: sdk.String("similique"),
                    SalesOrderItemID: sdk.String("facilis"),
                    Sku: sdk.String("vero"),
                },
            },
            OrderSourceCode: shared.OrderSourceNameEnumMagento.ToPointer(),
            OriginType: shared.PartialShipmentOriginTypeEnumPickup.ToPointer(),
            Packages: []shared.PackageInput{
                shared.PackageInput{
                    ContentDescription: sdk.String("Hand knitted wool socks"),
                    Dimensions: &shared.Dimensions{
                        Height: 8489.44,
                        Length: 1943.42,
                        Unit: shared.DimensionsDimensionUnitEnumCentimeter,
                        Width: 7733.26,
                    },
                    ExternalPackageID: sdk.String("aut"),
                    InsuredValue: &shared.PackageMonetaryValue{
                        Amount: 9742.59,
                        Currency: "exercitationem",
                    },
                    LabelMessages: &shared.LabelMessages{
                        Reference1: "nulla",
                        Reference2: "fugit",
                        Reference3: "porro",
                    },
                    PackageCode: sdk.String("small_flat_rate_box"),
                    PackageID: sdk.String("se-28529731"),
                    Weight: shared.Weight{
                        Unit: shared.WeightUnitEnumKilogram,
                        Value: 9850.33,
                    },
                },
                shared.PackageInput{
                    ContentDescription: sdk.String("Hand knitted wool socks"),
                    Dimensions: &shared.Dimensions{
                        Height: 4783.7,
                        Length: 7535.7,
                        Unit: shared.DimensionsDimensionUnitEnumInch,
                        Width: 40.48,
                    },
                    ExternalPackageID: sdk.String("officia"),
                    InsuredValue: &shared.PackageMonetaryValue{
                        Amount: 2694.79,
                        Currency: "ipsam",
                    },
                    LabelMessages: &shared.LabelMessages{
                        Reference1: "ea",
                        Reference2: "aspernatur",
                        Reference3: "vel",
                    },
                    PackageCode: sdk.String("small_flat_rate_box"),
                    PackageID: sdk.String("se-28529731"),
                    Weight: shared.Weight{
                        Unit: shared.WeightUnitEnumKilogram,
                        Value: 2978.42,
                    },
                },
                shared.PackageInput{
                    ContentDescription: sdk.String("Hand knitted wool socks"),
                    Dimensions: &shared.Dimensions{
                        Height: 1898.48,
                        Length: 4011.32,
                        Unit: shared.DimensionsDimensionUnitEnumCentimeter,
                        Width: 1206.57,
                    },
                    ExternalPackageID: sdk.String("dolor"),
                    InsuredValue: &shared.PackageMonetaryValue{
                        Amount: 9807,
                        Currency: "quasi",
                    },
                    LabelMessages: &shared.LabelMessages{
                        Reference1: "ex",
                        Reference2: "nulla",
                        Reference3: "excepturi",
                    },
                    PackageCode: sdk.String("small_flat_rate_box"),
                    PackageID: sdk.String("se-28529731"),
                    Weight: shared.Weight{
                        Unit: shared.WeightUnitEnumKilogram,
                        Value: 3436.05,
                    },
                },
                shared.PackageInput{
                    ContentDescription: sdk.String("Hand knitted wool socks"),
                    Dimensions: &shared.Dimensions{
                        Height: 9608.35,
                        Length: 7888.73,
                        Unit: shared.DimensionsDimensionUnitEnumCentimeter,
                        Width: 4113.72,
                    },
                    ExternalPackageID: sdk.String("impedit"),
                    InsuredValue: &shared.PackageMonetaryValue{
                        Amount: 3592.71,
                        Currency: "veniam",
                    },
                    LabelMessages: &shared.LabelMessages{
                        Reference1: "aliquid",
                        Reference2: "inventore",
                        Reference3: "magnam",
                    },
                    PackageCode: sdk.String("small_flat_rate_box"),
                    PackageID: sdk.String("se-28529731"),
                    Weight: shared.Weight{
                        Unit: shared.WeightUnitEnumOunce,
                        Value: 7752.2,
                    },
                },
            },
            ReturnTo: &shared.ShippingAddress{
                AddressLine1: "1999 Bishop Grandin Blvd.",
                AddressLine2: sdk.String("Unit 408"),
                AddressLine3: sdk.String("Building #7"),
                AddressResidentialIndicator: shared.ShippingAddressAddressResidentialIndicatorEnumNo,
                CityLocality: "Winnipeg",
                CompanyName: sdk.String("The Home Depot"),
                CountryCode: "CA",
                Email: sdk.String("example@example.com"),
                Instructions: sdk.String("consectetur"),
                Name: "John Doe",
                Phone: "+1 204-253-9411 ext. 123",
                PostalCode: "78756-3717",
                StateProvince: "Manitoba",
            },
            ServiceCode: sdk.String("usps_first_class_mail"),
            ShipDate: types.MustTimeFromString("2018-09-23T00:00:00.000Z"),
            ShipFrom: &shared.ShippingAddress{
                AddressLine1: "1999 Bishop Grandin Blvd.",
                AddressLine2: sdk.String("Unit 408"),
                AddressLine3: sdk.String("Building #7"),
                AddressResidentialIndicator: shared.ShippingAddressAddressResidentialIndicatorEnumNo,
                CityLocality: "Winnipeg",
                CompanyName: sdk.String("The Home Depot"),
                CountryCode: "CA",
                Email: sdk.String("example@example.com"),
                Instructions: sdk.String("recusandae"),
                Name: "John Doe",
                Phone: "+1 204-253-9411 ext. 123",
                PostalCode: "78756-3717",
                StateProvince: "Manitoba",
            },
            ShipTo: &shared.ShippingAddress{
                AddressLine1: "1999 Bishop Grandin Blvd.",
                AddressLine2: sdk.String("Unit 408"),
                AddressLine3: sdk.String("Building #7"),
                AddressResidentialIndicator: shared.ShippingAddressAddressResidentialIndicatorEnumNo,
                CityLocality: "Winnipeg",
                CompanyName: sdk.String("The Home Depot"),
                CountryCode: "CA",
                Email: sdk.String("example@example.com"),
                Instructions: sdk.String("aspernatur"),
                Name: "John Doe",
                Phone: "+1 204-253-9411 ext. 123",
                PostalCode: "78756-3717",
                StateProvince: "Manitoba",
            },
            ShipmentNumber: sdk.String("minima"),
            TaxIdentifiers: []shared.TaxIdentifier{
                shared.TaxIdentifier{
                    IdentifierType: shared.IdentifierTypeEnumVoec,
                    IssuingAuthority: "libero",
                    TaxableEntityType: shared.TaxableEntityTypeEnumShipper,
                    Value: "aut",
                },
            },
            WarehouseID: sdk.String("se-28529731"),
        },
        Text: "I have a 4oz package that's 5x10x14in, and I need to ship it to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature. It also needs to be insured for $400.
    ",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ParseShipmentResponseBody != nil {
        // handle response
    }
}
```

## TagShipment

Add a tag to the shipment object

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
    res, err := s.Shipments.TagShipment(ctx, operations.TagShipmentRequest{
        ShipmentID: "se-28529731",
        TagName: "Fragile",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagShipmentResponseBody != nil {
        // handle response
    }
}
```

## UntagShipment

Remove an existing tag from the Shipment object

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
    res, err := s.Shipments.UntagShipment(ctx, operations.UntagShipmentRequest{
        ShipmentID: "se-28529731",
        TagName: "Fragile",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```

## UpdateShipment

Update a shipment object based on its ID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
    res, err := s.Shipments.UpdateShipment(ctx, operations.UpdateShipmentRequest{
        ShipmentID: "se-28529731",
        UpdateShipmentRequestBodyInput: shared.UpdateShipmentRequestBodyInput{
            AdvancedOptions: &shared.AdvancedShipmentOptions{
                BillToAccount: sdk.String("deleniti"),
                BillToCountryCode: sdk.String("CA"),
                BillToParty: shared.AdvancedShipmentOptionsBillToPartyEnumThirdParty.ToPointer(),
                BillToPostalCode: sdk.String("aliquam"),
                CollectOnDelivery: &shared.CollectOnDelivery{
                    PaymentAmount: &shared.PaymentAmount{
                        Amount: sdk.Float64(1469.46),
                        Currency: sdk.String("accusamus"),
                    },
                    PaymentType: shared.CollectOnDeliveryPaymentTypeEnumAny.ToPointer(),
                },
                ContainsAlcohol: sdk.Bool(false),
                CustomField1: sdk.String("non"),
                CustomField2: sdk.String("et"),
                CustomField3: sdk.String("dolorum"),
                DeliveredDutyPaid: sdk.Bool(false),
                DryIce: sdk.Bool(false),
                DryIceWeight: &shared.AdvancedShipmentOptionsWeight{
                    Unit: shared.WeightUnitEnumGram,
                    Value: 8104.24,
                },
                FedexFreight: &shared.AdvancedShipmentOptionsFedexFreight{
                    BookingConfirmation: sdk.String("velit"),
                    ShipperLoadAndCount: sdk.String("eum"),
                },
                FreightClass: sdk.String("77.5"),
                NonMachinable: sdk.Bool(false),
                OriginType: shared.AdvancedShipmentOptionsOriginTypeEnumPickup.ToPointer(),
                SaturdayDelivery: sdk.Bool(false),
                ShipperRelease: sdk.Bool(false),
                ThirdPartyConsignee: sdk.Bool(false),
                UseUpsGroundFreightPricing: sdk.Bool(false),
            },
            CarrierID: sdk.String("se-28529731"),
            Confirmation: shared.UpdateShipmentRequestBodyDeliveryConfirmationEnumDeliveryMailed.ToPointer(),
            Customs: &shared.UpdateShipmentRequestBodyInternationalShipmentOptionsInput{
                Contents: shared.UpdateShipmentRequestBodyInternationalShipmentOptionsPackageContentsEnumGift,
                CustomsItems: []shared.CustomsItemInput{
                    shared.CustomsItemInput{
                        CountryOfOrigin: sdk.String("CA"),
                        Description: sdk.String("nulla"),
                        HarmonizedTariffCode: sdk.String("3926.1"),
                        Quantity: sdk.Int(379034),
                        Sku: sdk.String("libero"),
                        SkuDescription: sdk.String("quasi"),
                        UnitOfMeasure: sdk.String("tempora"),
                        Value: &shared.MonetaryValue{
                            Amount: 2561.39,
                            Currency: "explicabo",
                        },
                        Weight: &shared.Weight{
                            Unit: shared.WeightUnitEnumGram,
                            Value: 553.74,
                        },
                    },
                    shared.CustomsItemInput{
                        CountryOfOrigin: sdk.String("CA"),
                        Description: sdk.String("molestiae"),
                        HarmonizedTariffCode: sdk.String("3926.1"),
                        Quantity: sdk.Int(301598),
                        Sku: sdk.String("odio"),
                        SkuDescription: sdk.String("eius"),
                        UnitOfMeasure: sdk.String("esse"),
                        Value: &shared.MonetaryValue{
                            Amount: 4561.41,
                            Currency: "rem",
                        },
                        Weight: &shared.Weight{
                            Unit: shared.WeightUnitEnumGram,
                            Value: 4420.15,
                        },
                    },
                    shared.CustomsItemInput{
                        CountryOfOrigin: sdk.String("CA"),
                        Description: sdk.String("quidem"),
                        HarmonizedTariffCode: sdk.String("3926.1"),
                        Quantity: sdk.Int(852635),
                        Sku: sdk.String("ut"),
                        SkuDescription: sdk.String("eum"),
                        UnitOfMeasure: sdk.String("suscipit"),
                        Value: &shared.MonetaryValue{
                            Amount: 8268.71,
                            Currency: "eos",
                        },
                        Weight: &shared.Weight{
                            Unit: shared.WeightUnitEnumGram,
                            Value: 7885.46,
                        },
                    },
                    shared.CustomsItemInput{
                        CountryOfOrigin: sdk.String("CA"),
                        Description: sdk.String("veritatis"),
                        HarmonizedTariffCode: sdk.String("3926.1"),
                        Quantity: sdk.Int(56848),
                        Sku: sdk.String("id"),
                        SkuDescription: sdk.String("quidem"),
                        UnitOfMeasure: sdk.String("neque"),
                        Value: &shared.MonetaryValue{
                            Amount: 7786.96,
                            Currency: "illum",
                        },
                        Weight: &shared.Weight{
                            Unit: shared.WeightUnitEnumKilogram,
                            Value: 6813.59,
                        },
                    },
                },
                NonDelivery: shared.UpdateShipmentRequestBodyInternationalShipmentOptionsNonDeliveryEnumReturnToSender,
            },
            ExternalOrderID: sdk.String("eos"),
            ExternalShipmentID: sdk.String("voluptas"),
            InsuranceProvider: shared.UpdateShipmentRequestBodyInsuranceProviderEnumNone.ToPointer(),
            IsReturn: sdk.Bool(false),
            Items: []shared.ShipmentItem{
                shared.ShipmentItem{
                    Asin: sdk.String("B00005N5PF"),
                    ExternalOrderID: sdk.String("consequatur"),
                    ExternalOrderItemID: sdk.String("tempora"),
                    Name: sdk.String("Roberto Collier"),
                    OrderSourceCode: shared.OrderSourceNameEnumMagento.ToPointer(),
                    Quantity: sdk.Int(925164),
                    SalesOrderID: sdk.String("aperiam"),
                    SalesOrderItemID: sdk.String("distinctio"),
                    Sku: sdk.String("quod"),
                },
                shared.ShipmentItem{
                    Asin: sdk.String("B00005N5PF"),
                    ExternalOrderID: sdk.String("dignissimos"),
                    ExternalOrderItemID: sdk.String("inventore"),
                    Name: sdk.String("Christy Tillman"),
                    OrderSourceCode: shared.OrderSourceNameEnumSellerActive.ToPointer(),
                    Quantity: sdk.Int(414567),
                    SalesOrderID: sdk.String("sapiente"),
                    SalesOrderItemID: sdk.String("dolores"),
                    Sku: sdk.String("deserunt"),
                },
                shared.ShipmentItem{
                    Asin: sdk.String("B00005N5PF"),
                    ExternalOrderID: sdk.String("molestiae"),
                    ExternalOrderItemID: sdk.String("accusantium"),
                    Name: sdk.String("Franklin Lynch"),
                    OrderSourceCode: shared.OrderSourceNameEnumPaypal.ToPointer(),
                    Quantity: sdk.Int(143829),
                    SalesOrderID: sdk.String("fuga"),
                    SalesOrderItemID: sdk.String("mollitia"),
                    Sku: sdk.String("incidunt"),
                },
            },
            OrderSourceCode: shared.OrderSourceNameEnumPaypal.ToPointer(),
            OriginType: shared.UpdateShipmentRequestBodyOriginTypeEnumPickup.ToPointer(),
            Packages: []shared.PackageInput{
                shared.PackageInput{
                    ContentDescription: sdk.String("Hand knitted wool socks"),
                    Dimensions: &shared.Dimensions{
                        Height: 3926.76,
                        Length: 1470.14,
                        Unit: shared.DimensionsDimensionUnitEnumCentimeter,
                        Width: 1598.7,
                    },
                    ExternalPackageID: sdk.String("ratione"),
                    InsuredValue: &shared.PackageMonetaryValue{
                        Amount: 1294.12,
                        Currency: "saepe",
                    },
                    LabelMessages: &shared.LabelMessages{
                        Reference1: "occaecati",
                        Reference2: "atque",
                        Reference3: "et",
                    },
                    PackageCode: sdk.String("small_flat_rate_box"),
                    PackageID: sdk.String("se-28529731"),
                    Weight: shared.Weight{
                        Unit: shared.WeightUnitEnumOunce,
                        Value: 9105.45,
                    },
                },
                shared.PackageInput{
                    ContentDescription: sdk.String("Hand knitted wool socks"),
                    Dimensions: &shared.Dimensions{
                        Height: 8820.42,
                        Length: 829.71,
                        Unit: shared.DimensionsDimensionUnitEnumInch,
                        Width: 8003.79,
                    },
                    ExternalPackageID: sdk.String("nam"),
                    InsuredValue: &shared.PackageMonetaryValue{
                        Amount: 8771.31,
                        Currency: "aliquid",
                    },
                    LabelMessages: &shared.LabelMessages{
                        Reference1: "quasi",
                        Reference2: "saepe",
                        Reference3: "vel",
                    },
                    PackageCode: sdk.String("small_flat_rate_box"),
                    PackageID: sdk.String("se-28529731"),
                    Weight: shared.Weight{
                        Unit: shared.WeightUnitEnumGram,
                        Value: 4732.21,
                    },
                },
            },
            ReturnTo: &shared.ShippingAddress{
                AddressLine1: "1999 Bishop Grandin Blvd.",
                AddressLine2: sdk.String("Unit 408"),
                AddressLine3: sdk.String("Building #7"),
                AddressResidentialIndicator: shared.ShippingAddressAddressResidentialIndicatorEnumNo,
                CityLocality: "Winnipeg",
                CompanyName: sdk.String("The Home Depot"),
                CountryCode: "CA",
                Email: sdk.String("example@example.com"),
                Instructions: sdk.String("rerum"),
                Name: "John Doe",
                Phone: "+1 204-253-9411 ext. 123",
                PostalCode: "78756-3717",
                StateProvince: "Manitoba",
            },
            ServiceCode: sdk.String("usps_first_class_mail"),
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
                Instructions: sdk.String("occaecati"),
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
                Instructions: sdk.String("minima"),
                Name: "John Doe",
                Phone: "+1 204-253-9411 ext. 123",
                PostalCode: "78756-3717",
                StateProvince: "Manitoba",
            },
            ShipmentNumber: sdk.String("distinctio"),
            TaxIdentifiers: []shared.TaxIdentifier{
                shared.TaxIdentifier{
                    IdentifierType: shared.IdentifierTypeEnumVat,
                    IssuingAuthority: "culpa",
                    TaxableEntityType: shared.TaxableEntityTypeEnumRecipient,
                    Value: "adipisci",
                },
                shared.TaxIdentifier{
                    IdentifierType: shared.IdentifierTypeEnumPan,
                    IssuingAuthority: "consequuntur",
                    TaxableEntityType: shared.TaxableEntityTypeEnumShipper,
                    Value: "minus",
                },
                shared.TaxIdentifier{
                    IdentifierType: shared.IdentifierTypeEnumSsn,
                    IssuingAuthority: "sapiente",
                    TaxableEntityType: shared.TaxableEntityTypeEnumShipper,
                    Value: "esse",
                },
                shared.TaxIdentifier{
                    IdentifierType: shared.IdentifierTypeEnumTin,
                    IssuingAuthority: "provident",
                    TaxableEntityType: shared.TaxableEntityTypeEnumRecipient,
                    Value: "nulla",
                },
            },
            ValidateAddress: shared.UpdateShipmentRequestBodyValidateAddressEnumValidateOnly.ToPointer(),
            WarehouseID: sdk.String("se-28529731"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateShipmentResponseBody != nil {
        // handle response
    }
}
```
