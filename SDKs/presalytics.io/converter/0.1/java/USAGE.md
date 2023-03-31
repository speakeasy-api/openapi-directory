<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SvgconvertFileToConvertFile;
import org.openapis.openapi.models.operations.SvgconvertFileToConvert;
import org.openapis.openapi.models.operations.SvgconvertRequest;
import org.openapis.openapi.models.operations.SvgconvertResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SvgconvertRequest req = new SvgconvertRequest() {{
                request = new SvgconvertFileToConvert() {{
                    file = new SvgconvertFileToConvertFile() {{
                        content = "corrupti".getBytes();
                        file = "provident";
                    }};
                }};
            }};            

            SvgconvertResponse res = sdk.svgconvert(req);

            if (res.fileUrl.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->