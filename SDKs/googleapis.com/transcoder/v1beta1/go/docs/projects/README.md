# Projects

### Available Operations

* [TranscoderProjectsLocationsJobTemplatesCreate](#transcoderprojectslocationsjobtemplatescreate) - Creates a job template in the specified region.
* [TranscoderProjectsLocationsJobTemplatesDelete](#transcoderprojectslocationsjobtemplatesdelete) - Deletes a job template.
* [TranscoderProjectsLocationsJobTemplatesGet](#transcoderprojectslocationsjobtemplatesget) - Returns the job template data.
* [TranscoderProjectsLocationsJobTemplatesList](#transcoderprojectslocationsjobtemplateslist) - Lists job templates in the specified region.
* [TranscoderProjectsLocationsJobsCreate](#transcoderprojectslocationsjobscreate) - Creates a job in the specified region.
* [TranscoderProjectsLocationsJobsList](#transcoderprojectslocationsjobslist) - Lists jobs in the specified region.

## TranscoderProjectsLocationsJobTemplatesCreate

Creates a job template in the specified region.

### Example Usage

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
                        StartTimeOffset: sdk.String("dignissimos"),
                    },
                    shared.AdBreak{
                        StartTimeOffset: sdk.String("reiciendis"),
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: sdk.String("dolorum"),
                        Inputs: []string{
                            "veritatis",
                            "ipsa",
                        },
                        Key: sdk.String("ipsa"),
                        StartTimeOffset: sdk.String("iure"),
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: sdk.Int(311796),
                            ChannelCount: sdk.Int(881005),
                            ChannelLayout: []string{
                                "voluptatibus",
                                "voluptas",
                                "natus",
                            },
                            Codec: sdk.String("eos"),
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(67249),
                                                    GainDb: sdk.Float64(7438.35),
                                                    Key: sdk.String("dolorum"),
                                                    Track: sdk.Int(478596),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(453697),
                                                    GainDb: sdk.Float64(6770.82),
                                                    Key: sdk.String("deleniti"),
                                                    Track: sdk.Int(607045),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(896672),
                                                    GainDb: sdk.Float64(7146.97),
                                                    Key: sdk.String("asperiores"),
                                                    Track: sdk.Int(469497),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(216897),
                                                    GainDb: sdk.Float64(4560.15),
                                                    Key: sdk.String("id"),
                                                    Track: sdk.Int(906418),
                                                },
                                            },
                                        },
                                    },
                                    Key: sdk.String("eius"),
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(229219),
                                                    GainDb: sdk.Float64(7583.79),
                                                    Key: sdk.String("accusamus"),
                                                    Track: sdk.Int(320017),
                                                },
                                            },
                                        },
                                    },
                                    Key: sdk.String("saepe"),
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(588317),
                                                    GainDb: sdk.Float64(3246.83),
                                                    Key: sdk.String("repellendus"),
                                                    Track: sdk.Int(519711),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(628982),
                                                    GainDb: sdk.Float64(0.55),
                                                    Key: sdk.String("at"),
                                                    Track: sdk.Int(311860),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(273542),
                                                    GainDb: sdk.Float64(4254.51),
                                                    Key: sdk.String("quod"),
                                                    Track: sdk.Int(885338),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(679880),
                                                    GainDb: sdk.Float64(9527.92),
                                                    Key: sdk.String("esse"),
                                                    Track: sdk.Int(687488),
                                                },
                                            },
                                        },
                                    },
                                    Key: sdk.String("iusto"),
                                },
                            },
                            SampleRateHertz: sdk.Int(215507),
                        },
                        Key: sdk.String("quisquam"),
                        TextStream: &shared.TextStream{
                            Codec: sdk.String("tenetur"),
                            LanguageCode: sdk.String("amet"),
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: sdk.String("numquam"),
                                            Track: sdk.Int(313692),
                                        },
                                        shared.TextInput{
                                            Key: sdk.String("dolorem"),
                                            Track: sdk.Int(957451),
                                        },
                                        shared.TextInput{
                                            Key: sdk.String("totam"),
                                            Track: sdk.Int(471752),
                                        },
                                        shared.TextInput{
                                            Key: sdk.String("sit"),
                                            Track: sdk.Int(711584),
                                        },
                                    },
                                    Key: sdk.String("neque"),
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: sdk.String("vel"),
                                            Track: sdk.Int(730442),
                                        },
                                    },
                                    Key: sdk.String("voluptas"),
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: sdk.String("quam"),
                                            Track: sdk.Int(214880),
                                        },
                                        shared.TextInput{
                                            Key: sdk.String("incidunt"),
                                            Track: sdk.Int(186458),
                                        },
                                        shared.TextInput{
                                            Key: sdk.String("cupiditate"),
                                            Track: sdk.Int(807581),
                                        },
                                    },
                                    Key: sdk.String("pariatur"),
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: sdk.Bool(false),
                            AqStrength: sdk.Float64(7470.8),
                            BFrameCount: sdk.Int(117531),
                            BPyramid: sdk.Bool(false),
                            BitrateBps: sdk.Int(674848),
                            Codec: sdk.String("totam"),
                            CrfLevel: sdk.Int(276894),
                            EnableTwoPass: sdk.Bool(false),
                            EntropyCoder: sdk.String("aspernatur"),
                            FrameRate: sdk.Float64(1749.09),
                            GopDuration: sdk.String("distinctio"),
                            GopFrameCount: sdk.Int(704474),
                            HeightPixels: sdk.Int(396060),
                            PixelFormat: sdk.String("quam"),
                            Preset: sdk.String("molestias"),
                            Profile: sdk.String("temporibus"),
                            RateControlMode: sdk.String("qui"),
                            Tune: sdk.String("neque"),
                            VbvFullnessBits: sdk.Int(144847),
                            VbvSizeBits: sdk.Int(164959),
                            WidthPixels: sdk.Int(488056),
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: sdk.Int(124833),
                            ChannelCount: sdk.Int(355613),
                            ChannelLayout: []string{
                                "hic",
                                "voluptatem",
                                "cumque",
                            },
                            Codec: sdk.String("soluta"),
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(217450),
                                                    GainDb: sdk.Float64(834.22),
                                                    Key: sdk.String("nobis"),
                                                    Track: sdk.Int(552193),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(731694),
                                                    GainDb: sdk.Float64(5844.76),
                                                    Key: sdk.String("aperiam"),
                                                    Track: sdk.Int(961937),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(209157),
                                                    GainDb: sdk.Float64(2921.47),
                                                    Key: sdk.String("labore"),
                                                    Track: sdk.Int(240829),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(677263),
                                                    GainDb: sdk.Float64(1002.94),
                                                    Key: sdk.String("quae"),
                                                    Track: sdk.Int(16429),
                                                },
                                            },
                                        },
                                    },
                                    Key: sdk.String("quas"),
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(669917),
                                                    GainDb: sdk.Float64(8330.38),
                                                    Key: sdk.String("porro"),
                                                    Track: sdk.Int(984330),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(703495),
                                                    GainDb: sdk.Float64(5864.1),
                                                    Key: sdk.String("qui"),
                                                    Track: sdk.Int(63955),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(512393),
                                                    GainDb: sdk.Float64(4856.28),
                                                    Key: sdk.String("occaecati"),
                                                    Track: sdk.Int(977496),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(876506),
                                                    GainDb: sdk.Float64(6064.76),
                                                    Key: sdk.String("quis"),
                                                    Track: sdk.Int(218403),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(961571),
                                                    GainDb: sdk.Float64(4551.69),
                                                    Key: sdk.String("consectetur"),
                                                    Track: sdk.Int(878870),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(949319),
                                                    GainDb: sdk.Float64(4922.68),
                                                    Key: sdk.String("hic"),
                                                    Track: sdk.Int(715561),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(799203),
                                                    GainDb: sdk.Float64(4861.6),
                                                    Key: sdk.String("similique"),
                                                    Track: sdk.Int(708548),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(498140),
                                                    GainDb: sdk.Float64(2930.2),
                                                    Key: sdk.String("quibusdam"),
                                                    Track: sdk.Int(848944),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(194342),
                                                    GainDb: sdk.Float64(6178.77),
                                                    Key: sdk.String("impedit"),
                                                    Track: sdk.Int(13236),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(974259),
                                                    GainDb: sdk.Float64(3472.33),
                                                    Key: sdk.String("nulla"),
                                                    Track: sdk.Int(148141),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(780427),
                                                    GainDb: sdk.Float64(9818.3),
                                                    Key: sdk.String("doloribus"),
                                                    Track: sdk.Int(478370),
                                                },
                                            },
                                        },
                                    },
                                    Key: sdk.String("eligendi"),
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(639473),
                                                    GainDb: sdk.Float64(2694.79),
                                                    Key: sdk.String("ipsam"),
                                                    Track: sdk.Int(410492),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(428224),
                                                    GainDb: sdk.Float64(8221.18),
                                                    Key: sdk.String("magnam"),
                                                    Track: sdk.Int(189848),
                                                },
                                            },
                                        },
                                    },
                                    Key: sdk.String("ex"),
                                },
                            },
                            SampleRateHertz: sdk.Int(511319),
                        },
                        Key: sdk.String("dicta"),
                        TextStream: &shared.TextStream{
                            Codec: sdk.String("dolor"),
                            LanguageCode: sdk.String("maiores"),
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: sdk.String("nulla"),
                                            Track: sdk.Int(569211),
                                        },
                                        shared.TextInput{
                                            Key: sdk.String("voluptatibus"),
                                            Track: sdk.Int(343605),
                                        },
                                    },
                                    Key: sdk.String("sapiente"),
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: sdk.Bool(false),
                            AqStrength: sdk.Float64(7888.73),
                            BFrameCount: sdk.Int(906556),
                            BPyramid: sdk.Bool(false),
                            BitrateBps: sdk.Int(411372),
                            Codec: sdk.String("impedit"),
                            CrfLevel: sdk.Int(359271),
                            EnableTwoPass: sdk.Bool(false),
                            EntropyCoder: sdk.String("veniam"),
                            FrameRate: sdk.Float64(3994.99),
                            GopDuration: sdk.String("inventore"),
                            GopFrameCount: sdk.Int(301831),
                            HeightPixels: sdk.Int(407241),
                            PixelFormat: sdk.String("quo"),
                            Preset: sdk.String("consectetur"),
                            Profile: sdk.String("recusandae"),
                            RateControlMode: sdk.String("aspernatur"),
                            Tune: sdk.String("minima"),
                            VbvFullnessBits: sdk.Int(53427),
                            VbvSizeBits: sdk.Int(952871),
                            WidthPixels: sdk.Int(725595),
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: sdk.String("aut"),
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: sdk.Bool(false),
                                LowBoost: sdk.Bool(false),
                                Lufs: sdk.Float64(5334.66),
                            },
                            Color: &shared.Color{
                                Brightness: sdk.Float64(7705.81),
                                Contrast: sdk.Float64(3045.82),
                                Saturation: sdk.Float64(1469.46),
                            },
                            Crop: &shared.Crop{
                                BottomPixels: sdk.Int(882860),
                                LeftPixels: sdk.Int(79522),
                                RightPixels: sdk.Int(250622),
                                TopPixels: sdk.Int(89603),
                            },
                            Deblock: &shared.Deblock{
                                Enabled: sdk.Bool(false),
                                Strength: sdk.Float64(6774.12),
                            },
                            Denoise: &shared.Denoise{
                                Strength: sdk.Float64(6720.48),
                                Tune: sdk.String("placeat"),
                            },
                            Pad: &shared.Pad{
                                BottomPixels: sdk.Int(245367),
                                LeftPixels: sdk.Int(432148),
                                RightPixels: sdk.Int(420539),
                                TopPixels: sdk.Int(752135),
                            },
                        },
                        URI: sdk.String("https://sweaty-stripe.info"),
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: sdk.String("quasi"),
                        MuxStreams: []string{
                            "numquam",
                            "explicabo",
                        },
                        Type: shared.ManifestTypeEnumHls.ToPointer(),
                    },
                    shared.Manifest{
                        FileName: sdk.String("ipsa"),
                        MuxStreams: []string{
                            "magnam",
                            "odio",
                        },
                        Type: shared.ManifestTypeEnumManifestTypeUnspecified.ToPointer(),
                    },
                    shared.Manifest{
                        FileName: sdk.String("esse"),
                        MuxStreams: []string{
                            "rem",
                            "fuga",
                        },
                        Type: shared.ManifestTypeEnumHls.ToPointer(),
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: sdk.String("fugiat"),
                        ElementaryStreams: []string{
                            "eum",
                            "suscipit",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: sdk.String("assumenda"),
                            },
                            Iv: sdk.String("eos"),
                            Key: sdk.String("praesentium"),
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: sdk.String("quisquam"),
                                Scheme: sdk.String("veritatis"),
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: sdk.String("ipsa"),
                            },
                        },
                        FileName: sdk.String("id"),
                        Key: sdk.String("quidem"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("neque"),
                        },
                    },
                    shared.MuxStream{
                        Container: sdk.String("quo"),
                        ElementaryStreams: []string{
                            "quo",
                            "fuga",
                            "eius",
                            "eos",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: sdk.String("voluptas"),
                            },
                            Iv: sdk.String("ab"),
                            Key: sdk.String("cupiditate"),
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: sdk.String("consequatur"),
                                Scheme: sdk.String("tempora"),
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: sdk.String("debitis"),
                            },
                        },
                        FileName: sdk.String("ipsam"),
                        Key: sdk.String("aspernatur"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("sequi"),
                        },
                    },
                    shared.MuxStream{
                        Container: sdk.String("quo"),
                        ElementaryStreams: []string{
                            "recusandae",
                            "aperiam",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: sdk.String("distinctio"),
                            },
                            Iv: sdk.String("quod"),
                            Key: sdk.String("dignissimos"),
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: sdk.String("inventore"),
                                Scheme: sdk.String("nihil"),
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: sdk.String("totam"),
                            },
                        },
                        FileName: sdk.String("accusamus"),
                        Key: sdk.String("aliquam"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("odio"),
                        },
                    },
                },
                Output: &shared.Output{
                    URI: sdk.String("https://immense-virtue.biz"),
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("accusantium"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("porro"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("quas"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(5100.17),
                                        Y: sdk.Float64(1598.67),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("deleniti"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(1438.29),
                                        Y: sdk.Float64(6813.93),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("mollitia"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("incidunt"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("explicabo"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(3256.85),
                                        Y: sdk.Float64(3926.76),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("fugit"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(9564.06),
                                        Y: sdk.Float64(1598.7),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(1871.31),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(1294.12),
                                Y: sdk.Float64(9039.84),
                            },
                            URI: sdk.String("https://monumental-bolero.info"),
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("accusamus"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("veritatis"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("quod"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(7241.68),
                                        Y: sdk.Float64(8771.31),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("aliquid"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(934.59),
                                        Y: sdk.Float64(9040.45),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("vel"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("harum"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("rerum"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(5801.97),
                                        Y: sdk.Float64(3277.2),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("distinctio"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(7567.79),
                                        Y: sdk.Float64(270.69),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("culpa"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("tempore"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeTypeUnspecified.ToPointer(),
                                    StartTimeOffset: sdk.String("cumque"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(1605.38),
                                        Y: sdk.Float64(97.66),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("minus"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(3082.86),
                                        Y: sdk.Float64(9591.67),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("consectetur"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("esse"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("provident"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(9537.22),
                                        Y: sdk.Float64(8577.23),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("quas"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(4572.23),
                                        Y: sdk.Float64(974.68),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(9518.75),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(6216.79),
                                Y: sdk.Float64(5757.51),
                            },
                            URI: sdk.String("https://sugary-choice.org"),
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("facere"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("veritatis"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeTypeUnspecified.ToPointer(),
                                    StartTimeOffset: sdk.String("quasi"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6288.99),
                                        Y: sdk.Float64(6336.08),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("aliquid"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(9492.98),
                                        Y: sdk.Float64(627.13),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("earum"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("vel"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("eius"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(7276.97),
                                        Y: sdk.Float64(8490.39),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("soluta"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(333.04),
                                        Y: sdk.Float64(3069.86),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("sapiente"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("dicta"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("reprehenderit"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(3567.07),
                                        Y: sdk.Float64(3917.74),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("aut"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(5318.49),
                                        Y: sdk.Float64(1852.32),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("quibusdam"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("ex"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("itaque"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6802.7),
                                        Y: sdk.Float64(996.15),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("omnis"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(9453.02),
                                        Y: sdk.Float64(984.78),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(8694.89),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(920.27),
                                Y: sdk.Float64(4541.62),
                            },
                            URI: sdk.String("http://gentle-bladder.biz"),
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: sdk.String("adipisci"),
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(839513),
                        EndTimeOffset: sdk.String("accusantium"),
                        FilePrefix: sdk.String("rem"),
                        Format: sdk.String("aut"),
                        Interval: sdk.String("laudantium"),
                        Quality: sdk.Int(428796),
                        RowCount: sdk.Int(649832),
                        SpriteHeightPixels: sdk.Int(68074),
                        SpriteWidthPixels: sdk.Int(544591),
                        StartTimeOffset: sdk.String("non"),
                        TotalCount: sdk.Int(32465),
                    },
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(221161),
                        EndTimeOffset: sdk.String("occaecati"),
                        FilePrefix: sdk.String("numquam"),
                        Format: sdk.String("impedit"),
                        Interval: sdk.String("explicabo"),
                        Quality: sdk.Int(376226),
                        RowCount: sdk.Int(12036),
                        SpriteHeightPixels: sdk.Int(491025),
                        SpriteWidthPixels: sdk.Int(115484),
                        StartTimeOffset: sdk.String("maiores"),
                        TotalCount: sdk.Int(618480),
                    },
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(244651),
                        EndTimeOffset: sdk.String("voluptatibus"),
                        FilePrefix: sdk.String("voluptas"),
                        Format: sdk.String("asperiores"),
                        Interval: sdk.String("aperiam"),
                        Quality: sdk.Int(409054),
                        RowCount: sdk.Int(310067),
                        SpriteHeightPixels: sdk.Int(162954),
                        SpriteWidthPixels: sdk.Int(831520),
                        StartTimeOffset: sdk.String("officia"),
                        TotalCount: sdk.Int(807023),
                    },
                },
            },
            Name: sdk.String("Blanche Yundt II"),
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("ab"),
        JobTemplateID: sdk.String("adipisci"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("id"),
        Parent: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("est"),
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

## TranscoderProjectsLocationsJobTemplatesDelete

Deletes a job template.

### Example Usage

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
    res, err := s.Projects.TranscoderProjectsLocationsJobTemplatesDelete(ctx, operations.TranscoderProjectsLocationsJobTemplatesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("ducimus"),
        Key: sdk.String("quos"),
        Name: "Clara Senger",
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.TranscoderProjectsLocationsJobTemplatesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## TranscoderProjectsLocationsJobTemplatesGet

Returns the job template data.

### Example Usage

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
    res, err := s.Projects.TranscoderProjectsLocationsJobTemplatesGet(ctx, operations.TranscoderProjectsLocationsJobTemplatesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("cum"),
        Name: "Arlene Heidenreich",
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.TranscoderProjectsLocationsJobTemplatesGetSecurity{
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

## TranscoderProjectsLocationsJobTemplatesList

Lists job templates in the specified region.

### Example Usage

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
    res, err := s.Projects.TranscoderProjectsLocationsJobTemplatesList(ctx, operations.TranscoderProjectsLocationsJobTemplatesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("adipisci"),
        PageSize: sdk.Int64(249420),
        PageToken: sdk.String("amet"),
        Parent: "beatae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.TranscoderProjectsLocationsJobTemplatesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobTemplatesResponse != nil {
        // handle response
    }
}
```

## TranscoderProjectsLocationsJobsCreate

Creates a job in the specified region.

### Example Usage

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
    res, err := s.Projects.TranscoderProjectsLocationsJobsCreate(ctx, operations.TranscoderProjectsLocationsJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        JobInput: &shared.JobInput{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: sdk.String("harum"),
                    },
                    shared.AdBreak{
                        StartTimeOffset: sdk.String("laboriosam"),
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: sdk.String("voluptates"),
                        Inputs: []string{
                            "vitae",
                            "accusamus",
                            "similique",
                        },
                        Key: sdk.String("tempora"),
                        StartTimeOffset: sdk.String("aspernatur"),
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: sdk.Int(374244),
                            ChannelCount: sdk.Int(374296),
                            ChannelLayout: []string{
                                "nobis",
                                "dolorum",
                            },
                            Codec: sdk.String("adipisci"),
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(449292),
                                                    GainDb: sdk.Float64(2962.42),
                                                    Key: sdk.String("aliquam"),
                                                    Track: sdk.Int(885963),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(839189),
                                                    GainDb: sdk.Float64(3518.7),
                                                    Key: sdk.String("adipisci"),
                                                    Track: sdk.Int(738391),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(502389),
                                                    GainDb: sdk.Float64(5553.61),
                                                    Key: sdk.String("hic"),
                                                    Track: sdk.Int(201517),
                                                },
                                            },
                                        },
                                    },
                                    Key: sdk.String("culpa"),
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(519643),
                                                    GainDb: sdk.Float64(9402.1),
                                                    Key: sdk.String("exercitationem"),
                                                    Track: sdk.Int(750765),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(24619),
                                                    GainDb: sdk.Float64(6995.75),
                                                    Key: sdk.String("sed"),
                                                    Track: sdk.Int(967966),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(131852),
                                                    GainDb: sdk.Float64(9944.01),
                                                    Key: sdk.String("facilis"),
                                                    Track: sdk.Int(451822),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(709072),
                                                    GainDb: sdk.Float64(708.69),
                                                    Key: sdk.String("iste"),
                                                    Track: sdk.Int(292794),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(152354),
                                                    GainDb: sdk.Float64(4475.16),
                                                    Key: sdk.String("commodi"),
                                                    Track: sdk.Int(696077),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(131289),
                                                    GainDb: sdk.Float64(3783.26),
                                                    Key: sdk.String("unde"),
                                                    Track: sdk.Int(100032),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(382808),
                                                    GainDb: sdk.Float64(9602.57),
                                                    Key: sdk.String("debitis"),
                                                    Track: sdk.Int(72434),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(19300),
                                                    GainDb: sdk.Float64(5468.85),
                                                    Key: sdk.String("maiores"),
                                                    Track: sdk.Int(274823),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(148478),
                                                    GainDb: sdk.Float64(5922.31),
                                                    Key: sdk.String("eius"),
                                                    Track: sdk.Int(896762),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(215529),
                                                    GainDb: sdk.Float64(4067.33),
                                                    Key: sdk.String("occaecati"),
                                                    Track: sdk.Int(552078),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(975752),
                                                    GainDb: sdk.Float64(2716.53),
                                                    Key: sdk.String("tempora"),
                                                    Track: sdk.Int(455444),
                                                },
                                            },
                                        },
                                    },
                                    Key: sdk.String("reiciendis"),
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(248413),
                                                    GainDb: sdk.Float64(8880.44),
                                                    Key: sdk.String("praesentium"),
                                                    Track: sdk.Int(708609),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(277773),
                                                    GainDb: sdk.Float64(3730.35),
                                                    Key: sdk.String("debitis"),
                                                    Track: sdk.Int(524970),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(26522),
                                                    GainDb: sdk.Float64(7505.95),
                                                    Key: sdk.String("error"),
                                                    Track: sdk.Int(333507),
                                                },
                                            },
                                        },
                                    },
                                    Key: sdk.String("minima"),
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(862319),
                                                    GainDb: sdk.Float64(1685.76),
                                                    Key: sdk.String("aperiam"),
                                                    Track: sdk.Int(901483),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(253642),
                                                    GainDb: sdk.Float64(3299.35),
                                                    Key: sdk.String("in"),
                                                    Track: sdk.Int(889234),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(104627),
                                                    GainDb: sdk.Float64(5124.52),
                                                    Key: sdk.String("exercitationem"),
                                                    Track: sdk.Int(510629),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(740098),
                                                    GainDb: sdk.Float64(3868.27),
                                                    Key: sdk.String("dolorum"),
                                                    Track: sdk.Int(530089),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(944708),
                                                    GainDb: sdk.Float64(7105.29),
                                                    Key: sdk.String("debitis"),
                                                    Track: sdk.Int(204923),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(677115),
                                                    GainDb: sdk.Float64(3416.98),
                                                    Key: sdk.String("officia"),
                                                    Track: sdk.Int(676243),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(548361),
                                                    GainDb: sdk.Float64(8792.35),
                                                    Key: sdk.String("tempora"),
                                                    Track: sdk.Int(543678),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(282699),
                                                    GainDb: sdk.Float64(8563.03),
                                                    Key: sdk.String("voluptatem"),
                                                    Track: sdk.Int(635057),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(299643),
                                                    GainDb: sdk.Float64(78.84),
                                                    Key: sdk.String("esse"),
                                                    Track: sdk.Int(372679),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(24527),
                                                    GainDb: sdk.Float64(5305.37),
                                                    Key: sdk.String("quas"),
                                                    Track: sdk.Int(922112),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(361151),
                                                    GainDb: sdk.Float64(894.94),
                                                    Key: sdk.String("blanditiis"),
                                                    Track: sdk.Int(405942),
                                                },
                                            },
                                        },
                                    },
                                    Key: sdk.String("sed"),
                                },
                            },
                            SampleRateHertz: sdk.Int(24313),
                        },
                        Key: sdk.String("vel"),
                        TextStream: &shared.TextStream{
                            Codec: sdk.String("nostrum"),
                            LanguageCode: sdk.String("saepe"),
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: sdk.String("incidunt"),
                                            Track: sdk.Int(968865),
                                        },
                                    },
                                    Key: sdk.String("dolorem"),
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: sdk.String("dicta"),
                                            Track: sdk.Int(99416),
                                        },
                                        shared.TextInput{
                                            Key: sdk.String("occaecati"),
                                            Track: sdk.Int(289776),
                                        },
                                        shared.TextInput{
                                            Key: sdk.String("quidem"),
                                            Track: sdk.Int(539074),
                                        },
                                    },
                                    Key: sdk.String("laborum"),
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: sdk.String("tenetur"),
                                            Track: sdk.Int(388867),
                                        },
                                        shared.TextInput{
                                            Key: sdk.String("alias"),
                                            Track: sdk.Int(227084),
                                        },
                                        shared.TextInput{
                                            Key: sdk.String("deserunt"),
                                            Track: sdk.Int(454860),
                                        },
                                    },
                                    Key: sdk.String("unde"),
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: sdk.Bool(false),
                            AqStrength: sdk.Float64(9720.83),
                            BFrameCount: sdk.Int(588740),
                            BPyramid: sdk.Bool(false),
                            BitrateBps: sdk.Int(833819),
                            Codec: sdk.String("delectus"),
                            CrfLevel: sdk.Int(914791),
                            EnableTwoPass: sdk.Bool(false),
                            EntropyCoder: sdk.String("perferendis"),
                            FrameRate: sdk.Float64(6672.85),
                            GopDuration: sdk.String("quidem"),
                            GopFrameCount: sdk.Int(440666),
                            HeightPixels: sdk.Int(813679),
                            PixelFormat: sdk.String("fuga"),
                            Preset: sdk.String("praesentium"),
                            Profile: sdk.String("mollitia"),
                            RateControlMode: sdk.String("veniam"),
                            Tune: sdk.String("voluptatem"),
                            VbvFullnessBits: sdk.Int(790840),
                            VbvSizeBits: sdk.Int(919532),
                            WidthPixels: sdk.Int(97243),
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: sdk.Int(542457),
                            ChannelCount: sdk.Int(442036),
                            ChannelLayout: []string{
                                "totam",
                                "suscipit",
                                "quidem",
                                "maxime",
                            },
                            Codec: sdk.String("et"),
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(410301),
                                                    GainDb: sdk.Float64(5391.18),
                                                    Key: sdk.String("error"),
                                                    Track: sdk.Int(887265),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(886961),
                                                    GainDb: sdk.Float64(8801.07),
                                                    Key: sdk.String("natus"),
                                                    Track: sdk.Int(328303),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(133461),
                                                    GainDb: sdk.Float64(4044.25),
                                                    Key: sdk.String("maiores"),
                                                    Track: sdk.Int(544647),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(871786),
                                                    GainDb: sdk.Float64(6216.93),
                                                    Key: sdk.String("blanditiis"),
                                                    Track: sdk.Int(379356),
                                                },
                                            },
                                        },
                                    },
                                    Key: sdk.String("repudiandae"),
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(120919),
                                                    GainDb: sdk.Float64(9233.06),
                                                    Key: sdk.String("dolorum"),
                                                    Track: sdk.Int(829898),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(287119),
                                                    GainDb: sdk.Float64(9682.87),
                                                    Key: sdk.String("doloremque"),
                                                    Track: sdk.Int(919783),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(116098),
                                                    GainDb: sdk.Float64(360.33),
                                                    Key: sdk.String("beatae"),
                                                    Track: sdk.Int(174772),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(389135),
                                                    GainDb: sdk.Float64(2465.35),
                                                    Key: sdk.String("a"),
                                                    Track: sdk.Int(562783),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(300029),
                                                    GainDb: sdk.Float64(9063.55),
                                                    Key: sdk.String("consequuntur"),
                                                    Track: sdk.Int(580107),
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(597937),
                                                    GainDb: sdk.Float64(4463.94),
                                                    Key: sdk.String("adipisci"),
                                                    Track: sdk.Int(907876),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(580887),
                                                    GainDb: sdk.Float64(1602.3),
                                                    Key: sdk.String("fugit"),
                                                    Track: sdk.Int(661118),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(335631),
                                                    GainDb: sdk.Float64(4402.64),
                                                    Key: sdk.String("error"),
                                                    Track: sdk.Int(76486),
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: sdk.Int(361306),
                                                    GainDb: sdk.Float64(6964.63),
                                                    Key: sdk.String("eveniet"),
                                                    Track: sdk.Int(247399),
                                                },
                                            },
                                        },
                                    },
                                    Key: sdk.String("vero"),
                                },
                            },
                            SampleRateHertz: sdk.Int(39615),
                        },
                        Key: sdk.String("iure"),
                        TextStream: &shared.TextStream{
                            Codec: sdk.String("ipsa"),
                            LanguageCode: sdk.String("totam"),
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: sdk.String("eveniet"),
                                            Track: sdk.Int(184362),
                                        },
                                        shared.TextInput{
                                            Key: sdk.String("cum"),
                                            Track: sdk.Int(434761),
                                        },
                                    },
                                    Key: sdk.String("necessitatibus"),
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: sdk.Bool(false),
                            AqStrength: sdk.Float64(1875.52),
                            BFrameCount: sdk.Int(672582),
                            BPyramid: sdk.Bool(false),
                            BitrateBps: sdk.Int(715208),
                            Codec: sdk.String("voluptatum"),
                            CrfLevel: sdk.Int(523006),
                            EnableTwoPass: sdk.Bool(false),
                            EntropyCoder: sdk.String("aliquam"),
                            FrameRate: sdk.Float64(3205.65),
                            GopDuration: sdk.String("repellat"),
                            GopFrameCount: sdk.Int(3099),
                            HeightPixels: sdk.Int(362189),
                            PixelFormat: sdk.String("perspiciatis"),
                            Preset: sdk.String("nihil"),
                            Profile: sdk.String("mollitia"),
                            RateControlMode: sdk.String("voluptas"),
                            Tune: sdk.String("alias"),
                            VbvFullnessBits: sdk.Int(979527),
                            VbvSizeBits: sdk.Int(970222),
                            WidthPixels: sdk.Int(174658),
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: sdk.String("minima"),
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: sdk.Bool(false),
                                LowBoost: sdk.Bool(false),
                                Lufs: sdk.Float64(2931.44),
                            },
                            Color: &shared.Color{
                                Brightness: sdk.Float64(6803.49),
                                Contrast: sdk.Float64(2003.64),
                                Saturation: sdk.Float64(632.07),
                            },
                            Crop: &shared.Crop{
                                BottomPixels: sdk.Int(925703),
                                LeftPixels: sdk.Int(607249),
                                RightPixels: sdk.Int(309251),
                                TopPixels: sdk.Int(477646),
                            },
                            Deblock: &shared.Deblock{
                                Enabled: sdk.Bool(false),
                                Strength: sdk.Float64(4032.18),
                            },
                            Denoise: &shared.Denoise{
                                Strength: sdk.Float64(2840),
                                Tune: sdk.String("culpa"),
                            },
                            Pad: &shared.Pad{
                                BottomPixels: sdk.Int(238413),
                                LeftPixels: sdk.Int(890653),
                                RightPixels: sdk.Int(514513),
                                TopPixels: sdk.Int(432606),
                            },
                        },
                        URI: sdk.String("http://verifiable-independent.name"),
                    },
                    shared.Input{
                        Key: sdk.String("quis"),
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: sdk.Bool(false),
                                LowBoost: sdk.Bool(false),
                                Lufs: sdk.Float64(4317.85),
                            },
                            Color: &shared.Color{
                                Brightness: sdk.Float64(9704.94),
                                Contrast: sdk.Float64(5927.8),
                                Saturation: sdk.Float64(1334.39),
                            },
                            Crop: &shared.Crop{
                                BottomPixels: sdk.Int(354506),
                                LeftPixels: sdk.Int(96804),
                                RightPixels: sdk.Int(657020),
                                TopPixels: sdk.Int(343392),
                            },
                            Deblock: &shared.Deblock{
                                Enabled: sdk.Bool(false),
                                Strength: sdk.Float64(6523.09),
                            },
                            Denoise: &shared.Denoise{
                                Strength: sdk.Float64(5910.27),
                                Tune: sdk.String("possimus"),
                            },
                            Pad: &shared.Pad{
                                BottomPixels: sdk.Int(659177),
                                LeftPixels: sdk.Int(402767),
                                RightPixels: sdk.Int(397257),
                                TopPixels: sdk.Int(37565),
                            },
                        },
                        URI: sdk.String("https://worse-fledgling.info"),
                    },
                    shared.Input{
                        Key: sdk.String("nam"),
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: sdk.Bool(false),
                                LowBoost: sdk.Bool(false),
                                Lufs: sdk.Float64(9376.36),
                            },
                            Color: &shared.Color{
                                Brightness: sdk.Float64(6375.83),
                                Contrast: sdk.Float64(6720.41),
                                Saturation: sdk.Float64(8130.54),
                            },
                            Crop: &shared.Crop{
                                BottomPixels: sdk.Int(266697),
                                LeftPixels: sdk.Int(976226),
                                RightPixels: sdk.Int(564064),
                                TopPixels: sdk.Int(889794),
                            },
                            Deblock: &shared.Deblock{
                                Enabled: sdk.Bool(false),
                                Strength: sdk.Float64(9569.33),
                            },
                            Denoise: &shared.Denoise{
                                Strength: sdk.Float64(7645.62),
                                Tune: sdk.String("vitae"),
                            },
                            Pad: &shared.Pad{
                                BottomPixels: sdk.Int(698249),
                                LeftPixels: sdk.Int(272229),
                                RightPixels: sdk.Int(335498),
                                TopPixels: sdk.Int(82057),
                            },
                        },
                        URI: sdk.String("http://slushy-bamboo.com"),
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: sdk.String("aspernatur"),
                        MuxStreams: []string{
                            "eius",
                            "rem",
                        },
                        Type: shared.ManifestTypeEnumDash.ToPointer(),
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: sdk.String("eos"),
                        ElementaryStreams: []string{
                            "eum",
                            "dicta",
                            "minima",
                            "beatae",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: sdk.String("cupiditate"),
                            },
                            Iv: sdk.String("provident"),
                            Key: sdk.String("earum"),
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: sdk.String("soluta"),
                                Scheme: sdk.String("hic"),
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: sdk.String("illum"),
                            },
                        },
                        FileName: sdk.String("eaque"),
                        Key: sdk.String("earum"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("perspiciatis"),
                        },
                    },
                    shared.MuxStream{
                        Container: sdk.String("maiores"),
                        ElementaryStreams: []string{
                            "aliquid",
                            "porro",
                            "suscipit",
                            "dolorem",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: sdk.String("fugit"),
                            },
                            Iv: sdk.String("cumque"),
                            Key: sdk.String("fuga"),
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: sdk.String("ratione"),
                                Scheme: sdk.String("animi"),
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: sdk.String("necessitatibus"),
                            },
                        },
                        FileName: sdk.String("nulla"),
                        Key: sdk.String("consequatur"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("quasi"),
                        },
                    },
                    shared.MuxStream{
                        Container: sdk.String("et"),
                        ElementaryStreams: []string{
                            "natus",
                            "occaecati",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: sdk.String("suscipit"),
                            },
                            Iv: sdk.String("adipisci"),
                            Key: sdk.String("quasi"),
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: sdk.String("magni"),
                                Scheme: sdk.String("doloribus"),
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: sdk.String("nulla"),
                            },
                        },
                        FileName: sdk.String("necessitatibus"),
                        Key: sdk.String("ipsa"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("tempora"),
                        },
                    },
                    shared.MuxStream{
                        Container: sdk.String("nihil"),
                        ElementaryStreams: []string{
                            "dicta",
                            "iusto",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: sdk.String("esse"),
                            },
                            Iv: sdk.String("praesentium"),
                            Key: sdk.String("maiores"),
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: sdk.String("reiciendis"),
                                Scheme: sdk.String("vel"),
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: sdk.String("architecto"),
                            },
                        },
                        FileName: sdk.String("fugiat"),
                        Key: sdk.String("doloremque"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("dicta"),
                        },
                    },
                },
                Output: &shared.Output{
                    URI: sdk.String("http://fat-infant.info"),
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("ipsa"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("laborum"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeTypeUnspecified.ToPointer(),
                                    StartTimeOffset: sdk.String("nostrum"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(8567.56),
                                        Y: sdk.Float64(7137.67),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("aliquid"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6391.87),
                                        Y: sdk.Float64(3813.97),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("aliquid"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("perferendis"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("voluptas"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6145.28),
                                        Y: sdk.Float64(6616.07),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("ab"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6253.58),
                                        Y: sdk.Float64(8224.07),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(9139.92),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(6534.21),
                                Y: sdk.Float64(6717.94),
                            },
                            URI: sdk.String("https://gargantuan-management.biz"),
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: sdk.String("vitae"),
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(405036),
                        EndTimeOffset: sdk.String("quo"),
                        FilePrefix: sdk.String("ex"),
                        Format: sdk.String("ut"),
                        Interval: sdk.String("ad"),
                        Quality: sdk.Int(713927),
                        RowCount: sdk.Int(29950),
                        SpriteHeightPixels: sdk.Int(561577),
                        SpriteWidthPixels: sdk.Int(737254),
                        StartTimeOffset: sdk.String("aliquid"),
                        TotalCount: sdk.Int(109784),
                    },
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(530860),
                        EndTimeOffset: sdk.String("omnis"),
                        FilePrefix: sdk.String("veritatis"),
                        Format: sdk.String("rerum"),
                        Interval: sdk.String("est"),
                        Quality: sdk.Int(634786),
                        RowCount: sdk.Int(29634),
                        SpriteHeightPixels: sdk.Int(959143),
                        SpriteWidthPixels: sdk.Int(889288),
                        StartTimeOffset: sdk.String("architecto"),
                        TotalCount: sdk.Int(682119),
                    },
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(867168),
                        EndTimeOffset: sdk.String("debitis"),
                        FilePrefix: sdk.String("voluptatem"),
                        Format: sdk.String("alias"),
                        Interval: sdk.String("deleniti"),
                        Quality: sdk.Int(937219),
                        RowCount: sdk.Int(404244),
                        SpriteHeightPixels: sdk.Int(958308),
                        SpriteWidthPixels: sdk.Int(524184),
                        StartTimeOffset: sdk.String("minus"),
                        TotalCount: sdk.Int(365100),
                    },
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(992074),
                        EndTimeOffset: sdk.String("ratione"),
                        FilePrefix: sdk.String("ullam"),
                        Format: sdk.String("perferendis"),
                        Interval: sdk.String("illum"),
                        Quality: sdk.Int(518150),
                        RowCount: sdk.Int(770675),
                        SpriteHeightPixels: sdk.Int(842777),
                        SpriteWidthPixels: sdk.Int(720528),
                        StartTimeOffset: sdk.String("ipsam"),
                        TotalCount: sdk.Int(633415),
                    },
                },
            },
            InputURI: sdk.String("dolor"),
            Name: sdk.String("Mrs. Stephanie Lind"),
            OriginURI: &shared.OriginURI{
                Dash: sdk.String("consequatur"),
                Hls: sdk.String("architecto"),
            },
            OutputURI: sdk.String("sit"),
            Priority: sdk.Int(265039),
            Progress: &shared.Progress{
                Analyzed: sdk.Float64(1442.86),
                Encoded: sdk.Float64(661.49),
                Notified: sdk.Float64(5137.6),
                Uploaded: sdk.Float64(656.04),
            },
            TemplateID: sdk.String("dolor"),
            TTLAfterCompletionDays: sdk.Int(856277),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("quas"),
        Key: sdk.String("eveniet"),
        OauthToken: sdk.String("impedit"),
        Parent: "officiis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("sed"),
    }, operations.TranscoderProjectsLocationsJobsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## TranscoderProjectsLocationsJobsList

Lists jobs in the specified region.

### Example Usage

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
    res, err := s.Projects.TranscoderProjectsLocationsJobsList(ctx, operations.TranscoderProjectsLocationsJobsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("vel"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("magnam"),
        PageSize: sdk.Int64(349440),
        PageToken: sdk.String("ab"),
        Parent: "porro",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.TranscoderProjectsLocationsJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResponse != nil {
        // handle response
    }
}
```
