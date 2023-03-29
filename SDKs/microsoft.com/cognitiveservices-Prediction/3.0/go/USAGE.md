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

    req := operations.ClassifyImageRequest{
        PathParams: operations.ClassifyImagePathParams{
            ProjectID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
            PublishedName: "est",
        },
        QueryParams: operations.ClassifyImageQueryParams{
            Application: "voluptatem",
        },
        Request: operations.ClassifyImageRequestBody{
            ImageData: operations.ClassifyImageRequestBodyImageData{
                Content: []byte("consequatur"),
                ImageData: "fugiat",
            },
        },
    }

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.ClassifyImage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->