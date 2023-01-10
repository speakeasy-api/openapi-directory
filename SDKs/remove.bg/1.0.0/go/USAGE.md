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
                APIKeyHeader: shared.SchemeAPIKeyHeader{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.PostRemovebgRequest{
        Request: operations.PostRemovebgRequests{
            RemoveBgJSON: &shared.RemoveBgJSON{
                AddShadow: true,
                BgColor: "illum",
                BgImageURL: "quidem",
                Channels: "rgba",
                Crop: true,
                CropMargin: "totam",
                Format: "jpg",
                ImageFileB64: "deserunt",
                ImageURL: "ex",
                Position: "aperiam",
                Roi: "fuga",
                Scale: "illo",
                Semitransparency: false,
                Size: "auto",
                Type: "auto",
                TypeLevel: "latest",
            },
            RemoveBgJson1: &shared.RemoveBgJSON{
                AddShadow: true,
                BgColor: "cumque",
                BgImageURL: "voluptates",
                Channels: "alpha",
                Crop: false,
                CropMargin: "iusto",
                Format: "auto",
                ImageFileB64: "sint",
                ImageURL: "veritatis",
                Position: "ipsum",
                Roi: "qui",
                Scale: "ullam",
                Semitransparency: false,
                Size: "auto",
                Type: "product",
                TypeLevel: "none",
            },
            RemoveBgMultipart: &shared.RemoveBgMultipart{
                AddShadow: false,
                BgColor: "non",
                BgImageFile: &shared.RemoveBgMultipartBgImageFile{
                    BgImageFile: "asperiores",
                    Content: []byte("dolor"),
                },
                BgImageURL: "labore",
                Channels: "rgba",
                Crop: false,
                CropMargin: "veritatis",
                Format: "auto",
                ImageFile: &shared.RemoveBgMultipartImageFile{
                    Content: []byte("est"),
                    ImageFile: "blanditiis",
                },
                ImageFileB64: "necessitatibus",
                ImageURL: "cumque",
                Position: "dolore",
                Roi: "quia",
                Scale: "rerum",
                Semitransparency: true,
                Size: "preview",
                Type: "auto",
                TypeLevel: "1",
            },
        },
    }
    
    res, err := s.BackgroundRemoval.PostRemovebg(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveBgJSONResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->