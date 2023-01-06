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
    
    req := operations.ClassifyImageRequest{
        PathParams: operations.ClassifyImagePathParams{
            ProjectID: "blanditiis",
            PublishedName: "voluptates",
        },
        QueryParams: operations.ClassifyImageQueryParams{
            Application: "quo",
        },
        Request: operations.ClassifyImageRequestBody{
            ImageData: operations.ClassifyImageRequestBodyImageData{
                Content: []byte("dolorem"),
                ImageData: "ipsum",
            },
        },
    }
    
    res, err := s.ImagePredictionAPI.ClassifyImage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->