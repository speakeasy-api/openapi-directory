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
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AddImageWatermarkV1Request{
        Request: operations.AddImageWatermarkV1RequestBody{
            File: operations.AddImageWatermarkV1RequestBodyFile{
                Content: []byte("voluptatibus"),
                File: "quidem",
            },
            Image: operations.AddImageWatermarkV1RequestBodyImage{
                Content: []byte("exercitationem"),
                Image: "et",
            },
            Margin: 4.100000,
            Transparency: 1344633955781589999,
        },
    }
    
    res, err := s.AddImageWatermarkV1(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddImageWatermarkV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->