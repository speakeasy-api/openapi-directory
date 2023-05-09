# SDK

## Overview

The missing minimalistic JSON real-time UV Index API for awesome Developers, Innovators and Smart Home Enthusiasts

### Available Operations

* [getForecast](#getforecast) - Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.
* [getProtection](#getprotection) - Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.
* [getUv](#getuv) - Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.

## getForecast

Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetForecastRequest;
import org.openapis.openapi.models.operations.GetForecastResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetForecastRequest req = new GetForecastRequest(78.67, 115.67, "provident") {{
                alt = 1050;
                dt = OffsetDateTime.parse("2018-02-04T04:39:06.467Z");
                ozone = 304.5;
            }};            

            GetForecastResponse res = sdk.sdk.getForecast(req);

            if (res.forecastResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProtection

Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProtectionRequest;
import org.openapis.openapi.models.operations.GetProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProtectionRequest req = new GetProtectionRequest(2.5, 78.67, 115.67, 3.6, "distinctio") {{
                alt = 1050;
                ozone = 304.5;
            }};            

            GetProtectionResponse res = sdk.sdk.getProtection(req);

            if (res.protectionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUv

Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUvRequest;
import org.openapis.openapi.models.operations.GetUvResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUvRequest req = new GetUvRequest(78.67, 115.67, "quibusdam") {{
                alt = 1050;
                dt = OffsetDateTime.parse("2018-02-04T04:39:06.467Z");
                ozone = 304.5;
            }};            

            GetUvResponse res = sdk.sdk.getUv(req);

            if (res.uvIndexResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
