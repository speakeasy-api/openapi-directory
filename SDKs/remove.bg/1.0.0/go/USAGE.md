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
            APIKeyHeader: shared.SchemeAPIKeyHeader{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.PostRemovebgFormRequest{
        Request: shared.RemoveBgJSON{
            AddShadow: false,
            BgColor: "corrupti",
            BgImageURL: "provident",
            Channels: "alpha",
            Crop: false,
            CropMargin: "quibusdam",
            Format: "jpg",
            ImageFileB64: "nulla",
            ImageURL: "https://www.remove.bg/example-hd.jpg",
            Position: "corrupti",
            Roi: "illum",
            Scale: "vel",
            Semitransparency: false,
            Size: "full",
            Type: "product",
            TypeLevel: "1",
        },
    }

    ctx := context.Background()
    res, err := s.BackgroundRemoval.PostRemovebgForm(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveBgJSONResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->