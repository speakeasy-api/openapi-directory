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
            Parent: "corrupti",
        },
        QueryParams: operations.TranscoderProjectsLocationsJobTemplatesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            JobTemplateID: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.JobTemplate{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: "magnam",
                    },
                    shared.AdBreak{
                        StartTimeOffset: "debitis",
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: "delectus",
                        Inputs: []string{
                            "suscipit",
                            "molestiae",
                        },
                        Key: "minus",
                        StartTimeOffset: "placeat",
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 479977,
                            ChannelCount: 568045,
                            ChannelLayout: []string{
                                "recusandae",
                                "temporibus",
                            },
                            Codec: "ab",
                            DisplayName: "quis",
                            LanguageCode: "veritatis",
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: "perferendis",
                                    GainDb: 3682.41,
                                    InputChannel: 832620,
                                    InputKey: "sapiente",
                                    InputTrack: 778157,
                                    OutputChannel: 140350,
                                },
                                shared.AudioMapping{
                                    AtomKey: "at",
                                    GainDb: 8700.88,
                                    InputChannel: 978619,
                                    InputKey: "molestiae",
                                    InputTrack: 799159,
                                    OutputChannel: 800911,
                                },
                                shared.AudioMapping{
                                    AtomKey: "esse",
                                    GainDb: 5204.78,
                                    InputChannel: 780529,
                                    InputKey: "dolorum",
                                    InputTrack: 118274,
                                    OutputChannel: 720633,
                                },
                            },
                            SampleRateHertz: 639921,
                        },
                        Key: "occaecati",
                        TextStream: &shared.TextStream{
                            Codec: "fugit",
                            DisplayName: "deleniti",
                            LanguageCode: "hic",
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: "totam",
                                    InputKey: "beatae",
                                    InputTrack: 414662,
                                },
                                shared.TextMapping{
                                    AtomKey: "molestiae",
                                    InputKey: "modi",
                                    InputTrack: 186332,
                                },
                                shared.TextMapping{
                                    AtomKey: "impedit",
                                    InputKey: "cum",
                                    InputTrack: 456150,
                                },
                                shared.TextMapping{
                                    AtomKey: "ipsum",
                                    InputKey: "excepturi",
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
                                EntropyCoder: "iste",
                                FrameRate: 2223.21,
                                GopDuration: "natus",
                                GopFrameCount: 386489,
                                HeightPixels: 943749,
                                PixelFormat: "saepe",
                                Preset: "fuga",
                                Profile: "in",
                                RateControlMode: "corporis",
                                Tune: "iste",
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
                                GopDuration: "laborum",
                                GopFrameCount: 170909,
                                HeightPixels: 210382,
                                PixelFormat: "corporis",
                                Preset: "explicabo",
                                Profile: "nobis",
                                RateControlMode: "enim",
                                Tune: "omnis",
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
                                PixelFormat: "mollitia",
                                Profile: "dolorem",
                                RateControlMode: "culpa",
                                WidthPixels: 161309,
                            },
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 995300,
                            ChannelCount: 653108,
                            ChannelLayout: []string{
                                "numquam",
                                "commodi",
                                "quam",
                            },
                            Codec: "molestiae",
                            DisplayName: "velit",
                            LanguageCode: "error",
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: "quis",
                                    GainDb: 1103.75,
                                    InputChannel: 674752,
                                    InputKey: "animi",
                                    InputTrack: 317202,
                                    OutputChannel: 138183,
                                },
                            },
                            SampleRateHertz: 778346,
                        },
                        Key: "sequi",
                        TextStream: &shared.TextStream{
                            Codec: "tenetur",
                            DisplayName: "ipsam",
                            LanguageCode: "id",
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: "aut",
                                    InputKey: "quasi",
                                    InputTrack: 622846,
                                },
                                shared.TextMapping{
                                    AtomKey: "temporibus",
                                    InputKey: "laborum",
                                    InputTrack: 96098,
                                },
                                shared.TextMapping{
                                    AtomKey: "reiciendis",
                                    InputKey: "voluptatibus",
                                    InputTrack: 878194,
                                },
                                shared.TextMapping{
                                    AtomKey: "nihil",
                                    InputKey: "praesentium",
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
                                EntropyCoder: "perferendis",
                                FrameRate: 391.87,
                                GopDuration: "reprehenderit",
                                GopFrameCount: 282807,
                                HeightPixels: 979587,
                                PixelFormat: "dicta",
                                Preset: "corporis",
                                Profile: "dolore",
                                RateControlMode: "iusto",
                                Tune: "dicta",
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
                                GopDuration: "molestias",
                                GopFrameCount: 566602,
                                HeightPixels: 865103,
                                PixelFormat: "modi",
                                Preset: "praesentium",
                                Profile: "rem",
                                RateControlMode: "voluptates",
                                Tune: "quasi",
                                VbvFullnessBits: 921158,
                                VbvSizeBits: 575947,
                                WidthPixels: 83112,
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: 929297,
                                CrfLevel: 277718,
                                FrameRate: 3185.69,
                                GopDuration: "consequatur",
                                GopFrameCount: 667411,
                                HeightPixels: 842342,
                                PixelFormat: "explicabo",
                                Profile: "deserunt",
                                RateControlMode: "distinctio",
                                WidthPixels: 841386,
                            },
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 289406,
                            ChannelCount: 264730,
                            ChannelLayout: []string{
                                "aliquid",
                            },
                            Codec: "cupiditate",
                            DisplayName: "quos",
                            LanguageCode: "perferendis",
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: "assumenda",
                                    GainDb: 3698.08,
                                    InputChannel: 4695,
                                    InputKey: "fugit",
                                    InputTrack: 677817,
                                    OutputChannel: 569618,
                                },
                            },
                            SampleRateHertz: 270008,
                        },
                        Key: "facilis",
                        TextStream: &shared.TextStream{
                            Codec: "tempore",
                            DisplayName: "labore",
                            LanguageCode: "delectus",
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: "non",
                                    InputKey: "eligendi",
                                    InputTrack: 576157,
                                },
                                shared.TextMapping{
                                    AtomKey: "aliquid",
                                    InputKey: "provident",
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
                                EntropyCoder: "a",
                                FrameRate: 6800.56,
                                GopDuration: "in",
                                GopFrameCount: 449198,
                                HeightPixels: 846409,
                                PixelFormat: "maiores",
                                Preset: "rerum",
                                Profile: "dicta",
                                RateControlMode: "magnam",
                                Tune: "cumque",
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
                                GopDuration: "accusamus",
                                GopFrameCount: 965417,
                                HeightPixels: 692532,
                                PixelFormat: "provident",
                                Preset: "nam",
                                Profile: "id",
                                RateControlMode: "blanditiis",
                                Tune: "deleniti",
                                VbvFullnessBits: 956084,
                                VbvSizeBits: 230533,
                                WidthPixels: 643990,
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: 394869,
                                CrfLevel: 423855,
                                FrameRate: 6188.09,
                                GopDuration: "omnis",
                                GopFrameCount: 474867,
                                HeightPixels: 19193,
                                PixelFormat: "nihil",
                                Profile: "magnam",
                                RateControlMode: "distinctio",
                                WidthPixels: 660174,
                            },
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: "labore",
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
                                    Mode: "excepturi",
                                    Parity: "ullam",
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: false,
                                    DisableSpatialInterlacing: false,
                                    Mode: "provident",
                                    Parity: "quos",
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: 5743.25,
                                Tune: "accusantium",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 653201,
                                LeftPixels: 968962,
                                RightPixels: 652103,
                                TopPixels: 320997,
                            },
                        },
                        URI: "http://easy-going-term.com",
                    },
                    shared.Input{
                        Key: "nemo",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: false,
                                LowBoost: false,
                                Lufs: 972.6,
                            },
                            Color: &shared.Color{
                                Brightness: 4358.65,
                                Contrast: 9840.43,
                                Saturation: 8919.24,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 260341,
                                LeftPixels: 806194,
                                RightPixels: 537023,
                                TopPixels: 703889,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 4479.26,
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: false,
                                    Mode: "architecto",
                                    Parity: "architecto",
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: false,
                                    DisableSpatialInterlacing: false,
                                    Mode: "repudiandae",
                                    Parity: "ullam",
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: 7142.42,
                                Tune: "nihil",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 998848,
                                LeftPixels: 841140,
                                RightPixels: 149448,
                                TopPixels: 904648,
                            },
                        },
                        URI: "https://another-circuit.name",
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: "magni",
                        MuxStreams: []string{
                            "quo",
                        },
                        Type: "DASH",
                    },
                    shared.Manifest{
                        FileName: "pariatur",
                        MuxStreams: []string{
                            "ea",
                            "excepturi",
                            "odit",
                            "ea",
                        },
                        Type: "MANIFEST_TYPE_UNSPECIFIED",
                    },
                    shared.Manifest{
                        FileName: "ab",
                        MuxStreams: []string{
                            "quidem",
                            "ipsam",
                            "voluptate",
                            "autem",
                        },
                        Type: "DASH",
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: "pariatur",
                        ElementaryStreams: []string{
                            "voluptatibus",
                            "perferendis",
                        },
                        FileName: "fugiat",
                        Key: "amet",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "aut",
                        },
                    },
                },
                Output: &shared.Output{
                    URI: "https://grubby-urge.net",
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "quis",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "totam",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "eaque",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 3389.85,
                                        Y: 1999.96,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "eos",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 185.21,
                                        Y: 1709.86,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 7936.98,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 4634.51,
                                Y: 2239.24,
                            },
                            URI: "https://grandiose-urge.org",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "facilis",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "perspiciatis",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "porro",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 1646.94,
                                        Y: 5000.26,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "error",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 503.7,
                                        Y: 5772.29,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "rerum",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "adipisci",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "earum",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2672.62,
                                        Y: 6139.66,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "dolorum",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 5356.33,
                                        Y: 8642.82,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "provident",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "nobis",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "delectus",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 3119.45,
                                        Y: 5542.42,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "aliquid",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2123.9,
                                        Y: 2098.43,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 2224.43,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 1861.93,
                                Y: 2187.49,
                            },
                            URI: "https://nimble-reporter.info",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "reiciendis",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "amet",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "numquam",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 852.95,
                                        Y: 580.29,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "ipsa",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 4344.17,
                                        Y: 4878.38,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "quaerat",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "accusamus",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "voluptatibus",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 3777.52,
                                        Y: 6176.58,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "eos",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 5424.99,
                                        Y: 246.78,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 8546.14,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 672.49,
                                Y: 7438.35,
                            },
                            URI: "https://late-in-laws.net",
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: "deleniti",
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: 896672,
                        EndTimeOffset: "distinctio",
                        FilePrefix: "asperiores",
                        Format: "nihil",
                        Interval: "ipsum",
                        Quality: 456015,
                        RowCount: 663078,
                        SpriteHeightPixels: 906418,
                        SpriteWidthPixels: 263322,
                        StartTimeOffset: "aspernatur",
                        TotalCount: 20651,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 229219,
                        EndTimeOffset: "optio",
                        FilePrefix: "accusamus",
                        Format: "ad",
                        Interval: "saepe",
                        Quality: 383464,
                        RowCount: 645785,
                        SpriteHeightPixels: 588317,
                        SpriteWidthPixels: 324683,
                        StartTimeOffset: "repellendus",
                        TotalCount: 519711,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 628982,
                        EndTimeOffset: "alias",
                        FilePrefix: "at",
                        Format: "quaerat",
                        Interval: "tempora",
                        Quality: 425451,
                        RowCount: 798047,
                        SpriteHeightPixels: 885338,
                        SpriteWidthPixels: 185636,
                        StartTimeOffset: "dolorum",
                        TotalCount: 952792,
                    },
                },
            },
            Labels: map[string]string{
                "harum": "iusto",
                "ipsum": "quisquam",
            },
            Name: "tenetur",
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