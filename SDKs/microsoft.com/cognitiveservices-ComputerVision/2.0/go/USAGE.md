<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AnalyzeImageRequest{
        ImageURL: shared.ImageURL{
            URL: "corrupti",
        },
        Details: []AnalyzeImageDetailsEnum{
            "Landmarks",
            "Landmarks",
            "Landmarks",
        },
        Language: "zh",
        VisualFeatures: []shared.VisualFeaturesEnum{
            "Objects",
            "Categories",
            "Tags",
        },
    }

    ctx := context.Background()
    res, err := s.AnalyzeImage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageAnalysis != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->