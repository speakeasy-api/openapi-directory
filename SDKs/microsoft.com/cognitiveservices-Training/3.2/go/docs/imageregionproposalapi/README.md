# ImageRegionProposalAPI

### Available Operations

* [GetImageRegionProposals](#getimageregionproposals) - Get region proposals for an image. Returns empty array if no proposals are found.

## GetImageRegionProposals

This API will get region proposals for an image along with confidences for the region. It returns an empty array if no proposals are found.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImageRegionProposalAPI.GetImageRegionProposals(ctx, operations.GetImageRegionProposalsRequest{
        ImageID: "8fe99731-adc0-45d8-9ae2-dfb70fb38742",
        ProjectID: "90d33656-1eca-416e-b894-51bd76eeeb51",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageRegionProposal != nil {
        // handle response
    }
}
```
