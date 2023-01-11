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
                    id = "quo";
                }};
                headers = new PatchAttractionHeaders() {{
                    tmpsCorrelationId = "vero";
                }};
                request = new AugmentationData() {{
                    changes = new openapisdk.models.shared.Change[]() {{
                        add(new Change() {{
                            from = "totam";
                            op = "add";
                            path = "eius";
                            value = new java.util.HashMap<String, Object>() {{
                                put("beatae", "omnis");
                            }};
                        }}),
                    }};
                    relatedEntityId = "totam";
                    relatedEntityType = "attraction";
                    score = 8.100000;
                    source = "necessitatibus";
                    versionNumber = 4525004039791920848;
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