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
            Parent: "corrupti",
        },
        QueryParams: operations.TranscoderProjectsLocationsJobTemplatesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            JobTemplateID: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.JobTemplate{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: "magnam",
                    },
                    shared.AdBreak{
                        StartTimeOffset: "debitis",
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: "delectus",
                        Inputs: []string{
                            "suscipit",
                            "molestiae",
                        },
                        Key: "minus",
                        StartTimeOffset: "placeat",
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 479977,
                            ChannelCount: 568045,
                            ChannelLayout: []string{
                                "recusandae",
                                "temporibus",
                            },
                            Codec: "ab",
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 20218,
                                                    GainDb: 3682.41,
                                                    Key: "repellendus",
                                                    Track: 957156,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 778157,
                                                    GainDb: 1403.5,
                                                    Key: "at",
                                                    Track: 870088,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 978619,
                                                    GainDb: 4736.08,
                                                    Key: "quod",
                                                    Track: 800911,
                                                },
                                            },
                                        },
                                    },
                                    Key: "esse",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 678880,
                                                    GainDb: 1182.74,
                                                    Key: "nam",
                                                    Track: 639921,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 582020,
                                                    GainDb: 1433.53,
                                                    Key: "deleniti",
                                                    Track: 944669,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 758616,
                                                    GainDb: 5218.48,
                                                    Key: "beatae",
                                                    Track: 414662,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 473600,
                                                    GainDb: 2645.55,
                                                    Key: "qui",
                                                    Track: 774234,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 456150,
                                                    GainDb: 2165.5,
                                                    Key: "excepturi",
                                                    Track: 135218,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 18789,
                                                    GainDb: 3241.41,
                                                    Key: "natus",
                                                    Track: 149675,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 612096,
                                                    GainDb: 2223.21,
                                                    Key: "natus",
                                                    Track: 386489,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 902599,
                                                    GainDb: 6818.2,
                                                    Key: "in",
                                                    Track: 359508,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 613064,
                                                    GainDb: 4370.32,
                                                    Key: "saepe",
                                                    Track: 697631,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 99280,
                                                    GainDb: 602.25,
                                                    Key: "reiciendis",
                                                    Track: 666767,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 653140,
                                                    GainDb: 6706.38,
                                                    Key: "dolores",
                                                    Track: 210382,
                                                },
                                            },
                                        },
                                    },
                                    Key: "corporis",
                                },
                            },
                            SampleRateHertz: 128926,
                        },
                        Key: "nobis",
                        TextStream: &shared.TextStream{
                            Codec: "enim",
                            LanguageCode: "omnis",
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "excepturi",
                                            Track: 38425,
                                        },
                                        shared.TextInput{
                                            Key: "iure",
                                            Track: 634274,
                                        },
                                    },
                                    Key: "doloribus",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "architecto",
                                            Track: 652790,
                                        },
                                        shared.TextInput{
                                            Key: "dolorem",
                                            Track: 635059,
                                        },
                                        shared.TextInput{
                                            Key: "consequuntur",
                                            Track: 995300,
                                        },
                                        shared.TextInput{
                                            Key: "mollitia",
                                            Track: 581850,
                                        },
                                    },
                                    Key: "numquam",
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: false,
                            AqStrength: 4143.69,
                            BFrameCount: 466311,
                            BPyramid: false,
                            BitrateBps: 474697,
                            Codec: "velit",
                            CrfLevel: 623510,
                            EnableTwoPass: false,
                            EntropyCoder: "quia",
                            FrameRate: 3380.07,
                            GopDuration: "vitae",
                            GopFrameCount: 674752,
                            HeightPixels: 656330,
                            PixelFormat: "enim",
                            Preset: "odit",
                            Profile: "quo",
                            RateControlMode: "sequi",
                            Tune: "tenetur",
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
                                "temporibus",
                                "laborum",
                                "quasi",
                            },
                            Codec: "reiciendis",
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 509624,
                                                    GainDb: 9767.62,
                                                    Key: "ipsa",
                                                    Track: 604846,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 451159,
                                                    GainDb: 7392.64,
                                                    Key: "perferendis",
                                                    Track: 39187,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 282807,
                                                    GainDb: 9795.87,
                                                    Key: "dicta",
                                                    Track: 359444,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 296140,
                                                    GainDb: 4808.94,
                                                    Key: "dicta",
                                                    Track: 688661,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 880476,
                                                    GainDb: 4142.63,
                                                    Key: "repudiandae",
                                                    Track: 64147,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 216822,
                                                    GainDb: 6924.72,
                                                    Key: "molestias",
                                                    Track: 566602,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 265389,
                                                    GainDb: 5089.69,
                                                    Key: "rem",
                                                    Track: 916723,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 93940,
                                                    GainDb: 9211.58,
                                                    Key: "sint",
                                                    Track: 83112,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 929297,
                                                    GainDb: 2777.18,
                                                    Key: "enim",
                                                    Track: 9356,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 667411,
                                                    GainDb: 8423.42,
                                                    Key: "explicabo",
                                                    Track: 647174,
                                                },
                                            },
                                        },
                                    },
                                    Key: "distinctio",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 264730,
                                                    GainDb: 1831.91,
                                                    Key: "aliquid",
                                                    Track: 586513,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 552822,
                                                    GainDb: 201.07,
                                                    Key: "magni",
                                                    Track: 828940,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 4695,
                                                    GainDb: 1464.41,
                                                    Key: "dolorum",
                                                    Track: 569618,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 270008,
                                                    GainDb: 7037.37,
                                                    Key: "tempore",
                                                    Track: 288476,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 433288,
                                                    GainDb: 2487.53,
                                                    Key: "eligendi",
                                                    Track: 576157,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 396098,
                                                    GainDb: 5920.42,
                                                    Key: "necessitatibus",
                                                    Track: 572252,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 638921,
                                                    GainDb: 2230.81,
                                                    Key: "debitis",
                                                    Track: 952749,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 680056,
                                                    GainDb: 4471.25,
                                                    Key: "in",
                                                    Track: 846409,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 699479,
                                                    GainDb: 1162.02,
                                                    Key: "magnam",
                                                    Track: 767024,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 813798,
                                                    GainDb: 4118.2,
                                                    Key: "aliquid",
                                                    Track: 675439,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 881104,
                                                    GainDb: 2497.96,
                                                    Key: "occaecati",
                                                    Track: 313218,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 881736,
                                                    GainDb: 9654.17,
                                                    Key: "quidem",
                                                    Track: 588465,
                                                },
                                            },
                                        },
                                    },
                                    Key: "nam",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 533206,
                                                    GainDb: 9560.84,
                                                    Key: "amet",
                                                    Track: 643990,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 394869,
                                                    GainDb: 4238.55,
                                                    Key: "natus",
                                                    Track: 606393,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 474867,
                                                    GainDb: 191.93,
                                                    Key: "nihil",
                                                    Track: 301575,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 660174,
                                                    GainDb: 2879.91,
                                                    Key: "labore",
                                                    Track: 383462,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 618016,
                                                    GainDb: 7491.7,
                                                    Key: "eum",
                                                    Track: 878453,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 135474,
                                                    GainDb: 1028.63,
                                                    Key: "magnam",
                                                    Track: 92373,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 354047,
                                                    GainDb: 5908.73,
                                                    Key: "quos",
                                                    Track: 574325,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 33625,
                                                    GainDb: 6532.01,
                                                    Key: "reiciendis",
                                                    Track: 652103,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 320997,
                                                    GainDb: 4314.18,
                                                    Key: "dolor",
                                                    Track: 896547,
                                                },
                                            },
                                        },
                                    },
                                    Key: "odit",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 435865,
                                                    GainDb: 9840.43,
                                                    Key: "debitis",
                                                    Track: 260341,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 537023,
                                                    GainDb: 7038.89,
                                                    Key: "in",
                                                    Track: 100226,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 99569,
                                                    GainDb: 9194.83,
                                                    Key: "ullam",
                                                    Track: 714242,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 469249,
                                                    GainDb: 9988.48,
                                                    Key: "quibusdam",
                                                    Track: 149448,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 904648,
                                                    GainDb: 8681.26,
                                                    Key: "accusantium",
                                                    Track: 162493,
                                                },
                                            },
                                        },
                                    },
                                    Key: "praesentium",
                                },
                            },
                            SampleRateHertz: 615560,
                        },
                        Key: "magni",
                        TextStream: &shared.TextStream{
                            Codec: "sunt",
                            LanguageCode: "quo",
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "maxime",
                                            Track: 411397,
                                        },
                                        shared.TextInput{
                                            Key: "excepturi",
                                            Track: 139972,
                                        },
                                        shared.TextInput{
                                            Key: "ea",
                                            Track: 33222,
                                        },
                                        shared.TextInput{
                                            Key: "ab",
                                            Track: 982575,
                                        },
                                    },
                                    Key: "quidem",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "voluptate",
                                            Track: 420075,
                                        },
                                        shared.TextInput{
                                            Key: "nam",
                                            Track: 50588,
                                        },
                                    },
                                    Key: "pariatur",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "voluptatibus",
                                            Track: 16627,
                                        },
                                        shared.TextInput{
                                            Key: "fugiat",
                                            Track: 230742,
                                        },
                                    },
                                    Key: "aut",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "corporis",
                                            Track: 944124,
                                        },
                                        shared.TextInput{
                                            Key: "libero",
                                            Track: 749999,
                                        },
                                        shared.TextInput{
                                            Key: "dolores",
                                            Track: 339404,
                                        },
                                        shared.TextInput{
                                            Key: "totam",
                                            Track: 489549,
                                        },
                                    },
                                    Key: "eaque",
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: false,
                            AqStrength: 3389.85,
                            BFrameCount: 199996,
                            BPyramid: false,
                            BitrateBps: 179490,
                            Codec: "perferendis",
                            CrfLevel: 170986,
                            EnableTwoPass: false,
                            EntropyCoder: "minus",
                            FrameRate: 4634.51,
                            GopDuration: "dolor",
                            GopFrameCount: 874573,
                            HeightPixels: 345352,
                            PixelFormat: "hic",
                            Preset: "recusandae",
                            Profile: "omnis",
                            RateControlMode: "facilis",
                            Tune: "perspiciatis",
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
                                "occaecati",
                            },
                            Codec: "rerum",
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 267262,
                                                    GainDb: 6139.66,
                                                    Key: "dolorum",
                                                    Track: 535633,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 864282,
                                                    GainDb: 5899.1,
                                                    Key: "nobis",
                                                    Track: 730122,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 964490,
                                                    GainDb: 3119.45,
                                                    Key: "quos",
                                                    Track: 398221,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 212390,
                                                    GainDb: 2098.43,
                                                    Key: "dolor",
                                                    Track: 186193,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 944373,
                                                    GainDb: 5695.74,
                                                    Key: "cum",
                                                    Track: 452109,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 970237,
                                                    GainDb: 2274.14,
                                                    Key: "dolorum",
                                                    Track: 254356,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 85295,
                                                    GainDb: 580.29,
                                                    Key: "ipsa",
                                                    Track: 434417,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 311796,
                                                    GainDb: 8810.05,
                                                    Key: "quidem",
                                                    Track: 976405,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 377752,
                                                    GainDb: 6176.58,
                                                    Key: "eos",
                                                    Track: 542499,
                                                },
                                            },
                                        },
                                    },
                                    Key: "sit",
                                },
                            },
                            SampleRateHertz: 854614,
                        },
                        Key: "ab",
                        TextStream: &shared.TextStream{
                            Codec: "soluta",
                            LanguageCode: "dolorum",
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "dolorum",
                                            Track: 536579,
                                        },
                                        shared.TextInput{
                                            Key: "omnis",
                                            Track: 896672,
                                        },
                                    },
                                    Key: "distinctio",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "nihil",
                                            Track: 216897,
                                        },
                                        shared.TextInput{
                                            Key: "voluptate",
                                            Track: 663078,
                                        },
                                        shared.TextInput{
                                            Key: "saepe",
                                            Track: 263322,
                                        },
                                        shared.TextInput{
                                            Key: "aspernatur",
                                            Track: 20651,
                                        },
                                    },
                                    Key: "amet",
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: false,
                            AqStrength: 7583.79,
                            BFrameCount: 881586,
                            BPyramid: false,
                            BitrateBps: 320017,
                            Codec: "saepe",
                            CrfLevel: 383464,
                            EnableTwoPass: false,
                            EntropyCoder: "deserunt",
                            FrameRate: 5883.17,
                            GopDuration: "minima",
                            GopFrameCount: 831049,
                            HeightPixels: 519711,
                            PixelFormat: "similique",
                            Preset: "alias",
                            Profile: "at",
                            RateControlMode: "quaerat",
                            Tune: "tempora",
                            VbvFullnessBits: 425451,
                            VbvSizeBits: 798047,
                            WidthPixels: 885338,
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: "dolorum",
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
                                Tune: "numquam",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 313692,
                                LeftPixels: 213312,
                                RightPixels: 957451,
                                TopPixels: 518201,
                            },
                        },
                        URI: "http://alienated-quality.biz",
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: "vel",
                        MuxStreams: []string{
                            "voluptas",
                            "deserunt",
                            "quam",
                        },
                        Type: "MANIFEST_TYPE_UNSPECIFIED",
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: "qui",
                        ElementaryStreams: []string{
                            "maxime",
                            "pariatur",
                            "soluta",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: "dicta",
                            },
                            Iv: "laborum",
                            Key: "totam",
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: "incidunt",
                                Scheme: "aspernatur",
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: "dolores",
                            },
                        },
                        FileName: "distinctio",
                        Key: "facilis",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "aliquid",
                        },
                    },
                    shared.MuxStream{
                        Container: "quam",
                        ElementaryStreams: []string{
                            "temporibus",
                            "qui",
                            "neque",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: "fugit",
                            },
                            Iv: "magni",
                            Key: "odio",
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: "sunt",
                                Scheme: "ullam",
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: "nam",
                            },
                        },
                        FileName: "hic",
                        Key: "voluptatem",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "cumque",
                        },
                    },
                },
                Output: &shared.Output{
                    URI: "https://showy-bomb.org",
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "nobis",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "quos",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "cupiditate",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 456.14,
                                        Y: 9619.37,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "dolorem",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 2921.47,
                                        Y: 2869.15,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 2408.29,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 6772.63,
                                Y: 1002.94,
                            },
                            URI: "http://afraid-merit.org",
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: "consequatur",
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: 833038,
                        EndTimeOffset: "porro",
                        FilePrefix: "doloribus",
                        Format: "ut",
                        Interval: "facilis",
                        Quality: 586410,
                        RowCount: 181631,
                        SpriteHeightPixels: 63955,
                        SpriteWidthPixels: 512393,
                        StartTimeOffset: "odio",
                        TotalCount: 580447,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 977496,
                        EndTimeOffset: "quisquam",
                        FilePrefix: "vero",
                        Format: "omnis",
                        Interval: "quis",
                        Quality: 218403,
                        RowCount: 961571,
                        SpriteHeightPixels: 455169,
                        SpriteWidthPixels: 231701,
                        StartTimeOffset: "vero",
                        TotalCount: 949319,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 492268,
                        EndTimeOffset: "hic",
                        FilePrefix: "distinctio",
                        Format: "quod",
                        Interval: "odio",
                        Quality: 630448,
                        RowCount: 708548,
                        SpriteHeightPixels: 874288,
                        SpriteWidthPixels: 498140,
                        StartTimeOffset: "dolore",
                        TotalCount: 844550,
                    },
                },
            },
            Name: "illum",
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