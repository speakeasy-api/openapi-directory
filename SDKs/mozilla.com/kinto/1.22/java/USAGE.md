<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateAttachmentPathParams;
import org.openapis.openapi.models.operations.CreateAttachmentRequest;
import org.openapis.openapi.models.operations.CreateAttachmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAttachmentRequest req = new CreateAttachmentRequest() {{
                pathParams = new CreateAttachmentPathParams() {{
                    bucketId = "corrupti";
                    collectionId = "provident";
                    id = "distinctio";
                }};
            }};            

            CreateAttachmentResponse res = sdk.attachment.createAttachment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->