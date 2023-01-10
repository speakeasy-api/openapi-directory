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
            Parent: "ullam",
        },
        QueryParams: operations.TranscoderProjectsLocationsJobTemplatesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "velit",
            Alt: "json",
            Callback: "molestias",
            Fields: "qui",
            JobTemplateID: "aspernatur",
            Key: "omnis",
            OauthToken: "maiores",
            PrettyPrint: true,
            QuotaUser: "nesciunt",
            UploadType: "expedita",
            UploadProtocol: "ullam",
        },
        Request: &shared.JobTemplate{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: "ea",
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: "minima",
                        Inputs: []string{
                            "delectus",
                            "rerum",
                            "omnis",
                        },
                        Key: "rem",
                        StartTimeOffset: "sit",
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 6350039708924067473,
                            ChannelCount: 4051393141315440633,
                            ChannelLayout: []string{
                                "accusantium",
                            },
                            Codec: "quas",
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 1376326750985028009,
                                                    GainDb: 86.199997,
                                                    Key: "rem",
                                                    Track: 6102251339450373069,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 3944353595780250231,
                                                    GainDb: 15.100000,
                                                    Key: "rerum",
                                                    Track: 6928338362437308049,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 6540482805180713497,
                                                    GainDb: 4.200000,
                                                    Key: "qui",
                                                    Track: 8242601221335250988,
                                                },
                                            },
                                        },
                                    },
                                    Key: "placeat",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 1922709901602613631,
                                                    GainDb: 87.099998,
                                                    Key: "veritatis",
                                                    Track: 74554660649675052,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 487526293715823758,
                                                    GainDb: 98.199997,
                                                    Key: "provident",
                                                    Track: 8657305258086393519,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 3129648207412348032,
                                                    GainDb: 76.199997,
                                                    Key: "labore",
                                                    Track: 8936146248818556464,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 4817296615822815455,
                                                    GainDb: 47.099998,
                                                    Key: "et",
                                                    Track: 3625486595897518579,
                                                },
                                            },
                                        },
                                    },
                                    Key: "ut",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 8116804790555981796,
                                                    GainDb: 23.100000,
                                                    Key: "possimus",
                                                    Track: 6230486386640642876,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 6709676926695750855,
                                                    GainDb: 63.099998,
                                                    Key: "et",
                                                    Track: 2261433343424637296,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 1217252554085133394,
                                                    GainDb: 4.200000,
                                                    Key: "ab",
                                                    Track: 5572686993895269155,
                                                },
                                            },
                                        },
                                    },
                                    Key: "eveniet",
                                },
                            },
                            SampleRateHertz: 3486599465452312742,
                        },
                        Key: "provident",
                        TextStream: &shared.TextStream{
                            Codec: "ad",
                            LanguageCode: "est",
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "possimus",
                                            Track: 7813099374080605666,
                                        },
                                    },
                                    Key: "modi",
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: false,
                            AqStrength: 36.200001,
                            BFrameCount: 3552832969042027274,
                            BPyramid: true,
                            BitrateBps: 6988938174290423489,
                            Codec: "ipsum",
                            CrfLevel: 6003666644293291482,
                            EnableTwoPass: false,
                            EntropyCoder: "deserunt",
                            FrameRate: 29.200001,
                            GopDuration: "quam",
                            GopFrameCount: 1306308811657142455,
                            HeightPixels: 6999948192361225342,
                            PixelFormat: "exercitationem",
                            Preset: "veritatis",
                            Profile: "voluptas",
                            RateControlMode: "nam",
                            Tune: "harum",
                            VbvFullnessBits: 5903249016414333606,
                            VbvSizeBits: 6256582786363387564,
                            WidthPixels: 7220723753700595473,
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: "similique",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: true,
                                LowBoost: true,
                                Lufs: 67.099998,
                            },
                            Color: &shared.Color{
                                Brightness: 18.200001,
                                Contrast: 3.100000,
                                Saturation: 24.100000,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 8576557014942987835,
                                LeftPixels: 973782000656831007,
                                RightPixels: 3454808500927843241,
                                TopPixels: 8302423607024781249,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: true,
                                Strength: 22.200001,
                            },
                            Denoise: &shared.Denoise{
                                Strength: 38.099998,
                                Tune: "illo",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 7984675813263175286,
                                LeftPixels: 8529945391443593075,
                                RightPixels: 109151240797478687,
                                TopPixels: 3712680190158445329,
                            },
                        },
                        URI: "cum",
                    },
                    shared.Input{
                        Key: "sint",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: true,
                                LowBoost: true,
                                Lufs: 46.200001,
                            },
                            Color: &shared.Color{
                                Brightness: 89.099998,
                                Contrast: 37.099998,
                                Saturation: 0.200000,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 3768901697218557077,
                                LeftPixels: 7359217717534838341,
                                RightPixels: 155801352526534914,
                                TopPixels: 2960045832607684795,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 99.199997,
                            },
                            Denoise: &shared.Denoise{
                                Strength: 67.199997,
                                Tune: "ut",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 6703711462777889321,
                                LeftPixels: 9137815154098593485,
                                RightPixels: 377953119455080341,
                                TopPixels: 8727478095982560709,
                            },
                        },
                        URI: "sunt",
                    },
                    shared.Input{
                        Key: "maxime",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: true,
                                LowBoost: false,
                                Lufs: 45.099998,
                            },
                            Color: &shared.Color{
                                Brightness: 63.200001,
                                Contrast: 19.200001,
                                Saturation: 72.199997,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 5562343755050166408,
                                LeftPixels: 883998647791241693,
                                RightPixels: 5264119048226844534,
                                TopPixels: 3092048349002330209,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 1.100000,
                            },
                            Denoise: &shared.Denoise{
                                Strength: 43.099998,
                                Tune: "consequuntur",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 2766321838402123319,
                                LeftPixels: 587381619535936924,
                                RightPixels: 6860200334812443388,
                                TopPixels: 622500796240352508,
                            },
                        },
                        URI: "id",
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: "tenetur",
                        MuxStreams: []string{
                            "harum",
                        },
                        Type: "HLS",
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: "voluptas",
                        ElementaryStreams: []string{
                            "ut",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: "soluta",
                            },
                            Iv: "minus",
                            Key: "facere",
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: "possimus",
                                Scheme: "est",
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: "ex",
                            },
                        },
                        FileName: "ducimus",
                        Key: "ipsa",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "repellat",
                        },
                    },
                    shared.MuxStream{
                        Container: "omnis",
                        ElementaryStreams: []string{
                            "aliquam",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: "velit",
                            },
                            Iv: "sit",
                            Key: "mollitia",
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: "suscipit",
                                Scheme: "nesciunt",
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: "accusantium",
                            },
                        },
                        FileName: "laboriosam",
                        Key: "numquam",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: true,
                            SegmentDuration: "a",
                        },
                    },
                    shared.MuxStream{
                        Container: "adipisci",
                        ElementaryStreams: []string{
                            "voluptatibus",
                            "molestiae",
                            "voluptas",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: "est",
                            },
                            Iv: "id",
                            Key: "blanditiis",
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: "quasi",
                                Scheme: "inventore",
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: "vel",
                            },
                        },
                        FileName: "velit",
                        Key: "nam",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: true,
                            SegmentDuration: "ut",
                        },
                    },
                },
                Output: &shared.Output{
                    URI: "vel",
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "eos",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "eaque",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "non",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 72.199997,
                                        Y: 6.100000,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "quis",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 12.100000,
                                        Y: 33.200001,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "veniam",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "ex",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "qui",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 11.200000,
                                        Y: 65.099998,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "soluta",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 49.099998,
                                        Y: 40.200001,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "saepe",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "molestiae",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "excepturi",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 93.199997,
                                        Y: 41.099998,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "aperiam",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 84.199997,
                                        Y: 4.100000,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 54.099998,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 41.099998,
                                Y: 23.100000,
                            },
                            URI: "eum",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "sit",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "quam",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "minima",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 18.100000,
                                        Y: 75.199997,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "fuga",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 85.099998,
                                        Y: 59.200001,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 76.199997,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 31.100000,
                                Y: 65.099998,
                            },
                            URI: "dignissimos",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "quia",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "similique",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "enim",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 48.099998,
                                        Y: 4.200000,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "vitae",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 73.099998,
                                        Y: 78.099998,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "quis",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "laboriosam",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "necessitatibus",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 60.099998,
                                        Y: 4.100000,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "est",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 49.200001,
                                        Y: 97.199997,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "et",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "beatae",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "repellendus",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 78.099998,
                                        Y: 38.200001,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "cum",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 78.199997,
                                        Y: 13.200000,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 23.200001,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 60.099998,
                                Y: 42.200001,
                            },
                            URI: "autem",
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: "ullam",
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: 7297401028429070084,
                        EndTimeOffset: "aliquam",
                        FilePrefix: "incidunt",
                        Format: "eius",
                        Interval: "necessitatibus",
                        Quality: 2813982269412953717,
                        RowCount: 5907139200198309635,
                        SpriteHeightPixels: 1128065142660130110,
                        SpriteWidthPixels: 3159808665407991593,
                        StartTimeOffset: "aspernatur",
                        TotalCount: 5538937312954048315,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 7619768037518370499,
                        EndTimeOffset: "voluptatum",
                        FilePrefix: "incidunt",
                        Format: "reiciendis",
                        Interval: "sunt",
                        Quality: 6611153454957468911,
                        RowCount: 3615630221832926370,
                        SpriteHeightPixels: 7990056624834032773,
                        SpriteWidthPixels: 7947771478425395278,
                        StartTimeOffset: "quidem",
                        TotalCount: 2128713743558099706,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 4172087353849411897,
                        EndTimeOffset: "labore",
                        FilePrefix: "tempore",
                        Format: "voluptatem",
                        Interval: "maxime",
                        Quality: 4848766033023243669,
                        RowCount: 3140473087070212843,
                        SpriteHeightPixels: 8152867942740462264,
                        SpriteWidthPixels: 8775440109631976025,
                        StartTimeOffset: "veritatis",
                        TotalCount: 5290459659939144155,
                    },
                },
            },
            Name: "quod",
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
