# Feature

### Available Operations

* [GetFeaturesFeatureID](#getfeaturesfeatureid) - Get a feature by its featureId

## GetFeaturesFeatureID

Get information about the geographical feature with the specified featureId.

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
    res, err := s.Feature.GetFeaturesFeatureID(ctx, operations.GetFeaturesFeatureIDRequest{
        FeatureID: 592845,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
