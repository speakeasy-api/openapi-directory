import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1BargeInConfig } from "./googleclouddialogflowv2beta1bargeinconfig";
import { GoogleCloudDialogflowV2beta1SpeechContext } from "./googleclouddialogflowv2beta1speechcontext";
/**
 * Required. Audio encoding of the audio content to process.
 */
export declare enum GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum {
    AudioEncodingUnspecified = "AUDIO_ENCODING_UNSPECIFIED",
    AudioEncodingLinear16 = "AUDIO_ENCODING_LINEAR_16",
    AudioEncodingFlac = "AUDIO_ENCODING_FLAC",
    AudioEncodingMulaw = "AUDIO_ENCODING_MULAW",
    AudioEncodingAmr = "AUDIO_ENCODING_AMR",
    AudioEncodingAmrWb = "AUDIO_ENCODING_AMR_WB",
    AudioEncodingOggOpus = "AUDIO_ENCODING_OGG_OPUS",
    AudioEncodingSpeexWithHeaderByte = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"
}
/**
 * Which variant of the Speech model to use.
 */
export declare enum GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum {
    SpeechModelVariantUnspecified = "SPEECH_MODEL_VARIANT_UNSPECIFIED",
    UseBestAvailable = "USE_BEST_AVAILABLE",
    UseStandard = "USE_STANDARD",
    UseEnhanced = "USE_ENHANCED"
}
/**
 * Instructs the speech recognizer on how to process the audio content.
 */
export declare class GoogleCloudDialogflowV2beta1InputAudioConfig extends SpeakeasyBase {
    /**
     * Required. Audio encoding of the audio content to process.
     */
    audioEncoding?: GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum;
    /**
     * Configuration of the barge-in behavior. Barge-in instructs the API to return a detected utterance at a proper time while the client is playing back the response audio from a previous request. When the client sees the utterance, it should stop the playback and immediately get ready for receiving the responses for the current request. The barge-in handling requires the client to start streaming audio input as soon as it starts playing back the audio from the previous response. The playback is modeled into two phases: * No barge-in phase: which goes first and during which speech detection should not be carried out. * Barge-in phase: which follows the no barge-in phase and during which the API starts speech detection and may inform the client that an utterance has been detected. Note that no-speech event is not expected in this phase. The client provides this configuration in terms of the durations of those two phases. The durations are measured in terms of the audio length fromt the the start of the input audio. The flow goes like below: --> Time without speech detection | utterance only | utterance or no-speech event | | +-------------+ | +------------+ | +---------------+ ----------+ no barge-in +-|-+ barge-in +-|-+ normal period +----------- +-------------+ | +------------+ | +---------------+ No-speech event is a response with END_OF_UTTERANCE without any transcript following up.
     */
    bargeInConfig?: GoogleCloudDialogflowV2beta1BargeInConfig;
    /**
     * Only used in Participants.AnalyzeContent and Participants.StreamingAnalyzeContent. If `false` and recognition doesn't return any result, trigger `NO_SPEECH_RECOGNIZED` event to Dialogflow agent.
     */
    disableNoSpeechRecognizedEvent?: boolean;
    /**
     * If `true`, Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words, e.g. start and end time offsets. If false or unspecified, Speech doesn't return any word-level information.
     */
    enableWordInfo?: boolean;
    /**
     * Required. The language of the supplied audio. Dialogflow does not do translations. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
     */
    languageCode?: string;
    /**
     * Which Speech model to select for the given request. Select the model best suited to your domain to get best results. If a model is not explicitly specified, then we auto-select a model based on the parameters in the InputAudioConfig. If enhanced speech model is enabled for the agent and an enhanced version of the specified model for the language does not exist, then the speech is recognized using the standard version of the specified model. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics#select-model) for more details. If you specify a model, the following models typically have the best performance: - phone_call (best for Agent Assist and telephony) - latest_short (best for Dialogflow non-telephony) - command_and_search (best for very short utterances and commands)
     */
    model?: string;
    /**
     * Which variant of the Speech model to use.
     */
    modelVariant?: GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum;
    /**
     * A list of strings containing words and phrases that the speech recognizer should recognize with higher likelihood. See [the Cloud Speech documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints) for more details. This field is deprecated. Please use [speech_contexts]() instead. If you specify both [phrase_hints]() and [speech_contexts](), Dialogflow will treat the [phrase_hints]() as a single additional [SpeechContext]().
     */
    phraseHints?: string[];
    /**
     * Required. Sample rate (in Hertz) of the audio content sent in the query. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics) for more details.
     */
    sampleRateHertz?: number;
    /**
     * If `false` (default), recognition does not cease until the client closes the stream. If `true`, the recognizer will detect a single spoken utterance in input audio. Recognition ceases when it detects the audio's voice has stopped or paused. In this case, once a detected intent is received, the client should close the stream and start a new request with a new stream as needed. Note: This setting is relevant only for streaming methods. Note: When specified, InputAudioConfig.single_utterance takes precedence over StreamingDetectIntentRequest.single_utterance.
     */
    singleUtterance?: boolean;
    /**
     * Context information to assist speech recognition. See [the Cloud Speech documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints) for more details.
     */
    speechContexts?: GoogleCloudDialogflowV2beta1SpeechContext[];
}
