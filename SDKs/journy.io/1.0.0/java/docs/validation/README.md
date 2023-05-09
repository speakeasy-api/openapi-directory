# validation

## Overview

Endpoints for validating API keys.

### Available Operations

* [getValidity](#getvalidity) - Validate API key

## getValidity

Endpoint used to test the validity and some basic information about a specific API Key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetValidityResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetValidityResponse res = sdk.validation.getValidity();

            if (res.getValidity200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
