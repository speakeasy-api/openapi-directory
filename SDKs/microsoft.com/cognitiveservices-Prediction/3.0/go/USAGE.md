<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.ClassifyImage(ctx, operations.ClassifyImageRequest{
        RequestBody: operations.ClassifyImageRequestBody{
            ImageData: operations.ClassifyImageRequestBodyImageData{
                Content: []byte("corrupti"),
                ImageData: "provident",
            },
        },
        Application: sdk.String("distinctio"),
        ProjectID: "d9d8d69a-674e-40f4-a7cc-8796ed151a05",
        PublishedName: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->