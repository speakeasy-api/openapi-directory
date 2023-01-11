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

            AppendBlockChildrenRequest req = new AppendBlockChildrenRequest() {{
                pathParams = new AppendBlockChildrenPathParams() {{
                    id = "sit";
                }};
                request = new AppendBlockChildrenRequestBody() {{
                    children = new openapisdk.models.operations.AppendBlockChildrenRequestBodyChildren[]() {{
                        add(new AppendBlockChildrenRequestBodyChildren() {{
                            heading2 = new AppendBlockChildrenRequestBodyChildrenHeading2() {{
                                text = new openapisdk.models.operations.AppendBlockChildrenRequestBodyChildrenHeading2Text[]() {{
                                    add(new AppendBlockChildrenRequestBodyChildrenHeading2Text() {{
                                        text = new AppendBlockChildrenRequestBodyChildrenHeading2TextText() {{
                                            content = "expedita";
                                        }};
                                        type = "consequuntur";
                                    }}),
                                    add(new AppendBlockChildrenRequestBodyChildrenHeading2Text() {{
                                        text = new AppendBlockChildrenRequestBodyChildrenHeading2TextText() {{
                                            content = "dolor";
                                        }};
                                        type = "expedita";
                                    }}),
                                }};
                            }};
                            object = "voluptas";
                            type = "fugit";
                        }}),
                    }};
                }};
            }};

            AppendBlockChildrenResponse res = sdk.blocks.appendBlockChildren(req);

            if (res.appendBlockChildren200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->