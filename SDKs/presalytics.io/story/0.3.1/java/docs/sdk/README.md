# SDK

## Overview

This API is the main entry point for creating, editing and publishing analytics throught the Presalytics API

### Available Operations

* [getEnvironment](#getenvironment) - Environment: Get
* [specNoTags](#specnotags) - Specification: No tags

## getEnvironment

pass rendering metadata to the client-side scripts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEnvironmentResponse res = sdk.sdk.getEnvironment();

            if (res.getEnvironment200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## specNoTags

json-formatted version of this spec with the tags removed to help with codegen processes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpecNoTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpecNoTagsResponse res = sdk.sdk.specNoTags();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
