# SDK

## Overview

API for OpenAQ LCS

### Available Operations

* [favicoFaviconIcoGet](#favicofaviconicoget) - Favico
* [pongPingGet](#pongpingget) - Pong

## favicoFaviconIcoGet

Favico

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FavicoFaviconIcoGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FavicoFaviconIcoGetResponse res = sdk.sdk.favicoFaviconIcoGet();

            if (res.favicoFaviconIcoGet200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pongPingGet

Sanity check.
This will let the user know that the service is operational.
And this path operation will:
* show a lifesign

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PongPingGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PongPingGetResponse res = sdk.sdk.pongPingGet();

            if (res.pongPingGet200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
