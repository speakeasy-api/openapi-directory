# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Parent: "sit",
        },
        QueryParams: operations.TranscoderProjectsLocationsJobTemplatesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            JobTemplateID: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.JobTemplate{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: "voluptatum",
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: "ut",
                        Inputs: []string{
                            "et",
                            "voluptate",
                            "iste",
                        },
                        Key: "vitae",
                        StartTimeOffset: "totam",
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 1929546706668609706,
                            ChannelCount: 6392442863481646880,
                            ChannelLayout: []string{
                                "odio",
                                "dolore",
                            },
                            Codec: "id",
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: "accusantium",
                                    GainDb: 45.099998,
                                    InputChannel: 2897681629866238117,
                                    InputKey: "est",
                                    InputTrack: 5974317550424871033,
                                    OutputChannel: 3317123977833389635,
                                },
                            },
                            SampleRateHertz: 5001958211167890979,
                        },
                        Key: "voluptas",
                        TextStream: &shared.TextStream{
                            Codec: "omnis",
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: "illo",
                                    InputKey: "sed",
                                    InputTrack: 7845762441295307478,
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: true,
                                AqStrength: 68.099998,
                                BFrameCount: 4345851588384648695,
                                BPyramid: false,
                                BitrateBps: 388440063886460141,
                                CrfLevel: 7561811714888168464,
                                EnableTwoPass: false,
                                EntropyCoder: "eveniet",
                                FrameRate: 19.100000,
                                GopDuration: "inventore",
                                GopFrameCount: 7847956203786849690,
                                HeightPixels: 406703151708498928,
                                PixelFormat: "aut",
                                Preset: "reprehenderit",
                                Profile: "tempore",
                                RateControlMode: "maiores",
                                Tune: "incidunt",
                                VbvFullnessBits: 7242748068272024738,
                                VbvSizeBits: 7719717197379695442,
                                WidthPixels: 4112921325496946042,
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: true,
                                AqStrength: 69.199997,
                                BFrameCount: 4564823113789767141,
                                BPyramid: true,
                                BitrateBps: 7014402135919778893,
                                CrfLevel: 3983722386484812742,
                                EnableTwoPass: true,
                                FrameRate: 93.199997,
                                GopDuration: "voluptas",
                                GopFrameCount: 8097022081922209513,
                                HeightPixels: 7481608503761597087,
                                PixelFormat: "qui",
                                Preset: "qui",
                                Profile: "unde",
                                RateControlMode: "in",
                                Tune: "autem",
                                VbvFullnessBits: 8086159467323165929,
                                VbvSizeBits: 35604086129376003,
                                WidthPixels: 8559453321117178323,
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: 2006924026344156168,
                                CrfLevel: 8218430188258725598,
                                FrameRate: 76.099998,
                                GopDuration: "accusantium",
                                GopFrameCount: 3462733497206508461,
                                HeightPixels: 5902760509050140210,
                                PixelFormat: "quam",
                                Profile: "velit",
                                RateControlMode: "cumque",
                                WidthPixels: 3331863358128628835,
                            },
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: "voluptates",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: false,
                                LowBoost: false,
                                Lufs: 41.099998,
                            },
                            Color: &shared.Color{
                                Brightness: 59.200001,
                                Contrast: 6.100000,
                                Saturation: 82.099998,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 7945398411639602224,
                                LeftPixels: 1925401661646756611,
                                RightPixels: 150340687756601720,
                                TopPixels: 4989862523986425397,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: true,
                                Strength: 19.100000,
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: true,
                                    Mode: "a",
                                    Parity: "soluta",
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: true,
                                    DisableSpatialInterlacing: true,
                                    Mode: "consequuntur",
                                    Parity: "laudantium",
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: 73.199997,
                                Tune: "expedita",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 8204648627352676445,
                                LeftPixels: 4234137922270959652,
                                RightPixels: 8497925768463229012,
                                TopPixels: 5311927246208705713,
                            },
                        },
                        URI: "quisquam",
                    },
                    shared.Input{
                        Key: "explicabo",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: true,
                                LowBoost: true,
                                Lufs: 15.200000,
                            },
                            Color: &shared.Color{
                                Brightness: 66.099998,
                                Contrast: 94.199997,
                                Saturation: 97.199997,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 2333048574390956331,
                                LeftPixels: 9205243623417456715,
                                RightPixels: 190417550815006435,
                                TopPixels: 7478610059307147871,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 27.200001,
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: true,
                                    Mode: "expedita",
                                    Parity: "vel",
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: true,
                                    DisableSpatialInterlacing: false,
                                    Mode: "nihil",
                                    Parity: "tempora",
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: 42.200001,
                                Tune: "sunt",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 157519078836327761,
                                LeftPixels: 2867593906384393455,
                                RightPixels: 7506934391669544280,
                                TopPixels: 952897656927189675,
                            },
                        },
                        URI: "vel",
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: "qui",
                        MuxStreams: []string{
                            "quis",
                            "adipisci",
                        },
                        Type: "DASH",
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: "et",
                        ElementaryStreams: []string{
                            "numquam",
                            "laborum",
                            "rerum",
                        },
                        FileName: "ut",
                        Key: "laborum",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "quis",
                        },
                    },
                    shared.MuxStream{
                        Container: "minus",
                        ElementaryStreams: []string{
                            "aperiam",
                        },
                        FileName: "consequuntur",
                        Key: "excepturi",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: true,
                            SegmentDuration: "inventore",
                        },
                    },
                    shared.MuxStream{
                        Container: "delectus",
                        ElementaryStreams: []string{
                            "animi",
                        },
                        FileName: "animi",
                        Key: "ut",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "fuga",
                        },
                    },
                },
                Output: &shared.Output{
                    URI: "sed",
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "consequuntur",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "non",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "provident",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 99.099998,
                                        Y: 22.100000,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "enim",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 85.099998,
                                        Y: 84.199997,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "neque",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "consequuntur",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "et",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 28.100000,
                                        Y: 93.099998,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "quia",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 39.200001,
                                        Y: 30.200001,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "ut",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "necessitatibus",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "possimus",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 62.200001,
                                        Y: 90.199997,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "sunt",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 59.099998,
                                        Y: 88.099998,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 10.200000,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 54.200001,
                                Y: 63.099998,
                            },
                            URI: "dolores",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "impedit",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "non",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "ut",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 63.099998,
                                        Y: 23.100000,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "ipsam",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 78.199997,
                                        Y: 46.099998,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "delectus",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "rerum",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "repellat",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 26.200001,
                                        Y: 9.200000,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "voluptas",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 64.199997,
                                        Y: 32.099998,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 30.200001,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 3.100000,
                                Y: 73.199997,
                            },
                            URI: "quae",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "recusandae",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "qui",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "et",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 7.100000,
                                        Y: 43.200001,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "et",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 90.099998,
                                        Y: 16.200001,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "nihil",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "adipisci",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "illum",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 32.099998,
                                        Y: 40.099998,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "quidem",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 49.200001,
                                        Y: 40.200001,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 81.099998,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 2.200000,
                                Y: 65.199997,
                            },
                            URI: "totam",
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: "aut",
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: 7167106058699817943,
                        EndTimeOffset: "necessitatibus",
                        FilePrefix: "et",
                        Format: "culpa",
                        Interval: "repellendus",
                        Quality: 4761677689824345557,
                        RowCount: 5168005730101237705,
                        SpriteHeightPixels: 2118949171484888039,
                        SpriteWidthPixels: 4628132784885150210,
                        StartTimeOffset: "molestias",
                        TotalCount: 4841391702283203193,
                    },
                },
            },
            Labels: map[string]string{
                "et": "saepe",
                "commodi": "in",
                "quibusdam": "asperiores",
            },
            Name: "quo",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `TranscoderProjectsLocationsJobTemplatesCreate` - Creates a job template in the specified region.
* `TranscoderProjectsLocationsJobTemplatesDelete` - Deletes a job template.
* `TranscoderProjectsLocationsJobTemplatesGet` - Returns the job template data.
* `TranscoderProjectsLocationsJobTemplatesList` - Lists job templates in the specified region.
* `TranscoderProjectsLocationsJobsCreate` - Creates a job in the specified region.
* `TranscoderProjectsLocationsJobsList` - Lists jobs in the specified region.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
