<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKeyHeader = new SchemeApiKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            PostRemovebgRequest req = new PostRemovebgRequest() {{
                request = new PostRemovebgRequests() {{
                    removeBgJson = new RemoveBgJson() {{
                        addShadow = false;
                        bgColor = "voluptas";
                        bgImageUrl = "culpa";
                        channels = "rgba";
                        crop = true;
                        cropMargin = "dolor";
                        format = "zip";
                        imageFileB64 = "voluptas";
                        imageUrl = "fugit";
                        position = "et";
                        roi = "nihil";
                        scale = "rerum";
                        semitransparency = false;
                        size = "preview";
                        type = "auto";
                        typeLevel = "2";
                    }};
                    removeBgJson1 = new RemoveBgJson() {{
                        addShadow = false;
                        bgColor = "dolorem";
                        bgImageUrl = "et";
                        channels = "rgba";
                        crop = true;
                        cropMargin = "vitae";
                        format = "jpg";
                        imageFileB64 = "dolores";
                        imageUrl = "illum";
                        position = "debitis";
                        roi = "vel";
                        scale = "odio";
                        semitransparency = true;
                        size = "full";
                        type = "person";
                        typeLevel = "none";
                    }};
                    removeBgMultipart = new RemoveBgMultipart() {{
                        addShadow = false;
                        bgColor = "commodi";
                        bgImageFile = new RemoveBgMultipartBgImageFile() {{
                            bgImageFile = "quis";
                            content = "est".getBytes();
                        }};
                        bgImageUrl = "aut";
                        channels = "rgba";
                        crop = true;
                        cropMargin = "voluptas";
                        format = "zip";
                        imageFile = new RemoveBgMultipartImageFile() {{
                            content = "aut".getBytes();
                            imageFile = "illo";
                        }};
                        imageFileB64 = "sed";
                        imageUrl = "officiis";
                        position = "autem";
                        roi = "consectetur";
                        scale = "nobis";
                        semitransparency = false;
                        size = "preview";
                        type = "product";
                        typeLevel = "none";
                    }};
                }};
            }};

            PostRemovebgResponse res = sdk.backgroundRemoval.postRemovebg(req);

            if (res.removeBgJsonResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->