<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PatchAttractionPathParams;
import org.openapis.openapi.models.operations.PatchAttractionHeaders;
import org.openapis.openapi.models.operations.PatchAttractionRequest;
import org.openapis.openapi.models.operations.PatchAttractionResponse;
import org.openapis.openapi.models.shared.AugmentationDataRelatedEntityTypeEnum;
import org.openapis.openapi.models.shared.AugmentationData;
import org.openapis.openapi.models.shared.ChangeOpEnum;
import org.openapis.openapi.models.shared.Change;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchAttractionRequest req = new PatchAttractionRequest() {{
                pathParams = new PatchAttractionPathParams() {{
                    id = "corrupti";
                }};
                headers = new PatchAttractionHeaders() {{
                    tmpsCorrelationId = "provident";
                }};
                request = new AugmentationData() {{
                    changes = new org.openapis.openapi.models.shared.Change[]{{
                        add(new Change() {{
                            from = "quibusdam";
                            op = "move";
                            path = "nulla";
                            value = new java.util.HashMap<String, Object>() {{
                                put("illum", "vel");
                                put("error", "deserunt");
                                put("suscipit", "iure");
                            }};
                        }}),
                        add(new Change() {{
                            from = "magnam";
                            op = "test";
                            path = "ipsa";
                            value = new java.util.HashMap<String, Object>() {{
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                                put("iusto", "excepturi");
                            }};
                        }}),
                        add(new Change() {{
                            from = "nisi";
                            op = "test";
                            path = "temporibus";
                            value = new java.util.HashMap<String, Object>() {{
                                put("quis", "veritatis");
                            }};
                        }}),
                    }};
                    relatedEntityId = "deserunt";
                    relatedEntityType = "event";
                    score = 3682.41;
                    source = "repellendus";
                    versionNumber = 957156;
                }};
            }};            

            PatchAttractionResponse res = sdk.patchAttraction(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->