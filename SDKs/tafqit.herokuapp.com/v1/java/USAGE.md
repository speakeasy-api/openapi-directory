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

            ConvertRequest req = new ConvertRequest() {{
                request = new ConvertRequestBody() {{
                    hundredsForm = "corporis";
                    theNumber = "dicta";
                    unit = "rem";
                }};
            }};

            ConvertResponse res = sdk.convert(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->