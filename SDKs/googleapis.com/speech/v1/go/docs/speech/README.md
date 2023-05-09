# Speech

### Available Operations

* [SpeechSpeechLongrunningrecognize](#speechspeechlongrunningrecognize) - Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).
* [SpeechSpeechRecognize](#speechspeechrecognize) - Performs synchronous speech recognition: receive results after all audio has been sent and processed.

## SpeechSpeechLongrunningrecognize

Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).

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
    res, err := s.Speech.SpeechSpeechLongrunningrecognize(ctx, operations.SpeechSpeechLongrunningrecognizeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LongRunningRecognizeRequestInput: &shared.LongRunningRecognizeRequestInput{
            Audio: &shared.RecognitionAudio{
                Content: sdk.String("veritatis"),
                URI: sdk.String("https://feline-eve.com"),
            },
            Config: &shared.RecognitionConfigInput{
                Adaptation: &shared.SpeechAdaptationInput{
                    AbnfGrammar: &shared.ABNFGrammar{
                        AbnfStrings: []string{
                            "quibusdam",
                            "explicabo",
                            "deserunt",
                        },
                    },
                    CustomClasses: []shared.CustomClassInput{
                        shared.CustomClassInput{
                            CustomClassID: sdk.String("quibusdam"),
                            Items: []shared.ClassItem{
                                shared.ClassItem{
                                    Value: sdk.String("modi"),
                                },
                                shared.ClassItem{
                                    Value: sdk.String("qui"),
                                },
                            },
                            Name: sdk.String("Mr. Shelly Lueilwitz"),
                        },
                        shared.CustomClassInput{
                            CustomClassID: sdk.String("ipsam"),
                            Items: []shared.ClassItem{
                                shared.ClassItem{
                                    Value: sdk.String("fugit"),
                                },
                            },
                            Name: sdk.String("Marshall Glover"),
                        },
                        shared.CustomClassInput{
                            CustomClassID: sdk.String("labore"),
                            Items: []shared.ClassItem{
                                shared.ClassItem{
                                    Value: sdk.String("eum"),
                                },
                                shared.ClassItem{
                                    Value: sdk.String("non"),
                                },
                                shared.ClassItem{
                                    Value: sdk.String("eligendi"),
                                },
                                shared.ClassItem{
                                    Value: sdk.String("sint"),
                                },
                            },
                            Name: sdk.String("Sherri Tremblay"),
                        },
                    },
                    PhraseSetReferences: []string{
                        "debitis",
                    },
                    PhraseSets: []shared.PhraseSetInput{
                        shared.PhraseSetInput{
                            Boost: sdk.Float32(6800.56),
                            Name: sdk.String("Arlene Stamm"),
                            Phrases: []shared.Phrase{
                                shared.Phrase{
                                    Boost: sdk.Float32(2974.37),
                                    Value: sdk.String("cumque"),
                                },
                            },
                        },
                        shared.PhraseSetInput{
                            Boost: sdk.Float32(8137.98),
                            Name: sdk.String("Beth Padberg"),
                            Phrases: []shared.Phrase{
                                shared.Phrase{
                                    Boost: sdk.Float32(3132.18),
                                    Value: sdk.String("accusamus"),
                                },
                                shared.Phrase{
                                    Boost: sdk.Float32(9654.17),
                                    Value: sdk.String("quidem"),
                                },
                                shared.Phrase{
                                    Boost: sdk.Float32(5884.65),
                                    Value: sdk.String("nam"),
                                },
                            },
                        },
                        shared.PhraseSetInput{
                            Boost: sdk.Float32(6596.69),
                            Name: sdk.String("Jaime Will"),
                            Phrases: []shared.Phrase{
                                shared.Phrase{
                                    Boost: sdk.Float32(4238.55),
                                    Value: sdk.String("natus"),
                                },
                                shared.Phrase{
                                    Boost: sdk.Float32(6063.93),
                                    Value: sdk.String("molestiae"),
                                },
                            },
                        },
                        shared.PhraseSetInput{
                            Boost: sdk.Float32(191.93),
                            Name: sdk.String("Megan Rau"),
                            Phrases: []shared.Phrase{
                                shared.Phrase{
                                    Boost: sdk.Float32(3834.62),
                                    Value: sdk.String("natus"),
                                },
                                shared.Phrase{
                                    Boost: sdk.Float32(7491.7),
                                    Value: sdk.String("eum"),
                                },
                            },
                        },
                    },
                },
                AlternativeLanguageCodes: []string{
                    "aspernatur",
                    "architecto",
                    "magnam",
                    "et",
                },
                AudioChannelCount: sdk.Int(569965),
                DiarizationConfig: &shared.SpeakerDiarizationConfigInput{
                    EnableSpeakerDiarization: sdk.Bool(false),
                    MaxSpeakerCount: sdk.Int(354047),
                    MinSpeakerCount: sdk.Int(590873),
                },
                EnableAutomaticPunctuation: sdk.Bool(false),
                EnableSeparateRecognitionPerChannel: sdk.Bool(false),
                EnableSpokenEmojis: sdk.Bool(false),
                EnableSpokenPunctuation: sdk.Bool(false),
                EnableWordConfidence: sdk.Bool(false),
                EnableWordTimeOffsets: sdk.Bool(false),
                Encoding: shared.RecognitionConfigEncodingEnumAmr.ToPointer(),
                LanguageCode: sdk.String("sint"),
                MaxAlternatives: sdk.Int(33625),
                Metadata: &shared.RecognitionMetadata{
                    AudioTopic: sdk.String("mollitia"),
                    IndustryNaicsCodeOfAudio: sdk.Int64(968962),
                    InteractionType: shared.RecognitionMetadataInteractionTypeEnumProfessionallyProduced.ToPointer(),
                    MicrophoneDistance: shared.RecognitionMetadataMicrophoneDistanceEnumNearfield.ToPointer(),
                    OriginalMediaType: shared.RecognitionMetadataOriginalMediaTypeEnumAudio.ToPointer(),
                    OriginalMimeType: sdk.String("dolor"),
                    RecordingDeviceName: sdk.String("necessitatibus"),
                    RecordingDeviceType: shared.RecognitionMetadataRecordingDeviceTypeEnumRecordingDeviceTypeUnspecified.ToPointer(),
                },
                Model: sdk.String("nemo"),
                ProfanityFilter: sdk.Bool(false),
                SampleRateHertz: sdk.Int(97260),
                SpeechContexts: []shared.SpeechContext{
                    shared.SpeechContext{
                        Boost: sdk.Float32(9840.43),
                        Phrases: []string{
                            "eius",
                            "maxime",
                            "deleniti",
                            "facilis",
                        },
                    },
                    shared.SpeechContext{
                        Boost: sdk.Float32(4479.26),
                        Phrases: []string{
                            "architecto",
                        },
                    },
                },
                UseEnhanced: sdk.Bool(false),
            },
            OutputConfig: &shared.TranscriptOutputConfig{
                GcsURI: sdk.String("repudiandae"),
            },
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.SpeechSpeechLongrunningrecognizeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## SpeechSpeechRecognize

Performs synchronous speech recognition: receive results after all audio has been sent and processed.

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
    res, err := s.Speech.SpeechSpeechRecognize(ctx, operations.SpeechSpeechRecognizeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RecognizeRequestInput: &shared.RecognizeRequestInput{
            Audio: &shared.RecognitionAudio{
                Content: sdk.String("praesentium"),
                URI: sdk.String("https://daring-camel.net"),
            },
            Config: &shared.RecognitionConfigInput{
                Adaptation: &shared.SpeechAdaptationInput{
                    AbnfGrammar: &shared.ABNFGrammar{
                        AbnfStrings: []string{
                            "pariatur",
                            "maxime",
                            "ea",
                            "excepturi",
                        },
                    },
                    CustomClasses: []shared.CustomClassInput{
                        shared.CustomClassInput{
                            CustomClassID: sdk.String("ea"),
                            Items: []shared.ClassItem{
                                shared.ClassItem{
                                    Value: sdk.String("ab"),
                                },
                            },
                            Name: sdk.String("Rickey Hintz"),
                        },
                    },
                    PhraseSetReferences: []string{
                        "eaque",
                        "pariatur",
                        "nemo",
                    },
                    PhraseSets: []shared.PhraseSetInput{
                        shared.PhraseSetInput{
                            Boost: sdk.Float32(166.27),
                            Name: sdk.String("Vincent Anderson"),
                            Phrases: []shared.Phrase{
                                shared.Phrase{
                                    Boost: sdk.Float32(7299.91),
                                    Value: sdk.String("nobis"),
                                },
                                shared.Phrase{
                                    Boost: sdk.Float32(1716.29),
                                    Value: sdk.String("quis"),
                                },
                                shared.Phrase{
                                    Boost: sdk.Float32(5210.37),
                                    Value: sdk.String("dignissimos"),
                                },
                                shared.Phrase{
                                    Boost: sdk.Float32(543.38),
                                    Value: sdk.String("quis"),
                                },
                            },
                        },
                        shared.PhraseSetInput{
                            Boost: sdk.Float32(1999.96),
                            Name: sdk.String("Dorothy Dach"),
                            Phrases: []shared.Phrase{
                                shared.Phrase{
                                    Boost: sdk.Float32(8745.73),
                                    Value: sdk.String("nostrum"),
                                },
                            },
                        },
                        shared.PhraseSetInput{
                            Boost: sdk.Float32(9441.2),
                            Name: sdk.String("Alejandro Purdy DDS"),
                            Phrases: []shared.Phrase{
                                shared.Phrase{
                                    Boost: sdk.Float32(5000.26),
                                    Value: sdk.String("error"),
                                },
                            },
                        },
                        shared.PhraseSetInput{
                            Boost: sdk.Float32(503.7),
                            Name: sdk.String("Jean Ferry"),
                            Phrases: []shared.Phrase{
                                shared.Phrase{
                                    Boost: sdk.Float32(6139.66),
                                    Value: sdk.String("dolorum"),
                                },
                                shared.Phrase{
                                    Boost: sdk.Float32(5356.33),
                                    Value: sdk.String("pariatur"),
                                },
                            },
                        },
                    },
                },
                AlternativeLanguageCodes: []string{
                    "nobis",
                    "libero",
                    "delectus",
                },
                AudioChannelCount: sdk.Int(311945),
                DiarizationConfig: &shared.SpeakerDiarizationConfigInput{
                    EnableSpeakerDiarization: sdk.Bool(false),
                    MaxSpeakerCount: sdk.Int(554242),
                    MinSpeakerCount: sdk.Int(398221),
                },
                EnableAutomaticPunctuation: sdk.Bool(false),
                EnableSeparateRecognitionPerChannel: sdk.Bool(false),
                EnableSpokenEmojis: sdk.Bool(false),
                EnableSpokenPunctuation: sdk.Bool(false),
                EnableWordConfidence: sdk.Bool(false),
                EnableWordTimeOffsets: sdk.Bool(false),
                Encoding: shared.RecognitionConfigEncodingEnumLinear16.ToPointer(),
                LanguageCode: sdk.String("dolorem"),
                MaxAlternatives: sdk.Int(222443),
                Metadata: &shared.RecognitionMetadata{
                    AudioTopic: sdk.String("qui"),
                    IndustryNaicsCodeOfAudio: sdk.Int64(218749),
                    InteractionType: shared.RecognitionMetadataInteractionTypeEnumDictation.ToPointer(),
                    MicrophoneDistance: shared.RecognitionMetadataMicrophoneDistanceEnumMidfield.ToPointer(),
                    OriginalMediaType: shared.RecognitionMetadataOriginalMediaTypeEnumVideo.ToPointer(),
                    OriginalMimeType: sdk.String("voluptate"),
                    RecordingDeviceName: sdk.String("dignissimos"),
                    RecordingDeviceType: shared.RecognitionMetadataRecordingDeviceTypeEnumOtherIndoorDevice.ToPointer(),
                },
                Model: sdk.String("amet"),
                ProfanityFilter: sdk.Bool(false),
                SampleRateHertz: sdk.Int(680545),
                SpeechContexts: []shared.SpeechContext{
                    shared.SpeechContext{
                        Boost: sdk.Float32(852.95),
                        Phrases: []string{
                            "ipsa",
                        },
                    },
                    shared.SpeechContext{
                        Boost: sdk.Float32(4344.17),
                        Phrases: []string{
                            "quaerat",
                            "accusamus",
                        },
                    },
                },
                UseEnhanced: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("natus"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("ab"),
    }, operations.SpeechSpeechRecognizeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RecognizeResponse != nil {
        // handle response
    }
}
```
