# shipments

## Overview

Shipments are at the center of the ShipEngine API.  A shipment is the first step in [creating a shipping label](https://www.shipengine.com/docs/labels/create-a-label/), or [creating a manifest](https://www.shipengine.com/docs/shipping/manifests/).  It's also essential for [getting shipping rates](https://www.shipengine.com/docs/rates/).


Learn about the shipment object model concept, and how to persist and re-use shipment data inside ShipEngine.

<https://www.shipengine.com/docs/shipping/create-a-shipment/>
### Available Operations

* [cancelShipments](#cancelshipments) - Cancel a Shipment
* [createShipments](#createshipments) - Create Shipments
* [getShipmentByExternalId](#getshipmentbyexternalid) - Get Shipment By External ID
* [getShipmentById](#getshipmentbyid) - Get Shipment By ID
* [listShipmentRates](#listshipmentrates) - Get Shipment Rates
* [listShipments](#listshipments) - List Shipments
* [parseShipment](#parseshipment) - Parse shipping info
* [tagShipment](#tagshipment) - Add Tag to Shipment
* [untagShipment](#untagshipment) - Remove Tag from Shipment
* [updateShipment](#updateshipment) - Update Shipment By ID

## cancelShipments

Mark a shipment cancelled, if it is no longer needed or being used by your organized. Any label associated with the shipment needs to be voided first
An example use case would be if a batch label creation job is going to run at a set time and only queries `pending` shipments. Marking a shipment as cancelled
would remove it from this process


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelShipmentsRequest;
import org.openapis.openapi.models.operations.CancelShipmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelShipmentsRequest req = new CancelShipmentsRequest("se-28529731");            

            CancelShipmentsResponse res = sdk.shipments.cancelShipments(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createShipments

Create one or multiple shipments.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateShipmentsResponse;
import org.openapis.openapi.models.shared.AddressValidatingShipmentDeliveryConfirmationEnum;
import org.openapis.openapi.models.shared.AddressValidatingShipmentInput;
import org.openapis.openapi.models.shared.AddressValidatingShipmentInsuranceProviderEnum;
import org.openapis.openapi.models.shared.AddressValidatingShipmentInternationalShipmentOptionsInput;
import org.openapis.openapi.models.shared.AddressValidatingShipmentInternationalShipmentOptionsNonDeliveryEnum;
import org.openapis.openapi.models.shared.AddressValidatingShipmentInternationalShipmentOptionsPackageContentsEnum;
import org.openapis.openapi.models.shared.AddressValidatingShipmentOriginTypeEnum;
import org.openapis.openapi.models.shared.AddressValidatingShipmentValidateAddressEnum;
import org.openapis.openapi.models.shared.AdvancedShipmentOptions;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsBillToPartyEnum;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsFedexFreight;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsOriginTypeEnum;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsWeight;
import org.openapis.openapi.models.shared.CollectOnDelivery;
import org.openapis.openapi.models.shared.CollectOnDeliveryPaymentTypeEnum;
import org.openapis.openapi.models.shared.CreateShipmentsRequestBodyInput;
import org.openapis.openapi.models.shared.CustomsItemInput;
import org.openapis.openapi.models.shared.Dimensions;
import org.openapis.openapi.models.shared.DimensionsDimensionUnitEnum;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.LabelMessages;
import org.openapis.openapi.models.shared.MonetaryValue;
import org.openapis.openapi.models.shared.OrderSourceNameEnum;
import org.openapis.openapi.models.shared.PackageInput;
import org.openapis.openapi.models.shared.PackageMonetaryValue;
import org.openapis.openapi.models.shared.PaymentAmount;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShipmentItem;
import org.openapis.openapi.models.shared.ShippingAddress;
import org.openapis.openapi.models.shared.ShippingAddressAddressResidentialIndicatorEnum;
import org.openapis.openapi.models.shared.TaxIdentifier;
import org.openapis.openapi.models.shared.TaxableEntityTypeEnum;
import org.openapis.openapi.models.shared.Weight;
import org.openapis.openapi.models.shared.WeightUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateShipmentsRequestBodyInput req = new CreateShipmentsRequestBodyInput(                new org.openapis.openapi.models.shared.AddressValidatingShipmentInput[]{{
                                add(new AddressValidatingShipmentInput("se-28529731", "usps_first_class_mail",                 new ShippingAddress("1999 Bishop Grandin Blvd.", ShippingAddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                                                    addressLine2 = "Unit 408";
                                                    addressLine3 = "Building #7";
                                                    companyName = "The Home Depot";
                                                    email = "example@example.com";
                                                    instructions = "ratione";
                                                }};,                 new ShippingAddress("1999 Bishop Grandin Blvd.", ShippingAddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                                                    addressLine2 = "Unit 408";
                                                    addressLine3 = "Building #7";
                                                    companyName = "The Home Depot";
                                                    email = "example@example.com";
                                                    instructions = "ex";
                                                }};) {{
                                    advancedOptions = new AdvancedShipmentOptions() {{
                                        billToAccount = "soluta";
                                        billToCountryCode = "CA";
                                        billToParty = AdvancedShipmentOptionsBillToPartyEnum.THIRD_PARTY;
                                        billToPostalCode = "iusto";
                                        collectOnDelivery = new CollectOnDelivery() {{
                                            paymentAmount = new PaymentAmount() {{
                                                amount = 4536.97;
                                                currency = "dolorum";
                                            }};
                                            paymentType = CollectOnDeliveryPaymentTypeEnum.CASH_EQUIVALENT;
                                        }};
                                        containsAlcohol = false;
                                        customField1 = "omnis";
                                        customField2 = "necessitatibus";
                                        customField3 = "distinctio";
                                        deliveredDutyPaid = false;
                                        dryIce = false;
                                        dryIceWeight = new AdvancedShipmentOptionsWeight(WeightUnitEnum.POUND, 4560.15) {{
                                            unit = WeightUnitEnum.KILOGRAM;
                                            value = 4694.97;
                                        }};
                                        fedexFreight = new AdvancedShipmentOptionsFedexFreight() {{
                                            bookingConfirmation = "id";
                                            shipperLoadAndCount = "saepe";
                                        }};
                                        freightClass = "77.5";
                                        nonMachinable = false;
                                        originType = AdvancedShipmentOptionsOriginTypeEnum.PICKUP;
                                        saturdayDelivery = false;
                                        shipperRelease = false;
                                        thirdPartyConsignee = false;
                                        useUpsGroundFreightPricing = false;
                                    }};
                                    carrierId = "se-28529731";
                                    confirmation = AddressValidatingShipmentDeliveryConfirmationEnum.NONE;
                                    customs = new AddressValidatingShipmentInternationalShipmentOptionsInput(AddressValidatingShipmentInternationalShipmentOptionsPackageContentsEnum.DOCUMENTS, AddressValidatingShipmentInternationalShipmentOptionsNonDeliveryEnum.RETURN_TO_SENDER) {{
                                        contents = AddressValidatingShipmentInternationalShipmentOptionsPackageContentsEnum.MERCHANDISE;
                                        customsItems = new org.openapis.openapi.models.shared.CustomsItemInput[]{{
                                            add(new CustomsItemInput() {{
                                                countryOfOrigin = "CA";
                                                description = "optio";
                                                harmonizedTariffCode = "3926.1";
                                                quantity = 881586;
                                                sku = "ad";
                                                skuDescription = "saepe";
                                                unitOfMeasure = "suscipit";
                                                value = new MonetaryValue(3246.83, "repellendus") {{
                                                    amount = 6457.85;
                                                    currency = "provident";
                                                }};
                                                weight = new Weight(WeightUnitEnum.POUND, 8726.51) {{
                                                    unit = WeightUnitEnum.GRAM;
                                                    value = 6289.82;
                                                }};
                                            }}),
                                        }};
                                        nonDelivery = AddressValidatingShipmentInternationalShipmentOptionsNonDeliveryEnum.RETURN_TO_SENDER;
                                    }};
                                    externalOrderId = "quod";
                                    externalShipmentId = "officiis";
                                    insuranceProvider = AddressValidatingShipmentInsuranceProviderEnum.NONE;
                                    isReturn = false;
                                    items = new org.openapis.openapi.models.shared.ShipmentItem[]{{
                                        add(new ShipmentItem() {{
                                            asin = "B00005N5PF";
                                            externalOrderId = "a";
                                            externalOrderItemId = "esse";
                                            name = "Tyrone Emard";
                                            orderSourceCode = OrderSourceNameEnum.CRATEJOY;
                                            quantity = 730856;
                                            salesOrderId = "accusamus";
                                            salesOrderItemId = "numquam";
                                            sku = "enim";
                                        }}),
                                        add(new ShipmentItem() {{
                                            asin = "B00005N5PF";
                                            externalOrderId = "dolorem";
                                            externalOrderItemId = "sapiente";
                                            name = "Christian Balistreri";
                                            orderSourceCode = OrderSourceNameEnum.CHANNEL_ADVISOR;
                                            quantity = 424685;
                                            salesOrderId = "libero";
                                            salesOrderItemId = "voluptas";
                                            sku = "deserunt";
                                        }}),
                                        add(new ShipmentItem() {{
                                            asin = "B00005N5PF";
                                            externalOrderId = "quam";
                                            externalOrderItemId = "ipsum";
                                            name = "Norma McGlynn";
                                            orderSourceCode = OrderSourceNameEnum.SQUARESPACE;
                                            quantity = 117531;
                                            salesOrderId = "laborum";
                                            salesOrderItemId = "totam";
                                            sku = "incidunt";
                                        }}),
                                    }};
                                    orderSourceCode = OrderSourceNameEnum.BRIGHTPEARL;
                                    originType = AddressValidatingShipmentOriginTypeEnum.PICKUP;
                                    packages = new org.openapis.openapi.models.shared.PackageInput[]{{
                                        add(new PackageInput(                new Weight(WeightUnitEnum.GRAM, 7316.94);) {{
                                            contentDescription = "Hand knitted wool socks";
                                            dimensions = new Dimensions(8404.29, 1832.8, DimensionsDimensionUnitEnum.INCH, 1448.47) {{
                                                height = 7044.74;
                                                length = 3960.6;
                                                unit = DimensionsDimensionUnitEnum.INCH;
                                                width = 5654.21;
                                            }};
                                            externalPackageId = "magni";
                                            insuredValue = new PackageMonetaryValue(3556.13, "nam") {{
                                                amount = 4880.56;
                                                currency = "sunt";
                                            }};
                                            labelMessages = new LabelMessages("soluta", "nobis", "et") {{
                                                reference1 = "hic";
                                                reference2 = "voluptatem";
                                                reference3 = "cumque";
                                            }};
                                            packageCode = "small_flat_rate_box";
                                            packageId = "se-28529731";
                                            weight = new Weight(WeightUnitEnum.POUND, 7492.55) {{
                                                unit = WeightUnitEnum.KILOGRAM;
                                                value = 2174.5;
                                            }};
                                        }}),
                                        add(new PackageInput(                new Weight(WeightUnitEnum.GRAM, 4856.28);) {{
                                            contentDescription = "Hand knitted wool socks";
                                            dimensions = new Dimensions(2921.47, 2869.15, DimensionsDimensionUnitEnum.INCH, 6772.63) {{
                                                height = 5844.76;
                                                length = 456.14;
                                                unit = DimensionsDimensionUnitEnum.CENTIMETER;
                                                width = 2091.57;
                                            }};
                                            externalPackageId = "architecto";
                                            insuredValue = new PackageMonetaryValue(5556.49, "itaque") {{
                                                amount = 630.38;
                                                currency = "aut";
                                            }};
                                            labelMessages = new LabelMessages("porro", "doloribus", "ut") {{
                                                reference1 = "consequatur";
                                                reference2 = "est";
                                                reference3 = "repellendus";
                                            }};
                                            packageCode = "small_flat_rate_box";
                                            packageId = "se-28529731";
                                            weight = new Weight(WeightUnitEnum.POUND, 639.55) {{
                                                unit = WeightUnitEnum.GRAM;
                                                value = 5864.1;
                                            }};
                                        }}),
                                        add(new PackageInput(                new Weight(WeightUnitEnum.KILOGRAM, 1943.42);) {{
                                            contentDescription = "Hand knitted wool socks";
                                            dimensions = new Dimensions(6064.76, 3381.59, DimensionsDimensionUnitEnum.INCH, 9615.71) {{
                                                height = 5804.47;
                                                length = 9774.96;
                                                unit = DimensionsDimensionUnitEnum.CENTIMETER;
                                                width = 8765.06;
                                            }};
                                            externalPackageId = "voluptate";
                                            insuredValue = new PackageMonetaryValue(9493.19, "dignissimos") {{
                                                amount = 2317.01;
                                                currency = "vero";
                                            }};
                                            labelMessages = new LabelMessages("odio", "similique", "facilis") {{
                                                reference1 = "hic";
                                                reference2 = "distinctio";
                                                reference3 = "quod";
                                            }};
                                            packageCode = "small_flat_rate_box";
                                            packageId = "se-28529731";
                                            weight = new Weight(WeightUnitEnum.OUNCE, 8445.5) {{
                                                unit = WeightUnitEnum.KILOGRAM;
                                                value = 4981.4;
                                            }};
                                        }}),
                                    }};
                                    returnTo = new ShippingAddress("1999 Bishop Grandin Blvd.", ShippingAddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                                        addressLine1 = "1999 Bishop Grandin Blvd.";
                                        addressLine2 = "Unit 408";
                                        addressLine3 = "Building #7";
                                        addressResidentialIndicator = ShippingAddressAddressResidentialIndicatorEnum.NO;
                                        cityLocality = "Winnipeg";
                                        companyName = "The Home Depot";
                                        countryCode = "CA";
                                        email = "example@example.com";
                                        instructions = "natus";
                                        name = "John Doe";
                                        phone = "+1 204-253-9411 ext. 123";
                                        postalCode = "78756-3717";
                                        stateProvince = "Manitoba";
                                    }};
                                    serviceCode = "usps_first_class_mail";
                                    shipDate = OffsetDateTime.parse("2018-09-23T00:00:00.000Z");
                                    shipFrom = new ShippingAddress("1999 Bishop Grandin Blvd.", ShippingAddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                                        addressLine1 = "1999 Bishop Grandin Blvd.";
                                        addressLine2 = "Unit 408";
                                        addressLine3 = "Building #7";
                                        addressResidentialIndicator = ShippingAddressAddressResidentialIndicatorEnum.NO;
                                        cityLocality = "Winnipeg";
                                        companyName = "The Home Depot";
                                        countryCode = "CA";
                                        email = "example@example.com";
                                        instructions = "impedit";
                                        name = "John Doe";
                                        phone = "+1 204-253-9411 ext. 123";
                                        postalCode = "78756-3717";
                                        stateProvince = "Manitoba";
                                    }};
                                    shipTo = new ShippingAddress("1999 Bishop Grandin Blvd.", ShippingAddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                                        addressLine1 = "1999 Bishop Grandin Blvd.";
                                        addressLine2 = "Unit 408";
                                        addressLine3 = "Building #7";
                                        addressResidentialIndicator = ShippingAddressAddressResidentialIndicatorEnum.NO;
                                        cityLocality = "Winnipeg";
                                        companyName = "The Home Depot";
                                        countryCode = "CA";
                                        email = "example@example.com";
                                        instructions = "aut";
                                        name = "John Doe";
                                        phone = "+1 204-253-9411 ext. 123";
                                        postalCode = "78756-3717";
                                        stateProvince = "Manitoba";
                                    }};
                                    shipmentNumber = "voluptatibus";
                                    taxIdentifiers = new org.openapis.openapi.models.shared.TaxIdentifier[]{{
                                        add(new TaxIdentifier(IdentifierTypeEnum.VOEC, "iusto", TaxableEntityTypeEnum.RECIPIENT, "ducimus") {{
                                            identifierType = IdentifierTypeEnum.PAN;
                                            issuingAuthority = "fugit";
                                            taxableEntityType = TaxableEntityTypeEnum.RECIPIENT;
                                            value = "maiores";
                                        }}),
                                        add(new TaxIdentifier(IdentifierTypeEnum.EIN, "aspernatur", TaxableEntityTypeEnum.SHIPPER, "possimus") {{
                                            identifierType = IdentifierTypeEnum.VAT;
                                            issuingAuthority = "officia";
                                            taxableEntityType = TaxableEntityTypeEnum.SHIPPER;
                                            value = "ipsam";
                                        }}),
                                    }};
                                    validateAddress = AddressValidatingShipmentValidateAddressEnum.NO_VALIDATION;
                                    warehouseId = "se-28529731";
                                }}),
                            }});            

            CreateShipmentsResponse res = sdk.shipments.createShipments(req);

            if (res.createShipmentsResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getShipmentByExternalId

Query Shipments created using your own custom ID convention using this endpint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShipmentByExternalIdRequest;
import org.openapis.openapi.models.operations.GetShipmentByExternalIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetShipmentByExternalIdRequest req = new GetShipmentByExternalIdRequest("dicta");            

            GetShipmentByExternalIdResponse res = sdk.shipments.getShipmentByExternalId(req);

            if (res.getShipmentByExternalIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getShipmentById

Get an individual shipment based on its ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShipmentByIdRequest;
import org.openapis.openapi.models.operations.GetShipmentByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetShipmentByIdRequest req = new GetShipmentByIdRequest("se-28529731");            

            GetShipmentByIdResponse res = sdk.shipments.getShipmentById(req);

            if (res.getShipmentByIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listShipmentRates

Get Rates for the shipment information associated with the shipment ID

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListShipmentRatesRequest;
import org.openapis.openapi.models.operations.ListShipmentRatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListShipmentRatesRequest req = new ListShipmentRatesRequest("se-28529731") {{
                createdAtStart = OffsetDateTime.parse("2022-08-05T18:23:03.713Z");
            }};            

            ListShipmentRatesResponse res = sdk.shipments.listShipmentRates(req);

            if (res.listShipmentRatesResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listShipments

Get list of Shipments

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListShipmentsRequest;
import org.openapis.openapi.models.operations.ListShipmentsResponse;
import org.openapis.openapi.models.operations.ListShipmentsSortDirSortDirEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShipmentStatusEnum;
import org.openapis.openapi.models.shared.ShipmentsSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListShipmentsRequest req = new ListShipmentsRequest() {{
                batchId = "se-28529731";
                createdAtEnd = OffsetDateTime.parse("2021-01-20T18:27:01.887Z");
                createdAtStart = OffsetDateTime.parse("2022-01-15T07:05:18.296Z");
                modifiedAtEnd = OffsetDateTime.parse("2020-04-13T07:43:17.350Z");
                modifiedAtStart = OffsetDateTime.parse("2022-03-24T11:20:42.976Z");
                page = 359271;
                pageSize = 333145;
                salesOrderId = "aliquid";
                shipmentStatus = ShipmentStatusEnum.PENDING;
                sortBy = ShipmentsSortByEnum.MODIFIED_AT;
                sortDir = ListShipmentsSortDirSortDirEnum.ASC;
                tag = "quo";
            }};            

            ListShipmentsResponse res = sdk.shipments.listShipments(req);

            if (res.listShipmentsResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## parseShipment

The shipment-recognition API makes it easy for you to extract shipping data from unstructured text, including people's names, addresses, package weights and dimensions, insurance and delivery requirements, and more.

Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's shipment-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed shipment data is returned in the same structure that's used for other ShipEngine APIs, so you can easily use the parsed data to create a shipping label.

> **Note:** Shipment recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ParseShipmentResponse;
import org.openapis.openapi.models.shared.AdvancedShipmentOptions;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsBillToPartyEnum;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsFedexFreight;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsOriginTypeEnum;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsWeight;
import org.openapis.openapi.models.shared.CollectOnDelivery;
import org.openapis.openapi.models.shared.CollectOnDeliveryPaymentTypeEnum;
import org.openapis.openapi.models.shared.CustomsItemInput;
import org.openapis.openapi.models.shared.Dimensions;
import org.openapis.openapi.models.shared.DimensionsDimensionUnitEnum;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.LabelMessages;
import org.openapis.openapi.models.shared.MonetaryValue;
import org.openapis.openapi.models.shared.OrderSourceNameEnum;
import org.openapis.openapi.models.shared.PackageInput;
import org.openapis.openapi.models.shared.PackageMonetaryValue;
import org.openapis.openapi.models.shared.ParseShipmentRequestBodyInput;
import org.openapis.openapi.models.shared.PartialShipmentDeliveryConfirmationEnum;
import org.openapis.openapi.models.shared.PartialShipmentInput;
import org.openapis.openapi.models.shared.PartialShipmentInsuranceProviderEnum;
import org.openapis.openapi.models.shared.PartialShipmentInternationalShipmentOptionsInput;
import org.openapis.openapi.models.shared.PartialShipmentInternationalShipmentOptionsNonDeliveryEnum;
import org.openapis.openapi.models.shared.PartialShipmentInternationalShipmentOptionsPackageContentsEnum;
import org.openapis.openapi.models.shared.PartialShipmentOriginTypeEnum;
import org.openapis.openapi.models.shared.PaymentAmount;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShipmentItem;
import org.openapis.openapi.models.shared.ShippingAddress;
import org.openapis.openapi.models.shared.ShippingAddressAddressResidentialIndicatorEnum;
import org.openapis.openapi.models.shared.TaxIdentifier;
import org.openapis.openapi.models.shared.TaxableEntityTypeEnum;
import org.openapis.openapi.models.shared.Weight;
import org.openapis.openapi.models.shared.WeightUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ParseShipmentRequestBodyInput req = new ParseShipmentRequestBodyInput("I have a 4oz package that's 5x10x14in, and I need to ship it to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature. It also needs to be insured for $400.
            ") {{
                shipment = new PartialShipmentInput() {{
                    advancedOptions = new AdvancedShipmentOptions() {{
                        billToAccount = "recusandae";
                        billToCountryCode = "CA";
                        billToParty = AdvancedShipmentOptionsBillToPartyEnum.RECIPIENT;
                        billToPostalCode = "minima";
                        collectOnDelivery = new CollectOnDelivery() {{
                            paymentAmount = new PaymentAmount() {{
                                amount = 534.27;
                                currency = "a";
                            }};;
                            paymentType = CollectOnDeliveryPaymentTypeEnum.CASH_EQUIVALENT;
                        }};;
                        containsAlcohol = false;
                        customField1 = "aut";
                        customField2 = "aut";
                        customField3 = "deleniti";
                        deliveredDutyPaid = false;
                        dryIce = false;
                        dryIceWeight = new AdvancedShipmentOptionsWeight(WeightUnitEnum.KILOGRAM, 3045.82);;
                        fedexFreight = new AdvancedShipmentOptionsFedexFreight() {{
                            bookingConfirmation = "fugit";
                            shipperLoadAndCount = "accusamus";
                        }};;
                        freightClass = "77.5";
                        nonMachinable = false;
                        originType = AdvancedShipmentOptionsOriginTypeEnum.PICKUP;
                        saturdayDelivery = false;
                        shipperRelease = false;
                        thirdPartyConsignee = false;
                        useUpsGroundFreightPricing = false;
                    }};;
                    carrierId = "se-28529731";
                    confirmation = PartialShipmentDeliveryConfirmationEnum.DELIVERY;
                    customs = new PartialShipmentInternationalShipmentOptionsInput(PartialShipmentInternationalShipmentOptionsPackageContentsEnum.MERCHANDISE, PartialShipmentInternationalShipmentOptionsNonDeliveryEnum.TREAT_AS_ABANDONED) {{
                        customsItems = new org.openapis.openapi.models.shared.CustomsItemInput[]{{
                            add(new CustomsItemInput() {{
                                countryOfOrigin = "CA";
                                description = "placeat";
                                harmonizedTariffCode = "3926.1";
                                quantity = 245367;
                                sku = "eum";
                                skuDescription = "autem";
                                unitOfMeasure = "nobis";
                                value = new MonetaryValue(8605.52, "voluptas") {{
                                    amount = 5573.69;
                                    currency = "assumenda";
                                }};
                                weight = new Weight(WeightUnitEnum.OUNCE, 2561.39) {{
                                    unit = WeightUnitEnum.GRAM;
                                    value = 965.49;
                                }};
                            }}),
                            add(new CustomsItemInput() {{
                                countryOfOrigin = "CA";
                                description = "explicabo";
                                harmonizedTariffCode = "3926.1";
                                quantity = 591935;
                                sku = "ipsa";
                                skuDescription = "molestiae";
                                unitOfMeasure = "magnam";
                                value = new MonetaryValue(4585.15, "esse") {{
                                    amount = 4879.35;
                                    currency = "eius";
                                }};
                                weight = new Weight(WeightUnitEnum.OUNCE, 6956.26) {{
                                    unit = WeightUnitEnum.GRAM;
                                    value = 6832.82;
                                }};
                            }}),
                            add(new CustomsItemInput() {{
                                countryOfOrigin = "CA";
                                description = "fugiat";
                                harmonizedTariffCode = "3926.1";
                                quantity = 283519;
                                sku = "eum";
                                skuDescription = "suscipit";
                                unitOfMeasure = "assumenda";
                                value = new MonetaryValue(7885.46, "veritatis") {{
                                    amount = 1811.51;
                                    currency = "praesentium";
                                }};
                                weight = new Weight(WeightUnitEnum.GRAM, 2065.94) {{
                                    unit = WeightUnitEnum.POUND;
                                    value = 6600.4;
                                }};
                            }}),
                        }};
                    }};;
                    externalOrderId = "quo";
                    externalShipmentId = "illum";
                    insuranceProvider = PartialShipmentInsuranceProviderEnum.THIRD_PARTY;
                    isReturn = false;
                    items = new org.openapis.openapi.models.shared.ShipmentItem[]{{
                        add(new ShipmentItem() {{
                            asin = "B00005N5PF";
                            externalOrderId = "eius";
                            externalOrderItemId = "eos";
                            name = "Mrs. Virginia McGlynn";
                            orderSourceCode = OrderSourceNameEnum.JANE;
                            quantity = 133465;
                            salesOrderId = "sequi";
                            salesOrderItemId = "quo";
                            sku = "esse";
                        }}),
                        add(new ShipmentItem() {{
                            asin = "B00005N5PF";
                            externalOrderId = "recusandae";
                            externalOrderItemId = "aperiam";
                            name = "Ms. Jermaine Kulas";
                            orderSourceCode = OrderSourceNameEnum.WALMART;
                            quantity = 306810;
                            salesOrderId = "odio";
                            salesOrderItemId = "occaecati";
                            sku = "commodi";
                        }}),
                        add(new ShipmentItem() {{
                            asin = "B00005N5PF";
                            externalOrderId = "sapiente";
                            externalOrderItemId = "dolores";
                            name = "Fernando Barton";
                            orderSourceCode = OrderSourceNameEnum.SELLER_ACTIVE;
                            quantity = 510017;
                            salesOrderId = "consequuntur";
                            salesOrderItemId = "deleniti";
                            sku = "fugit";
                        }}),
                    }};
                    orderSourceCode = OrderSourceNameEnum.STITCH_LABS;
                    originType = PartialShipmentOriginTypeEnum.DROP_OFF;
                    packages = new org.openapis.openapi.models.shared.PackageInput[]{{
                        add(new PackageInput(                new Weight(WeightUnitEnum.KILOGRAM, 4263.06);) {{
                            contentDescription = "Hand knitted wool socks";
                            dimensions = new Dimensions(1470.14, 9564.06, DimensionsDimensionUnitEnum.INCH, 1871.31) {{
                                height = 5392.24;
                                length = 1288.6;
                                unit = DimensionsDimensionUnitEnum.INCH;
                                width = 3926.76;
                            }};
                            externalPackageId = "explicabo";
                            insuredValue = new PackageMonetaryValue(5438.06, "et") {{
                                amount = 9039.84;
                                currency = "occaecati";
                            }};
                            labelMessages = new LabelMessages("veritatis", "esse", "quod") {{
                                reference1 = "esse";
                                reference2 = "eveniet";
                                reference3 = "accusamus";
                            }};
                            packageCode = "small_flat_rate_box";
                            packageId = "se-28529731";
                            weight = new Weight(WeightUnitEnum.OUNCE, 934.59) {{
                                unit = WeightUnitEnum.GRAM;
                                value = 8771.31;
                            }};
                        }}),
                        add(new PackageInput(                new Weight(WeightUnitEnum.GRAM, 4572.23);) {{
                            contentDescription = "Hand knitted wool socks";
                            dimensions = new Dimensions(3277.2, 7162.44, DimensionsDimensionUnitEnum.CENTIMETER, 270.69) {{
                                height = 6900.25;
                                length = 4732.21;
                                unit = DimensionsDimensionUnitEnum.CENTIMETER;
                                width = 5801.97;
                            }};
                            externalPackageId = "culpa";
                            insuredValue = new PackageMonetaryValue(7669.64, "consequuntur") {{
                                amount = 7313.98;
                                currency = "adipisci";
                            }};
                            labelMessages = new LabelMessages("sapiente", "consectetur", "esse") {{
                                reference1 = "consequatur";
                                reference2 = "minus";
                                reference3 = "quaerat";
                            }};
                            packageCode = "small_flat_rate_box";
                            packageId = "se-28529731";
                            weight = new Weight(WeightUnitEnum.KILOGRAM, 8577.23) {{
                                unit = WeightUnitEnum.GRAM;
                                value = 5909.84;
                            }};
                        }}),
                    }};
                    returnTo = new ShippingAddress("1999 Bishop Grandin Blvd.", ShippingAddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                        addressLine2 = "Unit 408";
                        addressLine3 = "Building #7";
                        companyName = "The Home Depot";
                        email = "example@example.com";
                        instructions = "quasi";
                    }};;
                    serviceCode = "usps_first_class_mail";
                    shipDate = OffsetDateTime.parse("2018-09-23T00:00:00.000Z");
                    shipFrom = new ShippingAddress("1999 Bishop Grandin Blvd.", ShippingAddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                        addressLine2 = "Unit 408";
                        addressLine3 = "Building #7";
                        companyName = "The Home Depot";
                        email = "example@example.com";
                        instructions = "a";
                    }};;
                    shipTo = new ShippingAddress("1999 Bishop Grandin Blvd.", ShippingAddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                        addressLine2 = "Unit 408";
                        addressLine3 = "Building #7";
                        companyName = "The Home Depot";
                        email = "example@example.com";
                        instructions = "error";
                    }};;
                    shipmentNumber = "sint";
                    taxIdentifiers = new org.openapis.openapi.models.shared.TaxIdentifier[]{{
                        add(new TaxIdentifier(IdentifierTypeEnum.PAN, "veritatis", TaxableEntityTypeEnum.SHIPPER, "quasi") {{
                            identifierType = IdentifierTypeEnum.PAN;
                            issuingAuthority = "quia";
                            taxableEntityType = TaxableEntityTypeEnum.RECIPIENT;
                            value = "asperiores";
                        }}),
                        add(new TaxIdentifier(IdentifierTypeEnum.VAT, "earum", TaxableEntityTypeEnum.SHIPPER, "in") {{
                            identifierType = IdentifierTypeEnum.IOSS;
                            issuingAuthority = "culpa";
                            taxableEntityType = TaxableEntityTypeEnum.SHIPPER;
                            value = "tenetur";
                        }}),
                        add(new TaxIdentifier(IdentifierTypeEnum.VAT, "aliquam", TaxableEntityTypeEnum.RECIPIENT, "dicta") {{
                            identifierType = IdentifierTypeEnum.SSN;
                            issuingAuthority = "libero";
                            taxableEntityType = TaxableEntityTypeEnum.RECIPIENT;
                            value = "soluta";
                        }}),
                        add(new TaxIdentifier(IdentifierTypeEnum.VAT, "voluptatum", TaxableEntityTypeEnum.SHIPPER, "quibusdam") {{
                            identifierType = IdentifierTypeEnum.SSN;
                            issuingAuthority = "reprehenderit";
                            taxableEntityType = TaxableEntityTypeEnum.SHIPPER;
                            value = "nisi";
                        }}),
                    }};
                    warehouseId = "se-28529731";
                }};;
            }};            

            ParseShipmentResponse res = sdk.shipments.parseShipment(req);

            if (res.parseShipmentResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagShipment

Add a tag to the shipment object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagShipmentRequest;
import org.openapis.openapi.models.operations.TagShipmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagShipmentRequest req = new TagShipmentRequest("se-28529731", "Fragile");            

            TagShipmentResponse res = sdk.shipments.tagShipment(req);

            if (res.tagShipmentResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagShipment

Remove an existing tag from the Shipment object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagShipmentRequest;
import org.openapis.openapi.models.operations.UntagShipmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagShipmentRequest req = new UntagShipmentRequest("se-28529731", "Fragile");            

            UntagShipmentResponse res = sdk.shipments.untagShipment(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateShipment

Update a shipment object based on its ID

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateShipmentRequest;
import org.openapis.openapi.models.operations.UpdateShipmentResponse;
import org.openapis.openapi.models.shared.AdvancedShipmentOptions;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsBillToPartyEnum;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsFedexFreight;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsOriginTypeEnum;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsWeight;
import org.openapis.openapi.models.shared.CollectOnDelivery;
import org.openapis.openapi.models.shared.CollectOnDeliveryPaymentTypeEnum;
import org.openapis.openapi.models.shared.CustomsItemInput;
import org.openapis.openapi.models.shared.Dimensions;
import org.openapis.openapi.models.shared.DimensionsDimensionUnitEnum;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.LabelMessages;
import org.openapis.openapi.models.shared.MonetaryValue;
import org.openapis.openapi.models.shared.OrderSourceNameEnum;
import org.openapis.openapi.models.shared.PackageInput;
import org.openapis.openapi.models.shared.PackageMonetaryValue;
import org.openapis.openapi.models.shared.PaymentAmount;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShipmentItem;
import org.openapis.openapi.models.shared.ShippingAddress;
import org.openapis.openapi.models.shared.ShippingAddressAddressResidentialIndicatorEnum;
import org.openapis.openapi.models.shared.TaxIdentifier;
import org.openapis.openapi.models.shared.TaxableEntityTypeEnum;
import org.openapis.openapi.models.shared.UpdateShipmentRequestBodyDeliveryConfirmationEnum;
import org.openapis.openapi.models.shared.UpdateShipmentRequestBodyInput;
import org.openapis.openapi.models.shared.UpdateShipmentRequestBodyInsuranceProviderEnum;
import org.openapis.openapi.models.shared.UpdateShipmentRequestBodyInternationalShipmentOptionsInput;
import org.openapis.openapi.models.shared.UpdateShipmentRequestBodyInternationalShipmentOptionsNonDeliveryEnum;
import org.openapis.openapi.models.shared.UpdateShipmentRequestBodyInternationalShipmentOptionsPackageContentsEnum;
import org.openapis.openapi.models.shared.UpdateShipmentRequestBodyOriginTypeEnum;
import org.openapis.openapi.models.shared.UpdateShipmentRequestBodyValidateAddressEnum;
import org.openapis.openapi.models.shared.Weight;
import org.openapis.openapi.models.shared.WeightUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateShipmentRequest req = new UpdateShipmentRequest("se-28529731",                 new UpdateShipmentRequestBodyInput(                new ShippingAddress("1999 Bishop Grandin Blvd.", ShippingAddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                                                addressLine2 = "Unit 408";
                                                addressLine3 = "Building #7";
                                                companyName = "The Home Depot";
                                                email = "example@example.com";
                                                instructions = "dolorum";
                                            }};,                 new ShippingAddress("1999 Bishop Grandin Blvd.", ShippingAddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                                                addressLine2 = "Unit 408";
                                                addressLine3 = "Building #7";
                                                companyName = "The Home Depot";
                                                email = "example@example.com";
                                                instructions = "architecto";
                                            }};) {{
                                advancedOptions = new AdvancedShipmentOptions() {{
                                    billToAccount = "omnis";
                                    billToCountryCode = "CA";
                                    billToParty = AdvancedShipmentOptionsBillToPartyEnum.THIRD_PARTY;
                                    billToPostalCode = "quasi";
                                    collectOnDelivery = new CollectOnDelivery() {{
                                        paymentAmount = new PaymentAmount() {{
                                            amount = 8694.89;
                                            currency = "et";
                                        }};;
                                        paymentType = CollectOnDeliveryPaymentTypeEnum.CASH;
                                    }};;
                                    containsAlcohol = false;
                                    customField1 = "ipsa";
                                    customField2 = "minima";
                                    customField3 = "veritatis";
                                    deliveredDutyPaid = false;
                                    dryIce = false;
                                    dryIceWeight = new AdvancedShipmentOptionsWeight(WeightUnitEnum.POUND, 2371.73);;
                                    fedexFreight = new AdvancedShipmentOptionsFedexFreight() {{
                                        bookingConfirmation = "iste";
                                        shipperLoadAndCount = "temporibus";
                                    }};;
                                    freightClass = "77.5";
                                    nonMachinable = false;
                                    originType = AdvancedShipmentOptionsOriginTypeEnum.PICKUP;
                                    saturdayDelivery = false;
                                    shipperRelease = false;
                                    thirdPartyConsignee = false;
                                    useUpsGroundFreightPricing = false;
                                }};;
                                carrierId = "se-28529731";
                                confirmation = UpdateShipmentRequestBodyDeliveryConfirmationEnum.ADULT_SIGNATURE;
                                customs = new UpdateShipmentRequestBodyInternationalShipmentOptionsInput(UpdateShipmentRequestBodyInternationalShipmentOptionsPackageContentsEnum.MERCHANDISE, UpdateShipmentRequestBodyInternationalShipmentOptionsNonDeliveryEnum.TREAT_AS_ABANDONED) {{
                                    customsItems = new org.openapis.openapi.models.shared.CustomsItemInput[]{{
                                        add(new CustomsItemInput() {{
                                            countryOfOrigin = "CA";
                                            description = "mollitia";
                                            harmonizedTariffCode = "3926.1";
                                            quantity = 68074;
                                            sku = "corrupti";
                                            skuDescription = "non";
                                            unitOfMeasure = "voluptatem";
                                            value = new MonetaryValue(2531.91, "impedit") {{
                                                amount = 2211.61;
                                                currency = "occaecati";
                                            }};
                                            weight = new Weight(WeightUnitEnum.POUND, 4910.25) {{
                                                unit = WeightUnitEnum.POUND;
                                                value = 3762.26;
                                            }};
                                        }}),
                                        add(new CustomsItemInput() {{
                                            countryOfOrigin = "CA";
                                            description = "dicta";
                                            harmonizedTariffCode = "3926.1";
                                            quantity = 981640;
                                            sku = "natus";
                                            skuDescription = "velit";
                                            unitOfMeasure = "voluptatibus";
                                            value = new MonetaryValue(456.59, "ea") {{
                                                amount = 3743.23;
                                                currency = "asperiores";
                                            }};
                                            weight = new Weight(WeightUnitEnum.KILOGRAM, 6387.62) {{
                                                unit = WeightUnitEnum.OUNCE;
                                                value = 1629.54;
                                            }};
                                        }}),
                                    }};
                                }};;
                                externalOrderId = "maxime";
                                externalShipmentId = "dignissimos";
                                insuranceProvider = UpdateShipmentRequestBodyInsuranceProviderEnum.CARRIER;
                                isReturn = false;
                                items = new org.openapis.openapi.models.shared.ShipmentItem[]{{
                                    add(new ShipmentItem() {{
                                        asin = "B00005N5PF";
                                        externalOrderId = "nemo";
                                        externalOrderItemId = "quae";
                                        name = "Robyn Schmitt I";
                                        orderSourceCode = OrderSourceNameEnum.STITCH_LABS;
                                        quantity = 662505;
                                        salesOrderId = "suscipit";
                                        salesOrderItemId = "velit";
                                        sku = "culpa";
                                    }}),
                                    add(new ShipmentItem() {{
                                        asin = "B00005N5PF";
                                        externalOrderId = "est";
                                        externalOrderItemId = "recusandae";
                                        name = "Nicolas Kassulke";
                                        orderSourceCode = OrderSourceNameEnum.GROUPON_GOODS;
                                        quantity = 287051;
                                        salesOrderId = "possimus";
                                        salesOrderItemId = "facilis";
                                        sku = "cum";
                                    }}),
                                    add(new ShipmentItem() {{
                                        asin = "B00005N5PF";
                                        externalOrderId = "commodi";
                                        externalOrderItemId = "in";
                                        name = "Lela Shields";
                                        orderSourceCode = OrderSourceNameEnum.JANE;
                                        quantity = 46007;
                                        salesOrderId = "cum";
                                        salesOrderItemId = "consectetur";
                                        sku = "in";
                                    }}),
                                    add(new ShipmentItem() {{
                                        asin = "B00005N5PF";
                                        externalOrderId = "exercitationem";
                                        externalOrderItemId = "earum";
                                        name = "Jesus Yost";
                                        orderSourceCode = OrderSourceNameEnum.STITCH_LABS;
                                        quantity = 904949;
                                        salesOrderId = "necessitatibus";
                                        salesOrderItemId = "dolore";
                                        sku = "sunt";
                                    }}),
                                }};
                                orderSourceCode = OrderSourceNameEnum.VOLUSION;
                                originType = UpdateShipmentRequestBodyOriginTypeEnum.PICKUP;
                                packages = new org.openapis.openapi.models.shared.PackageInput[]{{
                                    add(new PackageInput(                new Weight(WeightUnitEnum.POUND, 7955.35);) {{
                                        contentDescription = "Hand knitted wool socks";
                                        dimensions = new Dimensions(8915.23, 2334.2, DimensionsDimensionUnitEnum.INCH, 6897.68) {{
                                            height = 2282.63;
                                            length = 1059.06;
                                            unit = DimensionsDimensionUnitEnum.INCH;
                                            width = 9509.53;
                                        }};
                                        externalPackageId = "laboriosam";
                                        insuredValue = new PackageMonetaryValue(7307.09, "vitae") {{
                                            amount = 583.56;
                                            currency = "voluptates";
                                        }};
                                        labelMessages = new LabelMessages("aspernatur", "voluptas", "voluptas") {{
                                            reference1 = "accusamus";
                                            reference2 = "similique";
                                            reference3 = "tempora";
                                        }};
                                        packageCode = "small_flat_rate_box";
                                        packageId = "se-28529731";
                                        weight = new Weight(WeightUnitEnum.GRAM, 6801.16) {{
                                            unit = WeightUnitEnum.OUNCE;
                                            value = 3244.05;
                                        }};
                                    }}),
                                }};
                                returnTo = new ShippingAddress("1999 Bishop Grandin Blvd.", ShippingAddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                                    addressLine2 = "Unit 408";
                                    addressLine3 = "Building #7";
                                    companyName = "The Home Depot";
                                    email = "example@example.com";
                                    instructions = "dolores";
                                }};;
                                serviceCode = "usps_first_class_mail";
                                shipDate = OffsetDateTime.parse("2018-09-23T00:00:00.000Z");
                                shipmentNumber = "blanditiis";
                                taxIdentifiers = new org.openapis.openapi.models.shared.TaxIdentifier[]{{
                                    add(new TaxIdentifier(IdentifierTypeEnum.SSN, "adipisci", TaxableEntityTypeEnum.RECIPIENT, "blanditiis") {{
                                        identifierType = IdentifierTypeEnum.SSN;
                                        issuingAuthority = "aliquam";
                                        taxableEntityType = TaxableEntityTypeEnum.RECIPIENT;
                                        value = "temporibus";
                                    }}),
                                    add(new TaxIdentifier(IdentifierTypeEnum.TIN, "pariatur", TaxableEntityTypeEnum.RECIPIENT, "hic") {{
                                        identifierType = IdentifierTypeEnum.TIN;
                                        issuingAuthority = "hic";
                                        taxableEntityType = TaxableEntityTypeEnum.SHIPPER;
                                        value = "culpa";
                                    }}),
                                }};
                                validateAddress = UpdateShipmentRequestBodyValidateAddressEnum.VALIDATE_ONLY;
                                warehouseId = "se-28529731";
                            }};);            

            UpdateShipmentResponse res = sdk.shipments.updateShipment(req);

            if (res.updateShipmentResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
