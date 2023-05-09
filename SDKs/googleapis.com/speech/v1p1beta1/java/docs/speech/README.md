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
import org.openapis.openapi.models.shared.Entry;
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
import org.openapis.openapi.models.shared.TranscriptNormalization;
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
                        diarizationSpeakerCount = 287991;
                        enableAutomaticPunctuation = false;
                        enableSeparateRecognitionPerChannel = false;
                        enableSpeakerDiarization = false;
                        enableSpokenEmojis = false;
                        enableSpokenPunctuation = false;
                        enableWordConfidence = false;
                        enableWordTimeOffsets = false;
                        encoding = RecognitionConfigEncodingEnum.FLAC;
                        languageCode = "suscipit";
                        maxAlternatives = 618016;
                        metadata = new RecognitionMetadata() {{
                            audioTopic = "nobis";
                            industryNaicsCodeOfAudio = 428769L;
                            interactionType = RecognitionMetadataInteractionTypeEnum.VOICE_COMMAND;
                            microphoneDistance = RecognitionMetadataMicrophoneDistanceEnum.MICROPHONE_DISTANCE_UNSPECIFIED;
                            obfuscatedId = "architecto";
                            originalMediaType = RecognitionMetadataOriginalMediaTypeEnum.ORIGINAL_MEDIA_TYPE_UNSPECIFIED;
                            originalMimeType = "et";
                            recordingDeviceName = "excepturi";
                            recordingDeviceType = RecognitionMetadataRecordingDeviceTypeEnum.PC;
                        }};;
                        model = "provident";
                        profanityFilter = false;
                        sampleRateHertz = 551816;
                        speechContexts = new org.openapis.openapi.models.shared.SpeechContext[]{{
                            add(new SpeechContext() {{
                                boost = 336.25;
                                phrases = new String[]{{
                                    add("reiciendis"),
                                    add("mollitia"),
                                    add("ad"),
                                }};
                            }}),
                            add(new SpeechContext() {{
                                boost = 4314.18;
                                phrases = new String[]{{
                                    add("necessitatibus"),
                                }};
                            }}),
                            add(new SpeechContext() {{
                                boost = 1412.64;
                                phrases = new String[]{{
                                    add("quasi"),
                                    add("iure"),
                                }};
                            }}),
                        }};
                        transcriptNormalization = new TranscriptNormalization() {{
                            entries = new org.openapis.openapi.models.shared.Entry[]{{
                                add(new Entry() {{
                                    caseSensitive = false;
                                    replace = "debitis";
                                    search = "eius";
                                }}),
                                add(new Entry() {{
                                    caseSensitive = false;
                                    replace = "maxime";
                                    search = "deleniti";
                                }}),
                                add(new Entry() {{
                                    caseSensitive = false;
                                    replace = "facilis";
                                    search = "in";
                                }}),
                                add(new Entry() {{
                                    caseSensitive = false;
                                    replace = "architecto";
                                    search = "architecto";
                                }}),
                            }};
                        }};;
                        useEnhanced = false;
                    }};;
                    outputConfig = new TranscriptOutputConfig() {{
                        gcsUri = "repudiandae";
                    }};;
                }};;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "repellat";
                key = "quibusdam";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "pariatur";
                uploadProtocol = "accusantium";
            }};            

            SpeechSpeechLongrunningrecognizeResponse res = sdk.speech.speechSpeechLongrunningrecognize(req, new SpeechSpeechLongrunningrecognizeSecurity("consequuntur", "praesentium") {{
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
import org.openapis.openapi.models.shared.Entry;
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
import org.openapis.openapi.models.shared.TranscriptNormalization;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpeechSpeechRecognizeRequest req = new SpeechSpeechRecognizeRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                recognizeRequestInput = new RecognizeRequestInput() {{
                    audio = new RecognitionAudio() {{
                        content = "magni";
                        uri = "http://sore-statin.org";
                    }};;
                    config = new RecognitionConfigInput() {{
                        adaptation = new SpeechAdaptationInput() {{
                            abnfGrammar = new ABNFGrammar() {{
                                abnfStrings = new String[]{{
                                    add("ea"),
                                    add("excepturi"),
                                    add("odit"),
                                    add("ea"),
                                }};
                            }};;
                            customClasses = new org.openapis.openapi.models.shared.CustomClassInput[]{{
                                add(new CustomClassInput() {{
                                    customClassId = "ab";
                                    items = new org.openapis.openapi.models.shared.ClassItem[]{{
                                        add(new ClassItem() {{
                                            value = "quidem";
                                        }}),
                                        add(new ClassItem() {{
                                            value = "ipsam";
                                        }}),
                                        add(new ClassItem() {{
                                            value = "voluptate";
                                        }}),
                                        add(new ClassItem() {{
                                            value = "autem";
                                        }}),
                                    }};
                                    name = "Gary Streich";
                                }}),
                            }};
                            phraseSetReferences = new String[]{{
                                add("fugiat"),
                            }};
                            phraseSets = new org.openapis.openapi.models.shared.PhraseSetInput[]{{
                                add(new PhraseSetInput() {{
                                    boost = 117.14;
                                    name = "Lewis Welch";
                                    phrases = new org.openapis.openapi.models.shared.Phrase[]{{
                                        add(new Phrase() {{
                                            boost = 3394.04;
                                            value = "totam";
                                        }}),
                                    }};
                                }}),
                            }};
                        }};;
                        alternativeLanguageCodes = new String[]{{
                            add("eaque"),
                            add("quis"),
                        }};
                        audioChannelCount = 199996;
                        diarizationConfig = new SpeakerDiarizationConfigInput() {{
                            enableSpeakerDiarization = false;
                            maxSpeakerCount = 179490;
                            minSpeakerCount = 18521;
                        }};;
                        diarizationSpeakerCount = 170986;
                        enableAutomaticPunctuation = false;
                        enableSeparateRecognitionPerChannel = false;
                        enableSpeakerDiarization = false;
                        enableSpokenEmojis = false;
                        enableSpokenPunctuation = false;
                        enableWordConfidence = false;
                        enableWordTimeOffsets = false;
                        encoding = RecognitionConfigEncodingEnum.SPEEX_WITH_HEADER_BYTE;
                        languageCode = "quam";
                        maxAlternatives = 223924;
                        metadata = new RecognitionMetadata() {{
                            audioTopic = "vero";
                            industryNaicsCodeOfAudio = 345352L;
                            interactionType = RecognitionMetadataInteractionTypeEnum.DICTATION;
                            microphoneDistance = RecognitionMetadataMicrophoneDistanceEnum.FARFIELD;
                            obfuscatedId = "omnis";
                            originalMediaType = RecognitionMetadataOriginalMediaTypeEnum.VIDEO;
                            originalMimeType = "perspiciatis";
                            recordingDeviceName = "voluptatem";
                            recordingDeviceType = RecognitionMetadataRecordingDeviceTypeEnum.OTHER_OUTDOOR_DEVICE;
                        }};;
                        model = "consequuntur";
                        profanityFilter = false;
                        sampleRateHertz = 500026;
                        speechContexts = new org.openapis.openapi.models.shared.SpeechContext[]{{
                            add(new SpeechContext() {{
                                boost = 503.7;
                                phrases = new String[]{{
                                    add("rerum"),
                                    add("adipisci"),
                                    add("asperiores"),
                                }};
                            }}),
                            add(new SpeechContext() {{
                                boost = 9342.14;
                                phrases = new String[]{{
                                    add("iste"),
                                    add("dolorum"),
                                }};
                            }}),
                            add(new SpeechContext() {{
                                boost = 5356.33;
                                phrases = new String[]{{
                                    add("provident"),
                                    add("nobis"),
                                    add("libero"),
                                    add("delectus"),
                                }};
                            }}),
                        }};
                        transcriptNormalization = new TranscriptNormalization() {{
                            entries = new org.openapis.openapi.models.shared.Entry[]{{
                                add(new Entry() {{
                                    caseSensitive = false;
                                    replace = "quos";
                                    search = "aliquid";
                                }}),
                                add(new Entry() {{
                                    caseSensitive = false;
                                    replace = "dolorem";
                                    search = "dolorem";
                                }}),
                            }};
                        }};;
                        useEnhanced = false;
                    }};;
                }};;
                accessToken = "dolor";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "hic";
                key = "excepturi";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "dignissimos";
                uploadProtocol = "reiciendis";
            }};            

            SpeechSpeechRecognizeResponse res = sdk.speech.speechSpeechRecognize(req, new SpeechSpeechRecognizeSecurity("amet", "dolorum") {{
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
