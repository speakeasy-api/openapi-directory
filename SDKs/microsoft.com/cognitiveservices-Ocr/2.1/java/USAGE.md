<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchReadFileRequest;
import org.openapis.openapi.models.operations.BatchReadFileResponse;
import org.openapis.openapi.models.shared.ImageUrl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apimKey = new SchemeApimKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            BatchReadFileRequest req = new BatchReadFileRequest() {{
                request = new ImageUrl() {{
                    url = "corrupti";
                }};
            }};            

            BatchReadFileResponse res = sdk.batchReadFile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->