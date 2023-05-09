# swaggerDoc

## Overview

Operations about swagger_docs

### Available Operations

* [getSwaggerDocFormat](#getswaggerdocformat) - Swagger compatible API description
* [getSwaggerDocNameFormat](#getswaggerdocnameformat) - Swagger compatible API description for specific API

## getSwaggerDocFormat

Swagger compatible API description

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSwaggerDocFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETSwaggerDocFormatResponse res = sdk.swaggerDoc.getSwaggerDocFormat();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSwaggerDocNameFormat

Swagger compatible API description for specific API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSwaggerDocNameFormatRequest;
import org.openapis.openapi.models.operations.GETSwaggerDocNameFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETSwaggerDocNameFormatRequest req = new GETSwaggerDocNameFormatRequest("quibusdam");            

            GETSwaggerDocNameFormatResponse res = sdk.swaggerDoc.getSwaggerDocNameFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
