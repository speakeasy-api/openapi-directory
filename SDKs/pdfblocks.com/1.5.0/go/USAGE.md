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
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AddImageWatermarkV1Request{
        Request: operations.AddImageWatermarkV1RequestBody{
            File: operations.AddImageWatermarkV1RequestBodyFile{
                Content: []byte("unde"),
                File: "deserunt",
            },
            Image: operations.AddImageWatermarkV1RequestBodyImage{
                Content: []byte("porro"),
                Image: "nulla",
            },
            Margin: 1,
            Transparency: 50,
        },
    }

    ctx := context.Background()
    res, err := s.AddImageWatermarkV1(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddImageWatermarkV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->