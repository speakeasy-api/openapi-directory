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
            Parent: "est",
        },
        QueryParams: operations.TranscoderProjectsLocationsJobTemplatesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "consequatur",
            Alt: "proto",
            Callback: "eligendi",
            Fields: "enim",
            JobTemplateID: "autem",
            Key: "culpa",
            OauthToken: "omnis",
            PrettyPrint: true,
            QuotaUser: "eius",
            UploadType: "eligendi",
            UploadProtocol: "eum",
        },
        Request: &shared.JobTemplate{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: "hic",
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: "quam",
                        Inputs: []string{
                            "et",
                        },
                        Key: "molestias",
                        StartTimeOffset: "qui",
                    },
                    shared.EditAtom{
                        EndTimeOffset: "quo",
                        Inputs: []string{
                            "ut",
                        },
                        Key: "excepturi",
                        StartTimeOffset: "itaque",
                    },
                    shared.EditAtom{
                        EndTimeOffset: "repellendus",
                        Inputs: []string{
                            "non",
                        },
                        Key: "qui",
                        StartTimeOffset: "maxime",
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 142121807959710919,
                            ChannelCount: 8102943876606052699,
                            ChannelLayout: []string{
                                "aut",
                                "veritatis",
                            },
                            Codec: "rerum",
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: "ut",
                                    GainDb: 86.099998,
                                    InputChannel: 8299502554463009051,
                                    InputKey: "quaerat",
                                    InputTrack: 1485236524691857182,
                                    OutputChannel: 6353584709657726813,
                                },
                            },
                            SampleRateHertz: 6595768963453297428,
                        },
                        Key: "ut",
                        TextStream: &shared.TextStream{
                            Codec: "voluptas",
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: "iste",
                                    InputKey: "veniam",
                                    InputTrack: 8847388458601599556,
                                },
                                shared.TextMapping{
                                    AtomKey: "consequatur",
                                    InputKey: "quia",
                                    InputTrack: 1726739919385741314,
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: false,
                                AqStrength: 49.200001,
                                BFrameCount: 3345388744541791418,
                                BPyramid: true,
                                BitrateBps: 2190586014994812838,
                                CrfLevel: 692732684764902309,
                                EnableTwoPass: true,
                                EntropyCoder: "aut",
                                FrameRate: 67.099998,
                                GopDuration: "porro",
                                GopFrameCount: 533592184983364242,
                                HeightPixels: 4172271099154539205,
                                PixelFormat: "illum",
                                Preset: "possimus",
                                Profile: "aut",
                                RateControlMode: "molestias",
                                Tune: "alias",
                                VbvFullnessBits: 6499236237029557407,
                                VbvSizeBits: 4437905031999782027,
                                WidthPixels: 1866170174293888215,
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: true,
                                AqStrength: 66.199997,
                                BFrameCount: 6523458162847285993,
                                BPyramid: true,
                                BitrateBps: 6961724233835048496,
                                CrfLevel: 6136981962550146805,
                                EnableTwoPass: false,
                                FrameRate: 90.099998,
                                GopDuration: "aut",
                                GopFrameCount: 3588970806830014174,
                                HeightPixels: 8383449967446053246,
                                PixelFormat: "maiores",
                                Preset: "error",
                                Profile: "nihil",
                                RateControlMode: "aut",
                                Tune: "ut",
                                VbvFullnessBits: 4819589338358747324,
                                VbvSizeBits: 5010806800145094588,
                                WidthPixels: 1978826370609077671,
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: 2845128590045666982,
                                CrfLevel: 4888345655062587427,
                                FrameRate: 18.200001,
                                GopDuration: "soluta",
                                GopFrameCount: 8831470025659744676,
                                HeightPixels: 1198162728248054000,
                                PixelFormat: "harum",
                                Profile: "est",
                                RateControlMode: "rerum",
                                WidthPixels: 1240095989884137572,
                            },
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: "qui",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: false,
                                LowBoost: true,
                                Lufs: 56.200001,
                            },
                            Color: &shared.Color{
                                Brightness: 31.100000,
                                Contrast: 24.200001,
                                Saturation: 76.099998,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 2963192111166686092,
                                LeftPixels: 5594004258767771682,
                                RightPixels: 4865679846459776739,
                                TopPixels: 8485979765661839716,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: true,
                                Strength: 25.200001,
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: true,
                                    Mode: "neque",
                                    Parity: "sit",
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: true,
                                    DisableSpatialInterlacing: false,
                                    Mode: "occaecati",
                                    Parity: "neque",
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: 64.199997,
                                Tune: "sed",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 6459168663833943935,
                                LeftPixels: 4291274082983963234,
                                RightPixels: 6401911400206658873,
                                TopPixels: 7776093393052187403,
                            },
                        },
                        URI: "asperiores",
                    },
                    shared.Input{
                        Key: "suscipit",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: true,
                                LowBoost: false,
                                Lufs: 30.200001,
                            },
                            Color: &shared.Color{
                                Brightness: 36.099998,
                                Contrast: 38.200001,
                                Saturation: 62.200001,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 3590382310759933447,
                                LeftPixels: 3814383770807133953,
                                RightPixels: 9169175363119526557,
                                TopPixels: 8110351204404986057,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: true,
                                Strength: 19.200001,
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: true,
                                    Mode: "qui",
                                    Parity: "dolorum",
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: false,
                                    DisableSpatialInterlacing: false,
                                    Mode: "quisquam",
                                    Parity: "et",
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: 89.099998,
                                Tune: "provident",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 1218268716249562326,
                                LeftPixels: 7447537267225249586,
                                RightPixels: 2445314533605475622,
                                TopPixels: 8493457030081316059,
                            },
                        },
                        URI: "et",
                    },
                    shared.Input{
                        Key: "dolorem",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: true,
                                LowBoost: true,
                                Lufs: 4.100000,
                            },
                            Color: &shared.Color{
                                Brightness: 60.200001,
                                Contrast: 18.100000,
                                Saturation: 10.100000,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 4065654674689596060,
                                LeftPixels: 7322798141895291208,
                                RightPixels: 5348665813628745835,
                                TopPixels: 7644738981607538947,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 64.199997,
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: false,
                                    Mode: "omnis",
                                    Parity: "quod",
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: false,
                                    DisableSpatialInterlacing: false,
                                    Mode: "consequatur",
                                    Parity: "aut",
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: 20.100000,
                                Tune: "deleniti",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 6172039884235139779,
                                LeftPixels: 3540251575093241994,
                                RightPixels: 3003614924908159733,
                                TopPixels: 8351495160399599633,
                            },
                        },
                        URI: "omnis",
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: "velit",
                        MuxStreams: []string{
                            "sunt",
                            "vero",
                            "et",
                        },
                        Type: "MANIFEST_TYPE_UNSPECIFIED",
                    },
                    shared.Manifest{
                        FileName: "rerum",
                        MuxStreams: []string{
                            "quibusdam",
                        },
                        Type: "MANIFEST_TYPE_UNSPECIFIED",
                    },
                    shared.Manifest{
                        FileName: "culpa",
                        MuxStreams: []string{
                            "qui",
                            "praesentium",
                            "veniam",
                        },
                        Type: "MANIFEST_TYPE_UNSPECIFIED",
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: "aut",
                        ElementaryStreams: []string{
                            "delectus",
                        },
                        FileName: "excepturi",
                        Key: "expedita",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: true,
                            SegmentDuration: "veniam",
                        },
                    },
                },
                Output: &shared.Output{
                    URI: "dolor",
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "est",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "sunt",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "nam",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 89.199997,
                                        Y: 55.099998,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "eligendi",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 52.200001,
                                        Y: 10.100000,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 39.099998,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 21.200001,
                                Y: 4.200000,
                            },
                            URI: "dignissimos",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "rem",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "enim",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "velit",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 75.199997,
                                        Y: 19.200001,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "nisi",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 98.099998,
                                        Y: 37.200001,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 43.200001,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 11.100000,
                                Y: 10.200000,
                            },
                            URI: "magnam",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "consequatur",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "voluptatem",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "nostrum",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 94.199997,
                                        Y: 98.199997,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "sit",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 72.199997,
                                        Y: 96.199997,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "hic",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "voluptas",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "deleniti",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 13.100000,
                                        Y: 26.200001,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "dolorum",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 30.200001,
                                        Y: 66.099998,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "blanditiis",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "expedita",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "vitae",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 98.099998,
                                        Y: 18.100000,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "deleniti",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 44.099998,
                                        Y: 85.099998,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 40.200001,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 23.100000,
                                Y: 75.199997,
                            },
                            URI: "sit",
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: "distinctio",
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: 4360041737990804142,
                        EndTimeOffset: "et",
                        FilePrefix: "quisquam",
                        Format: "omnis",
                        Interval: "consequatur",
                        Quality: 2600289184325747251,
                        RowCount: 5017162811654306096,
                        SpriteHeightPixels: 7603855259351207445,
                        SpriteWidthPixels: 922411728287169604,
                        StartTimeOffset: "minima",
                        TotalCount: 8275009969029853982,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 4171839152687247212,
                        EndTimeOffset: "explicabo",
                        FilePrefix: "eum",
                        Format: "non",
                        Interval: "in",
                        Quality: 8840854750162610815,
                        RowCount: 2947416692006755002,
                        SpriteHeightPixels: 3760283431305141142,
                        SpriteWidthPixels: 326046690110882862,
                        StartTimeOffset: "ab",
                        TotalCount: 6441922636843880674,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 7917305247859931660,
                        EndTimeOffset: "earum",
                        FilePrefix: "id",
                        Format: "est",
                        Interval: "laboriosam",
                        Quality: 7841061951786981137,
                        RowCount: 4877843600825800243,
                        SpriteHeightPixels: 8307510451281095935,
                        SpriteWidthPixels: 4087259203947051350,
                        StartTimeOffset: "vel",
                        TotalCount: 2585483674518428436,
                    },
                },
            },
            Labels: map[string]string{
                "ut": "laudantium",
            },
            Name: "voluptas",
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