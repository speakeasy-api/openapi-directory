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
                            DisplayName: "molestiae",
                            LanguageCode: "quod",
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: "esse",
                                    GainDb: 5204.78,
                                    InputChannel: 780529,
                                    InputKey: "dolorum",
                                    InputTrack: 118274,
                                    OutputChannel: 720633,
                                },
                                shared.AudioMapping{
                                    AtomKey: "officia",
                                    GainDb: 5820.2,
                                    InputChannel: 143353,
                                    InputKey: "deleniti",
                                    InputTrack: 944669,
                                    OutputChannel: 758616,
                                },
                                shared.AudioMapping{
                                    AtomKey: "totam",
                                    GainDb: 1059.07,
                                    InputChannel: 414662,
                                    InputKey: "molestiae",
                                    InputTrack: 264555,
                                    OutputChannel: 186332,
                                },
                                shared.AudioMapping{
                                    AtomKey: "impedit",
                                    GainDb: 7369.18,
                                    InputChannel: 456150,
                                    InputKey: "ipsum",
                                    InputTrack: 568434,
                                    OutputChannel: 135218,
                                },
                            },
                            SampleRateHertz: 18789,
                        },
                        Key: "ad",
                        TextStream: &shared.TextStream{
                            Codec: "natus",
                            DisplayName: "sed",
                            LanguageCode: "iste",
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: "natus",
                                    InputKey: "laboriosam",
                                    InputTrack: 943749,
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: false,
                                AqStrength: 9025.99,
                                BFrameCount: 681820,
                                BPyramid: false,
                                BitrateBps: 449950,
                                CrfLevel: 359508,
                                EnableTwoPass: false,
                                EntropyCoder: "iste",
                                FrameRate: 4370.32,
                                GopDuration: "saepe",
                                GopFrameCount: 697631,
                                HeightPixels: 99280,
                                PixelFormat: "ipsa",
                                Preset: "reiciendis",
                                Profile: "est",
                                RateControlMode: "mollitia",
                                Tune: "laborum",
                                VbvFullnessBits: 170909,
                                VbvSizeBits: 210382,
                                WidthPixels: 358152,
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: false,
                                AqStrength: 1289.26,
                                BFrameCount: 750686,
                                BPyramid: false,
                                BitrateBps: 315428,
                                CrfLevel: 607831,
                                EnableTwoPass: false,
                                FrameRate: 3637.11,
                                GopDuration: "minima",
                                GopFrameCount: 570197,
                                HeightPixels: 38425,
                                PixelFormat: "iure",
                                Preset: "culpa",
                                Profile: "doloribus",
                                RateControlMode: "sapiente",
                                Tune: "architecto",
                                VbvFullnessBits: 652790,
                                VbvSizeBits: 208876,
                                WidthPixels: 635059,
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: 161309,
                                CrfLevel: 995300,
                                FrameRate: 6531.08,
                                GopDuration: "occaecati",
                                GopFrameCount: 253291,
                                HeightPixels: 414369,
                                PixelFormat: "quam",
                                Profile: "molestiae",
                                RateControlMode: "velit",
                                WidthPixels: 623510,
                            },
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: "quis",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: false,
                                LowBoost: false,
                                Lufs: 1103.75,
                            },
                            Color: &shared.Color{
                                Brightness: 6747.52,
                                Contrast: 6563.3,
                                Saturation: 3172.02,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 138183,
                                LeftPixels: 778346,
                                RightPixels: 196582,
                                TopPixels: 949572,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 3687.25,
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: false,
                                    Mode: "id",
                                    Parity: "possimus",
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: false,
                                    DisableSpatialInterlacing: false,
                                    Mode: "aut",
                                    Parity: "quasi",
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: 6228.46,
                                Tune: "temporibus",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 673660,
                                LeftPixels: 96098,
                                RightPixels: 971945,
                                TopPixels: 976460,
                            },
                        },
                        URI: "https://klutzy-level.org",
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: "omnis",
                        MuxStreams: []string{
                            "cum",
                            "perferendis",
                        },
                        Type: "MANIFEST_TYPE_UNSPECIFIED",
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: "ut",
                        ElementaryStreams: []string{
                            "dicta",
                            "corporis",
                            "dolore",
                            "iusto",
                        },
                        FileName: "dicta",
                        Key: "harum",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "enim",
                        },
                    },
                    shared.MuxStream{
                        Container: "accusamus",
                        ElementaryStreams: []string{
                            "repudiandae",
                            "quae",
                        },
                        FileName: "ipsum",
                        Key: "quidem",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "molestias",
                        },
                    },
                },
                Output: &shared.Output{
                    URI: "https://treasured-dirt.name",
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "quasi",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "repudiandae",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "veritatis",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 9292.97,
                                        Y: 2777.18,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "enim",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 93.56,
                                        Y: 6674.11,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "quibusdam",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "explicabo",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "distinctio",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 8413.86,
                                        Y: 2894.06,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "modi",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 1831.91,
                                        Y: 3978.21,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "cupiditate",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "quos",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "magni",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 8289.4,
                                        Y: 3698.08,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "alias",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 1464.41,
                                        Y: 6778.17,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "excepturi",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "tempora",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "tempore",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2884.76,
                                        Y: 9621.89,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "eum",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2487.53,
                                        Y: 7561.07,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 5761.57,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 3960.98,
                                Y: 5920.42,
                            },
                            URI: "https://nonstop-pate.biz",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "a",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "dolorum",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "in",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 8464.09,
                                        Y: 9785.71,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "rerum",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 1162.02,
                                        Y: 2974.37,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "cumque",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "facere",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "aliquid",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 6754.39,
                                        Y: 8811.04,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "non",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 5812.73,
                                        Y: 3132.18,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "accusamus",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "delectus",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "provident",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 7252.55,
                                        Y: 6596.69,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "blanditiis",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 5332.06,
                                        Y: 9560.84,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "amet",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "deserunt",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "vel",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 6188.09,
                                        Y: 6063.93,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "molestiae",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 191.93,
                                        Y: 4701.32,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 3015.75,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 7160.75,
                                Y: 6601.74,
                            },
                            URI: "http://flawed-gherkin.name",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "eum",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "vero",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "architecto",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2982.82,
                                        Y: 923.73,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "excepturi",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 3540.47,
                                        Y: 5908.73,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "quos",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "sint",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "mollitia",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 9689.62,
                                        Y: 6521.03,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "ad",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 4314.18,
                                        Y: 2212.62,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "necessitatibus",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "odit",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "quasi",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 4358.65,
                                        Y: 9840.43,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "debitis",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2603.41,
                                        Y: 8061.94,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 5370.23,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 7038.89,
                                Y: 4479.26,
                            },
                            URI: "http://burly-trachoma.info",
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: "expedita",
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: 998848,
                        EndTimeOffset: "quibusdam",
                        FilePrefix: "sed",
                        Format: "saepe",
                        Interval: "pariatur",
                        Quality: 37559,
                        RowCount: 162493,
                        SpriteHeightPixels: 508315,
                        SpriteWidthPixels: 615560,
                        StartTimeOffset: "magni",
                        TotalCount: 123820,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 779051,
                        EndTimeOffset: "illum",
                        FilePrefix: "pariatur",
                        Format: "maxime",
                        Interval: "ea",
                        Quality: 569101,
                        RowCount: 139972,
                        SpriteHeightPixels: 407183,
                        SpriteWidthPixels: 33222,
                        StartTimeOffset: "ab",
                        TotalCount: 982575,
                    },
                },
            },
            Labels: map[string]string{
                "ipsam": "voluptate",
                "autem": "nam",
                "eaque": "pariatur",
            },
            Name: "nemo",
        },
        AccessToken: "voluptatibus",
        Alt: "json",
        Callback: "fugiat",
        Fields: "amet",
        JobTemplateID: "aut",
        Key: "cumque",
        OauthToken: "corporis",
        Parent: "hic",
        PrettyPrint: false,
        QuotaUser: "libero",
        UploadType: "nobis",
        UploadProtocol: "dolores",
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
