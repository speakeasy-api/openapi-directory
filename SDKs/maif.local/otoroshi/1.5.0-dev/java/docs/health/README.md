# health

## Overview

Everything about Otoroshi health status

### Available Operations

* [health](#health) - Return current Otoroshi health

## health

Import the full state of Otoroshi as a file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthResponse res = sdk.health.health();

            if (res.otoroshiHealth != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
