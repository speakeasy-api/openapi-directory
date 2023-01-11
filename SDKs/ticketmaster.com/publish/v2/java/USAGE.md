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

            PatchAttractionRequest req = new PatchAttractionRequest() {{
                pathParams = new PatchAttractionPathParams() {{
                    id = "sit";
                }};
                headers = new PatchAttractionHeaders() {{
                    tmpsCorrelationId = "voluptas";
                }};
                request = new AugmentationData() {{
                    changes = new openapisdk.models.shared.Change[]() {{
                        add(new Change() {{
                            from = "expedita";
                            op = "test";
                            path = "dolor";
                            value = new java.util.HashMap<String, Object>() {{
                                put("voluptas", "fugit");
                                put("et", "nihil");
                            }};
                        }}),
                        add(new Change() {{
                            from = "rerum";
                            op = "test";
                            path = "debitis";
                            value = new java.util.HashMap<String, Object>() {{
                                put("et", "ut");
                            }};
                        }}),
                    }};
                    relatedEntityId = "dolorem";
                    relatedEntityType = "attraction";
                    score = 94.199997;
                    source = "vitae";
                    versionNumber = 4706154865122290029;
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