# currencies

### Available Operations

* [currenciesHistoryGET](#currencieshistoryget) - Get historical prices for requested currency pairs
* [currenciesRateGET](#currenciesrateget) - Get latest mid rate for requested currency pairs
* [currenciesSummaryGET](#currenciessummaryget) - Get latest Summary for requested currency pairs
* [currenciesSupportedCurrenciesHistoryGET](#currenciessupportedcurrencieshistoryget) - Get list of currency pairs supported by the history endpoint
* [currenciesSupportedCurrenciesRateGET](#currenciessupportedcurrenciesrateget) - Get list of currencies supported by the rate endpoint
* [currenciesSupportedCurrenciesSummaryGET](#currenciessupportedcurrenciessummaryget) - Get list of currency pairs supported by the Summary endpoint

## currenciesHistoryGET

Historical OHLC data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CurrenciesHistoryGETFormatEnum;
import org.openapis.openapi.models.operations.CurrenciesHistoryGETRequest;
import org.openapis.openapi.models.operations.CurrenciesHistoryGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            CurrenciesHistoryGETRequest req = new CurrenciesHistoryGETRequest("error", OffsetDateTime.parse("2022-03-26T09:37:56.283Z")) {{
                end = OffsetDateTime.parse("2022-09-14T09:35:47.986Z");
                format = CurrenciesHistoryGETFormatEnum.XML;
                interval = "ipsa";
            }};            

            CurrenciesHistoryGETResponse res = sdk.currencies.currenciesHistoryGET(req);

            if (res.intervalCollectionResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## currenciesRateGET

Current Mid Rate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CurrenciesRateGETFormatEnum;
import org.openapis.openapi.models.operations.CurrenciesRateGETRequest;
import org.openapis.openapi.models.operations.CurrenciesRateGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            CurrenciesRateGETRequest req = new CurrenciesRateGETRequest("tempora") {{
                format = CurrenciesRateGETFormatEnum.JSON;
            }};            

            CurrenciesRateGETResponse res = sdk.currencies.currenciesRateGET(req);

            if (res.rateResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## currenciesSummaryGET

Current and daily summary information combined into a single quote

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CurrenciesSummaryGETFormatEnum;
import org.openapis.openapi.models.operations.CurrenciesSummaryGETRequest;
import org.openapis.openapi.models.operations.CurrenciesSummaryGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            CurrenciesSummaryGETRequest req = new CurrenciesSummaryGETRequest("minus") {{
                format = CurrenciesSummaryGETFormatEnum.XML;
            }};            

            CurrenciesSummaryGETResponse res = sdk.currencies.currenciesSummaryGET(req);

            if (res.summaryResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## currenciesSupportedCurrenciesHistoryGET

Only the currency pairs in the direction noted can be used with the history endpoint.
For example: USD/CAD is not the same as CAD/USD

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CurrenciesSupportedCurrenciesHistoryGETFormatEnum;
import org.openapis.openapi.models.operations.CurrenciesSupportedCurrenciesHistoryGETRequest;
import org.openapis.openapi.models.operations.CurrenciesSupportedCurrenciesHistoryGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            CurrenciesSupportedCurrenciesHistoryGETRequest req = new CurrenciesSupportedCurrenciesHistoryGETRequest() {{
                format = CurrenciesSupportedCurrenciesHistoryGETFormatEnum.JSON;
            }};            

            CurrenciesSupportedCurrenciesHistoryGETResponse res = sdk.currencies.currenciesSupportedCurrenciesHistoryGET(req);

            if (res.currenciesSupportedCurrenciesHistoryGET200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## currenciesSupportedCurrenciesRateGET

Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.
For example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CurrenciesSupportedCurrenciesRateGETFormatEnum;
import org.openapis.openapi.models.operations.CurrenciesSupportedCurrenciesRateGETRequest;
import org.openapis.openapi.models.operations.CurrenciesSupportedCurrenciesRateGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            CurrenciesSupportedCurrenciesRateGETRequest req = new CurrenciesSupportedCurrenciesRateGETRequest() {{
                format = CurrenciesSupportedCurrenciesRateGETFormatEnum.JSON;
            }};            

            CurrenciesSupportedCurrenciesRateGETResponse res = sdk.currencies.currenciesSupportedCurrenciesRateGET(req);

            if (res.currenciesSupportedCurrenciesRateGET200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## currenciesSupportedCurrenciesSummaryGET

Only the currency pairs in the direction noted can be used with the Summary endpoint.
For example: USD/CAD is not the same as CAD/USD

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CurrenciesSupportedCurrenciesSummaryGETFormatEnum;
import org.openapis.openapi.models.operations.CurrenciesSupportedCurrenciesSummaryGETRequest;
import org.openapis.openapi.models.operations.CurrenciesSupportedCurrenciesSummaryGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            CurrenciesSupportedCurrenciesSummaryGETRequest req = new CurrenciesSupportedCurrenciesSummaryGETRequest() {{
                format = CurrenciesSupportedCurrenciesSummaryGETFormatEnum.XML;
            }};            

            CurrenciesSupportedCurrenciesSummaryGETResponse res = sdk.currencies.currenciesSupportedCurrenciesSummaryGET(req);

            if (res.currenciesSupportedCurrenciesSummaryGET200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
