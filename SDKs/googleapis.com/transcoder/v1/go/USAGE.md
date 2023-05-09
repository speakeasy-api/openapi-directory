<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TranscoderProjectsLocationsJobTemplatesCreate(ctx, operations.TranscoderProjectsLocationsJobTemplatesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        JobTemplate: &shared.JobTemplate{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: sdk.String("distinctio"),
                    },
                    shared.AdBreak{
                        StartTimeOffset: sdk.String("quibusdam"),
                    },
                    shared.AdBreak{
                        StartTimeOffset: sdk.String("unde"),
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: sdk.String("corrupti"),
                        Inputs: []string{
                            "vel",
                            "error",
                            "deserunt",
                            "suscipit",
                        },
                        Key: sdk.String("iure"),
                        StartTimeOffset: sdk.String("magnam"),
                    },
                    shared.EditAtom{
                        EndTimeOffset: sdk.String("debitis"),
                        Inputs: []string{
                            "delectus",
                        },
                        Key: sdk.String("tempora"),
                        StartTimeOffset: sdk.String("suscipit"),
                    },
                    shared.EditAtom{
                        EndTimeOffset: sdk.String("molestiae"),
                        Inputs: []string{
                            "placeat",
                            "voluptatum",
                            "iusto",
                            "excepturi",
                        },
                        Key: sdk.String("nisi"),
                        StartTimeOffset: sdk.String("recusandae"),
                    },
                    shared.EditAtom{
                        EndTimeOffset: sdk.String("temporibus"),
                        Inputs: []string{
                            "quis",
                        },
                        Key: sdk.String("veritatis"),
                        StartTimeOffset: sdk.String("deserunt"),
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: sdk.Int(368241),
                            ChannelCount: sdk.Int(832620),
                            ChannelLayout: []string{
                                "quo",
                                "odit",
                                "at",
                                "at",
                            },
                            Codec: sdk.String("maiores"),
                            DisplayName: sdk.String("molestiae"),
                            LanguageCode: sdk.String("quod"),
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: sdk.String("esse"),
                                    GainDb: sdk.Float64(5204.78),
                                    InputChannel: sdk.Int(780529),
                                    InputKey: sdk.String("dolorum"),
                                    InputTrack: sdk.Int(118274),
                                    OutputChannel: sdk.Int(720633),
                                },
                                shared.AudioMapping{
                                    AtomKey: sdk.String("officia"),
                                    GainDb: sdk.Float64(5820.2),
                                    InputChannel: sdk.Int(143353),
                                    InputKey: sdk.String("deleniti"),
                                    InputTrack: sdk.Int(944669),
                                    OutputChannel: sdk.Int(758616),
                                },
                                shared.AudioMapping{
                                    AtomKey: sdk.String("totam"),
                                    GainDb: sdk.Float64(1059.07),
                                    InputChannel: sdk.Int(414662),
                                    InputKey: sdk.String("molestiae"),
                                    InputTrack: sdk.Int(264555),
                                    OutputChannel: sdk.Int(186332),
                                },
                                shared.AudioMapping{
                                    AtomKey: sdk.String("impedit"),
                                    GainDb: sdk.Float64(7369.18),
                                    InputChannel: sdk.Int(456150),
                                    InputKey: sdk.String("ipsum"),
                                    InputTrack: sdk.Int(568434),
                                    OutputChannel: sdk.Int(135218),
                                },
                            },
                            SampleRateHertz: sdk.Int(18789),
                        },
                        Key: sdk.String("ad"),
                        TextStream: &shared.TextStream{
                            Codec: sdk.String("natus"),
                            DisplayName: sdk.String("sed"),
                            LanguageCode: sdk.String("iste"),
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: sdk.String("natus"),
                                    InputKey: sdk.String("laboriosam"),
                                    InputTrack: sdk.Int(943749),
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: sdk.Bool(false),
                                AqStrength: sdk.Float64(9025.99),
                                BFrameCount: sdk.Int(681820),
                                BPyramid: sdk.Bool(false),
                                BitrateBps: sdk.Int(449950),
                                CrfLevel: sdk.Int(359508),
                                EnableTwoPass: sdk.Bool(false),
                                EntropyCoder: sdk.String("iste"),
                                FrameRate: sdk.Float64(4370.32),
                                GopDuration: sdk.String("saepe"),
                                GopFrameCount: sdk.Int(697631),
                                HeightPixels: sdk.Int(99280),
                                PixelFormat: sdk.String("ipsa"),
                                Preset: sdk.String("reiciendis"),
                                Profile: sdk.String("est"),
                                RateControlMode: sdk.String("mollitia"),
                                Tune: sdk.String("laborum"),
                                VbvFullnessBits: sdk.Int(170909),
                                VbvSizeBits: sdk.Int(210382),
                                WidthPixels: sdk.Int(358152),
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: sdk.Bool(false),
                                AqStrength: sdk.Float64(1289.26),
                                BFrameCount: sdk.Int(750686),
                                BPyramid: sdk.Bool(false),
                                BitrateBps: sdk.Int(315428),
                                CrfLevel: sdk.Int(607831),
                                EnableTwoPass: sdk.Bool(false),
                                FrameRate: sdk.Float64(3637.11),
                                GopDuration: sdk.String("minima"),
                                GopFrameCount: sdk.Int(570197),
                                HeightPixels: sdk.Int(38425),
                                PixelFormat: sdk.String("iure"),
                                Preset: sdk.String("culpa"),
                                Profile: sdk.String("doloribus"),
                                RateControlMode: sdk.String("sapiente"),
                                Tune: sdk.String("architecto"),
                                VbvFullnessBits: sdk.Int(652790),
                                VbvSizeBits: sdk.Int(208876),
                                WidthPixels: sdk.Int(635059),
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: sdk.Int(161309),
                                CrfLevel: sdk.Int(995300),
                                FrameRate: sdk.Float64(6531.08),
                                GopDuration: sdk.String("occaecati"),
                                GopFrameCount: sdk.Int(253291),
                                HeightPixels: sdk.Int(414369),
                                PixelFormat: sdk.String("quam"),
                                Profile: sdk.String("molestiae"),
                                RateControlMode: sdk.String("velit"),
                                WidthPixels: sdk.Int(623510),
                            },
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: sdk.String("quis"),
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: sdk.Bool(false),
                                LowBoost: sdk.Bool(false),
                                Lufs: sdk.Float64(1103.75),
                            },
                            Color: &shared.Color{
                                Brightness: sdk.Float64(6747.52),
                                Contrast: sdk.Float64(6563.3),
                                Saturation: sdk.Float64(3172.02),
                            },
                            Crop: &shared.Crop{
                                BottomPixels: sdk.Int(138183),
                                LeftPixels: sdk.Int(778346),
                                RightPixels: sdk.Int(196582),
                                TopPixels: sdk.Int(949572),
                            },
                            Deblock: &shared.Deblock{
                                Enabled: sdk.Bool(false),
                                Strength: sdk.Float64(3687.25),
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: sdk.Bool(false),
                                    Mode: sdk.String("id"),
                                    Parity: sdk.String("possimus"),
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: sdk.Bool(false),
                                    DisableSpatialInterlacing: sdk.Bool(false),
                                    Mode: sdk.String("aut"),
                                    Parity: sdk.String("quasi"),
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: sdk.Float64(6228.46),
                                Tune: sdk.String("temporibus"),
                            },
                            Pad: &shared.Pad{
                                BottomPixels: sdk.Int(673660),
                                LeftPixels: sdk.Int(96098),
                                RightPixels: sdk.Int(971945),
                                TopPixels: sdk.Int(976460),
                            },
                        },
                        URI: sdk.String("https://klutzy-level.org"),
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: sdk.String("omnis"),
                        MuxStreams: []string{
                            "cum",
                            "perferendis",
                        },
                        Type: shared.ManifestTypeEnumManifestTypeUnspecified.ToPointer(),
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: sdk.String("ut"),
                        ElementaryStreams: []string{
                            "dicta",
                            "corporis",
                            "dolore",
                            "iusto",
                        },
                        FileName: sdk.String("dicta"),
                        Key: sdk.String("harum"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("enim"),
                        },
                    },
                    shared.MuxStream{
                        Container: sdk.String("accusamus"),
                        ElementaryStreams: []string{
                            "repudiandae",
                            "quae",
                        },
                        FileName: sdk.String("ipsum"),
                        Key: sdk.String("quidem"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("molestias"),
                        },
                    },
                },
                Output: &shared.Output{
                    URI: sdk.String("https://treasured-dirt.name"),
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("quasi"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("repudiandae"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("veritatis"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(9292.97),
                                        Y: sdk.Float64(2777.18),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("enim"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(93.56),
                                        Y: sdk.Float64(6674.11),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("quibusdam"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("explicabo"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("distinctio"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(8413.86),
                                        Y: sdk.Float64(2894.06),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("modi"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(1831.91),
                                        Y: sdk.Float64(3978.21),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("cupiditate"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("quos"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeTypeUnspecified.ToPointer(),
                                    StartTimeOffset: sdk.String("magni"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(8289.4),
                                        Y: sdk.Float64(3698.08),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("alias"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(1464.41),
                                        Y: sdk.Float64(6778.17),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("excepturi"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("tempora"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeOut.ToPointer(),
                                    StartTimeOffset: sdk.String("tempore"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(2884.76),
                                        Y: sdk.Float64(9621.89),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("eum"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(2487.53),
                                        Y: sdk.Float64(7561.07),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(5761.57),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(3960.98),
                                Y: sdk.Float64(5920.42),
                            },
                            URI: sdk.String("https://nonstop-pate.biz"),
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("a"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("dolorum"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("in"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(8464.09),
                                        Y: sdk.Float64(9785.71),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("rerum"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(1162.02),
                                        Y: sdk.Float64(2974.37),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("cumque"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("facere"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("aliquid"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6754.39),
                                        Y: sdk.Float64(8811.04),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("non"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(5812.73),
                                        Y: sdk.Float64(3132.18),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("accusamus"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("delectus"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeOut.ToPointer(),
                                    StartTimeOffset: sdk.String("provident"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(7252.55),
                                        Y: sdk.Float64(6596.69),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("blanditiis"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(5332.06),
                                        Y: sdk.Float64(9560.84),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("amet"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("deserunt"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("vel"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6188.09),
                                        Y: sdk.Float64(6063.93),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("molestiae"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(191.93),
                                        Y: sdk.Float64(4701.32),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(3015.75),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(7160.75),
                                Y: sdk.Float64(6601.74),
                            },
                            URI: sdk.String("http://flawed-gherkin.name"),
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("eum"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("vero"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeTypeUnspecified.ToPointer(),
                                    StartTimeOffset: sdk.String("architecto"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(2982.82),
                                        Y: sdk.Float64(923.73),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("excepturi"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(3540.47),
                                        Y: sdk.Float64(5908.73),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("quos"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("sint"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeTypeUnspecified.ToPointer(),
                                    StartTimeOffset: sdk.String("mollitia"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(9689.62),
                                        Y: sdk.Float64(6521.03),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("ad"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(4314.18),
                                        Y: sdk.Float64(2212.62),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("necessitatibus"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("odit"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("quasi"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(4358.65),
                                        Y: sdk.Float64(9840.43),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("debitis"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(2603.41),
                                        Y: sdk.Float64(8061.94),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(5370.23),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(7038.89),
                                Y: sdk.Float64(4479.26),
                            },
                            URI: sdk.String("http://burly-trachoma.info"),
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: sdk.String("expedita"),
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(998848),
                        EndTimeOffset: sdk.String("quibusdam"),
                        FilePrefix: sdk.String("sed"),
                        Format: sdk.String("saepe"),
                        Interval: sdk.String("pariatur"),
                        Quality: sdk.Int(37559),
                        RowCount: sdk.Int(162493),
                        SpriteHeightPixels: sdk.Int(508315),
                        SpriteWidthPixels: sdk.Int(615560),
                        StartTimeOffset: sdk.String("magni"),
                        TotalCount: sdk.Int(123820),
                    },
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(779051),
                        EndTimeOffset: sdk.String("illum"),
                        FilePrefix: sdk.String("pariatur"),
                        Format: sdk.String("maxime"),
                        Interval: sdk.String("ea"),
                        Quality: sdk.Int(569101),
                        RowCount: sdk.Int(139972),
                        SpriteHeightPixels: sdk.Int(407183),
                        SpriteWidthPixels: sdk.Int(33222),
                        StartTimeOffset: sdk.String("ab"),
                        TotalCount: sdk.Int(982575),
                    },
                },
            },
            Labels: map[string]string{
                "ipsam": "voluptate",
                "autem": "nam",
                "eaque": "pariatur",
            },
            Name: sdk.String("Camille Armstrong"),
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("hic"),
        JobTemplateID: sdk.String("libero"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("dolores"),
        Parent: "quis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.TranscoderProjectsLocationsJobTemplatesCreateSecurity{
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