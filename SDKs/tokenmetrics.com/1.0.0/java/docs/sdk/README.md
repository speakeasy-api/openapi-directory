# SDK

### Available Operations

* [correlation](#correlation) - Correlation
* [indices](#indices) - Indices
* [investorGrades](#investorgrades) - Investor Grades
* [marketIndicator](#marketindicator) - Market Indicator
* [price](#price) - Price
* [pricePrediction](#priceprediction) - Price Prediction
* [quantmetricsTier1](#quantmetricstier1) - Quantmetrics Tier 1
* [quantmetricsTier2](#quantmetricstier2) - Quantmetrics Tier 2
* [resistanceSupport](#resistancesupport) - Resistance & Support
* [scenarioAnalysis](#scenarioanalysis) - Scenario Analysis
* [sentiments](#sentiments) - Sentiments
* [tokens](#tokens) - Tokens
* [traderGrades](#tradergrades) - Trader Grades
* [tradingIndicator](#tradingindicator) - Trading Indicator

## correlation

Correlation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CorrelationRequest;
import org.openapis.openapi.models.operations.CorrelationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CorrelationRequest req = new CorrelationRequest() {{
                limit = "1000";
                tokens = "3375, 3306";
            }};            

            CorrelationResponse res = sdk.sdk.correlation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## indices

Indices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IndicesRequest;
import org.openapis.openapi.models.operations.IndicesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IndicesRequest req = new IndicesRequest() {{
                endDate = "2023-01-11";
                exchanges = "binance";
                limit = "1000";
                lowCap = "true";
                startDate = "2023-01-10";
                timeHorizon = "daily";
            }};            

            IndicesResponse res = sdk.sdk.indices(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## investorGrades

Investor Grades

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvestorGradesRequest;
import org.openapis.openapi.models.operations.InvestorGradesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvestorGradesRequest req = new InvestorGradesRequest() {{
                endDate = "2023-01-11";
                limit = "1000";
                startDate = "2023-01-10";
                tokens = "3375, 3306";
            }};            

            InvestorGradesResponse res = sdk.sdk.investorGrades(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## marketIndicator

Market Indicator

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MarketIndicatorRequest;
import org.openapis.openapi.models.operations.MarketIndicatorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MarketIndicatorRequest req = new MarketIndicatorRequest() {{
                endDate = "2023-01-11";
                limit = "1000";
                startDate = "2023-01-10";
            }};            

            MarketIndicatorResponse res = sdk.sdk.marketIndicator(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## price

Price

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PriceRequest;
import org.openapis.openapi.models.operations.PriceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PriceRequest req = new PriceRequest() {{
                endDate = "2023-01-11";
                limit = "1000";
                page = "1";
                startDate = "2023-01-10";
                tokens = "3375, 3306";
            }};            

            PriceResponse res = sdk.sdk.price(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pricePrediction

Price Prediction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PricePredictionRequest;
import org.openapis.openapi.models.operations.PricePredictionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PricePredictionRequest req = new PricePredictionRequest() {{
                date = "2023-02-01";
                limit = "1000";
                tokens = "3375, 3306";
            }};            

            PricePredictionResponse res = sdk.sdk.pricePrediction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quantmetricsTier1

Quantmetrics Tier 1

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuantmetricsTier1Request;
import org.openapis.openapi.models.operations.QuantmetricsTier1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuantmetricsTier1Request req = new QuantmetricsTier1Request() {{
                date = "2023-02-01";
                limit = "1000";
                tokens = "3375, 3306";
            }};            

            QuantmetricsTier1Response res = sdk.sdk.quantmetricsTier1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quantmetricsTier2

Quantmetrics Tier 2

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuantmetricsTier2Request;
import org.openapis.openapi.models.operations.QuantmetricsTier2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuantmetricsTier2Request req = new QuantmetricsTier2Request() {{
                date = "2023-02-01";
                limit = "1000";
                tokens = "3375, 3306";
            }};            

            QuantmetricsTier2Response res = sdk.sdk.quantmetricsTier2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resistanceSupport

Resistance & Support

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResistanceSupportRequest;
import org.openapis.openapi.models.operations.ResistanceSupportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResistanceSupportRequest req = new ResistanceSupportRequest() {{
                endDate = "2023-01-11";
                limit = "1000";
                startDate = "2023-01-10";
                tokens = "3375, 3306";
            }};            

            ResistanceSupportResponse res = sdk.sdk.resistanceSupport(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scenarioAnalysis

Scenario Analysis

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScenarioAnalysisRequest;
import org.openapis.openapi.models.operations.ScenarioAnalysisResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScenarioAnalysisRequest req = new ScenarioAnalysisRequest() {{
                limit = "1000";
                tokens = "3375, 3306";
            }};            

            ScenarioAnalysisResponse res = sdk.sdk.scenarioAnalysis(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sentiments

Sentiments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SentimentsRequest;
import org.openapis.openapi.models.operations.SentimentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SentimentsRequest req = new SentimentsRequest() {{
                endDate = "2023-01-11";
                limit = "1000";
                startDate = "2023-01-10";
                tokens = "3375, 3306";
            }};            

            SentimentsResponse res = sdk.sdk.sentiments(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tokens

Tokens

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TokensRequest;
import org.openapis.openapi.models.operations.TokensResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TokensRequest req = new TokensRequest() {{
                tokenIds = "3375, 3306";
                tokenNames = "Hivemapper, Sei_Network, Layer_Zero, Lyra Huobi";
                tokenSymbols = "bds, bds, btc";
            }};            

            TokensResponse res = sdk.sdk.tokens(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## traderGrades

Trader Grades

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TraderGradesRequest;
import org.openapis.openapi.models.operations.TraderGradesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TraderGradesRequest req = new TraderGradesRequest() {{
                endDate = "2023-01-11";
                limit = "1000";
                startDate = "2023-01-10";
                tokens = "3375, 3306";
            }};            

            TraderGradesResponse res = sdk.sdk.traderGrades(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tradingIndicator

Trading Indicator

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TradingIndicatorRequest;
import org.openapis.openapi.models.operations.TradingIndicatorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TradingIndicatorRequest req = new TradingIndicatorRequest() {{
                limit = "1000";
                tokens = "3375, 3306";
            }};            

            TradingIndicatorResponse res = sdk.sdk.tradingIndicator(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
