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
        TrainingKey: "iusto",
        ImageID: "aff0ea22-16cb-4e07-9bc1-63e279a3b084",
        ProjectID: "da99257d-04f4-4084-ba74-2d84496cbdee",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageRegionProposal != nil {
        // handle response
    }
}
```
