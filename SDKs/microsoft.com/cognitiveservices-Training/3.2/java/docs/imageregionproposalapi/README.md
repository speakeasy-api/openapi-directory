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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetImageRegionProposalsRequest req = new GetImageRegionProposalsRequest("3e42c1aa-010e-49aa-82e9-135586d18f9f", "97a4bfad-2bf7-4d67-8a84-ad99b41d6124");            

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
