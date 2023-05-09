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

            GetImageRegionProposalsRequest req = new GetImageRegionProposalsRequest("quibusdam", "07d2a9c8-7ae5-40c1-a661-a1d9136a7e8d", "53213f3f-6587-452d-b764-c59f0a56cebc");            

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
