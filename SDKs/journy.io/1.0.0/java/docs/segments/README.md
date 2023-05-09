# segments

## Overview

Endpoints for reading user and account segments

### Available Operations

* [getAccountSegments](#getaccountsegments) - Get account segments
* [getUserSegments](#getusersegments) - Get user segments

## getAccountSegments

Endpoint to list account segments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountSegmentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountSegmentsResponse res = sdk.segments.getAccountSegments();

            if (res.getAccountSegments200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserSegments

Endpoint to list user segments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserSegmentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserSegmentsResponse res = sdk.segments.getUserSegments();

            if (res.getUserSegments200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
