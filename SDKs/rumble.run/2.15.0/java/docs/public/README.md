# public_

## Overview

Unauthenticated

### Available Operations

* [getLatestAgentVersion](#getlatestagentversion) - Returns latest agent version
* [getLatestPlatformVersion](#getlatestplatformversion) - Returns latest platform version
* [getLatestScannerVersion](#getlatestscannerversion) - Returns latest scanner version

## getLatestAgentVersion

Returns latest agent version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLatestAgentVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLatestAgentVersionResponse res = sdk.public_.getLatestAgentVersion();

            if (res.componentVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLatestPlatformVersion

Returns latest platform version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLatestPlatformVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLatestPlatformVersionResponse res = sdk.public_.getLatestPlatformVersion();

            if (res.componentVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLatestScannerVersion

Returns latest scanner version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLatestScannerVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLatestScannerVersionResponse res = sdk.public_.getLatestScannerVersion();

            if (res.componentVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
