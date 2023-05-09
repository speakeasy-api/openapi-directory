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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SuggestTagsAndRegionsAPI.SuggestTagsAndRegions(ctx, operations.SuggestTagsAndRegionsRequest{
        ImageIds: []string{
            "2b5744d0-8a22-467a-aee7-9e3c71ad31be",
            "cb83d237-8ae3-4bfc-a3d9-450a986a495b",
            "ac707f06-b28e-4cc8-a492-386f62c969c4",
        },
        IterationID: "cc6b7889-0a3f-4d3c-81da-10f8c23df931",
        ProjectID: "da3edb51-fad9-44ac-8943-5137726d1532",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuggestedTagAndRegions != nil {
        // handle response
    }
}
```
