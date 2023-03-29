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
        Security: operations.TranscoderProjectsLocationsJobTemplatesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.TranscoderProjectsLocationsJobTemplatesCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.TranscoderProjectsLocationsJobTemplatesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            JobTemplateID: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.JobTemplate{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: "ullam",
                    },
                    shared.AdBreak{
                        StartTimeOffset: "saepe",
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: "sapiente",
                        Inputs: []string{
                            "eum",
                            "voluptatum",
                        },
                        Key: "autem",
                        StartTimeOffset: "vel",
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 479977,
                            ChannelCount: 568045,
                            ChannelLayout: []string{
                                "molestiae",
                                "quo",
                            },
                            Codec: "quasi",
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 20218,
                                                    GainDb: 3682.41,
                                                    Key: "fugiat",
                                                    Track: 957156,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 778157,
                                                    GainDb: 1403.5,
                                                    Key: "accusamus",
                                                    Track: 870088,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 978619,
                                                    GainDb: 4736.08,
                                                    Key: "quibusdam",
                                                    Track: 800911,
                                                },
                                            },
                                        },
                                    },
                                    Key: "praesentium",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 678880,
                                                    GainDb: 1182.74,
                                                    Key: "quisquam",
                                                    Track: 639921,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 582020,
                                                    GainDb: 1433.53,
                                                    Key: "sed",
                                                    Track: 944669,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 758616,
                                                    GainDb: 5218.48,
                                                    Key: "odit",
                                                    Track: 414662,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 473600,
                                                    GainDb: 2645.55,
                                                    Key: "amet",
                                                    Track: 774234,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 456150,
                                                    GainDb: 2165.5,
                                                    Key: "similique",
                                                    Track: 135218,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 18789,
                                                    GainDb: 3241.41,
                                                    Key: "et",
                                                    Track: 149675,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 612096,
                                                    GainDb: 2223.21,
                                                    Key: "et",
                                                    Track: 386489,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 902599,
                                                    GainDb: 6818.2,
                                                    Key: "qui",
                                                    Track: 359508,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 613064,
                                                    GainDb: 4370.32,
                                                    Key: "ut",
                                                    Track: 697631,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 99280,
                                                    GainDb: 602.25,
                                                    Key: "ut",
                                                    Track: 666767,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 653140,
                                                    GainDb: 6706.38,
                                                    Key: "ipsum",
                                                    Track: 210382,
                                                },
                                            },
                                        },
                                    },
                                    Key: "ea",
                                },
                            },
                            SampleRateHertz: 128926,
                        },
                        Key: "placeat",
                        TextStream: &shared.TextStream{
                            Codec: "ipsam",
                            LanguageCode: "est",
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "similique",
                                            Track: 38425,
                                        },
                                        shared.TextInput{
                                            Key: "odio",
                                            Track: 634274,
                                        },
                                    },
                                    Key: "doloribus",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "aut",
                                            Track: 652790,
                                        },
                                        shared.TextInput{
                                            Key: "non",
                                            Track: 635059,
                                        },
                                        shared.TextInput{
                                            Key: "neque",
                                            Track: 995300,
                                        },
                                        shared.TextInput{
                                            Key: "et",
                                            Track: 581850,
                                        },
                                    },
                                    Key: "aliquam",
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: false,
                            AqStrength: 4143.69,
                            BFrameCount: 466311,
                            BPyramid: false,
                            BitrateBps: 474697,
                            Codec: "et",
                            CrfLevel: 623510,
                            EnableTwoPass: false,
                            EntropyCoder: "nesciunt",
                            FrameRate: 3380.07,
                            GopDuration: "aut",
                            GopFrameCount: 674752,
                            HeightPixels: 656330,
                            PixelFormat: "ipsam",
                            Preset: "eos",
                            Profile: "omnis",
                            RateControlMode: "adipisci",
                            Tune: "hic",
                            VbvFullnessBits: 368725,
                            VbvSizeBits: 662527,
                            WidthPixels: 820994,
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 13571,
                            ChannelCount: 97101,
                            ChannelLayout: []string{
                                "quo",
                                "tempore",
                                "explicabo",
                            },
                            Codec: "aut",
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 509624,
                                                    GainDb: 9767.62,
                                                    Key: "illo",
                                                    Track: 604846,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 451159,
                                                    GainDb: 7392.64,
                                                    Key: "sit",
                                                    Track: 39187,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 282807,
                                                    GainDb: 9795.87,
                                                    Key: "sed",
                                                    Track: 359444,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 296140,
                                                    GainDb: 4808.94,
                                                    Key: "sed",
                                                    Track: 688661,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 880476,
                                                    GainDb: 4142.63,
                                                    Key: "sint",
                                                    Track: 64147,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 216822,
                                                    GainDb: 6924.72,
                                                    Key: "error",
                                                    Track: 566602,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 265389,
                                                    GainDb: 5089.69,
                                                    Key: "cupiditate",
                                                    Track: 916723,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 93940,
                                                    GainDb: 9211.58,
                                                    Key: "in",
                                                    Track: 83112,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 929297,
                                                    GainDb: 2777.18,
                                                    Key: "voluptatem",
                                                    Track: 9356,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 667411,
                                                    GainDb: 8423.42,
                                                    Key: "magni",
                                                    Track: 647174,
                                                },
                                            },
                                        },
                                    },
                                    Key: "porro",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 264730,
                                                    GainDb: 1831.91,
                                                    Key: "in",
                                                    Track: 586513,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 552822,
                                                    GainDb: 201.07,
                                                    Key: "dolorem",
                                                    Track: 828940,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 4695,
                                                    GainDb: 1464.41,
                                                    Key: "cum",
                                                    Track: 569618,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 270008,
                                                    GainDb: 7037.37,
                                                    Key: "id",
                                                    Track: 288476,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 433288,
                                                    GainDb: 2487.53,
                                                    Key: "possimus",
                                                    Track: 576157,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 396098,
                                                    GainDb: 5920.42,
                                                    Key: "eveniet",
                                                    Track: 572252,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 638921,
                                                    GainDb: 2230.81,
                                                    Key: "necessitatibus",
                                                    Track: 952749,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 680056,
                                                    GainDb: 4471.25,
                                                    Key: "ducimus",
                                                    Track: 846409,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 699479,
                                                    GainDb: 1162.02,
                                                    Key: "ullam",
                                                    Track: 767024,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 813798,
                                                    GainDb: 4118.2,
                                                    Key: "qui",
                                                    Track: 675439,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 881104,
                                                    GainDb: 2497.96,
                                                    Key: "culpa",
                                                    Track: 313218,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 881736,
                                                    GainDb: 9654.17,
                                                    Key: "eligendi",
                                                    Track: 588465,
                                                },
                                            },
                                        },
                                    },
                                    Key: "est",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 533206,
                                                    GainDb: 9560.84,
                                                    Key: "incidunt",
                                                    Track: 643990,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 394869,
                                                    GainDb: 4238.55,
                                                    Key: "dolorum",
                                                    Track: 606393,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 474867,
                                                    GainDb: 191.93,
                                                    Key: "rem",
                                                    Track: 301575,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 660174,
                                                    GainDb: 2879.91,
                                                    Key: "nostrum",
                                                    Track: 383462,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 618016,
                                                    GainDb: 7491.7,
                                                    Key: "molestiae",
                                                    Track: 878453,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 135474,
                                                    GainDb: 1028.63,
                                                    Key: "ullam",
                                                    Track: 92373,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 354047,
                                                    GainDb: 5908.73,
                                                    Key: "omnis",
                                                    Track: 574325,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 33625,
                                                    GainDb: 6532.01,
                                                    Key: "ut",
                                                    Track: 652103,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 320997,
                                                    GainDb: 4314.18,
                                                    Key: "modi",
                                                    Track: 896547,
                                                },
                                            },
                                        },
                                    },
                                    Key: "qui",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 435865,
                                                    GainDb: 9840.43,
                                                    Key: "saepe",
                                                    Track: 260341,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 537023,
                                                    GainDb: 7038.89,
                                                    Key: "ducimus",
                                                    Track: 100226,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 99569,
                                                    GainDb: 9194.83,
                                                    Key: "aliquid",
                                                    Track: 714242,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 469249,
                                                    GainDb: 9988.48,
                                                    Key: "voluptas",
                                                    Track: 149448,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 904648,
                                                    GainDb: 8681.26,
                                                    Key: "eaque",
                                                    Track: 162493,
                                                },
                                            },
                                        },
                                    },
                                    Key: "molestias",
                                },
                            },
                            SampleRateHertz: 615560,
                        },
                        Key: "dolorem",
                        TextStream: &shared.TextStream{
                            Codec: "quia",
                            LanguageCode: "omnis",
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "consequatur",
                                            Track: 411397,
                                        },
                                        shared.TextInput{
                                            Key: "similique",
                                            Track: 139972,
                                        },
                                        shared.TextInput{
                                            Key: "voluptate",
                                            Track: 33222,
                                        },
                                        shared.TextInput{
                                            Key: "quasi",
                                            Track: 982575,
                                        },
                                    },
                                    Key: "optio",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "qui",
                                            Track: 420075,
                                        },
                                        shared.TextInput{
                                            Key: "quisquam",
                                            Track: 50588,
                                        },
                                    },
                                    Key: "et",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "aut",
                                            Track: 16627,
                                        },
                                        shared.TextInput{
                                            Key: "vero",
                                            Track: 230742,
                                        },
                                    },
                                    Key: "aut",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "ea",
                                            Track: 944124,
                                        },
                                        shared.TextInput{
                                            Key: "qui",
                                            Track: 749999,
                                        },
                                        shared.TextInput{
                                            Key: "ipsum",
                                            Track: 339404,
                                        },
                                        shared.TextInput{
                                            Key: "occaecati",
                                            Track: 489549,
                                        },
                                    },
                                    Key: "illo",
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: false,
                            AqStrength: 3389.85,
                            BFrameCount: 199996,
                            BPyramid: false,
                            BitrateBps: 179490,
                            Codec: "sit",
                            CrfLevel: 170986,
                            EnableTwoPass: false,
                            EntropyCoder: "autem",
                            FrameRate: 4634.51,
                            GopDuration: "modi",
                            GopFrameCount: 874573,
                            HeightPixels: 345352,
                            PixelFormat: "rerum",
                            Preset: "non",
                            Profile: "est",
                            RateControlMode: "nihil",
                            Tune: "mollitia",
                            VbvFullnessBits: 31838,
                            VbvSizeBits: 783645,
                            WidthPixels: 164694,
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 500026,
                            ChannelCount: 621479,
                            ChannelLayout: []string{
                                "in",
                            },
                            Codec: "cumque",
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 267262,
                                                    GainDb: 6139.66,
                                                    Key: "soluta",
                                                    Track: 535633,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 864282,
                                                    GainDb: 5899.1,
                                                    Key: "placeat",
                                                    Track: 730122,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 964490,
                                                    GainDb: 3119.45,
                                                    Key: "iste",
                                                    Track: 398221,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 212390,
                                                    GainDb: 2098.43,
                                                    Key: "modi",
                                                    Track: 186193,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 944373,
                                                    GainDb: 5695.74,
                                                    Key: "quod",
                                                    Track: 452109,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 970237,
                                                    GainDb: 2274.14,
                                                    Key: "soluta",
                                                    Track: 254356,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 85295,
                                                    GainDb: 580.29,
                                                    Key: "inventore",
                                                    Track: 434417,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 311796,
                                                    GainDb: 8810.05,
                                                    Key: "optio",
                                                    Track: 976405,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 377752,
                                                    GainDb: 6176.58,
                                                    Key: "dolor",
                                                    Track: 542499,
                                                },
                                            },
                                        },
                                    },
                                    Key: "accusantium",
                                },
                            },
                            SampleRateHertz: 854614,
                        },
                        Key: "et",
                        TextStream: &shared.TextStream{
                            Codec: "maxime",
                            LanguageCode: "soluta",
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "cum",
                                            Track: 536579,
                                        },
                                        shared.TextInput{
                                            Key: "est",
                                            Track: 896672,
                                        },
                                    },
                                    Key: "quo",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "totam",
                                            Track: 216897,
                                        },
                                        shared.TextInput{
                                            Key: "blanditiis",
                                            Track: 663078,
                                        },
                                        shared.TextInput{
                                            Key: "et",
                                            Track: 263322,
                                        },
                                        shared.TextInput{
                                            Key: "eos",
                                            Track: 20651,
                                        },
                                    },
                                    Key: "incidunt",
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: false,
                            AqStrength: 7583.79,
                            BFrameCount: 881586,
                            BPyramid: false,
                            BitrateBps: 320017,
                            Codec: "et",
                            CrfLevel: 383464,
                            EnableTwoPass: false,
                            EntropyCoder: "facilis",
                            FrameRate: 5883.17,
                            GopDuration: "quia",
                            GopFrameCount: 831049,
                            HeightPixels: 519711,
                            PixelFormat: "et",
                            Preset: "alias",
                            Profile: "officiis",
                            RateControlMode: "enim",
                            Tune: "ad",
                            VbvFullnessBits: 425451,
                            VbvSizeBits: 798047,
                            WidthPixels: 885338,
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: "soluta",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: false,
                                LowBoost: false,
                                Lufs: 9527.92,
                            },
                            Color: &shared.Color{
                                Brightness: 4561.3,
                                Contrast: 6874.88,
                                Saturation: 4834.09,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 215507,
                                LeftPixels: 788740,
                                RightPixels: 947371,
                                TopPixels: 229442,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 7308.56,
                            },
                            Denoise: &shared.Denoise{
                                Strength: 8802.98,
                                Tune: "aliquam",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 313692,
                                LeftPixels: 213312,
                                RightPixels: 957451,
                                TopPixels: 518201,
                            },
                        },
                        URI: "http://alden.net",
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: "sequi",
                        MuxStreams: []string{
                            "qui",
                            "autem",
                        },
                        Type: "HLS",
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: "numquam",
                        ElementaryStreams: []string{
                            "amet",
                            "officia",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: "consequatur",
                            },
                            Iv: "et",
                            Key: "placeat",
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: "sed",
                                Scheme: "cum",
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: "sint",
                            },
                        },
                        FileName: "ad",
                        Key: "magni",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "quia",
                        },
                    },
                    shared.MuxStream{
                        Container: "porro",
                        ElementaryStreams: []string{
                            "qui",
                            "laudantium",
                            "error",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: "voluptas",
                            },
                            Iv: "sit",
                            Key: "quia",
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: "ratione",
                                Scheme: "dolorem",
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: "corrupti",
                            },
                        },
                        FileName: "consequuntur",
                        Key: "ex",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "quisquam",
                        },
                    },
                },
                Output: &shared.Output{
                    URI: "https://alexander.net",
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "explicabo",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "et",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "vitae",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 7492.55,
                                        Y: 5521.93,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "minus",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 5844.76,
                                        Y: 456.14,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "sapiente",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "non",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "quis",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2408.29,
                                        Y: 6772.63,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "aspernatur",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 630.38,
                                        Y: 164.29,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "iste",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "non",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "libero",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 8330.38,
                                        Y: 7851.53,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "maiores",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2817.3,
                                        Y: 7034.95,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 5864.1,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 1816.31,
                                Y: 639.55,
                            },
                            URI: "https://jean.name",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "temporibus",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "debitis",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "laboriosam",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2184.03,
                                        Y: 9615.71,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "blanditiis",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2317.01,
                                        Y: 8788.7,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "hic",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "quos",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "porro",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 7992.03,
                                        Y: 4861.6,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "et",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 7085.48,
                                        Y: 8742.88,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "et",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "nostrum",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "pariatur",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 1943.42,
                                        Y: 6178.77,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "est",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 132.36,
                                        Y: 9742.59,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "ut",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "eos",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "dolor",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 9818.3,
                                        Y: 9850.33,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "deleniti",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 7535.7,
                                        Y: 4973.91,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 40.48,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 6394.73,
                                Y: 2694.79,
                            },
                            URI: "http://halle.com",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "qui",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "ullam",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "in",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 5113.19,
                                        Y: 1206.57,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "modi",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 9807,
                                        Y: 978.44,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "voluptate",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "eos",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "aut",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 3436.05,
                                        Y: 9608.35,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "temporibus",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 9065.56,
                                        Y: 4113.72,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 7740.48,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 3592.71,
                                Y: 3331.45,
                            },
                            URI: "http://armando.biz",
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: "voluptate",
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: 232234,
                        EndTimeOffset: "molestiae",
                        FilePrefix: "magni",
                        Format: "voluptas",
                        Interval: "illo",
                        Quality: 952871,
                        RowCount: 725595,
                        SpriteHeightPixels: 13948,
                        SpriteWidthPixels: 11427,
                        StartTimeOffset: "provident",
                        TotalCount: 770581,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 304582,
                        EndTimeOffset: "ratione",
                        FilePrefix: "aut",
                        Format: "beatae",
                        Interval: "magnam",
                        Quality: 89603,
                        RowCount: 677412,
                        SpriteHeightPixels: 672048,
                        SpriteWidthPixels: 810424,
                        StartTimeOffset: "dolore",
                        TotalCount: 432148,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 420539,
                        EndTimeOffset: "facere",
                        FilePrefix: "iste",
                        Format: "eum",
                        Interval: "eos",
                        Quality: 379034,
                        RowCount: 727044,
                        SpriteHeightPixels: 96549,
                        SpriteWidthPixels: 270328,
                        StartTimeOffset: "aliquam",
                        TotalCount: 131482,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 591935,
                        EndTimeOffset: "illo",
                        FilePrefix: "voluptatum",
                        Format: "corporis",
                        Interval: "corrupti",
                        Quality: 262118,
                        RowCount: 458515,
                        SpriteHeightPixels: 456141,
                        SpriteWidthPixels: 524593,
                        StartTimeOffset: "nobis",
                        TotalCount: 442015,
                    },
                },
            },
            Name: "optio",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.TranscoderProjectsLocationsJobTemplatesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.JobTemplate != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->