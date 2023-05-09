# SDK

## Overview

Convert numbers to their Arabic text representation

### Available Operations

* [convert](#convert) - Convert the number into its Arabic text representation
حول العدد إلى ما يقابله كتابة

## convert

Convert the number into its Arabic text representation
حول العدد إلى ما يقابله كتابة

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConvertRequestBody;
import org.openapis.openapi.models.operations.ConvertResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConvertRequestBody req = new ConvertRequestBody() {{
                hundredsForm = "مائة";
                theNumber = "2519.50";
                unit = " ريال سعودي";
            }};            

            ConvertResponse res = sdk.sdk.convert(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
