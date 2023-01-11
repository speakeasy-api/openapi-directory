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
                        addShadow = true;
                        bgColor = "inventore";
                        bgImageUrl = "ut";
                        channels = "rgba";
                        crop = true;
                        cropMargin = "reprehenderit";
                        format = "zip";
                        imageFileB64 = "maiores";
                        imageUrl = "incidunt";
                        position = "dolor";
                        roi = "beatae";
                        scale = "veritatis";
                        semitransparency = true;
                        size = "auto";
                        type = "person";
                        typeLevel = "latest";
                    }};
                    removeBgJson1 = new RemoveBgJson() {{
                        addShadow = true;
                        bgColor = "dolores";
                        bgImageUrl = "placeat";
                        channels = "rgba";
                        crop = true;
                        cropMargin = "mollitia";
                        format = "auto";
                        imageFileB64 = "quam";
                        imageUrl = "reprehenderit";
                        position = "qui";
                        roi = "qui";
                        scale = "unde";
                        semitransparency = false;
                        size = "full";
                        type = "person";
                        typeLevel = "2";
                    }};
                    removeBgMultipart = new RemoveBgMultipart() {{
                        addShadow = false;
                        bgColor = "ab";
                        bgImageFile = new RemoveBgMultipartBgImageFile() {{
                            bgImageFile = "neque";
                            content = "ullam".getBytes();
                        }};
                        bgImageUrl = "et";
                        channels = "rgba";
                        crop = true;
                        cropMargin = "architecto";
                        format = "jpg";
                        imageFile = new RemoveBgMultipartImageFile() {{
                            content = "velit".getBytes();
                            imageFile = "cumque";
                        }};
                        imageFileB64 = "soluta";
                        imageUrl = "sunt";
                        position = "voluptates";
                        roi = "magni";
                        scale = "et";
                        semitransparency = true;
                        size = "preview";
                        type = "car";
                        typeLevel = "latest";
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