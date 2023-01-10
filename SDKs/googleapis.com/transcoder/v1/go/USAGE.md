<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "maiores",
        },
        QueryParams: operations.TranscoderProjectsLocationsJobTemplatesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "ut",
            Alt: "proto",
            Callback: "et",
            Fields: "hic",
            JobTemplateID: "consequatur",
            Key: "qui",
            OauthToken: "ut",
            PrettyPrint: true,
            QuotaUser: "repellat",
            UploadType: "vitae",
            UploadProtocol: "veritatis",
        },
        Request: &shared.JobTemplate{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: "dolore",
                    },
                    shared.AdBreak{
                        StartTimeOffset: "omnis",
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: "est",
                        Inputs: []string{
                            "expedita",
                        },
                        Key: "voluptates",
                        StartTimeOffset: "aperiam",
                    },
                    shared.EditAtom{
                        EndTimeOffset: "id",
                        Inputs: []string{
                            "vitae",
                        },
                        Key: "molestiae",
                        StartTimeOffset: "sed",
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 2486254503504335637,
                            ChannelCount: 1327590010125728031,
                            ChannelLayout: []string{
                                "corporis",
                            },
                            Codec: "nemo",
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: "aut",
                                    GainDb: 56.099998,
                                    InputChannel: 1857508589283645104,
                                    InputKey: "consectetur",
                                    InputTrack: 7353581824819058431,
                                    OutputChannel: 8089940404465677720,
                                },
                                shared.AudioMapping{
                                    AtomKey: "magni",
                                    GainDb: 40.200001,
                                    InputChannel: 7911523287298070298,
                                    InputKey: "inventore",
                                    InputTrack: 8030447454894538442,
                                    OutputChannel: 1791388125543355420,
                                },
                                shared.AudioMapping{
                                    AtomKey: "quas",
                                    GainDb: 97.099998,
                                    InputChannel: 4938937113744242844,
                                    InputKey: "sunt",
                                    InputTrack: 4109628284538931285,
                                    OutputChannel: 7834509985500921950,
                                },
                            },
                            SampleRateHertz: 5744900134772753844,
                        },
                        Key: "non",
                        TextStream: &shared.TextStream{
                            Codec: "omnis",
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: "dolor",
                                    InputKey: "rerum",
                                    InputTrack: 4040908037904174339,
                                },
                                shared.TextMapping{
                                    AtomKey: "non",
                                    InputKey: "soluta",
                                    InputTrack: 215257887230853729,
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: true,
                                AqStrength: 99.099998,
                                BFrameCount: 2391036045929995330,
                                BPyramid: false,
                                BitrateBps: 2480423464958630602,
                                CrfLevel: 5885551327982754724,
                                EnableTwoPass: true,
                                EntropyCoder: "soluta",
                                FrameRate: 41.099998,
                                GopDuration: "soluta",
                                GopFrameCount: 6385659819997428011,
                                HeightPixels: 8609035101093092038,
                                PixelFormat: "nostrum",
                                Preset: "ex",
                                Profile: "tempore",
                                RateControlMode: "et",
                                Tune: "sed",
                                VbvFullnessBits: 2816059037918821884,
                                VbvSizeBits: 1173153493415182005,
                                WidthPixels: 7173519952768853537,
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: false,
                                AqStrength: 23.100000,
                                BFrameCount: 390937637953858651,
                                BPyramid: true,
                                BitrateBps: 6122118647002868960,
                                CrfLevel: 3126229729747386194,
                                EnableTwoPass: false,
                                FrameRate: 89.199997,
                                GopDuration: "tempora",
                                GopFrameCount: 3429171250998373511,
                                HeightPixels: 6901833358534565043,
                                PixelFormat: "voluptatem",
                                Preset: "fuga",
                                Profile: "incidunt",
                                RateControlMode: "quia",
                                Tune: "iure",
                                VbvFullnessBits: 7735915230001379743,
                                VbvSizeBits: 399771734835322312,
                                WidthPixels: 4176102116855013289,
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: 8022954540817835706,
                                CrfLevel: 2265993790355168423,
                                FrameRate: 72.199997,
                                GopDuration: "facere",
                                GopFrameCount: 8764984772842298950,
                                HeightPixels: 1713235290354671766,
                                PixelFormat: "consectetur",
                                Profile: "voluptatem",
                                RateControlMode: "quis",
                                WidthPixels: 2015936184478320819,
                            },
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 1010001708344682038,
                            ChannelCount: 8922813550406397629,
                            ChannelLayout: []string{
                                "qui",
                            },
                            Codec: "sequi",
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: "atque",
                                    GainDb: 25.200001,
                                    InputChannel: 9043363411818517441,
                                    InputKey: "reprehenderit",
                                    InputTrack: 3025759118941071560,
                                    OutputChannel: 7311456320750063564,
                                },
                            },
                            SampleRateHertz: 2626138207850247013,
                        },
                        Key: "enim",
                        TextStream: &shared.TextStream{
                            Codec: "culpa",
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: "adipisci",
                                    InputKey: "omnis",
                                    InputTrack: 2764701326181603116,
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: true,
                                AqStrength: 82.099998,
                                BFrameCount: 8694015465892439035,
                                BPyramid: false,
                                BitrateBps: 6955777946613518777,
                                CrfLevel: 6683747813176890318,
                                EnableTwoPass: false,
                                EntropyCoder: "voluptates",
                                FrameRate: 26.100000,
                                GopDuration: "magni",
                                GopFrameCount: 5919908621062203443,
                                HeightPixels: 1223118018736133583,
                                PixelFormat: "architecto",
                                Preset: "inventore",
                                Profile: "ut",
                                RateControlMode: "cupiditate",
                                Tune: "in",
                                VbvFullnessBits: 4496664425541628269,
                                VbvSizeBits: 717303605087228940,
                                WidthPixels: 8799876897742566916,
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: true,
                                AqStrength: 86.099998,
                                BFrameCount: 5221735761267031323,
                                BPyramid: false,
                                BitrateBps: 208592009785711552,
                                CrfLevel: 3417911158247711799,
                                EnableTwoPass: false,
                                FrameRate: 23.100000,
                                GopDuration: "exercitationem",
                                GopFrameCount: 7183801876620200303,
                                HeightPixels: 6600825179953293974,
                                PixelFormat: "dolorem",
                                Preset: "maxime",
                                Profile: "illo",
                                RateControlMode: "velit",
                                Tune: "modi",
                                VbvFullnessBits: 6212914163444078021,
                                VbvSizeBits: 2032600684748689995,
                                WidthPixels: 3240505202659425150,
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: 8458717037456504964,
                                CrfLevel: 5109170713077538425,
                                FrameRate: 60.200001,
                                GopDuration: "neque",
                                GopFrameCount: 478713195984186844,
                                HeightPixels: 1245778378213089751,
                                PixelFormat: "nihil",
                                Profile: "dicta",
                                RateControlMode: "ratione",
                                WidthPixels: 1407148767265176406,
                            },
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: "rerum",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: false,
                                LowBoost: false,
                                Lufs: 61.200001,
                            },
                            Color: &shared.Color{
                                Brightness: 27.100000,
                                Contrast: 47.099998,
                                Saturation: 84.099998,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 3735720738608608890,
                                LeftPixels: 6701662263405581664,
                                RightPixels: 7228013150280111400,
                                TopPixels: 4287449961909311149,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 64.199997,
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: true,
                                    Mode: "sequi",
                                    Parity: "molestiae",
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: true,
                                    DisableSpatialInterlacing: false,
                                    Mode: "dicta",
                                    Parity: "culpa",
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: 86.199997,
                                Tune: "veritatis",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 491321338406121329,
                                LeftPixels: 8262153506971021336,
                                RightPixels: 7627964282123116830,
                                TopPixels: 2441665080944105611,
                            },
                        },
                        URI: "omnis",
                    },
                    shared.Input{
                        Key: "aperiam",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: true,
                                LowBoost: true,
                                Lufs: 15.200000,
                            },
                            Color: &shared.Color{
                                Brightness: 24.200001,
                                Contrast: 92.099998,
                                Saturation: 71.199997,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 8831994486805097443,
                                LeftPixels: 2932022947290446590,
                                RightPixels: 972747749731930633,
                                TopPixels: 8989858287671588145,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 32.200001,
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: false,
                                    Mode: "non",
                                    Parity: "nam",
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: false,
                                    DisableSpatialInterlacing: true,
                                    Mode: "ut",
                                    Parity: "quis",
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: 57.099998,
                                Tune: "rerum",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 5873718723483420351,
                                LeftPixels: 6518958772942461468,
                                RightPixels: 1427975912651779027,
                                TopPixels: 2133339267623027293,
                            },
                        },
                        URI: "natus",
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: "fuga",
                        MuxStreams: []string{
                            "est",
                            "ut",
                        },
                        Type: "MANIFEST_TYPE_UNSPECIFIED",
                    },
                    shared.Manifest{
                        FileName: "eum",
                        MuxStreams: []string{
                            "harum",
                        },
                        Type: "MANIFEST_TYPE_UNSPECIFIED",
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: "vel",
                        ElementaryStreams: []string{
                            "iste",
                        },
                        FileName: "perspiciatis",
                        Key: "est",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: true,
                            SegmentDuration: "esse",
                        },
                    },
                    shared.MuxStream{
                        Container: "dolor",
                        ElementaryStreams: []string{
                            "fuga",
                            "consequatur",
                            "eveniet",
                        },
                        FileName: "sit",
                        Key: "deleniti",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: true,
                            SegmentDuration: "quod",
                        },
                    },
                    shared.MuxStream{
                        Container: "rerum",
                        ElementaryStreams: []string{
                            "corporis",
                            "quo",
                            "assumenda",
                        },
                        FileName: "sunt",
                        Key: "delectus",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: true,
                            SegmentDuration: "perspiciatis",
                        },
                    },
                },
                Output: &shared.Output{
                    URI: "inventore",
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "ut",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "ea",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "amet",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 5.200000,
                                        Y: 40.200001,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "delectus",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 21.200001,
                                        Y: 94.099998,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "dolorem",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "vel",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "commodi",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 32.200001,
                                        Y: 18.100000,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "asperiores",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 30.200001,
                                        Y: 87.199997,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "sint",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "non",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "distinctio",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 24.200001,
                                        Y: 78.199997,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "repellat",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 21.100000,
                                        Y: 61.200001,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 50.099998,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 71.099998,
                                Y: 94.099998,
                            },
                            URI: "enim",
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: "perspiciatis",
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: 5046076591311312388,
                        EndTimeOffset: "blanditiis",
                        FilePrefix: "reiciendis",
                        Format: "sit",
                        Interval: "fugiat",
                        Quality: 565903323269569607,
                        RowCount: 2970700411787524209,
                        SpriteHeightPixels: 2657773069328556553,
                        SpriteWidthPixels: 6543714679893911619,
                        StartTimeOffset: "vel",
                        TotalCount: 2141990745511989474,
                    },
                },
            },
            Labels: map[string]string{
                "facere": "id",
                "non": "eveniet",
                "sit": "facere",
            },
            Name: "porro",
        },
    }
    
    res, err := s.Projects.TranscoderProjectsLocationsJobTemplatesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.JobTemplate != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->