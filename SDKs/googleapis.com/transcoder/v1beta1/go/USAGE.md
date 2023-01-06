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
            Parent: "quae",
        },
        QueryParams: operations.TranscoderProjectsLocationsJobTemplatesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "eaque",
            Alt: "proto",
            Callback: "ut",
            Fields: "velit",
            JobTemplateID: "facilis",
            Key: "dolore",
            OauthToken: "incidunt",
            PrettyPrint: true,
            QuotaUser: "aliquam",
            UploadType: "voluptatem",
            UploadProtocol: "et",
        },
        Request: &shared.JobTemplate{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: "sit",
                    },
                    shared.AdBreak{
                        StartTimeOffset: "ducimus",
                    },
                    shared.AdBreak{
                        StartTimeOffset: "dolorum",
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: "eveniet",
                        Inputs: []string{
                            "est",
                        },
                        Key: "deleniti",
                        StartTimeOffset: "maxime",
                    },
                    shared.EditAtom{
                        EndTimeOffset: "et",
                        Inputs: []string{
                            "sit",
                            "voluptatem",
                            "assumenda",
                        },
                        Key: "quae",
                        StartTimeOffset: "repudiandae",
                    },
                    shared.EditAtom{
                        EndTimeOffset: "nemo",
                        Inputs: []string{
                            "facere",
                            "est",
                            "voluptas",
                        },
                        Key: "temporibus",
                        StartTimeOffset: "est",
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 7892387258292766169,
                            ChannelCount: 4928825157438766623,
                            ChannelLayout: []string{
                                "minus",
                                "sapiente",
                            },
                            Codec: "minima",
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 4313756401076350220,
                                                    GainDb: 15.100000,
                                                    Key: "non",
                                                    Track: 6353423268616230319,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 3959002623939650165,
                                                    GainDb: 66.099998,
                                                    Key: "voluptatibus",
                                                    Track: 5740019852834968400,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 5448810721365016153,
                                                    GainDb: 72.199997,
                                                    Key: "asperiores",
                                                    Track: 9107460095602116729,
                                                },
                                            },
                                        },
                                    },
                                    Key: "optio",
                                },
                            },
                            SampleRateHertz: 5956688560010022686,
                        },
                        Key: "impedit",
                        TextStream: &shared.TextStream{
                            Codec: "voluptate",
                            LanguageCode: "ipsa",
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "et",
                                            Track: 5562609354344168685,
                                        },
                                        shared.TextInput{
                                            Key: "magnam",
                                            Track: 9192747703363731317,
                                        },
                                    },
                                    Key: "dolore",
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: false,
                            AqStrength: 20.200001,
                            BFrameCount: 1722220632356978098,
                            BPyramid: false,
                            BitrateBps: 4442786016472286075,
                            Codec: "ex",
                            CrfLevel: 9199761038741226452,
                            EnableTwoPass: true,
                            EntropyCoder: "fugit",
                            FrameRate: 46.099998,
                            GopDuration: "illo",
                            GopFrameCount: 3313769357544573020,
                            HeightPixels: 5160053904489746873,
                            PixelFormat: "omnis",
                            Preset: "aliquid",
                            Profile: "explicabo",
                            RateControlMode: "expedita",
                            Tune: "qui",
                            VbvFullnessBits: 3781182383728721210,
                            VbvSizeBits: 430879334147687438,
                            WidthPixels: 3386124376084607150,
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 1234076922096689798,
                            ChannelCount: 806179455366969511,
                            ChannelLayout: []string{
                                "tenetur",
                            },
                            Codec: "aut",
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 7805282159836544841,
                                                    GainDb: 89.099998,
                                                    Key: "molestiae",
                                                    Track: 572385247974334102,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 4914845864823683241,
                                                    GainDb: 13.100000,
                                                    Key: "consectetur",
                                                    Track: 4825215851222778878,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 3845500908243528378,
                                                    GainDb: 6.100000,
                                                    Key: "tenetur",
                                                    Track: 9038933547375485310,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 6019729602776422342,
                                                    GainDb: 77.099998,
                                                    Key: "dolores",
                                                    Track: 591491258049963274,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 7329992349694394953,
                                                    GainDb: 65.199997,
                                                    Key: "ut",
                                                    Track: 3610878386178929521,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 8654862888664855551,
                                                    GainDb: 84.099998,
                                                    Key: "ut",
                                                    Track: 4172736352731369844,
                                                },
                                            },
                                        },
                                    },
                                    Key: "sunt",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 6016978435916918073,
                                                    GainDb: 81.099998,
                                                    Key: "alias",
                                                    Track: 5492708654813237205,
                                                },
                                            },
                                        },
                                    },
                                    Key: "inventore",
                                },
                            },
                            SampleRateHertz: 9063254557910688044,
                        },
                        Key: "deserunt",
                        TextStream: &shared.TextStream{
                            Codec: "voluptate",
                            LanguageCode: "dignissimos",
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "non",
                                            Track: 2673143206932721844,
                                        },
                                        shared.TextInput{
                                            Key: "dolor",
                                            Track: 1958901036747797373,
                                        },
                                        shared.TextInput{
                                            Key: "et",
                                            Track: 8797264640394436763,
                                        },
                                    },
                                    Key: "a",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "cum",
                                            Track: 2429776691979963759,
                                        },
                                    },
                                    Key: "veritatis",
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: false,
                            AqStrength: 96.199997,
                            BFrameCount: 8892572688713881526,
                            BPyramid: false,
                            BitrateBps: 1374667840476457335,
                            Codec: "in",
                            CrfLevel: 418061747445956712,
                            EnableTwoPass: false,
                            EntropyCoder: "repellendus",
                            FrameRate: 63.200001,
                            GopDuration: "fugiat",
                            GopFrameCount: 8136830451770754479,
                            HeightPixels: 7898539401592013660,
                            PixelFormat: "mollitia",
                            Preset: "rem",
                            Profile: "autem",
                            RateControlMode: "dolores",
                            Tune: "repudiandae",
                            VbvFullnessBits: 7455454767062301808,
                            VbvSizeBits: 2084313200967611061,
                            WidthPixels: 2512776911906309957,
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: "quia",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: false,
                                LowBoost: true,
                                Lufs: 43.099998,
                            },
                            Color: &shared.Color{
                                Brightness: 18.100000,
                                Contrast: 30.100000,
                                Saturation: 86.099998,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 3988699699842894132,
                                LeftPixels: 160122400360030937,
                                RightPixels: 9007512225931333985,
                                TopPixels: 6577674744873327579,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 21.200001,
                            },
                            Denoise: &shared.Denoise{
                                Strength: 13.200000,
                                Tune: "molestias",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 6328326111464383711,
                                LeftPixels: 8583516643777276969,
                                RightPixels: 6660816827128006526,
                                TopPixels: 1824160055187410414,
                            },
                        },
                        URI: "et",
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: "eos",
                        MuxStreams: []string{
                            "ullam",
                        },
                        Type: "MANIFEST_TYPE_UNSPECIFIED",
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: "aut",
                        ElementaryStreams: []string{
                            "voluptatem",
                            "qui",
                            "molestiae",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: "unde",
                            },
                            Iv: "ut",
                            Key: "est",
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: "dolor",
                                Scheme: "quisquam",
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: "officia",
                            },
                        },
                        FileName: "sunt",
                        Key: "corrupti",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "modi",
                        },
                    },
                    shared.MuxStream{
                        Container: "vel",
                        ElementaryStreams: []string{
                            "tempora",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: "rerum",
                            },
                            Iv: "ab",
                            Key: "alias",
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: "inventore",
                                Scheme: "natus",
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: "repudiandae",
                            },
                        },
                        FileName: "eius",
                        Key: "cupiditate",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: true,
                            SegmentDuration: "et",
                        },
                    },
                },
                Output: &shared.Output{
                    URI: "officia",
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "officia",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "quia",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "officia",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 99.099998,
                                        Y: 9.100000,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "repellendus",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 83.199997,
                                        Y: 0.100000,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "et",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "porro",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "architecto",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 28.200001,
                                        Y: 25.100000,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "qui",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 23.200001,
                                        Y: 69.199997,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 96.199997,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 78.099998,
                                Y: 64.099998,
                            },
                            URI: "mollitia",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "aut",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "laboriosam",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "laudantium",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 98.199997,
                                        Y: 93.199997,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "odio",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 6.100000,
                                        Y: 55.099998,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "rerum",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "qui",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "tempore",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 31.200001,
                                        Y: 94.199997,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "fugit",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 6.100000,
                                        Y: 52.099998,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 37.200001,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 22.200001,
                                Y: 27.100000,
                            },
                            URI: "fuga",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "dolorem",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "earum",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "doloremque",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 34.200001,
                                        Y: 40.200001,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "illum",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 26.100000,
                                        Y: 92.199997,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "labore",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "assumenda",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "rem",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 17.200001,
                                        Y: 58.099998,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "tempore",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 63.200001,
                                        Y: 86.099998,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "ut",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "modi",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "labore",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 6.100000,
                                        Y: 85.199997,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "aut",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 36.200001,
                                        Y: 81.099998,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 82.099998,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 7.200000,
                                Y: 28.200001,
                            },
                            URI: "beatae",
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: "et",
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: 190996656928083572,
                        EndTimeOffset: "harum",
                        FilePrefix: "consequuntur",
                        Format: "rem",
                        Interval: "non",
                        Quality: 5317373245973704888,
                        RowCount: 416626402465924371,
                        SpriteHeightPixels: 8692255531287115509,
                        SpriteWidthPixels: 6411686759597149106,
                        StartTimeOffset: "sit",
                        TotalCount: 6053404769933823593,
                    },
                },
            },
            Name: "explicabo",
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