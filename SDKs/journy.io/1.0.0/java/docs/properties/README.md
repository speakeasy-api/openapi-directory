# properties

## Overview

Endpoints for listing properties.

### Available Operations

* [getAccountProperties](#getaccountproperties) - Get account properties
* [getUserProperties](#getuserproperties) - Get user properties

## getAccountProperties

Endpoint to list account properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountPropertiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountPropertiesResponse res = sdk.properties.getAccountProperties();

            if (res.getAccountProperties200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserProperties

Endpoint to list user properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserPropertiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserPropertiesResponse res = sdk.properties.getUserProperties();

            if (res.getUserProperties200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
