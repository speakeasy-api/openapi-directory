# SDK

## Overview

The Football Prediction API allows developers to get predictions for upcoming football (soccer) matches, results for past matches, and performance monitoring for statistical models.

### Available Operations

* [getApiV2ListFederations](#getapiv2listfederations) - Returns an array of all the available federations.
* [getApiV2ListMarkets](#getapiv2listmarkets) - Returns an array of all the supported prediction markets
* [getApiV2PerformanceStats](#getapiv2performancestats) - Returns predictions accuracy in the last 1, 7, 14, 30 days.
* [getApiV2Predictions](#getapiv2predictions) - This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.
* [getApiV2PredictionsId](#getapiv2predictionsid) - Returns all predictions available for a match id.

## getApiV2ListFederations

Returns an array of all the available federations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2ListFederationsRequest;
import org.openapis.openapi.models.operations.GetApiV2ListFederationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2ListFederationsRequest req = new GetApiV2ListFederationsRequest() {{
                xRapidApiKey = "a05dfc2d-df7c-4c78-8a1b-a928fc816742";
            }};            

            GetApiV2ListFederationsResponse res = sdk.sdk.getApiV2ListFederations(req);

            if (res.getApiV2ListFederations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2ListMarkets

Returns an array of all the supported prediction markets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2ListMarketsRequest;
import org.openapis.openapi.models.operations.GetApiV2ListMarketsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2ListMarketsRequest req = new GetApiV2ListMarketsRequest() {{
                xRapidApiKey = "cb739205-9293-496f-aa75-96eb10faaa23";
            }};            

            GetApiV2ListMarketsResponse res = sdk.sdk.getApiV2ListMarkets(req);

            if (res.getApiV2ListMarkets200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2PerformanceStats

Returns predictions accuracy in the last 1, 7, 14, 30 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2PerformanceStatsRequest;
import org.openapis.openapi.models.operations.GetApiV2PerformanceStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2PerformanceStatsRequest req = new GetApiV2PerformanceStatsRequest() {{
                xRapidApiKey = "52c59559-07af-4f1a-ba2f-a9467739251a";
            }};            

            GetApiV2PerformanceStatsResponse res = sdk.sdk.getApiV2PerformanceStats(req);

            if (res.getApiV2PerformanceStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2Predictions

This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2PredictionsRequest;
import org.openapis.openapi.models.operations.GetApiV2PredictionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2PredictionsRequest req = new GetApiV2PredictionsRequest() {{
                xRapidApiKey = "a52c3f5a-d019-4da1-bfe7-8f097b0074f1";
            }};            

            GetApiV2PredictionsResponse res = sdk.sdk.getApiV2Predictions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2PredictionsId

Returns all predictions available for a match id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2PredictionsIdRequest;
import org.openapis.openapi.models.operations.GetApiV2PredictionsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2PredictionsIdRequest req = new GetApiV2PredictionsIdRequest(359444L);            

            GetApiV2PredictionsIdResponse res = sdk.sdk.getApiV2PredictionsId(req);

            if (res.getApiV2PredictionsId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
