# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/transcoder/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    s := sdk.New()

    req := operations.TranscoderProjectsLocationsJobTemplatesCreateRequest{
        DollarXgafv: "2",
        JobTemplate: &shared.JobTemplate{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: "distinctio",
                    },
                    shared.AdBreak{
                        StartTimeOffset: "quibusdam",
                    },
                    shared.AdBreak{
                        StartTimeOffset: "unde",
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: "corrupti",
                        Inputs: []string{
                            "vel",
                            "error",
                            "deserunt",
                            "suscipit",
                        },
                        Key: "iure",
                        StartTimeOffset: "magnam",
                    },
                    shared.EditAtom{
                        EndTimeOffset: "debitis",
                        Inputs: []string{
                            "delectus",
                        },
                        Key: "tempora",
                        StartTimeOffset: "suscipit",
                    },
                    shared.EditAtom{
                        EndTimeOffset: "molestiae",
                        Inputs: []string{
                            "placeat",
                            "voluptatum",
                            "iusto",
                            "excepturi",
                        },
                        Key: "nisi",
                        StartTimeOffset: "recusandae",
                    },
                    shared.EditAtom{
                        EndTimeOffset: "temporibus",
                        Inputs: []string{
                            "quis",
                        },
                        Key: "veritatis",
                        StartTimeOffset: "deserunt",
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 368241,
                            ChannelCount: 832620,
                            ChannelLayout: []string{
                                "quo",
                                "odit",
                                "at",
                                "at",
                            },
                            Codec: "maiores",
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 461479,
                                                    GainDb: 5204.78,
                                                    Key: "porro",
                                                    Track: 678880,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 118274,
                                                    GainDb: 7206.33,
                                                    Key: "officia",
                                                    Track: 582020,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 143353,
                                                    GainDb: 5373.73,
                                                    Key: "hic",
                                                    Track: 758616,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 521848,
                                                    GainDb: 1059.07,
                                                    Key: "commodi",
                                                    Track: 473600,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 186332,
                                                    GainDb: 7742.34,
                                                    Key: "cum",
                                                    Track: 456150,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 216550,
                                                    GainDb: 5684.34,
                                                    Key: "aspernatur",
                                                    Track: 18789,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 617636,
                                                    GainDb: 1496.75,
                                                    Key: "iste",
                                                    Track: 222321,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 616934,
                                                    GainDb: 3864.89,
                                                    Key: "hic",
                                                    Track: 902599,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 449950,
                                                    GainDb: 3595.08,
                                                    Key: "iste",
                                                    Track: 437032,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 902349,
                                                    GainDb: 6976.31,
                                                    Key: "architecto",
                                                    Track: 60225,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 969810,
                                                    GainDb: 6667.67,
                                                    Key: "mollitia",
                                                    Track: 670638,
                                                },
                                            },
                                        },
                                    },
                                    Key: "dolores",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 128926,
                                                    GainDb: 7506.86,
                                                    Key: "enim",
                                                    Track: 607831,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 363711,
                                                    GainDb: 3250.47,
                                                    Key: "excepturi",
                                                    Track: 38425,
                                                },
                                            },
                                        },
                                    },
                                    Key: "iure",
                                },
                            },
                            SampleRateHertz: 634274,
                        },
                        Key: "doloribus",
                        TextStream: &shared.TextStream{
                            Codec: "sapiente",
                            LanguageCode: "architecto",
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "culpa",
                                            Track: 161309,
                                        },
                                    },
                                    Key: "repellat",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "occaecati",
                                            Track: 253291,
                                        },
                                        shared.TextInput{
                                            Key: "commodi",
                                            Track: 466311,
                                        },
                                        shared.TextInput{
                                            Key: "molestiae",
                                            Track: 244425,
                                        },
                                    },
                                    Key: "error",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "quis",
                                            Track: 110375,
                                        },
                                    },
                                    Key: "laborum",
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: false,
                            AqStrength: 6563.3,
                            BFrameCount: 317202,
                            BPyramid: false,
                            BitrateBps: 138183,
                            Codec: "quo",
                            CrfLevel: 196582,
                            EnableTwoPass: false,
                            EntropyCoder: "tenetur",
                            FrameRate: 3687.25,
                            GopDuration: "id",
                            GopFrameCount: 820994,
                            HeightPixels: 13571,
                            PixelFormat: "quasi",
                            Preset: "error",
                            Profile: "temporibus",
                            RateControlMode: "laborum",
                            Tune: "quasi",
                            VbvFullnessBits: 971945,
                            VbvSizeBits: 976460,
                            WidthPixels: 878194,
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: "praesentium",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: false,
                                LowBoost: false,
                                Lufs: 9767.62,
                            },
                            Color: &shared.Color{
                                Brightness: 557.14,
                                Contrast: 6048.46,
                                Saturation: 4511.59,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 739264,
                                LeftPixels: 19987,
                                RightPixels: 39187,
                                TopPixels: 441711,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 2828.07,
                            },
                            Denoise: &shared.Denoise{
                                Strength: 9795.87,
                                Tune: "dicta",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 359444,
                                LeftPixels: 296140,
                                RightPixels: 480894,
                                TopPixels: 118727,
                            },
                        },
                        URI: "https://frugal-sympathy.info",
                    },
                    shared.Input{
                        Key: "repudiandae",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: false,
                                LowBoost: false,
                                Lufs: 641.47,
                            },
                            Color: &shared.Color{
                                Brightness: 2168.22,
                                Contrast: 6924.72,
                                Saturation: 5651.89,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 566602,
                                LeftPixels: 865103,
                                RightPixels: 265389,
                                TopPixels: 508969,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 5232.48,
                            },
                            Denoise: &shared.Denoise{
                                Strength: 9167.23,
                                Tune: "quasi",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 921158,
                                LeftPixels: 575947,
                                RightPixels: 83112,
                                TopPixels: 929297,
                            },
                        },
                        URI: "http://fruitful-adjective.net",
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: "explicabo",
                        MuxStreams: []string{
                            "distinctio",
                            "quibusdam",
                            "labore",
                        },
                        Type: "MANIFEST_TYPE_UNSPECIFIED",
                    },
                    shared.Manifest{
                        FileName: "qui",
                        MuxStreams: []string{
                            "cupiditate",
                            "quos",
                        },
                        Type: "MANIFEST_TYPE_UNSPECIFIED",
                    },
                    shared.Manifest{
                        FileName: "magni",
                        MuxStreams: []string{
                            "ipsam",
                            "alias",
                            "fugit",
                            "dolorum",
                        },
                        Type: "HLS",
                    },
                    shared.Manifest{
                        FileName: "tempora",
                        MuxStreams: []string{
                            "tempore",
                            "labore",
                            "delectus",
                        },
                        Type: "HLS",
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: "eligendi",
                        ElementaryStreams: []string{
                            "aliquid",
                            "provident",
                            "necessitatibus",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: "sint",
                            },
                            Iv: "officia",
                            Key: "dolor",
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: "debitis",
                                Scheme: "a",
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: "dolorum",
                            },
                        },
                        FileName: "in",
                        Key: "in",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "illum",
                        },
                    },
                },
                Output: &shared.Output{
                    URI: "https://right-burn.biz",
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "ea",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "aliquid",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "accusamus",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2497.96,
                                        Y: 5812.73,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "enim",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 8817.36,
                                        Y: 9654.17,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "quidem",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "provident",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "id",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 5013.24,
                                        Y: 5332.06,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "sapiente",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2305.33,
                                        Y: 6439.9,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "nisi",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "vel",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "omnis",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 4748.67,
                                        Y: 191.93,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "nihil",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 3015.75,
                                        Y: 7160.75,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "id",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "labore",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "suscipit",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 6180.16,
                                        Y: 7491.7,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "eum",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 8784.53,
                                        Y: 1354.74,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 1028.63,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 2982.82,
                                Y: 923.73,
                            },
                            URI: "https://grizzled-nest.name",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "accusantium",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "mollitia",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "mollitia",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 3209.97,
                                        Y: 4314.18,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "dolor",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 8965.47,
                                        Y: 1412.64,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "nemo",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "quasi",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "doloribus",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 8919.24,
                                        Y: 2603.41,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "maxime",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 5370.23,
                                        Y: 7038.89,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "in",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "architecto",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "repudiandae",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 3523.12,
                                        Y: 7142.42,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "nihil",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 9988.48,
                                        Y: 8411.4,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 1494.48,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 9046.48,
                                Y: 8681.26,
                            },
                            URI: "http://cute-lens.name",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "sunt",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "quo",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "pariatur",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 8073.19,
                                        Y: 4113.97,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "excepturi",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 1399.72,
                                        Y: 4071.83,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 332.22,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 691.67,
                                Y: 9825.75,
                            },
                            URI: "https://harmonious-in-joke.info",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "eaque",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "pariatur",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "voluptatibus",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 166.27,
                                        Y: 8558.04,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "amet",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 117.14,
                                        Y: 7649.12,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "corporis",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "hic",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "nobis",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 1716.29,
                                        Y: 3394.04,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "totam",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 4895.49,
                                        Y: 543.38,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "quis",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "nesciunt",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "perferendis",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 1709.86,
                                        Y: 7936.98,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "quam",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2239.24,
                                        Y: 8745.73,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 3453.52,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 9441.2,
                                Y: 9280.82,
                            },
                            URI: "https://rotten-noir.com",
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: "porro",
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: 500026,
                        EndTimeOffset: "error",
                        FilePrefix: "eaque",
                        Format: "occaecati",
                        Interval: "rerum",
                        Quality: 237893,
                        RowCount: 992397,
                        SpriteHeightPixels: 934214,
                        SpriteWidthPixels: 267262,
                        StartTimeOffset: "iste",
                        TotalCount: 679091,
                    },
                },
            },
            Name: "deleniti",
        },
        AccessToken: "pariatur",
        Alt: "media",
        Callback: "nobis",
        Fields: "libero",
        JobTemplateID: "delectus",
        Key: "quaerat",
        OauthToken: "quos",
        Parent: "aliquid",
        PrettyPrint: false,
        QuotaUser: "dolorem",
        UploadType: "dolorem",
        UploadProtocol: "dolor",
    }

    ctx := context.Background()
    res, err := s.Projects.TranscoderProjectsLocationsJobTemplatesCreate(ctx, req, operations.TranscoderProjectsLocationsJobTemplatesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobTemplate != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `TranscoderProjectsLocationsJobTemplatesCreate` - Creates a job template in the specified region.
* `TranscoderProjectsLocationsJobTemplatesDelete` - Deletes a job template.
* `TranscoderProjectsLocationsJobTemplatesGet` - Returns the job template data.
* `TranscoderProjectsLocationsJobTemplatesList` - Lists job templates in the specified region.
* `TranscoderProjectsLocationsJobsCreate` - Creates a job in the specified region.
* `TranscoderProjectsLocationsJobsList` - Lists jobs in the specified region.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
