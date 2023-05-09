# speech

### Available Operations

* [speechSpeechLongrunningrecognize](#speechspeechlongrunningrecognize) - Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).
* [speechSpeechRecognize](#speechspeechrecognize) - Performs synchronous speech recognition: receive results after all audio has been sent and processed.

## speechSpeechLongrunningrecognize

Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpeechSpeechLongrunningrecognizeRequest;
import org.openapis.openapi.models.operations.SpeechSpeechLongrunningrecognizeResponse;
import org.openapis.openapi.models.operations.SpeechSpeechLongrunningrecognizeSecurity;
import org.openapis.openapi.models.shared.ABNFGrammar;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClassItem;
import org.openapis.openapi.models.shared.CustomClassInput;
import org.openapis.openapi.models.shared.LongRunningRecognizeRequestInput;
import org.openapis.openapi.models.shared.Phrase;
import org.openapis.openapi.models.shared.PhraseSetInput;
import org.openapis.openapi.models.shared.RecognitionAudio;
import org.openapis.openapi.models.shared.RecognitionConfigEncodingEnum;
import org.openapis.openapi.models.shared.RecognitionConfigInput;
import org.openapis.openapi.models.shared.RecognitionMetadata;
import org.openapis.openapi.models.shared.RecognitionMetadataInteractionTypeEnum;
import org.openapis.openapi.models.shared.RecognitionMetadataMicrophoneDistanceEnum;
import org.openapis.openapi.models.shared.RecognitionMetadataOriginalMediaTypeEnum;
import org.openapis.openapi.models.shared.RecognitionMetadataRecordingDeviceTypeEnum;
import org.openapis.openapi.models.shared.SpeakerDiarizationConfigInput;
import org.openapis.openapi.models.shared.SpeechAdaptationInput;
import org.openapis.openapi.models.shared.SpeechContext;
import org.openapis.openapi.models.shared.TranscriptOutputConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpeechSpeechLongrunningrecognizeRequest req = new SpeechSpeechLongrunningrecognizeRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                longRunningRecognizeRequestInput = new LongRunningRecognizeRequestInput() {{
                    audio = new RecognitionAudio() {{
                        content = "quasi";
                        uri = "https://novel-binoculars.org";
                    }};;
                    config = new RecognitionConfigInput() {{
                        adaptation = new SpeechAdaptationInput() {{
                            abnfGrammar = new ABNFGrammar() {{
                                abnfStrings = new String[]{{
                                    add("enim"),
                                    add("consequatur"),
                                }};
                            }};;
                            customClasses = new org.openapis.openapi.models.shared.CustomClassInput[]{{
                                add(new CustomClassInput() {{
                                    customClassId = "quibusdam";
                                    items = new org.openapis.openapi.models.shared.ClassItem[]{{
                                        add(new ClassItem() {{
                                            value = "deserunt";
                                        }}),
                                    }};
                                    name = "Marty Green";
                                }}),
                                add(new CustomClassInput() {{
                                    customClassId = "aliquid";
                                    items = new org.openapis.openapi.models.shared.ClassItem[]{{
                                        add(new ClassItem() {{
                                            value = "quos";
                                        }}),
                                        add(new ClassItem() {{
                                            value = "perferendis";
                                        }}),
                                        add(new ClassItem() {{
                                            value = "magni";
                                        }}),
                                    }};
                                    name = "Vernon Abshire";
                                }}),
                                add(new CustomClassInput() {{
                                    customClassId = "excepturi";
                                    items = new org.openapis.openapi.models.shared.ClassItem[]{{
                                        add(new ClassItem() {{
                                            value = "facilis";
                                        }}),
                                        add(new ClassItem() {{
                                            value = "tempore";
                                        }}),
                                    }};
                                    name = "Lucia Kemmer";
                                }}),
                            }};
                            phraseSetReferences = new String[]{{
                                add("aliquid"),
                                add("provident"),
                                add("necessitatibus"),
                            }};
                            phraseSets = new org.openapis.openapi.models.shared.PhraseSetInput[]{{
                                add(new PhraseSetInput() {{
                                    boost = 6389.21;
                                    name = "Raquel Wilderman";
                                    phrases = new org.openapis.openapi.models.shared.Phrase[]{{
                                        add(new Phrase() {{
                                            boost = 8464.09;
                                            value = "maiores";
                                        }}),
                                        add(new Phrase() {{
                                            boost = 6994.79;
                                            value = "dicta";
                                        }}),
                                    }};
                                }}),
                                add(new PhraseSetInput() {{
                                    boost = 2974.37;
                                    name = "Irving Jenkins";
                                    phrases = new org.openapis.openapi.models.shared.Phrase[]{{
                                        add(new Phrase() {{
                                            boost = 2497.96;
                                            value = "occaecati";
                                        }}),
                                        add(new Phrase() {{
                                            boost = 3132.18;
                                            value = "accusamus";
                                        }}),
                                        add(new Phrase() {{
                                            boost = 9654.17;
                                            value = "quidem";
                                        }}),
                                        add(new Phrase() {{
                                            boost = 5884.65;
                                            value = "nam";
                                        }}),
                                    }};
                                }}),
                                add(new PhraseSetInput() {{
                                    boost = 6596.69;
                                    name = "Jaime Will";
                                    phrases = new org.openapis.openapi.models.shared.Phrase[]{{
                                        add(new Phrase() {{
                                            boost = 4238.55;
                                            value = "natus";
                                        }}),
                                        add(new Phrase() {{
                                            boost = 6063.93;
                                            value = "molestiae";
                                        }}),
                                    }};
                                }}),
                            }};
                        }};;
                        alternativeLanguageCodes = new String[]{{
                            add("nihil"),
                        }};
                        audioChannelCount = 301575;
                        diarizationConfig = new SpeakerDiarizationConfigInput() {{
                            enableSpeakerDiarization = false;
                            maxSpeakerCount = 716075;
                            minSpeakerCount = 660174;
                        }};;
                        enableAutomaticPunctuation = false;
                        enableSeparateRecognitionPerChannel = false;
                        enableSpokenEmojis = false;
                        enableSpokenPunctuation = false;
                        enableWordConfidence = false;
                        enableWordTimeOffsets = false;
                        encoding = RecognitionConfigEncodingEnum.FLAC;
                        languageCode = "labore";
                        maxAlternatives = 383462;
                        metadata = new RecognitionMetadata() {{
                            audioTopic = "natus";
                            industryNaicsCodeOfAudio = 749170L;
                            interactionType = RecognitionMetadataInteractionTypeEnum.PHONE_CALL;
                            microphoneDistance = RecognitionMetadataMicrophoneDistanceEnum.FARFIELD;
                            originalMediaType = RecognitionMetadataOriginalMediaTypeEnum.ORIGINAL_MEDIA_TYPE_UNSPECIFIED;
                            originalMimeType = "architecto";
                            recordingDeviceName = "magnam";
                            recordingDeviceType = RecognitionMetadataRecordingDeviceTypeEnum.RECORDING_DEVICE_TYPE_UNSPECIFIED;
                        }};;
                        model = "excepturi";
                        profanityFilter = false;
                        sampleRateHertz = 354047;
                        speechContexts = new org.openapis.openapi.models.shared.SpeechContext[]{{
                            add(new SpeechContext() {{
                                boost = 5518.16;
                                phrases = new String[]{{
                                    add("accusantium"),
                                    add("mollitia"),
                                    add("reiciendis"),
                                }};
                            }}),
                            add(new SpeechContext() {{
                                boost = 6521.03;
                                phrases = new String[]{{
                                    add("eum"),
                                    add("dolor"),
                                }};
                            }}),
                            add(new SpeechContext() {{
                                boost = 8965.47;
                                phrases = new String[]{{
                                    add("nemo"),
                                }};
                            }}),
                        }};
                        useEnhanced = false;
                    }};;
                    outputConfig = new TranscriptOutputConfig() {{
                        gcsUri = "quasi";
                    }};;
                }};;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "eius";
                key = "maxime";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "in";
                uploadProtocol = "architecto";
            }};            

            SpeechSpeechLongrunningrecognizeResponse res = sdk.speech.speechSpeechLongrunningrecognize(req, new SpeechSpeechLongrunningrecognizeSecurity("architecto", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## speechSpeechRecognize

Performs synchronous speech recognition: receive results after all audio has been sent and processed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpeechSpeechRecognizeRequest;
import org.openapis.openapi.models.operations.SpeechSpeechRecognizeResponse;
import org.openapis.openapi.models.operations.SpeechSpeechRecognizeSecurity;
import org.openapis.openapi.models.shared.ABNFGrammar;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClassItem;
import org.openapis.openapi.models.shared.CustomClassInput;
import org.openapis.openapi.models.shared.Phrase;
import org.openapis.openapi.models.shared.PhraseSetInput;
import org.openapis.openapi.models.shared.RecognitionAudio;
import org.openapis.openapi.models.shared.RecognitionConfigEncodingEnum;
import org.openapis.openapi.models.shared.RecognitionConfigInput;
import org.openapis.openapi.models.shared.RecognitionMetadata;
import org.openapis.openapi.models.shared.RecognitionMetadataInteractionTypeEnum;
import org.openapis.openapi.models.shared.RecognitionMetadataMicrophoneDistanceEnum;
import org.openapis.openapi.models.shared.RecognitionMetadataOriginalMediaTypeEnum;
import org.openapis.openapi.models.shared.RecognitionMetadataRecordingDeviceTypeEnum;
import org.openapis.openapi.models.shared.RecognizeRequestInput;
import org.openapis.openapi.models.shared.SpeakerDiarizationConfigInput;
import org.openapis.openapi.models.shared.SpeechAdaptationInput;
import org.openapis.openapi.models.shared.SpeechContext;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpeechSpeechRecognizeRequest req = new SpeechSpeechRecognizeRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                recognizeRequestInput = new RecognizeRequestInput() {{
                    audio = new RecognitionAudio() {{
                        content = "expedita";
                        uri = "http://zesty-sprinter.com";
                    }};;
                    config = new RecognitionConfigInput() {{
                        adaptation = new SpeechAdaptationInput() {{
                            abnfGrammar = new ABNFGrammar() {{
                                abnfStrings = new String[]{{
                                    add("pariatur"),
                                    add("accusantium"),
                                    add("consequuntur"),
                                    add("praesentium"),
                                }};
                            }};;
                            customClasses = new org.openapis.openapi.models.shared.CustomClassInput[]{{
                                add(new CustomClassInput() {{
                                    customClassId = "magni";
                                    items = new org.openapis.openapi.models.shared.ClassItem[]{{
                                        add(new ClassItem() {{
                                            value = "quo";
                                        }}),
                                    }};
                                    name = "Ervin Schoen";
                                }}),
                                add(new CustomClassInput() {{
                                    customClassId = "odit";
                                    items = new org.openapis.openapi.models.shared.ClassItem[]{{
                                        add(new ClassItem() {{
                                            value = "accusantium";
                                        }}),
                                        add(new ClassItem() {{
                                            value = "ab";
                                        }}),
                                    }};
                                    name = "Rickey Hintz";
                                }}),
                                add(new CustomClassInput() {{
                                    customClassId = "nam";
                                    items = new org.openapis.openapi.models.shared.ClassItem[]{{
                                        add(new ClassItem() {{
                                            value = "pariatur";
                                        }}),
                                    }};
                                    name = "Camille Armstrong";
                                }}),
                            }};
                            phraseSetReferences = new String[]{{
                                add("cumque"),
                            }};
                            phraseSets = new org.openapis.openapi.models.shared.PhraseSetInput[]{{
                                add(new PhraseSetInput() {{
                                    boost = 9441.24;
                                    name = "Robin D'Amore";
                                    phrases = new org.openapis.openapi.models.shared.Phrase[]{{
                                        add(new Phrase() {{
                                            boost = 543.38;
                                            value = "quis";
                                        }}),
                                        add(new Phrase() {{
                                            boost = 1999.96;
                                            value = "eos";
                                        }}),
                                    }};
                                }}),
                                add(new PhraseSetInput() {{
                                    boost = 185.21;
                                    name = "Brooke Kohler";
                                    phrases = new org.openapis.openapi.models.shared.Phrase[]{{
                                        add(new Phrase() {{
                                            boost = 9441.2;
                                            value = "recusandae";
                                        }}),
                                        add(new Phrase() {{
                                            boost = 6082.53;
                                            value = "facilis";
                                        }}),
                                    }};
                                }}),
                            }};
                        }};;
                        alternativeLanguageCodes = new String[]{{
                            add("voluptatem"),
                            add("porro"),
                            add("consequuntur"),
                        }};
                        audioChannelCount = 500026;
                        diarizationConfig = new SpeakerDiarizationConfigInput() {{
                            enableSpeakerDiarization = false;
                            maxSpeakerCount = 621479;
                            minSpeakerCount = 50370;
                        }};;
                        enableAutomaticPunctuation = false;
                        enableSeparateRecognitionPerChannel = false;
                        enableSpokenEmojis = false;
                        enableSpokenPunctuation = false;
                        enableWordConfidence = false;
                        enableWordTimeOffsets = false;
                        encoding = RecognitionConfigEncodingEnum.AMR_WB;
                        languageCode = "rerum";
                        maxAlternatives = 237893;
                        metadata = new RecognitionMetadata() {{
                            audioTopic = "asperiores";
                            industryNaicsCodeOfAudio = 934214L;
                            interactionType = RecognitionMetadataInteractionTypeEnum.PRESENTATION;
                            microphoneDistance = RecognitionMetadataMicrophoneDistanceEnum.MIDFIELD;
                            originalMediaType = RecognitionMetadataOriginalMediaTypeEnum.VIDEO;
                            originalMimeType = "deleniti";
                            recordingDeviceName = "pariatur";
                            recordingDeviceType = RecognitionMetadataRecordingDeviceTypeEnum.VEHICLE;
                        }};;
                        model = "nobis";
                        profanityFilter = false;
                        sampleRateHertz = 730122;
                        speechContexts = new org.openapis.openapi.models.shared.SpeechContext[]{{
                            add(new SpeechContext() {{
                                boost = 3119.45;
                                phrases = new String[]{{
                                    add("aliquid"),
                                    add("dolorem"),
                                    add("dolorem"),
                                }};
                            }}),
                            add(new SpeechContext() {{
                                boost = 2224.43;
                                phrases = new String[]{{
                                    add("ipsum"),
                                }};
                            }}),
                            add(new SpeechContext() {{
                                boost = 9443.73;
                                phrases = new String[]{{
                                    add("cum"),
                                    add("voluptate"),
                                    add("dignissimos"),
                                }};
                            }}),
                            add(new SpeechContext() {{
                                boost = 9702.37;
                                phrases = new String[]{{
                                    add("dolorum"),
                                }};
                            }}),
                        }};
                        useEnhanced = false;
                    }};;
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "ipsa";
                key = "iure";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "accusamus";
                uploadProtocol = "quidem";
            }};            

            SpeechSpeechRecognizeResponse res = sdk.speech.speechSpeechRecognize(req, new SpeechSpeechRecognizeSecurity("voluptatibus", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.recognizeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
