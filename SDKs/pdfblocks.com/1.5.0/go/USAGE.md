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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AddImageWatermarkV1(ctx, operations.AddImageWatermarkV1RequestBody{
        File: operations.AddImageWatermarkV1RequestBodyFile{
            Content: []byte("corrupti"),
            File: "provident",
        },
        Image: operations.AddImageWatermarkV1RequestBodyImage{
            Content: []byte("distinctio"),
            Image: "quibusdam",
        },
        Margin: sdk.Float32(1),
        Transparency: sdk.Int(50),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddImageWatermarkV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->