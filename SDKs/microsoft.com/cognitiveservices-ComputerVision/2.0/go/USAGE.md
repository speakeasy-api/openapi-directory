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
            ApimKey: shared.SchemeApimKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AnalyzeImageRequest{
        QueryParams: operations.AnalyzeImageQueryParams{
            Details: []AnalyzeImageDetailsEnum{
                "Landmarks",
                "Landmarks",
                "Landmarks",
            },
            Language: "pt",
            VisualFeatures: []shared.VisualFeaturesEnum{
                "Color",
                "Objects",
                "Categories",
                "Tags",
            },
        },
        Request: shared.ImageURL{
            URL: "facilis",
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