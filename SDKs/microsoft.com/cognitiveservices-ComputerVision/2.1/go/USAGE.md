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
        DescriptionExclude: []shared.DescriptionExcludeEnum{
            shared.DescriptionExcludeEnumLandmarks,
            shared.DescriptionExcludeEnumLandmarks,
            shared.DescriptionExcludeEnumLandmarks,
        },
        Details: []AnalyzeImageDetailsEnum{
            operations.AnalyzeImageDetailsEnumLandmarks,
            operations.AnalyzeImageDetailsEnumLandmarks,
            operations.AnalyzeImageDetailsEnumCelebrities,
            operations.AnalyzeImageDetailsEnumLandmarks,
        },
        Language: shared.ServiceLanguageEnumPt.ToPointer(),
        VisualFeatures: []shared.VisualFeaturesEnum{
            shared.VisualFeaturesEnumCategories,
            shared.VisualFeaturesEnumAdult,
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