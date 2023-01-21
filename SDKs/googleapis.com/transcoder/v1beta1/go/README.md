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
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 6745438398739480977,
                                                    GainDb: 78.199997,
                                                    Key: "aut",
                                                    Track: 3317123977833389635,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 5001958211167890979,
                                                    GainDb: 14.200000,
                                                    Key: "aut",
                                                    Track: 6972732843819909978,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 5558237345453186302,
                                                    GainDb: 19.200001,
                                                    Key: "consectetur",
                                                    Track: 8683452355129068124,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 7699391924090763411,
                                                    GainDb: 50.099998,
                                                    Key: "ipsum",
                                                    Track: 8902041070398994519,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 7338728586234333996,
                                                    GainDb: 77.099998,
                                                    Key: "exercitationem",
                                                    Track: 4756106358532488297,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 5837486892148644279,
                                                    GainDb: 7.200000,
                                                    Key: "incidunt",
                                                    Track: 7242748068272024738,
                                                },
                                            },
                                        },
                                    },
                                    Key: "beatae",
                                },
                            },
                            SampleRateHertz: 4112921325496946042,
                        },
                        Key: "in",
                        TextStream: &shared.TextStream{
                            Codec: "et",
                            LanguageCode: "omnis",
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "dolores",
                                            Track: 3983722386484812742,
                                        },
                                    },
                                    Key: "vel",
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: true,
                            AqStrength: 89.099998,
                            BFrameCount: 8097022081922209513,
                            BPyramid: false,
                            BitrateBps: 6056649900269286653,
                            Codec: "qui",
                            CrfLevel: 4308690457412179793,
                            EnableTwoPass: false,
                            EntropyCoder: "autem",
                            FrameRate: 13.100000,
                            GopDuration: "itaque",
                            GopFrameCount: 2006924026344156168,
                            HeightPixels: 8218430188258725598,
                            PixelFormat: "ullam",
                            Preset: "et",
                            Profile: "accusantium",
                            RateControlMode: "esse",
                            Tune: "architecto",
                            VbvFullnessBits: 9021104375654741729,
                            VbvSizeBits: 3604381780091280195,
                            WidthPixels: 2066195468801476818,
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: "sunt",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: false,
                                LowBoost: false,
                                Lufs: 9.200000,
                            },
                            Color: &shared.Color{
                                Brightness: 10.200000,
                                Contrast: 19.100000,
                                Saturation: 74.099998,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 5364953311572054685,
                                LeftPixels: 7945398411639602224,
                                RightPixels: 1925401661646756611,
                                TopPixels: 150340687756601720,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 59.200001,
                            },
                            Denoise: &shared.Denoise{
                                Strength: 64.099998,
                                Tune: "a",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 1836598054518427835,
                                LeftPixels: 7540276489530073149,
                                RightPixels: 7638413271565042464,
                                TopPixels: 3242614188194728891,
                            },
                        },
                        URI: "laudantium",
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: "ipsa",
                        MuxStreams: []string{
                            "doloremque",
                            "perferendis",
                        },
                        Type: "MANIFEST_TYPE_UNSPECIFIED",
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: "quisquam",
                        ElementaryStreams: []string{
                            "ea",
                            "maxime",
                            "eum",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: "perferendis",
                            },
                            Iv: "et",
                            Key: "rerum",
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: "reiciendis",
                                Scheme: "quis",
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: "cumque",
                            },
                        },
                        FileName: "minima",
                        Key: "necessitatibus",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: true,
                            SegmentDuration: "quis",
                        },
                    },
                },
                Output: &shared.Output{
                    URI: "eum",
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "impedit",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "ad",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "vel",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 87.099998,
                                        Y: 50.200001,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "deserunt",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 59.099998,
                                        Y: 68.099998,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "quis",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "vel",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "placeat",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 13.200000,
                                        Y: 96.099998,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "porro",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 72.099998,
                                        Y: 96.099998,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 58.200001,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 9.200000,
                                Y: 92.199997,
                            },
                            URI: "minus",
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: "soluta",
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: 7686248226181626741,
                        EndTimeOffset: "excepturi",
                        FilePrefix: "mollitia",
                        Format: "inventore",
                        Interval: "delectus",
                        Quality: 4283016341703943597,
                        RowCount: 8997481548049309375,
                        SpriteHeightPixels: 8271791276134687140,
                        SpriteWidthPixels: 2606774689767964810,
                        StartTimeOffset: "aliquam",
                        TotalCount: 5418224491453948590,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 7899896093082851758,
                        EndTimeOffset: "sed",
                        FilePrefix: "et",
                        Format: "consequuntur",
                        Interval: "non",
                        Quality: 5366472482114725502,
                        RowCount: 432317278959866118,
                        SpriteHeightPixels: 5001980330882093199,
                        SpriteWidthPixels: 40355290058559125,
                        StartTimeOffset: "quasi",
                        TotalCount: 5534365872829545664,
                    },
                },
            },
            Name: "enim",
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
