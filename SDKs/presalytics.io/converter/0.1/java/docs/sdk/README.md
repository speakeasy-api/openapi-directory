# SDK

## Overview

This api converts file formats of OpenXml and OpenOffice documents formats to vector files (e.g., svg)

### Available Operations

* [svgconvert](#svgconvert) - converts pptx file to svg image

## svgconvert

converts pptx file to svg image

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SvgconvertFileToConvert;
import org.openapis.openapi.models.operations.SvgconvertFileToConvertFile;
import org.openapis.openapi.models.operations.SvgconvertResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SvgconvertFileToConvert req = new SvgconvertFileToConvert() {{
                file = new SvgconvertFileToConvertFile("distinctio".getBytes(), "quibusdam");;
            }};            

            SvgconvertResponse res = sdk.sdk.svgconvert(req);

            if (res.fileUrl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
