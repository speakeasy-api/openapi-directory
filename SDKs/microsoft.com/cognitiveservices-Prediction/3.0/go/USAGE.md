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
            ProjectID: "aut",
            PublishedName: "beatae",
        },
        QueryParams: operations.ClassifyImageQueryParams{
            Application: "beatae",
        },
        Request: operations.ClassifyImageRequestBody{
            ImageData: operations.ClassifyImageRequestBodyImageData{
                Content: []byte("veniam"),
                ImageData: "sed",
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