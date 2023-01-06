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
                BgColor: "non",
                BgImageURL: "repellat",
                Channels: "alpha",
                Crop: true,
                CropMargin: "sunt",
                Format: "zip",
                ImageFileB64: "sed",
                ImageURL: "totam",
                Position: "sed",
                Roi: "natus",
                Scale: "perspiciatis",
                Semitransparency: true,
                Size: "preview",
                Type: "person",
                TypeLevel: "1",
            },
            RemoveBgJson1: &shared.RemoveBgJSON{
                AddShadow: true,
                BgColor: "autem",
                BgImageURL: "dolor",
                Channels: "alpha",
                Crop: true,
                CropMargin: "aspernatur",
                Format: "auto",
                ImageFileB64: "dolor",
                ImageURL: "sequi",
                Position: "eos",
                Roi: "suscipit",
                Scale: "est",
                Semitransparency: false,
                Size: "full",
                Type: "auto",
                TypeLevel: "1",
            },
            RemoveBgMultipart: &shared.RemoveBgMultipart{
                AddShadow: true,
                BgColor: "quam",
                BgImageFile: &shared.RemoveBgMultipartBgImageFile{
                    BgImageFile: "nemo",
                    Content: []byte("dolore"),
                },
                BgImageURL: "rem",
                Channels: "alpha",
                Crop: false,
                CropMargin: "consequatur",
                Format: "jpg",
                ImageFile: &shared.RemoveBgMultipartImageFile{
                    Content: []byte("eaque"),
                    ImageFile: "a",
                },
                ImageFileB64: "quasi",
                ImageURL: "temporibus",
                Position: "blanditiis",
                Roi: "deserunt",
                Scale: "eum",
                Semitransparency: false,
                Size: "preview",
                Type: "person",
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