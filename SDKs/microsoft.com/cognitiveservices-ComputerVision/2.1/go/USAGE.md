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
            DescriptionExclude: []shared.DescriptionExcludeEnum{
                "Landmarks",
                "Landmarks",
                "Landmarks",
            },
            Details: []AnalyzeImageDetailsEnum{
                "Landmarks",
                "Landmarks",
                "Landmarks",
            },
            Language: "ja",
            VisualFeatures: []shared.VisualFeaturesEnum{
                "Tags",
                "Categories",
                "Categories",
            },
        },
        Request: shared.ImageURL{
            URL: "ullam",
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