# suggestTagsAndRegionsApi

### Available Operations

* [suggestTagsAndRegions](#suggesttagsandregions) - Suggest tags and regions for an array/batch of untagged images. Returns empty array if no tags are found.

## suggestTagsAndRegions

This API will get suggested tags and regions for an array/batch of untagged images along with confidences for the tags. It returns an empty array if no tags are found.
There is a limit of 64 images in the batch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuggestTagsAndRegionsRequest;
import org.openapis.openapi.models.operations.SuggestTagsAndRegionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuggestTagsAndRegionsRequest req = new SuggestTagsAndRegionsRequest("veniam",                 new String[]{{
                                add("25fd3e0b-4a4a-4425-bc30-25711f42c7e7"),
                                add("dc548be0-9e41-4a7a-a15c-a12a4ba9d599"),
                                add("88192cfd-0c77-4c53-a7e7-d4ee6e8b90ba"),
                                add("c384e239-6703-4fec-b1c5-0824d189a36a"),
                            }}, "6b2d27eb-707a-4a60-88fe-46e6177db9db", "3b70ffbb-6970-4ee7-b0e3-6097ef7c206e");            

            SuggestTagsAndRegionsResponse res = sdk.suggestTagsAndRegionsApi.suggestTagsAndRegions(req);

            if (res.suggestedTagAndRegions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
