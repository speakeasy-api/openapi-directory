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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `patchAttraction` - Publish a patch on an attraction
* `patchEvent` - Publish a patch on an event
* `patchVenue` - Publish a patch on a venue
* `publishAttraction` - Publish an attractions
* `publishAttractionVideos` - Publish a video on an attraction
* `publishEntitlements` - Publish entitlements on an entity
* `publishEvent` - Publish an event
* `publishEventVideos` - Publish a video on an event
* `publishExtension` - Publish extension on an entity
* `publishVenue` - Publish a venue
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
