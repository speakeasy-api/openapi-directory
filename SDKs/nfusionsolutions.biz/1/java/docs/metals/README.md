# metals

### Available Operations

* [metalsBenchmarkHistoryGET](#metalsbenchmarkhistoryget) - Get historical benchmark prices for requested metals
* [metalsBenchmarkSummaryGET](#metalsbenchmarksummaryget) - Get latest Benchmark prices for requested metals
* [metalsBenchmarkSupportedMetalsGET](#metalsbenchmarksupportedmetalsget) - Get list of symbols supported by the benchmark endpoints
* [metalsSpotAnnualHistoricalPerformanceGET](#metalsspotannualhistoricalperformanceget) - Get Historical Annual Performance for requested metals
* [metalsSpotHistoricalPerformanceGET](#metalsspothistoricalperformanceget) - Get Historical Performance for requested metals
* [metalsSpotHistoryGET](#metalsspothistoryget) - Get historical Spot prices for requested metals
* [metalsSpotRatioHistoryGET](#metalsspotratiohistoryget) - Get historical Spot Ratio prices for requested metals
* [metalsSpotRatioSummaryGET](#metalsspotratiosummaryget) - Get latest Spot Summary for requested metal ratios
* [metalsSpotSummaryGET](#metalsspotsummaryget) - Get latest Spot Summary for requested metals
* [metalsSpotSupportedMetalsGET](#metalsspotsupportedmetalsget) - Get list of symbols supported by the spot endpoints
* [metalsSupportedCurrenciesMetalsGET](#metalssupportedcurrenciesmetalsget) - Get list of currencies supported by metals endpoints for currency conversion

## metalsBenchmarkHistoryGET

Historical OHLC data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetalsBenchmarkHistoryGETFormatEnum;
import org.openapis.openapi.models.operations.MetalsBenchmarkHistoryGETRequest;
import org.openapis.openapi.models.operations.MetalsBenchmarkHistoryGETResponse;
import org.openapis.openapi.models.operations.MetalsBenchmarkHistoryGETUnitofmeasureEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            MetalsBenchmarkHistoryGETRequest req = new MetalsBenchmarkHistoryGETRequest("quis", OffsetDateTime.parse("2022-05-09T10:00:51.349Z")) {{
                currency = "perferendis";
                end = OffsetDateTime.parse("2022-03-03T02:15:00.468Z");
                format = MetalsBenchmarkHistoryGETFormatEnum.XML;
                historicalfx = false;
                interval = "quo";
                unitofmeasure = MetalsBenchmarkHistoryGETUnitofmeasureEnum.G;
            }};            

            MetalsBenchmarkHistoryGETResponse res = sdk.metals.metalsBenchmarkHistoryGET(req);

            if (res.intervalCollectionResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metalsBenchmarkSummaryGET

Benchmark price information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetalsBenchmarkSummaryGETFormatEnum;
import org.openapis.openapi.models.operations.MetalsBenchmarkSummaryGETRequest;
import org.openapis.openapi.models.operations.MetalsBenchmarkSummaryGETResponse;
import org.openapis.openapi.models.operations.MetalsBenchmarkSummaryGETUnitofmeasureEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            MetalsBenchmarkSummaryGETRequest req = new MetalsBenchmarkSummaryGETRequest("at") {{
                currency = "maiores";
                format = MetalsBenchmarkSummaryGETFormatEnum.JSON;
                unitofmeasure = MetalsBenchmarkSummaryGETUnitofmeasureEnum.CT;
            }};            

            MetalsBenchmarkSummaryGETResponse res = sdk.metals.metalsBenchmarkSummaryGET(req);

            if (res.summaryResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metalsBenchmarkSupportedMetalsGET

Get list of symbols supported by the benchmark endpoints

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetalsBenchmarkSupportedMetalsGETFormatEnum;
import org.openapis.openapi.models.operations.MetalsBenchmarkSupportedMetalsGETRequest;
import org.openapis.openapi.models.operations.MetalsBenchmarkSupportedMetalsGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            MetalsBenchmarkSupportedMetalsGETRequest req = new MetalsBenchmarkSupportedMetalsGETRequest() {{
                format = MetalsBenchmarkSupportedMetalsGETFormatEnum.JSON;
            }};            

            MetalsBenchmarkSupportedMetalsGETResponse res = sdk.metals.metalsBenchmarkSupportedMetalsGET(req);

            if (res.metalsBenchmarkSupportedMetalsGET200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metalsSpotAnnualHistoricalPerformanceGET

Annual Historical Performance information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetalsSpotAnnualHistoricalPerformanceGETFormatEnum;
import org.openapis.openapi.models.operations.MetalsSpotAnnualHistoricalPerformanceGETRequest;
import org.openapis.openapi.models.operations.MetalsSpotAnnualHistoricalPerformanceGETResponse;
import org.openapis.openapi.models.operations.MetalsSpotAnnualHistoricalPerformanceGETUnitofmeasureEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            MetalsSpotAnnualHistoricalPerformanceGETRequest req = new MetalsSpotAnnualHistoricalPerformanceGETRequest("porro") {{
                currency = "dolorum";
                format = MetalsSpotAnnualHistoricalPerformanceGETFormatEnum.JSON;
                unitofmeasure = MetalsSpotAnnualHistoricalPerformanceGETUnitofmeasureEnum.TOZ;
                years = 639921;
            }};            

            MetalsSpotAnnualHistoricalPerformanceGETResponse res = sdk.metals.metalsSpotAnnualHistoricalPerformanceGET(req);

            if (res.intervalCollectionResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metalsSpotHistoricalPerformanceGET

Historical Performance information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetalsSpotHistoricalPerformanceGETFormatEnum;
import org.openapis.openapi.models.operations.MetalsSpotHistoricalPerformanceGETRequest;
import org.openapis.openapi.models.operations.MetalsSpotHistoricalPerformanceGETResponse;
import org.openapis.openapi.models.operations.MetalsSpotHistoricalPerformanceGETUnitofmeasureEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            MetalsSpotHistoricalPerformanceGETRequest req = new MetalsSpotHistoricalPerformanceGETRequest("fugit") {{
                currency = "deleniti";
                format = MetalsSpotHistoricalPerformanceGETFormatEnum.XML;
                unitofmeasure = MetalsSpotHistoricalPerformanceGETUnitofmeasureEnum.CT;
            }};            

            MetalsSpotHistoricalPerformanceGETResponse res = sdk.metals.metalsSpotHistoricalPerformanceGET(req);

            if (res.intervalCollectionResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metalsSpotHistoryGET

Historical OHLC data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetalsSpotHistoryGETFormatEnum;
import org.openapis.openapi.models.operations.MetalsSpotHistoryGETRequest;
import org.openapis.openapi.models.operations.MetalsSpotHistoryGETResponse;
import org.openapis.openapi.models.operations.MetalsSpotHistoryGETUnitofmeasureEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            MetalsSpotHistoryGETRequest req = new MetalsSpotHistoryGETRequest("beatae", OffsetDateTime.parse("2022-07-12T03:15:36.542Z")) {{
                currency = "modi";
                end = OffsetDateTime.parse("2022-03-24T09:42:46.236Z");
                format = MetalsSpotHistoryGETFormatEnum.XML;
                historicalfx = false;
                interval = "esse";
                unitofmeasure = MetalsSpotHistoryGETUnitofmeasureEnum.G;
            }};            

            MetalsSpotHistoryGETResponse res = sdk.metals.metalsSpotHistoryGET(req);

            if (res.intervalCollectionResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metalsSpotRatioHistoryGET

Historical data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetalsSpotRatioHistoryGETFormatEnum;
import org.openapis.openapi.models.operations.MetalsSpotRatioHistoryGETRequest;
import org.openapis.openapi.models.operations.MetalsSpotRatioHistoryGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            MetalsSpotRatioHistoryGETRequest req = new MetalsSpotRatioHistoryGETRequest("aspernatur", OffsetDateTime.parse("2022-09-04T16:31:28.618Z")) {{
                end = OffsetDateTime.parse("2022-09-13T17:41:46.141Z");
                format = MetalsSpotRatioHistoryGETFormatEnum.XML;
                interval = "dolor";
            }};            

            MetalsSpotRatioHistoryGETResponse res = sdk.metals.metalsSpotRatioHistoryGET(req);

            if (res.intervalCollectionResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metalsSpotRatioSummaryGET

Ratios between prices of two metals

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetalsSpotRatioSummaryGETFormatEnum;
import org.openapis.openapi.models.operations.MetalsSpotRatioSummaryGETRequest;
import org.openapis.openapi.models.operations.MetalsSpotRatioSummaryGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            MetalsSpotRatioSummaryGETRequest req = new MetalsSpotRatioSummaryGETRequest("laboriosam") {{
                format = MetalsSpotRatioSummaryGETFormatEnum.XML;
            }};            

            MetalsSpotRatioSummaryGETResponse res = sdk.metals.metalsSpotRatioSummaryGET(req);

            if (res.summaryResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metalsSpotSummaryGET

Current and daily summary information combined into a single quote

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetalsSpotSummaryGETFormatEnum;
import org.openapis.openapi.models.operations.MetalsSpotSummaryGETRequest;
import org.openapis.openapi.models.operations.MetalsSpotSummaryGETResponse;
import org.openapis.openapi.models.operations.MetalsSpotSummaryGETUnitofmeasureEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            MetalsSpotSummaryGETRequest req = new MetalsSpotSummaryGETRequest("fuga") {{
                currency = "in";
                format = MetalsSpotSummaryGETFormatEnum.JSON;
                unitofmeasure = MetalsSpotSummaryGETUnitofmeasureEnum.OZ;
            }};            

            MetalsSpotSummaryGETResponse res = sdk.metals.metalsSpotSummaryGET(req);

            if (res.summaryResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metalsSpotSupportedMetalsGET

Get list of symbols supported by the spot endpoints

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetalsSpotSupportedMetalsGETFormatEnum;
import org.openapis.openapi.models.operations.MetalsSpotSupportedMetalsGETRequest;
import org.openapis.openapi.models.operations.MetalsSpotSupportedMetalsGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            MetalsSpotSupportedMetalsGETRequest req = new MetalsSpotSupportedMetalsGETRequest() {{
                format = MetalsSpotSupportedMetalsGETFormatEnum.XML;
            }};            

            MetalsSpotSupportedMetalsGETResponse res = sdk.metals.metalsSpotSupportedMetalsGET(req);

            if (res.metalsSpotSupportedMetalsGET200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metalsSupportedCurrenciesMetalsGET

Get list of currencies supported by metals endpoints for currency conversion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetalsSupportedCurrenciesMetalsGETFormatEnum;
import org.openapis.openapi.models.operations.MetalsSupportedCurrenciesMetalsGETRequest;
import org.openapis.openapi.models.operations.MetalsSupportedCurrenciesMetalsGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            MetalsSupportedCurrenciesMetalsGETRequest req = new MetalsSupportedCurrenciesMetalsGETRequest() {{
                format = MetalsSupportedCurrenciesMetalsGETFormatEnum.JSON;
            }};            

            MetalsSupportedCurrenciesMetalsGETResponse res = sdk.metals.metalsSupportedCurrenciesMetalsGET(req);

            if (res.metalsSupportedCurrenciesMetalsGET200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
