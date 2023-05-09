# rates

## Overview

Make sure you ship as cost-effectively as possible by [quickly comparing rates](https://www.shipengine.com/docs/rates/) using the ShipEngine Rates API. As long as you have the carrier connected to your account, you'll be able to see and compare different rates and services.


This quick start guide shows you how to get shipping rates for multiple carriers so you can choose the fastest, cheapest, or most reliable option.

<https://www.shipengine.com/docs/rates/>
### Available Operations

* [calculateRates](#calculaterates) - Get Shipping Rates
* [compareBulkRates](#comparebulkrates) - Get Bulk Rates
* [estimateRates](#estimaterates) - Estimate Rates
* [getRateById](#getratebyid) - Get Rate By ID

## calculateRates

It's not uncommon that you want to give your customer the choice between whether they want to ship the fastest, cheapest, or the most trusted route. Most companies don't solely ship things using a single shipping option;
so we provide functionality to show you all your options!


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalculateRatesResponse;
import org.openapis.openapi.models.shared.CalculateRatesRequestBody;
import org.openapis.openapi.models.shared.RateRequestBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CalculateRatesRequestBody req = new CalculateRatesRequestBody() {{
                rateOptions = new RateRequestBody(                new String[]{{
                                    add("se-28529731"),
                                }}) {{
                    calculateTaxAmount = false;
                    isReturn = false;
                    packageTypes = new String[]{{
                        add("nostrum"),
                        add("hic"),
                        add("recusandae"),
                        add("omnis"),
                    }};
                    preferredCurrency = "facilis";
                    serviceCodes = new String[]{{
                        add("voluptatem"),
                        add("porro"),
                        add("consequuntur"),
                    }};
                }};;
            }};            

            CalculateRatesResponse res = sdk.rates.calculateRates(req);

            if (res.calculateRatesResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## compareBulkRates

Get Bulk Shipment Rates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompareBulkRatesResponse;
import org.openapis.openapi.models.shared.CompareBulkRatesRequestBody;
import org.openapis.openapi.models.shared.RateRequestBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CompareBulkRatesRequestBody req = new CompareBulkRatesRequestBody(                new RateRequestBody(                new String[]{{
                                                add("se-28529731"),
                                                add("se-28529731"),
                                                add("se-28529731"),
                                            }}) {{
                                calculateTaxAmount = false;
                                isReturn = false;
                                packageTypes = new String[]{{
                                    add("occaecati"),
                                }};
                                preferredCurrency = "rerum";
                                serviceCodes = new String[]{{
                                    add("asperiores"),
                                }};
                            }};);            

            CompareBulkRatesResponse res = sdk.rates.compareBulkRates(req);

            if (res.compareBulkRatesResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimateRates

Get Rate Estimates

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimateRatesResponse;
import org.openapis.openapi.models.shared.AddressResidentialIndicatorEnum;
import org.openapis.openapi.models.shared.DeliveryConfirmationEnum;
import org.openapis.openapi.models.shared.Dimensions;
import org.openapis.openapi.models.shared.DimensionsDimensionUnitEnum;
import org.openapis.openapi.models.shared.EstimateRatesRequestBody;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Weight;
import org.openapis.openapi.models.shared.WeightUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.EstimateRatesRequestBody req = new EstimateRatesRequestBody("Austin", "CA", "78756-3717", "Austin", OffsetDateTime.parse("2018-09-23T15:00:00.000Z"), "Austin", "CA", "78756-3717", "Houston",                 new Weight(WeightUnitEnum.OUNCE, 6139.66);) {{
                addressResidentialIndicator = AddressResidentialIndicatorEnum.NO;
                confirmation = DeliveryConfirmationEnum.ADULT_SIGNATURE;
                dimensions = new Dimensions(8642.82, 5899.1, DimensionsDimensionUnitEnum.CENTIMETER, 7301.22);;
            }};            

            EstimateRatesResponse res = sdk.rates.estimateRates(req);

            if (res.estimateRatesResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRateById

Retrieve a previously queried rate by its ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRateByIdRequest;
import org.openapis.openapi.models.operations.GetRateByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRateByIdRequest req = new GetRateByIdRequest("se-28529731");            

            GetRateByIdResponse res = sdk.rates.getRateById(req);

            if (res.getRateByIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
