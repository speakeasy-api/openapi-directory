<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AnalyzeImage(ctx, operations.AnalyzeImageRequest{
        ImageURL: shared.ImageURL{
            URL: "corrupti",
        },
        Details: []AnalyzeImageDetailsEnum{
            operations.AnalyzeImageDetailsEnumLandmarks,
            operations.AnalyzeImageDetailsEnumLandmarks,
            operations.AnalyzeImageDetailsEnumLandmarks,
        },
        Language: shared.ServiceLanguageEnumZh.ToPointer(),
        VisualFeatures: []shared.VisualFeaturesEnum{
            shared.VisualFeaturesEnumObjects,
            shared.VisualFeaturesEnumCategories,
            shared.VisualFeaturesEnumTags,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageAnalysis != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->