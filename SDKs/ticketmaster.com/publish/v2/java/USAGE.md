<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

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
                augmentationData = new AugmentationData() {{
                    changes = new org.openapis.openapi.models.shared.Change[]{{
                        add(new Change() {{
                            from = "provident";
                            op = "copy";
                            path = "quibusdam";
                            value = new java.util.HashMap<String, Object>() {{
                                put("nulla", "corrupti");
                                put("illum", "vel");
                                put("error", "deserunt");
                            }};
                        }}),
                        add(new Change() {{
                            from = "suscipit";
                            op = "replace";
                            path = "magnam";
                            value = new java.util.HashMap<String, Object>() {{
                                put("ipsa", "delectus");
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }};
                        }}),
                        add(new Change() {{
                            from = "iusto";
                            op = "move";
                            path = "nisi";
                            value = new java.util.HashMap<String, Object>() {{
                                put("temporibus", "ab");
                                put("quis", "veritatis");
                                put("deserunt", "perferendis");
                                put("ipsam", "repellendus");
                            }};
                        }}),
                    }};
                    relatedEntityId = "sapiente";
                    relatedEntityType = "venue";
                    score = 1403.5;
                    source = "at";
                    versionNumber = 870088;
                }};
                tmpsCorrelationId = "maiores";
                id = "molestiae";
            }}            

            PatchAttractionResponse res = sdk.patchAttraction(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->