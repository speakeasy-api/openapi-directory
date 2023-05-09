<!-- Start SDK Example Usage -->
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
                file = new SvgconvertFileToConvertFile("corrupti".getBytes(), "provident");;
            }};            

            SvgconvertResponse res = sdk.svgconvert(req);

            if (res.fileUrl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->