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
        TrainingKey: "repellat",
        ImageID: "03b5f37e-4aa8-4685-9596-6732aa5dcb66",
        ProjectID: "82cb70f8-cfd5-4fb6-a91b-9a9f74846e2c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageRegionProposal != nil {
        // handle response
    }
}
```
