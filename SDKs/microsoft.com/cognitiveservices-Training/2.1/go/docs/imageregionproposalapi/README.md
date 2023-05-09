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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ImageRegionProposalAPI.GetImageRegionProposals(ctx, operations.GetImageRegionProposalsRequest{
        TrainingKey: "quo",
        ImageID: "10964003-13b3-4e50-84f6-5fe72dc4077d",
        ProjectID: "0cc3f408-efc1-45ce-b4d6-e1eae0f75aed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageRegionProposal != nil {
        // handle response
    }
}
```
