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
        DescriptionExclude: []shared.DescriptionExcludeEnum{
            "Landmarks",
            "Landmarks",
            "Landmarks",
        },
        Details: []AnalyzeImageDetailsEnum{
            "Landmarks",
            "Landmarks",
            "Celebrities",
            "Landmarks",
        },
        Language: "pt",
        VisualFeatures: []shared.VisualFeaturesEnum{
            "Categories",
            "Adult",
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