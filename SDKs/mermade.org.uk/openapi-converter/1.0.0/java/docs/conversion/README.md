# conversion

## Overview

Conversion functions

### Available Operations

* [convert](#convert) - Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 
* [convertUrl](#converturl) - Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL

## convert

Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConvertRequestBody;
import org.openapis.openapi.models.operations.ConvertRequestBodyValidateEnum;
import org.openapis.openapi.models.operations.ConvertResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConvertRequestBody req = new ConvertRequestBody() {{
                filename = "distinctio";
                source = "quibusdam";
                validate = ConvertRequestBodyValidateEnum.ON;
            }};            

            ConvertResponse res = sdk.conversion.convert(req);

            if (res.convert200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## convertUrl

Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConvertUrlRequest;
import org.openapis.openapi.models.operations.ConvertUrlResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConvertUrlRequest req = new ConvertUrlRequest("https://tidy-mascara.org");            

            ConvertUrlResponse res = sdk.conversion.convertUrl(req);

            if (res.convertUrl200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
