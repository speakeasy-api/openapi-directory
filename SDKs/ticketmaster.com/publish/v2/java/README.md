# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [patchAttraction](docs/sdk/README.md#patchattraction) - Publish a patch on an attraction
* [patchEvent](docs/sdk/README.md#patchevent) - Publish a patch on an event
* [patchVenue](docs/sdk/README.md#patchvenue) - Publish a patch on a venue
* [publishAttraction](docs/sdk/README.md#publishattraction) - Publish an attractions
* [publishAttractionVideos](docs/sdk/README.md#publishattractionvideos) - Publish a video on an attraction
* [publishEntitlements](docs/sdk/README.md#publishentitlements) - Publish entitlements on an entity
* [publishEvent](docs/sdk/README.md#publishevent) - Publish an event
* [publishEventVideos](docs/sdk/README.md#publisheventvideos) - Publish a video on an event
* [publishExtension](docs/sdk/README.md#publishextension) - Publish extension on an entity
* [publishVenue](docs/sdk/README.md#publishvenue) - Publish a venue
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
