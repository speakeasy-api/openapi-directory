<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            SvgconvertRequest req = new SvgconvertRequest() {{
                request = new SvgconvertFileToConvert() {{
                    file = new SvgconvertFileToConvertFile() {{
                        content = "sit".getBytes();
                        file = "voluptas";
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