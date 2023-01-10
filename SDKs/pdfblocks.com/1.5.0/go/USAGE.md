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
                Content: []byte("sit"),
                File: "deleniti",
            },
            Image: operations.AddImageWatermarkV1RequestBodyImage{
                Content: []byte("ab"),
                Image: "alias",
            },
            Margin: 26.100000,
            Transparency: 6777217586286325242,
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