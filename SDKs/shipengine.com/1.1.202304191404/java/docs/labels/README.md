# labels

## Overview

Print shipping labels for any of the top global carriers in minutes—instead of weeks. Simply [connect your existing carrier accounts](https://www.shipengine.com/docs/carriers/setup/) in the API dashboard, and then [begin creating labels](https://www.shipengine.com/docs/shipping/use-a-carrier-service/).


Follow this quick start guide to create your first shipping label with ShipEngine
<https://www.shipengine.com/docs/labels/create-a-label/>
### Available Operations

* [createLabel](#createlabel) - Purchase Label
* [createLabelFromRate](#createlabelfromrate) - Purchase Label with Rate ID
* [createLabelFromShipment](#createlabelfromshipment) - Purchase Label with Shipment ID
* [createReturnLabel](#createreturnlabel) - Create a return label
* [getLabelByExternalShipmentId](#getlabelbyexternalshipmentid) - Get Label By External Shipment ID
* [getLabelById](#getlabelbyid) - Get Label By ID
* [getTrackingLogFromLabel](#gettrackinglogfromlabel) - Get Label Tracking Information
* [listLabels](#listlabels) - List labels
* [voidLabel](#voidlabel) - Void a Label By ID

## createLabel

Purchase and print a label for shipment

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLabelResponse;
import org.openapis.openapi.models.shared.AdvancedShipmentOptions;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsBillToPartyEnum;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsFedexFreight;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsOriginTypeEnum;
import org.openapis.openapi.models.shared.AdvancedShipmentOptionsWeight;
import org.openapis.openapi.models.shared.CollectOnDelivery;
import org.openapis.openapi.models.shared.CollectOnDeliveryPaymentTypeEnum;
import org.openapis.openapi.models.shared.CreateLabelRequestBodyDisplaySchemeEnum;
import org.openapis.openapi.models.shared.CreateLabelRequestBodyInput;
import org.openapis.openapi.models.shared.CreateLabelRequestBodyLabelDownloadTypeEnum;
import org.openapis.openapi.models.shared.CreateLabelRequestBodyLabelFormatEnum;
import org.openapis.openapi.models.shared.CreateLabelRequestBodyLabelLayoutEnum;
import org.openapis.openapi.models.shared.CreateLabelRequestBodyPartialShipmentDeliveryConfirmationEnum;
import org.openapis.openapi.models.shared.CreateLabelRequestBodyPartialShipmentInput;
import org.openapis.openapi.models.shared.CreateLabelRequestBodyPartialShipmentInsuranceProviderEnum;
import org.openapis.openapi.models.shared.CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput;
import org.openapis.openapi.models.shared.CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsNonDeliveryEnum;
import org.openapis.openapi.models.shared.CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsPackageContentsEnum;
import org.openapis.openapi.models.shared.CreateLabelRequestBodyPartialShipmentOriginTypeEnum;
import org.openapis.openapi.models.shared.CreateLabelRequestBodyValidateAddressEnum;
import org.openapis.openapi.models.shared.CustomsItemInput;
import org.openapis.openapi.models.shared.Dimensions;
import org.openapis.openapi.models.shared.DimensionsDimensionUnitEnum;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.LabelChargeEventEnum;
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
                .setSecurity(new Security("culpa") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateLabelRequestBodyInput req = new CreateLabelRequestBodyInput(                new CreateLabelRequestBodyPartialShipmentInput(                new AdvancedShipmentOptions() {{
                                                billToAccount = "consequuntur";
                                                billToCountryCode = "CA";
                                                billToParty = AdvancedShipmentOptionsBillToPartyEnum.THIRD_PARTY;
                                                billToPostalCode = "mollitia";
                                                collectOnDelivery = new CollectOnDelivery() {{
                                                    paymentAmount = new PaymentAmount() {{
                                                        amount = 5818.5;
                                                        currency = "numquam";
                                                    }};;
                                                    paymentType = CollectOnDeliveryPaymentTypeEnum.CASH;
                                                }};;
                                                containsAlcohol = false;
                                                customField1 = "quam";
                                                customField2 = "molestiae";
                                                customField3 = "velit";
                                                deliveredDutyPaid = false;
                                                dryIce = false;
                                                dryIceWeight = new AdvancedShipmentOptionsWeight(WeightUnitEnum.GRAM, 1589.69);;
                                                fedexFreight = new AdvancedShipmentOptionsFedexFreight() {{
                                                    bookingConfirmation = "quis";
                                                    shipperLoadAndCount = "vitae";
                                                }};;
                                                freightClass = "77.5";
                                                nonMachinable = false;
                                                originType = AdvancedShipmentOptionsOriginTypeEnum.DROP_OFF;
                                                saturdayDelivery = false;
                                                shipperRelease = false;
                                                thirdPartyConsignee = false;
                                                useUpsGroundFreightPricing = false;
                                            }};, "se-28529731", CreateLabelRequestBodyPartialShipmentDeliveryConfirmationEnum.DIRECT_SIGNATURE,                 new CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput(CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsPackageContentsEnum.DOCUMENTS, CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsNonDeliveryEnum.RETURN_TO_SENDER) {{
                                                customsItems = new org.openapis.openapi.models.shared.CustomsItemInput[]{{
                                                    add(new CustomsItemInput() {{
                                                        countryOfOrigin = "CA";
                                                        description = "sequi";
                                                        harmonizedTariffCode = "3926.1";
                                                        quantity = 949572;
                                                        sku = "ipsam";
                                                        skuDescription = "id";
                                                        unitOfMeasure = "possimus";
                                                        value = new MonetaryValue(6228.46, "temporibus") {{
                                                            amount = 135.71;
                                                            currency = "quasi";
                                                        }};
                                                        weight = new Weight(WeightUnitEnum.KILOGRAM, 9764.6) {{
                                                            unit = WeightUnitEnum.GRAM;
                                                            value = 960.98;
                                                        }};
                                                    }}),
                                                    add(new CustomsItemInput() {{
                                                        countryOfOrigin = "CA";
                                                        description = "vero";
                                                        harmonizedTariffCode = "3926.1";
                                                        quantity = 468651;
                                                        sku = "praesentium";
                                                        skuDescription = "voluptatibus";
                                                        unitOfMeasure = "ipsa";
                                                        value = new MonetaryValue(7392.64, "perferendis") {{
                                                            amount = 6048.46;
                                                            currency = "voluptate";
                                                        }};
                                                        weight = new Weight(WeightUnitEnum.OUNCE, 9795.87) {{
                                                            unit = WeightUnitEnum.POUND;
                                                            value = 4417.11;
                                                        }};
                                                    }}),
                                                    add(new CustomsItemInput() {{
                                                        countryOfOrigin = "CA";
                                                        description = "dicta";
                                                        harmonizedTariffCode = "3926.1";
                                                        quantity = 359444;
                                                        sku = "dolore";
                                                        skuDescription = "iusto";
                                                        unitOfMeasure = "dicta";
                                                        value = new MonetaryValue(8804.76, "commodi") {{
                                                            amount = 6886.61;
                                                            currency = "enim";
                                                        }};
                                                        weight = new Weight(WeightUnitEnum.POUND, 6924.72) {{
                                                            unit = WeightUnitEnum.KILOGRAM;
                                                            value = 641.47;
                                                        }};
                                                    }}),
                                                    add(new CustomsItemInput() {{
                                                        countryOfOrigin = "CA";
                                                        description = "molestias";
                                                        harmonizedTariffCode = "3926.1";
                                                        quantity = 566602;
                                                        sku = "pariatur";
                                                        skuDescription = "modi";
                                                        unitOfMeasure = "praesentium";
                                                        value = new MonetaryValue(939.4, "repudiandae") {{
                                                            amount = 5232.48;
                                                            currency = "voluptates";
                                                        }};
                                                        weight = new Weight(WeightUnitEnum.KILOGRAM, 2777.18) {{
                                                            unit = WeightUnitEnum.GRAM;
                                                            value = 831.12;
                                                        }};
                                                    }}),
                                                }};
                                            }};, CreateLabelRequestBodyPartialShipmentInsuranceProviderEnum.SHIPSURANCE,                 new org.openapis.openapi.models.shared.PackageInput[]{{
                                                add(new PackageInput(                new Weight(WeightUnitEnum.OUNCE, 9621.89);) {{
                                                    contentDescription = "Hand knitted wool socks";
                                                    dimensions = new Dimensions(7163.27, 8413.86, DimensionsDimensionUnitEnum.INCH, 2647.3) {{
                                                        height = 6674.11;
                                                        length = 8423.42;
                                                        unit = DimensionsDimensionUnitEnum.INCH;
                                                        width = 6471.74;
                                                    }};
                                                    externalPackageId = "qui";
                                                    insuredValue = new PackageMonetaryValue(5528.22, "perferendis") {{
                                                        amount = 3978.21;
                                                        currency = "cupiditate";
                                                    }};
                                                    labelMessages = new LabelMessages("alias", "fugit", "dolorum") {{
                                                        reference1 = "magni";
                                                        reference2 = "assumenda";
                                                        reference3 = "ipsam";
                                                    }};
                                                    packageCode = "small_flat_rate_box";
                                                    packageId = "se-28529731";
                                                    weight = new Weight(WeightUnitEnum.GRAM, 7351.94) {{
                                                        unit = WeightUnitEnum.GRAM;
                                                        value = 2700.08;
                                                    }};
                                                }}),
                                            }},                 new ShippingAddress("1999 Bishop Grandin Blvd.", ShippingAddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                                                addressLine2 = "Unit 408";
                                                addressLine3 = "Building #7";
                                                companyName = "The Home Depot";
                                                email = "example@example.com";
                                                instructions = "eum";
                                            }};, "usps_first_class_mail", OffsetDateTime.parse("2018-09-23T00:00:00.000Z"),                 new ShippingAddress("1999 Bishop Grandin Blvd.", ShippingAddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                                                addressLine2 = "Unit 408";
                                                addressLine3 = "Building #7";
                                                companyName = "The Home Depot";
                                                email = "example@example.com";
                                                instructions = "non";
                                            }};,                 new ShippingAddress("1999 Bishop Grandin Blvd.", ShippingAddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                                                addressLine2 = "Unit 408";
                                                addressLine3 = "Building #7";
                                                companyName = "The Home Depot";
                                                email = "example@example.com";
                                                instructions = "eligendi";
                                            }};, "se-28529731") {{
                                externalOrderId = "sint";
                                externalShipmentId = "aliquid";
                                isReturn = false;
                                items = new org.openapis.openapi.models.shared.ShipmentItem[]{{
                                    add(new ShipmentItem() {{
                                        asin = "B00005N5PF";
                                        externalOrderId = "necessitatibus";
                                        externalOrderItemId = "sint";
                                        name = "Curtis Toy";
                                        orderSourceCode = OrderSourceNameEnum.GROUPON_GOODS;
                                        quantity = 449198;
                                        salesOrderId = "illum";
                                        salesOrderItemId = "maiores";
                                        sku = "rerum";
                                    }}),
                                    add(new ShipmentItem() {{
                                        asin = "B00005N5PF";
                                        externalOrderId = "dicta";
                                        externalOrderItemId = "magnam";
                                        name = "Irving Jenkins";
                                        orderSourceCode = OrderSourceNameEnum.WALMART;
                                        quantity = 249796;
                                        salesOrderId = "occaecati";
                                        salesOrderItemId = "enim";
                                        sku = "accusamus";
                                    }}),
                                    add(new ShipmentItem() {{
                                        asin = "B00005N5PF";
                                        externalOrderId = "delectus";
                                        externalOrderItemId = "quidem";
                                        name = "Marco Olson";
                                        orderSourceCode = OrderSourceNameEnum.VOLUSION;
                                        quantity = 230533;
                                        salesOrderId = "deserunt";
                                        salesOrderItemId = "nisi";
                                        sku = "vel";
                                    }}),
                                }};
                                orderSourceCode = OrderSourceNameEnum.SHOPIFY;
                                originType = CreateLabelRequestBodyPartialShipmentOriginTypeEnum.DROP_OFF;
                                shipmentNumber = "molestiae";
                                taxIdentifiers = new org.openapis.openapi.models.shared.TaxIdentifier[]{{
                                    add(new TaxIdentifier(IdentifierTypeEnum.SSN, "labore", TaxableEntityTypeEnum.SHIPPER, "natus") {{
                                        identifierType = IdentifierTypeEnum.EIN;
                                        issuingAuthority = "magnam";
                                        taxableEntityType = TaxableEntityTypeEnum.RECIPIENT;
                                        value = "id";
                                    }}),
                                }};
                            }};) {{
                chargeEvent = LabelChargeEventEnum.ON_CARRIER_ACCEPTANCE;
                displayScheme = CreateLabelRequestBodyDisplaySchemeEnum.QR_CODE;
                isReturnLabel = false;
                labelDownloadType = CreateLabelRequestBodyLabelDownloadTypeEnum.INLINE;
                labelFormat = CreateLabelRequestBodyLabelFormatEnum.PDF;
                labelImageId = "img_DtBXupDBxREpHnwEXhTfgK";
                labelLayout = CreateLabelRequestBodyLabelLayoutEnum.FOURX6;
                outboundLabelId = "se-28529731";
                rmaNumber = "magnam";
                shipFromServicePointId = "614940";
                shipToServicePointId = "614940";
                testLabel = false;
                validateAddress = CreateLabelRequestBodyValidateAddressEnum.NO_VALIDATION;
            }};            

            CreateLabelResponse res = sdk.labels.createLabel(req);

            if (res.createLabelResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLabelFromRate

When retrieving rates for shipments using the `/rates` endpoint, the returned information contains a `rate_id` property that can be used
to generate a label without having to refill in the shipment information repeatedly.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLabelFromRateRequest;
import org.openapis.openapi.models.operations.CreateLabelFromRateResponse;
import org.openapis.openapi.models.shared.CreateLabelFromRateRequestBody;
import org.openapis.openapi.models.shared.CreateLabelFromRateRequestBodyDisplaySchemeEnum;
import org.openapis.openapi.models.shared.CreateLabelFromRateRequestBodyLabelFormatEnum;
import org.openapis.openapi.models.shared.CreateLabelFromRateRequestBodyLabelLayoutEnum;
import org.openapis.openapi.models.shared.LabelDownloadTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ValidateAddressEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLabelFromRateRequest req = new CreateLabelFromRateRequest(                new CreateLabelFromRateRequestBody() {{
                                displayScheme = CreateLabelFromRateRequestBodyDisplaySchemeEnum.QR_CODE;
                                labelDownloadType = LabelDownloadTypeEnum.INLINE;
                                labelFormat = CreateLabelFromRateRequestBodyLabelFormatEnum.PNG;
                                labelLayout = CreateLabelFromRateRequestBodyLabelLayoutEnum.LETTER;
                                validateAddress = ValidateAddressEnum.NO_VALIDATION;
                            }};, "se-28529731");            

            CreateLabelFromRateResponse res = sdk.labels.createLabelFromRate(req);

            if (res.createLabelFromRateResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLabelFromShipment

Purchase a label using a shipment ID that has already been created with the desired address and
package info.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLabelFromShipmentRequest;
import org.openapis.openapi.models.operations.CreateLabelFromShipmentResponse;
import org.openapis.openapi.models.shared.CreateLabelFromShipmentRequestBody;
import org.openapis.openapi.models.shared.CreateLabelFromShipmentRequestBodyDisplaySchemeEnum;
import org.openapis.openapi.models.shared.CreateLabelFromShipmentRequestBodyLabelFormatEnum;
import org.openapis.openapi.models.shared.CreateLabelFromShipmentRequestBodyLabelLayoutEnum;
import org.openapis.openapi.models.shared.LabelDownloadTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ValidateAddressEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLabelFromShipmentRequest req = new CreateLabelFromShipmentRequest(                new CreateLabelFromShipmentRequestBody() {{
                                displayScheme = CreateLabelFromShipmentRequestBodyDisplaySchemeEnum.LABEL_AND_QR_CODE;
                                labelDownloadType = LabelDownloadTypeEnum.INLINE;
                                labelFormat = CreateLabelFromShipmentRequestBodyLabelFormatEnum.PDF;
                                labelLayout = CreateLabelFromShipmentRequestBodyLabelLayoutEnum.FOURX6;
                                validateAddress = ValidateAddressEnum.NO_VALIDATION;
                            }};, "se-28529731");            

            CreateLabelFromShipmentResponse res = sdk.labels.createLabelFromShipment(req);

            if (res.createLabelFromShipmentResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReturnLabel

Create a return label

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReturnLabelRequest;
import org.openapis.openapi.models.operations.CreateReturnLabelResponse;
import org.openapis.openapi.models.shared.CreateReturnLabelRequestBody;
import org.openapis.openapi.models.shared.CreateReturnLabelRequestBodyDisplaySchemeEnum;
import org.openapis.openapi.models.shared.CreateReturnLabelRequestBodyLabelDownloadTypeEnum;
import org.openapis.openapi.models.shared.CreateReturnLabelRequestBodyLabelFormatEnum;
import org.openapis.openapi.models.shared.CreateReturnLabelRequestBodyLabelLayoutEnum;
import org.openapis.openapi.models.shared.LabelChargeEventEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReturnLabelRequest req = new CreateReturnLabelRequest(                new CreateReturnLabelRequestBody() {{
                                chargeEvent = LabelChargeEventEnum.CARRIER_DEFAULT;
                                displayScheme = CreateReturnLabelRequestBodyDisplaySchemeEnum.QR_CODE;
                                labelDownloadType = CreateReturnLabelRequestBodyLabelDownloadTypeEnum.URL;
                                labelFormat = CreateReturnLabelRequestBodyLabelFormatEnum.PNG;
                                labelImageId = "img_DtBXupDBxREpHnwEXhTfgK";
                                labelLayout = CreateReturnLabelRequestBodyLabelLayoutEnum.LETTER;
                            }};, "se-28529731");            

            CreateReturnLabelResponse res = sdk.labels.createReturnLabel(req);

            if (res.createReturnLabelResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLabelByExternalShipmentId

Find a label by using the external shipment id that was used during label creation


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLabelByExternalShipmentIdRequest;
import org.openapis.openapi.models.operations.GetLabelByExternalShipmentIdResponse;
import org.openapis.openapi.models.shared.LabelDownloadTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLabelByExternalShipmentIdRequest req = new GetLabelByExternalShipmentIdRequest("eius") {{
                labelDownloadType = LabelDownloadTypeEnum.INLINE;
            }};            

            GetLabelByExternalShipmentIdResponse res = sdk.labels.getLabelByExternalShipmentId(req);

            if (res.getLabelByExternalShipmentIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLabelById

Retrieve information for individual labels.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLabelByIdRequest;
import org.openapis.openapi.models.operations.GetLabelByIdResponse;
import org.openapis.openapi.models.shared.LabelDownloadTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLabelByIdRequest req = new GetLabelByIdRequest("se-28529731") {{
                labelDownloadType = LabelDownloadTypeEnum.INLINE;
            }};            

            GetLabelByIdResponse res = sdk.labels.getLabelById(req);

            if (res.getLabelByIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrackingLogFromLabel

Retrieve the label's tracking information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrackingLogFromLabelRequest;
import org.openapis.openapi.models.operations.GetTrackingLogFromLabelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTrackingLogFromLabelRequest req = new GetTrackingLogFromLabelRequest("se-28529731");            

            GetTrackingLogFromLabelResponse res = sdk.labels.getTrackingLogFromLabel(req);

            if (res.getTrackingLogFromLabelResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLabels

This endpoint returns a list of labels that you've [created](https://www.shipengine.com/docs/labels/create-a-label/). You can optionally filter the results as well as control their sort order and the number of results returned at a time.

By default, all labels are returned, 25 at a time, starting with the most recently created ones.  You can combine multiple filter options to narrow-down the results.  For example, if you only want to get your UPS labels for your east coast warehouse you could query by both `warehouse_id` and `carrier_id`


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLabelsRequest;
import org.openapis.openapi.models.operations.ListLabelsResponse;
import org.openapis.openapi.models.operations.ListLabelsSortByEnum;
import org.openapis.openapi.models.operations.ListLabelsSortDirSortDirEnum;
import org.openapis.openapi.models.shared.LabelStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLabelsRequest req = new ListLabelsRequest() {{
                batchId = "se-28529731";
                carrierId = "se-28529731";
                createdAtEnd = OffsetDateTime.parse("2022-01-30T09:19:56.236Z");
                createdAtStart = OffsetDateTime.parse("2022-04-15T07:14:46.128Z");
                labelStatus = LabelStatusEnum.COMPLETED;
                page = 998848;
                pageSize = 841140;
                rateId = "se-28529731";
                serviceCode = "usps_first_class_mail";
                shipmentId = "se-28529731";
                sortBy = ListLabelsSortByEnum.MODIFIED_AT;
                sortDir = ListLabelsSortDirSortDirEnum.DESC;
                trackingNumber = "pariatur";
                warehouseId = "se-28529731";
            }};            

            ListLabelsResponse res = sdk.labels.listLabels(req);

            if (res.listLabelsResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## voidLabel

Void a label by ID to get a refund.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VoidLabelRequest;
import org.openapis.openapi.models.operations.VoidLabelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            VoidLabelRequest req = new VoidLabelRequest("se-28529731");            

            VoidLabelResponse res = sdk.labels.voidLabel(req);

            if (res.voidLabelResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
