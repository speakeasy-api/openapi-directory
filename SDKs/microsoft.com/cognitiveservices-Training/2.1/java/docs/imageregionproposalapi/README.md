# imageRegionProposalApi

### Available Operations

* [getImageRegionProposals](#getimageregionproposals) - Get region proposals for an image. Returns empty array if no proposals are found.

## getImageRegionProposals

This API will get region proposals for an image along with confidences for the region. It returns an empty array if no proposals are found.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImageRegionProposalsRequest;
import org.openapis.openapi.models.operations.GetImageRegionProposalsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImageRegionProposalsRequest req = new GetImageRegionProposalsRequest("quo", "10964003-13b3-4e50-84f6-5fe72dc4077d", "0cc3f408-efc1-45ce-b4d6-e1eae0f75aed");            

            GetImageRegionProposalsResponse res = sdk.imageRegionProposalApi.getImageRegionProposals(req);

            if (res.imageRegionProposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
