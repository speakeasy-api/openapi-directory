# SDK

## Overview

An API to generate charts and QR codes using QuickChart services.

### Available Operations

* [getChart](#getchart) - Generate a chart (GET)
* [getQr](#getqr) - Generate a QR code (GET)
* [postChart](#postchart) - Generate a chart (POST)
* [postQr](#postqr) - Generate a QR code (POST)

## getChart

Generate a chart based on the provided parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChartRequest;
import org.openapis.openapi.models.operations.GetChartResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChartRequest req = new GetChartRequest() {{
                backgroundColor = "nulla";
                chart = "corrupti";
                format = "illum";
                height = 423655L;
                width = 623564L;
            }};            

            GetChartResponse res = sdk.sdk.getChart(req);

            if (res.getChart200ImageJpegBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQr

Generate a QR code based on the provided parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQrRequest;
import org.openapis.openapi.models.operations.GetQrResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQrRequest req = new GetQrRequest() {{
                format = "deserunt";
                height = 384382L;
                margin = 437587L;
                text = "magnam";
                width = 891773L;
            }};            

            GetQrResponse res = sdk.sdk.getQr(req);

            if (res.getQr200ImagePngBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postChart

Generate a chart based on the provided configuration in the request body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostChartRequestBody;
import org.openapis.openapi.models.operations.PostChartResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostChartRequestBody req = new PostChartRequestBody() {{
                backgroundColor = "ipsa";
                chart = new java.util.HashMap<String, Object>() {{
                    put("tempora", "suscipit");
                    put("molestiae", "minus");
                    put("placeat", "voluptatum");
                    put("iusto", "excepturi");
                }};
                format = "nisi";
                height = 925597L;
                width = 836079L;
            }};            

            PostChartResponse res = sdk.sdk.postChart(req);

            if (res.postChart200ImageJpegBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postQr

Generate a QR code based on the provided configuration in the request body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostQrRequestBody;
import org.openapis.openapi.models.operations.PostQrResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostQrRequestBody req = new PostQrRequestBody() {{
                format = "ab";
                height = 337396L;
                margin = 87129L;
                text = "deserunt";
                width = 20218L;
            }};            

            PostQrResponse res = sdk.sdk.postQr(req);

            if (res.postQr200ImagePngBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
