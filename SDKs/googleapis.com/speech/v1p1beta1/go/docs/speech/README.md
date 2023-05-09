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
                DiarizationSpeakerCount: sdk.Int(551816),
                EnableAutomaticPunctuation: sdk.Bool(false),
                EnableSeparateRecognitionPerChannel: sdk.Bool(false),
                EnableSpeakerDiarization: sdk.Bool(false),
                EnableSpokenEmojis: sdk.Bool(false),
                EnableSpokenPunctuation: sdk.Bool(false),
                EnableWordConfidence: sdk.Bool(false),
                EnableWordTimeOffsets: sdk.Bool(false),
                Encoding: shared.RecognitionConfigEncodingEnumAmrWb.ToPointer(),
                LanguageCode: sdk.String("accusantium"),
                MaxAlternatives: sdk.Int(653201),
                Metadata: &shared.RecognitionMetadata{
                    AudioTopic: sdk.String("reiciendis"),
                    IndustryNaicsCodeOfAudio: sdk.Int64(652103),
                    InteractionType: shared.RecognitionMetadataInteractionTypeEnumPresentation.ToPointer(),
                    MicrophoneDistance: shared.RecognitionMetadataMicrophoneDistanceEnumNearfield.ToPointer(),
                    ObfuscatedID: sdk.String("dolor"),
                    OriginalMediaType: shared.RecognitionMetadataOriginalMediaTypeEnumVideo.ToPointer(),
                    OriginalMimeType: sdk.String("odit"),
                    RecordingDeviceName: sdk.String("nemo"),
                    RecordingDeviceType: shared.RecognitionMetadataRecordingDeviceTypeEnumRecordingDeviceTypeUnspecified.ToPointer(),
                },
                Model: sdk.String("iure"),
                ProfanityFilter: sdk.Bool(false),
                SampleRateHertz: sdk.Int(984043),
                SpeechContexts: []shared.SpeechContext{
                    shared.SpeechContext{
                        Boost: sdk.Float32(2603.41),
                        Phrases: []string{
                            "deleniti",
                            "facilis",
                            "in",
                            "architecto",
                        },
                    },
                    shared.SpeechContext{
                        Boost: sdk.Float32(995.69),
                        Phrases: []string{
                            "ullam",
                            "expedita",
                            "nihil",
                            "repellat",
                        },
                    },
                    shared.SpeechContext{
                        Boost: sdk.Float32(8411.4),
                        Phrases: []string{
                            "saepe",
                        },
                    },
                    shared.SpeechContext{
                        Boost: sdk.Float32(8681.26),
                        Phrases: []string{
                            "consequuntur",
                        },
                    },
                },
                TranscriptNormalization: &shared.TranscriptNormalization{
                    Entries: []shared.Entry{
                        shared.Entry{
                            CaseSensitive: sdk.Bool(false),
                            Replace: sdk.String("natus"),
                            Search: sdk.String("magni"),
                        },
                        shared.Entry{
                            CaseSensitive: sdk.Bool(false),
                            Replace: sdk.String("sunt"),
                            Search: sdk.String("quo"),
                        },
                        shared.Entry{
                            CaseSensitive: sdk.Bool(false),
                            Replace: sdk.String("illum"),
                            Search: sdk.String("pariatur"),
                        },
                    },
                },
                UseEnhanced: sdk.Bool(false),
            },
            OutputConfig: &shared.TranscriptOutputConfig{
                GcsURI: sdk.String("maxime"),
            },
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("ea"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("ipsam"),
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
                Content: sdk.String("autem"),
                URI: sdk.String("https://attractive-subtitle.info"),
            },
            Config: &shared.RecognitionConfigInput{
                Adaptation: &shared.SpeechAdaptationInput{
                    AbnfGrammar: &shared.ABNFGrammar{
                        AbnfStrings: []string{
                            "perferendis",
                            "fugiat",
                            "amet",
                            "aut",
                        },
                    },
                    CustomClasses: []shared.CustomClassInput{
                        shared.CustomClassInput{
                            CustomClassID: sdk.String("corporis"),
                            Items: []shared.ClassItem{
                                shared.ClassItem{
                                    Value: sdk.String("libero"),
                                },
                                shared.ClassItem{
                                    Value: sdk.String("nobis"),
                                },
                                shared.ClassItem{
                                    Value: sdk.String("dolores"),
                                },
                                shared.ClassItem{
                                    Value: sdk.String("quis"),
                                },
                            },
                            Name: sdk.String("Lance Becker"),
                        },
                        shared.CustomClassInput{
                            CustomClassID: sdk.String("eos"),
                            Items: []shared.ClassItem{
                                shared.ClassItem{
                                    Value: sdk.String("dolores"),
                                },
                            },
                            Name: sdk.String("Darryl Fadel"),
                        },
                        shared.CustomClassInput{
                            CustomClassID: sdk.String("hic"),
                            Items: []shared.ClassItem{
                                shared.ClassItem{
                                    Value: sdk.String("omnis"),
                                },
                                shared.ClassItem{
                                    Value: sdk.String("facilis"),
                                },
                                shared.ClassItem{
                                    Value: sdk.String("perspiciatis"),
                                },
                                shared.ClassItem{
                                    Value: sdk.String("voluptatem"),
                                },
                            },
                            Name: sdk.String("Bobby Kutch V"),
                        },
                        shared.CustomClassInput{
                            CustomClassID: sdk.String("rerum"),
                            Items: []shared.ClassItem{
                                shared.ClassItem{
                                    Value: sdk.String("asperiores"),
                                },
                            },
                            Name: sdk.String("Edwin Morar"),
                        },
                    },
                    PhraseSetReferences: []string{
                        "provident",
                        "nobis",
                        "libero",
                        "delectus",
                    },
                    PhraseSets: []shared.PhraseSetInput{
                        shared.PhraseSetInput{
                            Boost: sdk.Float32(5542.42),
                            Name: sdk.String("Florence Ebert"),
                            Phrases: []shared.Phrase{
                                shared.Phrase{
                                    Boost: sdk.Float32(9443.73),
                                    Value: sdk.String("excepturi"),
                                },
                            },
                        },
                        shared.PhraseSetInput{
                            Boost: sdk.Float32(7395.51),
                            Name: sdk.String("Marian Wisozk"),
                            Phrases: []shared.Phrase{
                                shared.Phrase{
                                    Boost: sdk.Float32(852.95),
                                    Value: sdk.String("ipsa"),
                                },
                                shared.Phrase{
                                    Boost: sdk.Float32(564.18),
                                    Value: sdk.String("iure"),
                                },
                            },
                        },
                    },
                },
                AlternativeLanguageCodes: []string{
                    "quaerat",
                    "accusamus",
                },
                AudioChannelCount: sdk.Int(696344),
                DiarizationConfig: &shared.SpeakerDiarizationConfigInput{
                    EnableSpeakerDiarization: sdk.Bool(false),
                    MaxSpeakerCount: sdk.Int(976405),
                    MinSpeakerCount: sdk.Int(377752),
                },
                DiarizationSpeakerCount: sdk.Int(617658),
                EnableAutomaticPunctuation: sdk.Bool(false),
                EnableSeparateRecognitionPerChannel: sdk.Bool(false),
                EnableSpeakerDiarization: sdk.Bool(false),
                EnableSpokenEmojis: sdk.Bool(false),
                EnableSpokenPunctuation: sdk.Bool(false),
                EnableWordConfidence: sdk.Bool(false),
                EnableWordTimeOffsets: sdk.Bool(false),
                Encoding: shared.RecognitionConfigEncodingEnumLinear16.ToPointer(),
                LanguageCode: sdk.String("atque"),
                MaxAlternatives: sdk.Int(24678),
                Metadata: &shared.RecognitionMetadata{
                    AudioTopic: sdk.String("fugiat"),
                    IndustryNaicsCodeOfAudio: sdk.Int64(67249),
                    InteractionType: shared.RecognitionMetadataInteractionTypeEnumVoiceSearch.ToPointer(),
                    MicrophoneDistance: shared.RecognitionMetadataMicrophoneDistanceEnumMidfield.ToPointer(),
                    ObfuscatedID: sdk.String("iusto"),
                    OriginalMediaType: shared.RecognitionMetadataOriginalMediaTypeEnumAudio.ToPointer(),
                    OriginalMimeType: sdk.String("dolorum"),
                    RecordingDeviceName: sdk.String("deleniti"),
                    RecordingDeviceType: shared.RecognitionMetadataRecordingDeviceTypeEnumVehicle.ToPointer(),
                },
                Model: sdk.String("necessitatibus"),
                ProfanityFilter: sdk.Bool(false),
                SampleRateHertz: sdk.Int(714697),
                SpeechContexts: []shared.SpeechContext{
                    shared.SpeechContext{
                        Boost: sdk.Float32(4694.97),
                        Phrases: []string{
                            "voluptate",
                        },
                    },
                    shared.SpeechContext{
                        Boost: sdk.Float32(6630.78),
                        Phrases: []string{
                            "eius",
                            "aspernatur",
                            "perferendis",
                            "amet",
                        },
                    },
                    shared.SpeechContext{
                        Boost: sdk.Float32(7583.79),
                        Phrases: []string{
                            "ad",
                            "saepe",
                            "suscipit",
                            "deserunt",
                        },
                    },
                    shared.SpeechContext{
                        Boost: sdk.Float32(5883.17),
                        Phrases: []string{
                            "repellendus",
                            "totam",
                        },
                    },
                },
                TranscriptNormalization: &shared.TranscriptNormalization{
                    Entries: []shared.Entry{
                        shared.Entry{
                            CaseSensitive: sdk.Bool(false),
                            Replace: sdk.String("alias"),
                            Search: sdk.String("at"),
                        },
                        shared.Entry{
                            CaseSensitive: sdk.Bool(false),
                            Replace: sdk.String("quaerat"),
                            Search: sdk.String("tempora"),
                        },
                        shared.Entry{
                            CaseSensitive: sdk.Bool(false),
                            Replace: sdk.String("vel"),
                            Search: sdk.String("quod"),
                        },
                    },
                },
                UseEnhanced: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("a"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quisquam"),
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
