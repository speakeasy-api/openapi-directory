# SuggestTagsAndRegionsAPI

### Available Operations

* [SuggestTagsAndRegions](#suggesttagsandregions) - Suggest tags and regions for an array/batch of untagged images. Returns empty array if no tags are found.

## SuggestTagsAndRegions

This API will get suggested tags and regions for an array/batch of untagged images along with confidences for the tags. It returns an empty array if no tags are found.
There is a limit of 64 images in the batch.

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
    res, err := s.SuggestTagsAndRegionsAPI.SuggestTagsAndRegions(ctx, operations.SuggestTagsAndRegionsRequest{
        TrainingKey: "placeat",
        ImageIds: []string{
            "63483e4a-7a98-4e4d-b37e-45b8955d413e",
            "13a48231-0907-4bd3-94c0-92bd734f0244",
            "9d86f4bb-20fe-45d9-91cb-fe749caf45a2",
            "7f69e2c9-e6d1-40e9-9b3a-d4c6b03108d9",
        },
        IterationID: "c3374730-82b9-44f2-ab1f-d5671e9c3263",
        ProjectID: "50a46714-3789-4ce0-a991-594d93a74c02",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuggestedTagAndRegions != nil {
        // handle response
    }
}
```
