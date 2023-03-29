# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/transcoder/v1/go
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
        Security: operations.TranscoderProjectsLocationsJobTemplatesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.TranscoderProjectsLocationsJobTemplatesCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.TranscoderProjectsLocationsJobTemplatesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            JobTemplateID: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.JobTemplate{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: "ullam",
                    },
                    shared.AdBreak{
                        StartTimeOffset: "saepe",
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: "sapiente",
                        Inputs: []string{
                            "eum",
                            "voluptatum",
                        },
                        Key: "autem",
                        StartTimeOffset: "vel",
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 479977,
                            ChannelCount: 568045,
                            ChannelLayout: []string{
                                "molestiae",
                                "quo",
                            },
                            Codec: "quasi",
                            DisplayName: "laboriosam",
                            LanguageCode: "dicta",
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: "voluptatem",
                                    GainDb: 3682.41,
                                    InputChannel: 832620,
                                    InputKey: "a",
                                    InputTrack: 778157,
                                    OutputChannel: 140350,
                                },
                                shared.AudioMapping{
                                    AtomKey: "accusamus",
                                    GainDb: 8700.88,
                                    InputChannel: 978619,
                                    InputKey: "rem",
                                    InputTrack: 799159,
                                    OutputChannel: 800911,
                                },
                                shared.AudioMapping{
                                    AtomKey: "praesentium",
                                    GainDb: 5204.78,
                                    InputChannel: 780529,
                                    InputKey: "soluta",
                                    InputTrack: 118274,
                                    OutputChannel: 720633,
                                },
                            },
                            SampleRateHertz: 639921,
                        },
                        Key: "culpa",
                        TextStream: &shared.TextStream{
                            Codec: "qui",
                            DisplayName: "sed",
                            LanguageCode: "rerum",
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: "occaecati",
                                    InputKey: "odit",
                                    InputTrack: 414662,
                                },
                                shared.TextMapping{
                                    AtomKey: "rem",
                                    InputKey: "voluptatem",
                                    InputTrack: 186332,
                                },
                                shared.TextMapping{
                                    AtomKey: "est",
                                    InputKey: "id",
                                    InputTrack: 456150,
                                },
                                shared.TextMapping{
                                    AtomKey: "numquam",
                                    InputKey: "similique",
                                    InputTrack: 135218,
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: false,
                                AqStrength: 187.89,
                                BFrameCount: 324141,
                                BPyramid: false,
                                BitrateBps: 617636,
                                CrfLevel: 149675,
                                EnableTwoPass: false,
                                EntropyCoder: "laborum",
                                FrameRate: 2223.21,
                                GopDuration: "et",
                                GopFrameCount: 386489,
                                HeightPixels: 943749,
                                PixelFormat: "ut",
                                Preset: "soluta",
                                Profile: "qui",
                                RateControlMode: "ea",
                                Tune: "laborum",
                                VbvFullnessBits: 437032,
                                VbvSizeBits: 902349,
                                WidthPixels: 697631,
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: false,
                                AqStrength: 992.8,
                                BFrameCount: 60225,
                                BPyramid: false,
                                BitrateBps: 969810,
                                CrfLevel: 666767,
                                EnableTwoPass: false,
                                FrameRate: 6531.4,
                                GopDuration: "libero",
                                GopFrameCount: 170909,
                                HeightPixels: 210382,
                                PixelFormat: "ea",
                                Preset: "magni",
                                Profile: "placeat",
                                RateControlMode: "ipsam",
                                Tune: "est",
                                VbvFullnessBits: 363711,
                                VbvSizeBits: 325047,
                                WidthPixels: 570197,
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: 38425,
                                CrfLevel: 438601,
                                FrameRate: 6342.74,
                                GopDuration: "doloribus",
                                GopFrameCount: 958950,
                                HeightPixels: 102044,
                                PixelFormat: "et",
                                Profile: "non",
                                RateControlMode: "quidem",
                                WidthPixels: 161309,
                            },
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 995300,
                            ChannelCount: 653108,
                            ChannelLayout: []string{
                                "aliquam",
                                "esse",
                                "totam",
                            },
                            Codec: "voluptatum",
                            DisplayName: "et",
                            LanguageCode: "fuga",
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: "laboriosam",
                                    GainDb: 1103.75,
                                    InputChannel: 674752,
                                    InputKey: "expedita",
                                    InputTrack: 317202,
                                    OutputChannel: 138183,
                                },
                            },
                            SampleRateHertz: 778346,
                        },
                        Key: "adipisci",
                        TextStream: &shared.TextStream{
                            Codec: "hic",
                            DisplayName: "consequatur",
                            LanguageCode: "distinctio",
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: "perferendis",
                                    InputKey: "aspernatur",
                                    InputTrack: 622846,
                                },
                                shared.TextMapping{
                                    AtomKey: "quo",
                                    InputKey: "tempore",
                                    InputTrack: 96098,
                                },
                                shared.TextMapping{
                                    AtomKey: "aut",
                                    InputKey: "reiciendis",
                                    InputTrack: 878194,
                                },
                                shared.TextMapping{
                                    AtomKey: "totam",
                                    InputKey: "molestias",
                                    InputTrack: 976762,
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: false,
                                AqStrength: 557.14,
                                BFrameCount: 604846,
                                BPyramid: false,
                                BitrateBps: 451159,
                                CrfLevel: 739264,
                                EnableTwoPass: false,
                                EntropyCoder: "sit",
                                FrameRate: 391.87,
                                GopDuration: "odio",
                                GopFrameCount: 282807,
                                HeightPixels: 979587,
                                PixelFormat: "sed",
                                Preset: "ea",
                                Profile: "exercitationem",
                                RateControlMode: "deleniti",
                                Tune: "sed",
                                VbvFullnessBits: 688661,
                                VbvSizeBits: 317983,
                                WidthPixels: 880476,
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: false,
                                AqStrength: 4142.63,
                                BFrameCount: 918236,
                                BPyramid: false,
                                BitrateBps: 64147,
                                CrfLevel: 216822,
                                EnableTwoPass: false,
                                FrameRate: 6924.72,
                                GopDuration: "error",
                                GopFrameCount: 566602,
                                HeightPixels: 865103,
                                PixelFormat: "ut",
                                Preset: "molestias",
                                Profile: "cupiditate",
                                RateControlMode: "sint",
                                Tune: "explicabo",
                                VbvFullnessBits: 921158,
                                VbvSizeBits: 575947,
                                WidthPixels: 83112,
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: 929297,
                                CrfLevel: 277718,
                                FrameRate: 3185.69,
                                GopDuration: "aut",
                                GopFrameCount: 667411,
                                HeightPixels: 842342,
                                PixelFormat: "magni",
                                Profile: "est",
                                RateControlMode: "porro",
                                WidthPixels: 841386,
                            },
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 289406,
                            ChannelCount: 264730,
                            ChannelLayout: []string{
                                "in",
                            },
                            Codec: "officia",
                            DisplayName: "omnis",
                            LanguageCode: "voluptatem",
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: "eum",
                                    GainDb: 3698.08,
                                    InputChannel: 4695,
                                    InputKey: "ratione",
                                    InputTrack: 677817,
                                    OutputChannel: 569618,
                                },
                            },
                            SampleRateHertz: 270008,
                        },
                        Key: "nihil",
                        TextStream: &shared.TextStream{
                            Codec: "id",
                            DisplayName: "quis",
                            LanguageCode: "sapiente",
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: "dolore",
                                    InputKey: "possimus",
                                    InputTrack: 576157,
                                },
                                shared.TextMapping{
                                    AtomKey: "qui",
                                    InputKey: "deserunt",
                                    InputTrack: 896039,
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: false,
                                AqStrength: 5722.52,
                                BFrameCount: 638921,
                                BPyramid: false,
                                BitrateBps: 223081,
                                CrfLevel: 891555,
                                EnableTwoPass: false,
                                EntropyCoder: "tenetur",
                                FrameRate: 6800.56,
                                GopDuration: "ducimus",
                                GopFrameCount: 449198,
                                HeightPixels: 846409,
                                PixelFormat: "reiciendis",
                                Preset: "cumque",
                                Profile: "fugit",
                                RateControlMode: "ullam",
                                Tune: "voluptas",
                                VbvFullnessBits: 813798,
                                VbvSizeBits: 411820,
                                WidthPixels: 396506,
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: false,
                                AqStrength: 6754.39,
                                BFrameCount: 881104,
                                BPyramid: false,
                                BitrateBps: 249796,
                                CrfLevel: 581273,
                                EnableTwoPass: false,
                                FrameRate: 3132.18,
                                GopDuration: "aut",
                                GopFrameCount: 965417,
                                HeightPixels: 692532,
                                PixelFormat: "officia",
                                Preset: "est",
                                Profile: "distinctio",
                                RateControlMode: "et",
                                Tune: "provident",
                                VbvFullnessBits: 956084,
                                VbvSizeBits: 230533,
                                WidthPixels: 643990,
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: 394869,
                                CrfLevel: 423855,
                                FrameRate: 6188.09,
                                GopDuration: "id",
                                GopFrameCount: 474867,
                                HeightPixels: 19193,
                                PixelFormat: "rem",
                                Profile: "corporis",
                                RateControlMode: "porro",
                                WidthPixels: 660174,
                            },
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: "nostrum",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: false,
                                LowBoost: false,
                                Lufs: 3834.62,
                            },
                            Color: &shared.Color{
                                Brightness: 6180.16,
                                Contrast: 7491.7,
                                Saturation: 4287.69,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 878453,
                                LeftPixels: 135474,
                                RightPixels: 102863,
                                TopPixels: 298282,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 923.73,
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: false,
                                    Mode: "similique",
                                    Parity: "ex",
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: false,
                                    DisableSpatialInterlacing: false,
                                    Mode: "deserunt",
                                    Parity: "omnis",
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: 5743.25,
                                Tune: "aperiam",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 653201,
                                LeftPixels: 968962,
                                RightPixels: 652103,
                                TopPixels: 320997,
                            },
                        },
                        URI: "http://dallin.org",
                    },
                    shared.Input{
                        Key: "qui",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: false,
                                LowBoost: false,
                                Lufs: 3675.62,
                            },
                            Color: &shared.Color{
                                Brightness: 972.6,
                                Contrast: 4358.65,
                                Saturation: 9840.43,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 891924,
                                LeftPixels: 260341,
                                RightPixels: 806194,
                                TopPixels: 537023,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 7038.89,
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: false,
                                    Mode: "ducimus",
                                    Parity: "aspernatur",
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: false,
                                    DisableSpatialInterlacing: false,
                                    Mode: "aspernatur",
                                    Parity: "sint",
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: 3523.12,
                                Tune: "quo",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 469249,
                                LeftPixels: 998848,
                                RightPixels: 841140,
                                TopPixels: 149448,
                            },
                        },
                        URI: "https://sanford.com",
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: "molestias",
                        MuxStreams: []string{
                            "dolorem",
                            "quia",
                            "omnis",
                        },
                        Type: "DASH",
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: "consequatur",
                        ElementaryStreams: []string{
                            "similique",
                            "eos",
                        },
                        FileName: "voluptate",
                        Key: "aperiam",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "quasi",
                        },
                    },
                    shared.MuxStream{
                        Container: "voluptatibus",
                        ElementaryStreams: []string{
                            "quis",
                            "qui",
                            "quam",
                        },
                        FileName: "quisquam",
                        Key: "ab",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "et",
                        },
                    },
                    shared.MuxStream{
                        Container: "consequatur",
                        ElementaryStreams: []string{
                            "sit",
                            "vero",
                            "incidunt",
                            "aut",
                        },
                        FileName: "voluptas",
                        Key: "ea",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "rerum",
                        },
                    },
                    shared.MuxStream{
                        Container: "qui",
                        ElementaryStreams: []string{
                            "ipsum",
                            "laboriosam",
                            "occaecati",
                        },
                        FileName: "corrupti",
                        Key: "illo",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "laboriosam",
                        },
                    },
                },
                Output: &shared.Output{
                    URI: "http://chelsea.com",
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "laudantium",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "modi",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "nisi",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 9441.2,
                                        Y: 9280.82,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "est",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 7044.15,
                                        Y: 5966.56,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "doloremque",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "repellendus",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "et",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 6214.79,
                                        Y: 503.7,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "in",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 6990.98,
                                        Y: 2378.93,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "asperiores",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "recusandae",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "laborum",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 6790.91,
                                        Y: 5356.33,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "et",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 5899.1,
                                        Y: 7508.44,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "qui",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "delectus",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "iste",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 3982.21,
                                        Y: 2123.9,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "non",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2224.43,
                                        Y: 1861.93,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 2187.49,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 9443.73,
                                Y: 5695.74,
                            },
                            URI: "https://ivy.info",
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: "ut",
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: 680545,
                        EndTimeOffset: "aliquam",
                        FilePrefix: "dicta",
                        Format: "inventore",
                        Interval: "inventore",
                        Quality: 434417,
                        RowCount: 487838,
                        SpriteHeightPixels: 311796,
                        SpriteWidthPixels: 881005,
                        StartTimeOffset: "optio",
                        TotalCount: 976405,
                    },
                },
            },
            Labels: map[string]string{
                "et": "dolor",
                "perspiciatis": "accusantium",
            },
            Name: "at",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.TranscoderProjectsLocationsJobTemplatesCreate(ctx, req)
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
## SDK Available Operations


### Projects

* `TranscoderProjectsLocationsJobTemplatesCreate` - Creates a job template in the specified region.
* `TranscoderProjectsLocationsJobTemplatesDelete` - Deletes a job template.
* `TranscoderProjectsLocationsJobTemplatesGet` - Returns the job template data.
* `TranscoderProjectsLocationsJobTemplatesList` - Lists job templates in the specified region.
* `TranscoderProjectsLocationsJobsCreate` - Creates a job in the specified region.
* `TranscoderProjectsLocationsJobsList` - Lists jobs in the specified region.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
