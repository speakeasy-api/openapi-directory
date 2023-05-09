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

            GetImageRegionProposalsRequest req = new GetImageRegionProposalsRequest("iste", "91594d93-a74c-4025-afe3-b4b4db8b778e", "bb6e1d2c-f502-4baf-b2cb-c4635d5e65da");            

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
