import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2OutputAudioConfig } from "./googleclouddialogflowv2outputaudioconfig";
import { GoogleCloudDialogflowV2QueryInput } from "./googleclouddialogflowv2queryinput";
import { GoogleCloudDialogflowV2QueryParameters } from "./googleclouddialogflowv2queryparameters";
/**
 * The request to detect user's intent.
 */
export declare class GoogleCloudDialogflowV2DetectIntentRequest extends SpeakeasyBase {
    /**
     * The natural language speech audio to be processed. This field should be populated iff `query_input` is set to an input audio config. A single request can contain up to 1 minute of speech audio data.
     */
    inputAudio?: string;
    /**
     * Instructs the speech synthesizer on how to generate the output audio content. If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent.
     */
    outputAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;
    /**
     * Mask for output_audio_config indicating which settings in this request-level config should override speech synthesizer settings defined at agent-level. If unspecified or empty, output_audio_config replaces the agent-level config in its entirety.
     */
    outputAudioConfigMask?: string;
    /**
     * Represents the query input. It can contain either: 1. An audio config which instructs the speech recognizer how to process the speech audio. 2. A conversational query in the form of text,. 3. An event that specifies which intent to trigger.
     */
    queryInput?: GoogleCloudDialogflowV2QueryInput;
    /**
     * Represents the parameters of the conversational query.
     */
    queryParams?: GoogleCloudDialogflowV2QueryParameters;
}
