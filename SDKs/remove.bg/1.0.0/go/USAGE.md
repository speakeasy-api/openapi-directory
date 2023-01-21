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
                AddShadow: false,
                BgColor: "voluptas",
                BgImageURL: "culpa",
                Channels: "rgba",
                Crop: true,
                CropMargin: "dolor",
                Format: "zip",
                ImageFileB64: "voluptas",
                ImageURL: "fugit",
                Position: "et",
                Roi: "nihil",
                Scale: "rerum",
                Semitransparency: false,
                Size: "preview",
                Type: "auto",
                TypeLevel: "2",
            },
            RemoveBgJson1: &shared.RemoveBgJSON{
                AddShadow: false,
                BgColor: "dolorem",
                BgImageURL: "et",
                Channels: "rgba",
                Crop: true,
                CropMargin: "vitae",
                Format: "jpg",
                ImageFileB64: "dolores",
                ImageURL: "illum",
                Position: "debitis",
                Roi: "vel",
                Scale: "odio",
                Semitransparency: true,
                Size: "full",
                Type: "person",
                TypeLevel: "none",
            },
            RemoveBgMultipart: &shared.RemoveBgMultipart{
                AddShadow: false,
                BgColor: "commodi",
                BgImageFile: &shared.RemoveBgMultipartBgImageFile{
                    BgImageFile: "quis",
                    Content: []byte("est"),
                },
                BgImageURL: "aut",
                Channels: "rgba",
                Crop: true,
                CropMargin: "voluptas",
                Format: "zip",
                ImageFile: &shared.RemoveBgMultipartImageFile{
                    Content: []byte("aut"),
                    ImageFile: "illo",
                },
                ImageFileB64: "sed",
                ImageURL: "officiis",
                Position: "autem",
                Roi: "consectetur",
                Scale: "nobis",
                Semitransparency: false,
                Size: "preview",
                Type: "product",
                TypeLevel: "none",
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