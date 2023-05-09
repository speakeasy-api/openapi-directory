<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchAttractionRequest;
import org.openapis.openapi.models.operations.PatchAttractionResponse;
import org.openapis.openapi.models.shared.AugmentationData;
import org.openapis.openapi.models.shared.AugmentationDataRelatedEntityTypeEnum;
import org.openapis.openapi.models.shared.Change;
import org.openapis.openapi.models.shared.ChangeOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchAttractionRequest req = new PatchAttractionRequest(                new AugmentationData(                new org.openapis.openapi.models.shared.Change[]{{
                                                add(new Change(ChangeOpEnum.REPLACE, "iure") {{
                                                    from = "provident";
                                                    op = ChangeOpEnum.COPY;
                                                    path = "quibusdam";
                                                    value = new java.util.HashMap<String, Object>() {{
                                                        put("nulla", "corrupti");
                                                        put("illum", "vel");
                                                        put("error", "deserunt");
                                                    }};
                                                }}),
                                                add(new Change(ChangeOpEnum.REPLACE, "recusandae") {{
                                                    from = "magnam";
                                                    op = ChangeOpEnum.TEST;
                                                    path = "ipsa";
                                                    value = new java.util.HashMap<String, Object>() {{
                                                        put("tempora", "suscipit");
                                                        put("molestiae", "minus");
                                                        put("placeat", "voluptatum");
                                                        put("iusto", "excepturi");
                                                    }};
                                                }}),
                                                add(new Change(ChangeOpEnum.REPLACE, "repellendus") {{
                                                    from = "temporibus";
                                                    op = ChangeOpEnum.ADD;
                                                    path = "quis";
                                                    value = new java.util.HashMap<String, Object>() {{
                                                        put("deserunt", "perferendis");
                                                    }};
                                                }}),
                                            }}, "sapiente", AugmentationDataRelatedEntityTypeEnum.VENUE, "odit", 870013L) {{
                                score = 8700.88;
                            }};, "maiores", "molestiae");            

            PatchAttractionResponse res = sdk.patchAttraction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->