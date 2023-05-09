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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SuggestTagsAndRegionsRequest req = new SuggestTagsAndRegionsRequest(                new String[]{{
                                add("0183febd-f676-4b72-86da-b750052a5647"),
                            }}, "edc439ed-8c43-420f-8124-0d4487ac693b", "94c3b9d2-488d-4795-aa42-fc405669f69a");            

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
