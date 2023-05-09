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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        JobTemplate: &shared.JobTemplate{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: sdk.String("eos"),
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: sdk.String("dolores"),
                        Inputs: []string{
                            "quam",
                            "dolor",
                            "vero",
                            "nostrum",
                        },
                        Key: sdk.String("hic"),
                        StartTimeOffset: sdk.String("recusandae"),
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: sdk.Int(704415),
                            ChannelCount: sdk.Int(596656),
                            ChannelLayout: []string{
                                "porro",
                            },
                            Codec: sdk.String("consequuntur"),
                            DisplayName: sdk.String("blanditiis"),
                            LanguageCode: sdk.String("error"),
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: sdk.String("occaecati"),
                                    GainDb: sdk.Float64(6990.98),
                                    InputChannel: sdk.Int(237893),
                                    InputKey: sdk.String("asperiores"),
                                    InputTrack: sdk.Int(934214),
                                    OutputChannel: sdk.Int(267262),
                                },
                            },
                            SampleRateHertz: sdk.Int(613966),
                        },
                        Key: sdk.String("dolorum"),
                        TextStream: &shared.TextStream{
                            Codec: sdk.String("deleniti"),
                            DisplayName: sdk.String("pariatur"),
                            LanguageCode: sdk.String("provident"),
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: sdk.String("libero"),
                                    InputKey: sdk.String("delectus"),
                                    InputTrack: sdk.Int(311945),
                                },
                                shared.TextMapping{
                                    AtomKey: sdk.String("quos"),
                                    InputKey: sdk.String("aliquid"),
                                    InputTrack: sdk.Int(212390),
                                },
                                shared.TextMapping{
                                    AtomKey: sdk.String("dolorem"),
                                    InputKey: sdk.String("dolor"),
                                    InputTrack: sdk.Int(186193),
                                },
                                shared.TextMapping{
                                    AtomKey: sdk.String("ipsum"),
                                    InputKey: sdk.String("hic"),
                                    InputTrack: sdk.Int(569574),
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: sdk.Bool(false),
                                AqStrength: sdk.Float64(7395.51),
                                BFrameCount: sdk.Int(452109),
                                BPyramid: sdk.Bool(false),
                                BitrateBps: sdk.Int(490459),
                                CrfLevel: sdk.Int(970237),
                                EnableTwoPass: sdk.Bool(false),
                                EntropyCoder: sdk.String("amet"),
                                FrameRate: sdk.Float64(6805.45),
                                GopDuration: sdk.String("numquam"),
                                GopFrameCount: sdk.Int(85295),
                                HeightPixels: sdk.Int(58029),
                                PixelFormat: sdk.String("ipsa"),
                                Preset: sdk.String("iure"),
                                Profile: sdk.String("odio"),
                                RateControlMode: sdk.String("quaerat"),
                                Tune: sdk.String("accusamus"),
                                VbvFullnessBits: sdk.Int(696344),
                                VbvSizeBits: sdk.Int(976405),
                                WidthPixels: sdk.Int(377752),
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: sdk.Bool(false),
                                AqStrength: sdk.Float64(6176.58),
                                BFrameCount: sdk.Int(179603),
                                BPyramid: sdk.Bool(false),
                                BitrateBps: sdk.Int(542499),
                                CrfLevel: sdk.Int(24678),
                                EnableTwoPass: sdk.Bool(false),
                                FrameRate: sdk.Float64(8546.14),
                                GopDuration: sdk.String("ab"),
                                GopFrameCount: sdk.Int(743835),
                                HeightPixels: sdk.Int(679393),
                                PixelFormat: sdk.String("iusto"),
                                Preset: sdk.String("voluptate"),
                                Profile: sdk.String("dolorum"),
                                RateControlMode: sdk.String("deleniti"),
                                Tune: sdk.String("omnis"),
                                VbvFullnessBits: sdk.Int(896672),
                                VbvSizeBits: sdk.Int(714697),
                                WidthPixels: sdk.Int(990339),
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: sdk.Int(469497),
                                CrfLevel: sdk.Int(216897),
                                FrameRate: sdk.Float64(4560.15),
                                GopDuration: sdk.String("id"),
                                GopFrameCount: sdk.Int(906418),
                                HeightPixels: sdk.Int(263322),
                                PixelFormat: sdk.String("aspernatur"),
                                Profile: sdk.String("perferendis"),
                                RateControlMode: sdk.String("amet"),
                                WidthPixels: sdk.Int(758379),
                            },
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: sdk.Int(881586),
                            ChannelCount: sdk.Int(320017),
                            ChannelLayout: []string{
                                "suscipit",
                                "deserunt",
                                "provident",
                                "minima",
                            },
                            Codec: sdk.String("repellendus"),
                            DisplayName: sdk.String("totam"),
                            LanguageCode: sdk.String("similique"),
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: sdk.String("at"),
                                    GainDb: sdk.Float64(3118.6),
                                    InputChannel: sdk.Int(273542),
                                    InputKey: sdk.String("vel"),
                                    InputTrack: sdk.Int(798047),
                                    OutputChannel: sdk.Int(885338),
                                },
                            },
                            SampleRateHertz: sdk.Int(185636),
                        },
                        Key: sdk.String("dolorum"),
                        TextStream: &shared.TextStream{
                            Codec: sdk.String("a"),
                            DisplayName: sdk.String("esse"),
                            LanguageCode: sdk.String("harum"),
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: sdk.String("ipsum"),
                                    InputKey: sdk.String("quisquam"),
                                    InputTrack: sdk.Int(947371),
                                },
                                shared.TextMapping{
                                    AtomKey: sdk.String("amet"),
                                    InputKey: sdk.String("tempore"),
                                    InputTrack: sdk.Int(880298),
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: sdk.Bool(false),
                                AqStrength: sdk.Float64(2539.41),
                                BFrameCount: sdk.Int(313692),
                                BPyramid: sdk.Bool(false),
                                BitrateBps: sdk.Int(213312),
                                CrfLevel: sdk.Int(957451),
                                EnableTwoPass: sdk.Bool(false),
                                EntropyCoder: sdk.String("totam"),
                                FrameRate: sdk.Float64(4717.52),
                                GopDuration: sdk.String("sit"),
                                GopFrameCount: sdk.Int(711584),
                                HeightPixels: sdk.Int(207470),
                                PixelFormat: sdk.String("sed"),
                                Preset: sdk.String("vel"),
                                Profile: sdk.String("libero"),
                                RateControlMode: sdk.String("voluptas"),
                                Tune: sdk.String("deserunt"),
                                VbvFullnessBits: sdk.Int(463575),
                                VbvSizeBits: sdk.Int(214880),
                                WidthPixels: sdk.Int(277628),
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: sdk.Bool(false),
                                AqStrength: sdk.Float64(1864.58),
                                BFrameCount: sdk.Int(586784),
                                BPyramid: sdk.Bool(false),
                                BitrateBps: sdk.Int(807581),
                                CrfLevel: sdk.Int(863856),
                                EnableTwoPass: sdk.Bool(false),
                                FrameRate: sdk.Float64(7470.8),
                                GopDuration: sdk.String("dicta"),
                                GopFrameCount: sdk.Int(674848),
                                HeightPixels: sdk.Int(517379),
                                PixelFormat: sdk.String("incidunt"),
                                Preset: sdk.String("aspernatur"),
                                Profile: sdk.String("dolores"),
                                RateControlMode: sdk.String("distinctio"),
                                Tune: sdk.String("facilis"),
                                VbvFullnessBits: sdk.Int(396060),
                                VbvSizeBits: sdk.Int(463150),
                                WidthPixels: sdk.Int(565421),
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: sdk.Int(840429),
                                CrfLevel: sdk.Int(183280),
                                FrameRate: sdk.Float64(2048.65),
                                GopDuration: sdk.String("fugit"),
                                GopFrameCount: sdk.Int(164959),
                                HeightPixels: sdk.Int(488056),
                                PixelFormat: sdk.String("sunt"),
                                Profile: sdk.String("ullam"),
                                RateControlMode: sdk.String("nam"),
                                WidthPixels: sdk.Int(940432),
                            },
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: sdk.Int(30452),
                            ChannelCount: sdk.Int(765326),
                            ChannelLayout: []string{
                                "nobis",
                                "et",
                                "saepe",
                            },
                            Codec: sdk.String("ipsum"),
                            DisplayName: sdk.String("veritatis"),
                            LanguageCode: sdk.String("nobis"),
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: sdk.String("tempore"),
                                    GainDb: sdk.Float64(5844.76),
                                    InputChannel: sdk.Int(45614),
                                    InputKey: sdk.String("delectus"),
                                    InputTrack: sdk.Int(209157),
                                    OutputChannel: sdk.Int(292147),
                                },
                                shared.AudioMapping{
                                    AtomKey: sdk.String("labore"),
                                    GainDb: sdk.Float64(2408.29),
                                    InputChannel: sdk.Int(677263),
                                    InputKey: sdk.String("architecto"),
                                    InputTrack: sdk.Int(63038),
                                    OutputChannel: sdk.Int(16429),
                                },
                                shared.AudioMapping{
                                    AtomKey: sdk.String("quas"),
                                    GainDb: sdk.Float64(9295.3),
                                    InputChannel: sdk.Int(9240),
                                    InputKey: sdk.String("est"),
                                    InputTrack: sdk.Int(833038),
                                    OutputChannel: sdk.Int(785153),
                                },
                            },
                            SampleRateHertz: sdk.Int(984330),
                        },
                        Key: sdk.String("ut"),
                        TextStream: &shared.TextStream{
                            Codec: sdk.String("facilis"),
                            DisplayName: sdk.String("cupiditate"),
                            LanguageCode: sdk.String("qui"),
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: sdk.String("laudantium"),
                                    InputKey: sdk.String("odio"),
                                    InputTrack: sdk.Int(580447),
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: sdk.Bool(false),
                                AqStrength: sdk.Float64(9774.96),
                                BFrameCount: sdk.Int(787542),
                                BPyramid: sdk.Bool(false),
                                BitrateBps: sdk.Int(876506),
                                CrfLevel: sdk.Int(606476),
                                EnableTwoPass: sdk.Bool(false),
                                EntropyCoder: sdk.String("quis"),
                                FrameRate: sdk.Float64(2184.03),
                                GopDuration: sdk.String("delectus"),
                                GopFrameCount: sdk.Int(455169),
                                HeightPixels: sdk.Int(231701),
                                PixelFormat: sdk.String("vero"),
                                Preset: sdk.String("tenetur"),
                                Profile: sdk.String("dignissimos"),
                                RateControlMode: sdk.String("hic"),
                                Tune: sdk.String("distinctio"),
                                VbvFullnessBits: sdk.Int(799203),
                                VbvSizeBits: sdk.Int(486160),
                                WidthPixels: sdk.Int(630448),
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: sdk.Bool(false),
                                AqStrength: sdk.Float64(7085.48),
                                BFrameCount: sdk.Int(874288),
                                BPyramid: sdk.Bool(false),
                                BitrateBps: sdk.Int(498140),
                                CrfLevel: sdk.Int(293020),
                                EnableTwoPass: sdk.Bool(false),
                                FrameRate: sdk.Float64(8445.5),
                                GopDuration: sdk.String("illum"),
                                GopFrameCount: sdk.Int(194342),
                                HeightPixels: sdk.Int(617877),
                                PixelFormat: sdk.String("impedit"),
                                Preset: sdk.String("aut"),
                                Profile: sdk.String("voluptatibus"),
                                RateControlMode: sdk.String("exercitationem"),
                                Tune: sdk.String("nulla"),
                                VbvFullnessBits: sdk.Int(148141),
                                VbvSizeBits: sdk.Int(780427),
                                WidthPixels: sdk.Int(981830),
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: sdk.Int(985033),
                                CrfLevel: sdk.Int(478370),
                                FrameRate: sdk.Float64(7535.7),
                                GopDuration: sdk.String("ducimus"),
                                GopFrameCount: sdk.Int(4048),
                                HeightPixels: sdk.Int(639473),
                                PixelFormat: sdk.String("tempora"),
                                Profile: sdk.String("ipsam"),
                                RateControlMode: sdk.String("ea"),
                                WidthPixels: sdk.Int(136900),
                            },
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: sdk.String("possimus"),
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: sdk.Bool(false),
                                LowBoost: sdk.Bool(false),
                                Lufs: sdk.Float64(2978.42),
                            },
                            Color: &shared.Color{
                                Brightness: sdk.Float64(1898.48),
                                Contrast: sdk.Float64(4011.32),
                                Saturation: sdk.Float64(5113.19),
                            },
                            Crop: &shared.Crop{
                                BottomPixels: sdk.Int(120657),
                                LeftPixels: sdk.Int(224317),
                                RightPixels: sdk.Int(980700),
                                TopPixels: sdk.Int(97844),
                            },
                            Deblock: &shared.Deblock{
                                Enabled: sdk.Bool(false),
                                Strength: sdk.Float64(4061.2),
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: sdk.Bool(false),
                                    Mode: sdk.String("nulla"),
                                    Parity: sdk.String("excepturi"),
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: sdk.Bool(false),
                                    DisableSpatialInterlacing: sdk.Bool(false),
                                    Mode: sdk.String("voluptatibus"),
                                    Parity: sdk.String("nostrum"),
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: sdk.Float64(9608.35),
                                Tune: sdk.String("quisquam"),
                            },
                            Pad: &shared.Pad{
                                BottomPixels: sdk.Int(906556),
                                LeftPixels: sdk.Int(411372),
                                RightPixels: sdk.Int(774048),
                                TopPixels: sdk.Int(359271),
                            },
                        },
                        URI: sdk.String("http://husky-bid.biz"),
                    },
                    shared.Input{
                        Key: sdk.String("ea"),
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: sdk.Bool(false),
                                LowBoost: sdk.Bool(false),
                                Lufs: sdk.Float64(7752.2),
                            },
                            Color: &shared.Color{
                                Brightness: sdk.Float64(2322.34),
                                Contrast: sdk.Float64(9262.13),
                                Saturation: sdk.Float64(1324.87),
                            },
                            Crop: &shared.Crop{
                                BottomPixels: sdk.Int(325310),
                                LeftPixels: sdk.Int(53427),
                                RightPixels: sdk.Int(952871),
                                TopPixels: sdk.Int(725595),
                            },
                            Deblock: &shared.Deblock{
                                Enabled: sdk.Bool(false),
                                Strength: sdk.Float64(139.48),
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: sdk.Bool(false),
                                    Mode: sdk.String("aut"),
                                    Parity: sdk.String("deleniti"),
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: sdk.Bool(false),
                                    DisableSpatialInterlacing: sdk.Bool(false),
                                    Mode: sdk.String("impedit"),
                                    Parity: sdk.String("aliquam"),
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: sdk.Float64(1469.46),
                                Tune: sdk.String("accusamus"),
                            },
                            Pad: &shared.Pad{
                                BottomPixels: sdk.Int(79522),
                                LeftPixels: sdk.Int(250622),
                                RightPixels: sdk.Int(89603),
                                TopPixels: sdk.Int(677412),
                            },
                        },
                        URI: sdk.String("https://striped-deduce.info"),
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: sdk.String("nobis"),
                        MuxStreams: []string{
                            "assumenda",
                            "nulla",
                            "voluptas",
                        },
                        Type: shared.ManifestTypeEnumDash.ToPointer(),
                    },
                    shared.Manifest{
                        FileName: sdk.String("quasi"),
                        MuxStreams: []string{
                            "numquam",
                            "explicabo",
                        },
                        Type: shared.ManifestTypeEnumHls.ToPointer(),
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: sdk.String("molestiae"),
                        ElementaryStreams: []string{
                            "odio",
                            "eius",
                        },
                        FileName: sdk.String("esse"),
                        Key: sdk.String("esse"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("rem"),
                        },
                    },
                },
                Output: &shared.Output{
                    URI: sdk.String("https://insubstantial-produce.org"),
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("suscipit"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("assumenda"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeTypeUnspecified.ToPointer(),
                                    StartTimeOffset: sdk.String("praesentium"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(7885.46),
                                        Y: sdk.Float64(863.77),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("ipsa"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6600.4),
                                        Y: sdk.Float64(6969.97),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("neque"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("quo"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeOut.ToPointer(),
                                    StartTimeOffset: sdk.String("quo"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6813.59),
                                        Y: sdk.Float64(2594.22),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("eos"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(3738.13),
                                        Y: sdk.Float64(698.59),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(5876),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(96.88),
                                Y: sdk.Float64(2728.22),
                            },
                            URI: sdk.String("https://hard-to-find-carrot.biz"),
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("esse"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("recusandae"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeTypeUnspecified.ToPointer(),
                                    StartTimeOffset: sdk.String("distinctio"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(7997.96),
                                        Y: sdk.Float64(4908.19),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("inventore"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(4694.98),
                                        Y: sdk.Float64(5188.35),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("accusamus"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("aliquam"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("occaecati"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(4145.67),
                                        Y: sdk.Float64(9594.34),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("dolores"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6455.7),
                                        Y: sdk.Float64(4752.89),
                                    },
                                },
                            },
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
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: sdk.String("eveniet"),
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(82971),
                        EndTimeOffset: sdk.String("esse"),
                        FilePrefix: sdk.String("quod"),
                        Format: sdk.String("nam"),
                        Interval: sdk.String("vero"),
                        Quality: sdk.Int(399025),
                        RowCount: sdk.Int(93459),
                        SpriteHeightPixels: sdk.Int(904045),
                        SpriteWidthPixels: sdk.Int(426306),
                        StartTimeOffset: sdk.String("harum"),
                        TotalCount: sdk.Int(473221),
                    },
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(699622),
                        EndTimeOffset: sdk.String("occaecati"),
                        FilePrefix: sdk.String("minima"),
                        Format: sdk.String("distinctio"),
                        Interval: sdk.String("eligendi"),
                        Quality: sdk.Int(27069),
                        RowCount: sdk.Int(636061),
                        SpriteHeightPixels: sdk.Int(731398),
                        SpriteWidthPixels: sdk.Int(240020),
                        StartTimeOffset: sdk.String("cumque"),
                        TotalCount: sdk.Int(160538),
                    },
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(9766),
                        EndTimeOffset: sdk.String("minus"),
                        FilePrefix: sdk.String("quaerat"),
                        Format: sdk.String("sapiente"),
                        Interval: sdk.String("consectetur"),
                        Quality: sdk.Int(458139),
                        RowCount: sdk.Int(503427),
                        SpriteHeightPixels: sdk.Int(590984),
                        SpriteWidthPixels: sdk.Int(953722),
                        StartTimeOffset: sdk.String("nulla"),
                        TotalCount: sdk.Int(557811),
                    },
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(457223),
                        EndTimeOffset: sdk.String("quasi"),
                        FilePrefix: sdk.String("a"),
                        Format: sdk.String("error"),
                        Interval: sdk.String("sint"),
                        Quality: sdk.Int(863023),
                        RowCount: sdk.Int(820767),
                        SpriteHeightPixels: sdk.Int(157632),
                        SpriteWidthPixels: sdk.Int(908844),
                        StartTimeOffset: sdk.String("asperiores"),
                        TotalCount: sdk.Int(815524),
                    },
                },
            },
            Labels: map[string]string{
                "consequuntur": "quasi",
            },
            Name: sdk.String("Shannon Jacobi DVM"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("libero"),
        JobTemplateID: sdk.String("illum"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("accusantium"),
        Parent: "aliquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("ullam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ullam"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("voluptatum"),
        Key: sdk.String("qui"),
        Name: "Marc Leuschke",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("quasi"),
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
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("minima"),
        Key: sdk.String("veritatis"),
        Name: "Sherry Morar IV",
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laudantium"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("mollitia"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("dolor"),
        Filter: sdk.String("occaecati"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("impedit"),
        OrderBy: sdk.String("explicabo"),
        PageSize: sdk.Int64(376226),
        PageToken: sdk.String("aut"),
        Parent: "dignissimos",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("natus"),
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
                        StartTimeOffset: sdk.String("voluptas"),
                    },
                    shared.AdBreak{
                        StartTimeOffset: sdk.String("asperiores"),
                    },
                    shared.AdBreak{
                        StartTimeOffset: sdk.String("aperiam"),
                    },
                    shared.AdBreak{
                        StartTimeOffset: sdk.String("ea"),
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: sdk.String("consequuntur"),
                        Inputs: []string{
                            "officia",
                            "maxime",
                            "dignissimos",
                            "officia",
                        },
                        Key: sdk.String("asperiores"),
                        StartTimeOffset: sdk.String("nemo"),
                    },
                    shared.EditAtom{
                        EndTimeOffset: sdk.String("quae"),
                        Inputs: []string{
                            "porro",
                            "quod",
                        },
                        Key: sdk.String("labore"),
                        StartTimeOffset: sdk.String("ab"),
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: sdk.Int(683573),
                            ChannelCount: sdk.Int(662505),
                            ChannelLayout: []string{
                                "velit",
                                "culpa",
                            },
                            Codec: sdk.String("est"),
                            DisplayName: sdk.String("recusandae"),
                            LanguageCode: sdk.String("totam"),
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: sdk.String("vel"),
                                    GainDb: sdk.Float64(4976.78),
                                    InputChannel: sdk.Int(554688),
                                    InputKey: sdk.String("vel"),
                                    InputTrack: sdk.Int(287051),
                                    OutputChannel: sdk.Int(822560),
                                },
                                shared.AudioMapping{
                                    AtomKey: sdk.String("facilis"),
                                    GainDb: sdk.Float64(7382.27),
                                    InputChannel: sdk.Int(414857),
                                    InputKey: sdk.String("in"),
                                    InputTrack: sdk.Int(360545),
                                    OutputChannel: sdk.Int(968904),
                                },
                                shared.AudioMapping{
                                    AtomKey: sdk.String("assumenda"),
                                    GainDb: sdk.Float64(3631.61),
                                    InputChannel: sdk.Int(924967),
                                    InputKey: sdk.String("aliquid"),
                                    InputTrack: sdk.Int(46007),
                                    OutputChannel: sdk.Int(738683),
                                },
                                shared.AudioMapping{
                                    AtomKey: sdk.String("consectetur"),
                                    GainDb: sdk.Float64(4490.83),
                                    InputChannel: sdk.Int(348519),
                                    InputKey: sdk.String("earum"),
                                    InputTrack: sdk.Int(814967),
                                    OutputChannel: sdk.Int(257233),
                                },
                            },
                            SampleRateHertz: sdk.Int(985492),
                        },
                        Key: sdk.String("suscipit"),
                        TextStream: &shared.TextStream{
                            Codec: sdk.String("reiciendis"),
                            DisplayName: sdk.String("quidem"),
                            LanguageCode: sdk.String("saepe"),
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: sdk.String("dolore"),
                                    InputKey: sdk.String("sunt"),
                                    InputTrack: sdk.Int(992012),
                                },
                                shared.TextMapping{
                                    AtomKey: sdk.String("adipisci"),
                                    InputKey: sdk.String("non"),
                                    InputTrack: sdk.Int(228263),
                                },
                                shared.TextMapping{
                                    AtomKey: sdk.String("beatae"),
                                    InputKey: sdk.String("dignissimos"),
                                    InputTrack: sdk.Int(950953),
                                },
                                shared.TextMapping{
                                    AtomKey: sdk.String("debitis"),
                                    InputKey: sdk.String("consectetur"),
                                    InputTrack: sdk.Int(358107),
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: sdk.Bool(false),
                                AqStrength: sdk.Float64(6897.68),
                                BFrameCount: sdk.Int(385237),
                                BPyramid: sdk.Bool(false),
                                BitrateBps: sdk.Int(58356),
                                CrfLevel: sdk.Int(916727),
                                EnableTwoPass: sdk.Bool(false),
                                EntropyCoder: sdk.String("libero"),
                                FrameRate: sdk.Float64(1138.16),
                                GopDuration: sdk.String("accusamus"),
                                GopFrameCount: sdk.Int(631126),
                                HeightPixels: sdk.Int(272437),
                                PixelFormat: sdk.String("aspernatur"),
                                Preset: sdk.String("voluptas"),
                                Profile: sdk.String("voluptas"),
                                RateControlMode: sdk.String("voluptas"),
                                Tune: sdk.String("minima"),
                                VbvFullnessBits: sdk.Int(748789),
                                VbvSizeBits: sdk.Int(680116),
                                WidthPixels: sdk.Int(237807),
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: sdk.Bool(false),
                                AqStrength: sdk.Float64(7955.35),
                                BFrameCount: sdk.Int(171853),
                                BPyramid: sdk.Bool(false),
                                BitrateBps: sdk.Int(503934),
                                CrfLevel: sdk.Int(449292),
                                EnableTwoPass: sdk.Bool(false),
                                FrameRate: sdk.Float64(2962.42),
                                GopDuration: sdk.String("aliquam"),
                                GopFrameCount: sdk.Int(885963),
                                HeightPixels: sdk.Int(839189),
                                PixelFormat: sdk.String("ullam"),
                                Preset: sdk.String("adipisci"),
                                Profile: sdk.String("cum"),
                                RateControlMode: sdk.String("blanditiis"),
                                Tune: sdk.String("quas"),
                                VbvFullnessBits: sdk.Int(942584),
                                VbvSizeBits: sdk.Int(201517),
                                WidthPixels: sdk.Int(633998),
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: sdk.Int(548519),
                                CrfLevel: sdk.Int(867290),
                                FrameRate: sdk.Float64(5196.43),
                                GopDuration: sdk.String("hic"),
                                GopFrameCount: sdk.Int(348783),
                                HeightPixels: sdk.Int(750765),
                                PixelFormat: sdk.String("sit"),
                                Profile: sdk.String("rerum"),
                                RateControlMode: sdk.String("sed"),
                                WidthPixels: sdk.Int(967966),
                            },
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: sdk.String("asperiores"),
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: sdk.Bool(false),
                                LowBoost: sdk.Bool(false),
                                Lufs: sdk.Float64(7079.18),
                            },
                            Color: &shared.Color{
                                Brightness: sdk.Float64(4518.22),
                                Contrast: sdk.Float64(7090.72),
                                Saturation: sdk.Float64(708.69),
                            },
                            Crop: &shared.Crop{
                                BottomPixels: sdk.Int(611749),
                                LeftPixels: sdk.Int(292794),
                                RightPixels: sdk.Int(671907),
                                TopPixels: sdk.Int(152354),
                            },
                            Deblock: &shared.Deblock{
                                Enabled: sdk.Bool(false),
                                Strength: sdk.Float64(4475.16),
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: sdk.Bool(false),
                                    Mode: sdk.String("commodi"),
                                    Parity: sdk.String("quidem"),
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: sdk.Bool(false),
                                    DisableSpatialInterlacing: sdk.Bool(false),
                                    Mode: sdk.String("explicabo"),
                                    Parity: sdk.String("voluptas"),
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: sdk.Float64(6041.18),
                                Tune: sdk.String("architecto"),
                            },
                            Pad: &shared.Pad{
                                BottomPixels: sdk.Int(382808),
                                LeftPixels: sdk.Int(960257),
                                RightPixels: sdk.Int(895386),
                                TopPixels: sdk.Int(72434),
                            },
                        },
                        URI: sdk.String("https://aggressive-mate.org"),
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: sdk.String("sed"),
                        MuxStreams: []string{
                            "eius",
                            "necessitatibus",
                            "ipsum",
                        },
                        Type: shared.ManifestTypeEnumHls.ToPointer(),
                    },
                    shared.Manifest{
                        FileName: sdk.String("occaecati"),
                        MuxStreams: []string{
                            "voluptatibus",
                            "tempora",
                            "tempora",
                        },
                        Type: shared.ManifestTypeEnumHls.ToPointer(),
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: sdk.String("ex"),
                        ElementaryStreams: []string{
                            "non",
                        },
                        FileName: sdk.String("officiis"),
                        Key: sdk.String("praesentium"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("facilis"),
                        },
                    },
                    shared.MuxStream{
                        Container: sdk.String("quaerat"),
                        ElementaryStreams: []string{
                            "ipsam",
                            "debitis",
                        },
                        FileName: sdk.String("rem"),
                        Key: sdk.String("sit"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("nobis"),
                        },
                    },
                    shared.MuxStream{
                        Container: sdk.String("error"),
                        ElementaryStreams: []string{
                            "minima",
                            "recusandae",
                        },
                        FileName: sdk.String("reiciendis"),
                        Key: sdk.String("nulla"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("magni"),
                        },
                    },
                    shared.MuxStream{
                        Container: sdk.String("aperiam"),
                        ElementaryStreams: []string{
                            "numquam",
                            "veniam",
                            "in",
                            "officiis",
                        },
                        FileName: sdk.String("beatae"),
                        Key: sdk.String("laudantium"),
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: sdk.Bool(false),
                            SegmentDuration: sdk.String("exercitationem"),
                        },
                    },
                },
                Output: &shared.Output{
                    URI: sdk.String("https://shady-glen.net"),
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("hic"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("expedita"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeOut.ToPointer(),
                                    StartTimeOffset: sdk.String("neque"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6771.15),
                                        Y: sdk.Float64(3416.98),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("officia"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6762.43),
                                        Y: sdk.Float64(5483.61),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("accusamus"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("tempora"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("fugit"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(2826.99),
                                        Y: sdk.Float64(8563.03),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("voluptatem"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6350.57),
                                        Y: sdk.Float64(7103.37),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("magnam"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("consequatur"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("ipsam"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(245.27),
                                        Y: sdk.Float64(5305.37),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("quas"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(9221.12),
                                        Y: sdk.Float64(3611.51),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(894.94),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(5027.1),
                                Y: sdk.Float64(4059.42),
                            },
                            URI: sdk.String("http://alarming-hermit.info"),
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("error"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("consequatur"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeTypeUnspecified.ToPointer(),
                                    StartTimeOffset: sdk.String("reiciendis"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(2097.5),
                                        Y: sdk.Float64(6908.94),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("dicta"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(994.16),
                                        Y: sdk.Float64(5771.4),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("labore"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("quidem"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("laborum"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(7241.48),
                                        Y: sdk.Float64(9488.61),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("laboriosam"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(27.03),
                                        Y: sdk.Float64(2270.84),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("deserunt"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("voluptate"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("reiciendis"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(5887.4),
                                        Y: sdk.Float64(8338.19),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("delectus"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(9147.91),
                                        Y: sdk.Float64(168.71),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("est"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("quidem"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeIn.ToPointer(),
                                    StartTimeOffset: sdk.String("facere"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(6850.92),
                                        Y: sdk.Float64(5098.07),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("mollitia"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(3339.65),
                                        Y: sdk.Float64(291),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(7908.4),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(9195.32),
                                Y: sdk.Float64(972.43),
                            },
                            URI: sdk.String("https://insubstantial-worth.name"),
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("quidem"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("maxime"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeTypeUnspecified.ToPointer(),
                                    StartTimeOffset: sdk.String("esse"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(2277.59),
                                        Y: sdk.Float64(8268.25),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("ea"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(5391.18),
                                        Y: sdk.Float64(6232.95),
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: sdk.String("officiis"),
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: sdk.String("officiis"),
                                    FadeType: shared.AnimationFadeFadeTypeEnumFadeOut.ToPointer(),
                                    StartTimeOffset: sdk.String("natus"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(3283.03),
                                        Y: sdk.Float64(1334.61),
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: sdk.String("ex"),
                                    Xy: &shared.NormalizedCoordinate{
                                        X: sdk.Float64(9805.81),
                                        Y: sdk.Float64(5446.47),
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: sdk.Float64(8717.86),
                            Resolution: &shared.NormalizedCoordinate{
                                X: sdk.Float64(6216.93),
                                Y: sdk.Float64(5027.21),
                            },
                            URI: sdk.String("http://valuable-mariachi.name"),
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: sdk.String("sunt"),
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(680697),
                        EndTimeOffset: sdk.String("repellendus"),
                        FilePrefix: sdk.String("labore"),
                        Format: sdk.String("reiciendis"),
                        Interval: sdk.String("doloremque"),
                        Quality: sdk.Int(919783),
                        RowCount: sdk.Int(116098),
                        SpriteHeightPixels: sdk.Int(36033),
                        SpriteWidthPixels: sdk.Int(106429),
                        StartTimeOffset: sdk.String("dolores"),
                        TotalCount: sdk.Int(316488),
                    },
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(389135),
                        EndTimeOffset: sdk.String("velit"),
                        FilePrefix: sdk.String("a"),
                        Format: sdk.String("molestias"),
                        Interval: sdk.String("magnam"),
                        Quality: sdk.Int(906355),
                        RowCount: sdk.Int(160467),
                        SpriteHeightPixels: sdk.Int(580107),
                        SpriteWidthPixels: sdk.Int(886305),
                        StartTimeOffset: sdk.String("perspiciatis"),
                        TotalCount: sdk.Int(446394),
                    },
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(238043),
                        EndTimeOffset: sdk.String("eveniet"),
                        FilePrefix: sdk.String("occaecati"),
                        Format: sdk.String("consequuntur"),
                        Interval: sdk.String("fugit"),
                        Quality: sdk.Int(661118),
                        RowCount: sdk.Int(335631),
                        SpriteHeightPixels: sdk.Int(440264),
                        SpriteWidthPixels: sdk.Int(625528),
                        StartTimeOffset: sdk.String("illo"),
                        TotalCount: sdk.Int(361306),
                    },
                    shared.SpriteSheet{
                        ColumnCount: sdk.Int(696463),
                        EndTimeOffset: sdk.String("eveniet"),
                        FilePrefix: sdk.String("non"),
                        Format: sdk.String("vero"),
                        Interval: sdk.String("doloremque"),
                        Quality: sdk.Int(434156),
                        RowCount: sdk.Int(59944),
                        SpriteHeightPixels: sdk.Int(517612),
                        SpriteWidthPixels: sdk.Int(61078),
                        StartTimeOffset: sdk.String("molestiae"),
                        TotalCount: sdk.Int(907733),
                    },
                },
            },
            Error: &shared.Status{
                Code: sdk.Int(184362),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "necessitatibus": "ratione",
                        "laborum": "distinctio",
                    },
                    map[string]interface{}{
                        "rem": "aliquam",
                        "ad": "repellat",
                        "alias": "corporis",
                    },
                    map[string]interface{}{
                        "nihil": "mollitia",
                        "voluptas": "alias",
                        "maiores": "reiciendis",
                    },
                },
                Message: sdk.String("dolores"),
            },
            InputURI: sdk.String("id"),
            Labels: map[string]string{
                "dolore": "dolorum",
                "nesciunt": "quae",
            },
            Mode: shared.JobModeEnumProcessingModeBatch.ToPointer(),
            Name: sdk.String("Calvin Kreiger"),
            OutputURI: sdk.String("culpa"),
            TemplateID: sdk.String("adipisci"),
            TTLAfterCompletionDays: sdk.Int(890653),
        },
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("provident"),
        Parent: "quis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("provident"),
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
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("animi"),
        Fields: sdk.String("nostrum"),
        Filter: sdk.String("mollitia"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("possimus"),
        OrderBy: sdk.String("animi"),
        PageSize: sdk.Int64(402767),
        PageToken: sdk.String("aliquid"),
        Parent: "accusantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("ullam"),
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
