<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                ApimKey: shared.SchemeApimKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AnalyzeImageRequest{
        QueryParams: operations.AnalyzeImageQueryParams{
            Details: []shared.VisualFeaturesEnum1{
                "Celebrities",
            },
            Language: "pt",
            VisualFeatures: []shared.VisualFeaturesEnum{
                "Brands",
                "Objects",
            },
        },
        Request: shared.ImageURL{
            URL: "expedita",
        },
    }
    
    res, err := s.AnalyzeImage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageAnalysis != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->