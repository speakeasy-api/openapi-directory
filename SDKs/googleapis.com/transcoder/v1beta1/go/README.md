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
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(461479),
                                                    GainDb: sdk.Float64(5204.78),
                                                    Key: sdk.String("porro"),
                                                    Track: sdk.Int(678880),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(118274),
                                                    GainDb: sdk.Float64(7206.33),
                                                    Key: sdk.String("officia"),
                                                    Track: sdk.Int(582020),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(143353),
                                                    GainDb: sdk.Float64(5373.73),
                                                    Key: sdk.String("hic"),
                                                    Track: sdk.Int(758616),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(521848),
                                                    GainDb: sdk.Float64(1059.07),
                                                    Key: sdk.String("commodi"),
                                                    Track: sdk.Int(473600),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(186332),
                                                    GainDb: sdk.Float64(7742.34),
                                                    Key: sdk.String("cum"),
                                                    Track: sdk.Int(456150),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(216550),
                                                    GainDb: sdk.Float64(5684.34),
                                                    Key: sdk.String("aspernatur"),
                                                    Track: sdk.Int(18789),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(617636),
                                                    GainDb: sdk.Float64(1496.75),
                                                    Key: sdk.String("iste"),
                                                    Track: sdk.Int(222321),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(616934),
                                                    GainDb: sdk.Float64(3864.89),
                                                    Key: sdk.String("hic"),
                                                    Track: sdk.Int(902599),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(449950),
                                                    GainDb: sdk.Float64(3595.08),
                                                    Key: sdk.String("iste"),
                                                    Track: sdk.Int(437032),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(902349),
                                                    GainDb: sdk.Float64(6976.31),
                                                    Key: sdk.String("architecto"),
                                                    Track: sdk.Int(60225),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(969810),
                                                    GainDb: sdk.Float64(6667.67),
                                                    Key: sdk.String("mollitia"),
                                                    Track: sdk.Int(670638),
                                                },
                                            },
                                        },
                                    },
                                    Key: sdk.String("dolores"),
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(128926),
                                                    GainDb: sdk.Float64(7506.86),
                                                    Key: sdk.String("enim"),
                                                    Track: sdk.Int(607831),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(363711),
                                                    GainDb: sdk.Float64(3250.47),
                                                    Key: sdk.String("excepturi"),
                                                    Track: sdk.Int(38425),
                                                },
                                            },
                                        },
                                    },
                                    Key: sdk.String("iure"),
                                },
                            },
                            SampleRateHertz: sdk.Int(634274),
                        },
                        Key: sdk.String("doloribus"),
                        TextStream: &shared.TextStream{
                            Codec: sdk.String("sapiente"),
                            LanguageCode: sdk.String("architecto"),
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: sdk.String("culpa"),
                                            Track: sdk.Int(161309),
                                        },
                                    },
                                    Key: sdk.String("repellat"),
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: sdk.String("occaecati"),
                                            Track: sdk.Int(253291),
                                        },
                                        shared.TextInput{
                                            Key: sdk.String("commodi"),
                                            Track: sdk.Int(466311),
                                        },
                                        shared.TextInput{
                                            Key: sdk.String("molestiae"),
                                            Track: sdk.Int(244425),
                                        },
                                    },
                                    Key: sdk.String("error"),
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: sdk.String("quis"),
                                            Track: sdk.Int(110375),
                                        },
                                    },
                                    Key: sdk.String("laborum"),
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: sdk.Bool(false),
                            AqStrength: sdk.Float64(6563.3),
                            BFrameCount: sdk.Int(317202),
                            BPyramid: sdk.Bool(false),
                            BitrateBps: sdk.Int(138183),
                            Codec: sdk.String("quo"),
                            CrfLevel: sdk.Int(196582),
                            EnableTwoPass: sdk.Bool(false),
                            EntropyCoder: sdk.String("tenetur"),
                            FrameRate: sdk.Float64(3687.25),
                            GopDuration: sdk.String("id"),
                            GopFrameCount: sdk.Int(820994),
                            HeightPixels: sdk.Int(13571),
                            PixelFormat: sdk.String("quasi"),
                            Preset: sdk.String("error"),
                            Profile: sdk.String("temporibus"),
                            RateControlMode: sdk.String("laborum"),
                            Tune: sdk.String("quasi"),
                            VbvFullnessBits: sdk.Int(971945),
                            VbvSizeBits: sdk.Int(976460),
                            WidthPixels: sdk.Int(878194),
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: sdk.String("praesentium"),
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: sdk.Bool(false),
                                LowBoost: sdk.Bool(false),
                                Lufs: sdk.Float64(9767.62),
                            },
                            Color: &shared.Color{
                                Brightness: sdk.Float64(557.14),
                                Contrast: sdk.Float64(6048.46),
                                Saturation: sdk.Float64(4511.59),
                            },
                            Crop: &shared.Crop{
                                BottomPixels: sdk.Int(739264),
                                LeftPixels: sdk.Int(19987),
                                RightPixels: sdk.Int(39187),
                                TopPixels: sdk.Int(441711),
                            },
                            Deblock: &shared.Deblock{
                                Enabled: sdk.Bool(false),
                                Strength: sdk.Float64(2828.07),
                            },
                            Denoise: &shared.Denoise{
                                Strength: sdk.Float64(9795.87),
                                Tune: sdk.String("dicta"),
                            },
                            Pad: &shared.Pad{
                                BottomPixels: sdk.Int(359444),
                                LeftPixels: sdk.Int(296140),
                                RightPixels: sdk.Int(480894),
                                TopPixels: sdk.Int(118727),
                            },
                        },
                        URI: sdk.String("https://frugal-sympathy.info"),
                    },
                    shared.Input{
                        Key: sdk.String("repudiandae"),
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: sdk.Bool(false),
                                LowBoost: sdk.Bool(false),
                                Lufs: sdk.Float64(641.47),
                            },
                            Color: &shared.Color{
                                Brightness: sdk.Float64(2168.22),
                                Contrast: sdk.Float64(6924.72),
                                Saturation: sdk.Float64(5651.89),
                            },
                            Crop: &shared.Crop{
                                BottomPixels: sdk.Int(566602),
                                LeftPixels: sdk.Int(865103),
                                RightPixels: sdk.Int(265389),
                                TopPixels: sdk.Int(508969),
                            },
                            Deblock: &shared.Deblock{
                                Enabled: sdk.Bool(false),
                                Strength: sdk.Float64(5232.48),
                            },
                            Denoise: &shared.Denoise{
                                Strength: sdk.Float64(9167.23),
                                Tune: sdk.String("quasi"),
                            },
                            Pad: &shared.Pad{
                                BottomPixels: sdk.Int(921158),
                                LeftPixels: sdk.Int(575947),
                                RightPixels: sdk.Int(83112),
                                TopPixels: sdk.Int(929297),
                            },
                        },
                        URI: sdk.String("http://fruitful-adjective.net"),
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: sdk.String("explicabo"),
                        MuxStreams: []string{
                            "distinctio",
                            "quibusdam",
                            "labore",
                        },
                        Type: shared.ManifestTypeEnumManifestTypeUnspecified.ToPointer(),
                    },
                    shared.Manifest{
                        FileName: sdk.String("qui"),
                        MuxStreams: []string{
                            "cupiditate",
                            "quos",
                        },
                        Type: shared.ManifestTypeEnumManifestTypeUnspecified.ToPointer(),
                    },
                    shared.Manifest{
                        FileName: sdk.String("magni"),
                        MuxStreams: []string{
                            "ipsam",
                            "alias",
                            "fugit",
                            "dolorum",
                        },
                        Type: shared.ManifestTypeEnumHls.ToPointer(),
                    },
                    shared.Manifest{
                        FileName: sdk.String("tempora"),
                        MuxStreams: []string{
                            "tempore",
                            "labore",
                            "delectus",
                        },
                        Type: shared.ManifestTypeEnumHls.ToPointer(),
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: sdk.String("eligendi"),
                        ElementaryStreams: []string{
                            "aliquid",
                            "provident",
                            "necessitatibus",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: sdk.String("sint"),
                            },
                            Iv: sdk.String("officia"),
                            Key: sdk.String("dolor"),
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: sdk.String("debitis"),
                                Scheme: sdk.String("a"),
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: sdk.String("dolorum"),
                            },
                        },
                        FileName: sdk.String("in"),
                        Key: sdk.String("in"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("illum"),
                        },
                    },
                },
                Output: &shared.Output{
                    URI: sdk.String("https://right-burn.biz"),
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("ea"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("aliquid"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeOut.ToPointer(),
                                    StartTimeOffset: sdk.String("accusamus"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(2497.96),
                                        Y: sdk.Float64(5812.73),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("enim"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(8817.36),
                                        Y: sdk.Float64(9654.17),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("quidem"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("provident"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeOut.ToPointer(),
                                    StartTimeOffset: sdk.String("id"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(5013.24),
                                        Y: sdk.Float64(5332.06),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("sapiente"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(2305.33),
                                        Y: sdk.Float64(6439.9),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("nisi"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("vel"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("omnis"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(4748.67),
                                        Y: sdk.Float64(191.93),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("nihil"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(3015.75),
                                        Y: sdk.Float64(7160.75),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("id"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("labore"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeTypeUnspecified.ToPointer(),
                                    StartTimeOffset: sdk.String("suscipit"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6180.16),
                                        Y: sdk.Float64(7491.7),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("eum"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(8784.53),
                                        Y: sdk.Float64(1354.74),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(1028.63),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(2982.82),
                                Y: sdk.Float64(923.73),
                            },
                            URI: sdk.String("https://grizzled-nest.name"),
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("accusantium"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("mollitia"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeOut.ToPointer(),
                                    StartTimeOffset: sdk.String("mollitia"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(3209.97),
                                        Y: sdk.Float64(4314.18),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("dolor"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(8965.47),
                                        Y: sdk.Float64(1412.64),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("nemo"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("quasi"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("doloribus"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(8919.24),
                                        Y: sdk.Float64(2603.41),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("maxime"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(5370.23),
                                        Y: sdk.Float64(7038.89),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("in"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("architecto"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeTypeUnspecified.ToPointer(),
                                    StartTimeOffset: sdk.String("repudiandae"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(3523.12),
                                        Y: sdk.Float64(7142.42),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("nihil"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(9988.48),
                                        Y: sdk.Float64(8411.4),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(1494.48),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(9046.48),
                                Y: sdk.Float64(8681.26),
                            },
                            URI: sdk.String("http://cute-lens.name"),
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("sunt"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("quo"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeOut.ToPointer(),
                                    StartTimeOffset: sdk.String("pariatur"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(8073.19),
                                        Y: sdk.Float64(4113.97),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("excepturi"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(1399.72),
                                        Y: sdk.Float64(4071.83),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(332.22),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(691.67),
                                Y: sdk.Float64(9825.75),
                            },
                            URI: sdk.String("https://harmonious-in-joke.info"),
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("eaque"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("pariatur"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("voluptatibus"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(166.27),
                                        Y: sdk.Float64(8558.04),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("amet"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(117.14),
                                        Y: sdk.Float64(7649.12),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("corporis"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("hic"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeOut.ToPointer(),
                                    StartTimeOffset: sdk.String("nobis"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(1716.29),
                                        Y: sdk.Float64(3394.04),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("totam"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(4895.49),
                                        Y: sdk.Float64(543.38),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("quis"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("nesciunt"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeTypeUnspecified.ToPointer(),
                                    StartTimeOffset: sdk.String("perferendis"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(1709.86),
                                        Y: sdk.Float64(7936.98),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("quam"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(2239.24),
                                        Y: sdk.Float64(8745.73),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(3453.52),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(9441.2),
                                Y: sdk.Float64(9280.82),
                            },
                            URI: sdk.String("https://rotten-noir.com"),
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: sdk.String("porro"),
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(500026),
                        EndTimeOffset: sdk.String("error"),
                        FilePrefix: sdk.String("eaque"),
                        Format: sdk.String("occaecati"),
                        Interval: sdk.String("rerum"),
                        Quality: sdk.Int(237893),
                        RowCount: sdk.Int(992397),
                        SpriteHeightPixels: sdk.Int(934214),
                        SpriteWidthPixels: sdk.Int(267262),
                        StartTimeOffset: sdk.String("iste"),
                        TotalCount: sdk.Int(679091),
                    },
                },
            },
            Name: sdk.String("Ervin McLaughlin"),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("aliquid"),
        JobTemplateID: sdk.String("dolorem"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("dolor"),
        Parent: "qui",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("excepturi"),
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [TranscoderProjectsLocationsJobTemplatesCreate](docs/projects/README.md#transcoderprojectslocationsjobtemplatescreate) - Creates a job template in the specified region.
* [TranscoderProjectsLocationsJobTemplatesDelete](docs/projects/README.md#transcoderprojectslocationsjobtemplatesdelete) - Deletes a job template.
* [TranscoderProjectsLocationsJobTemplatesGet](docs/projects/README.md#transcoderprojectslocationsjobtemplatesget) - Returns the job template data.
* [TranscoderProjectsLocationsJobTemplatesList](docs/projects/README.md#transcoderprojectslocationsjobtemplateslist) - Lists job templates in the specified region.
* [TranscoderProjectsLocationsJobsCreate](docs/projects/README.md#transcoderprojectslocationsjobscreate) - Creates a job in the specified region.
* [TranscoderProjectsLocationsJobsList](docs/projects/README.md#transcoderprojectslocationsjobslist) - Lists jobs in the specified region.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
