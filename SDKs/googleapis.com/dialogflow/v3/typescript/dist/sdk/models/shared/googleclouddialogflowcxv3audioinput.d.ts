import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3InputAudioConfig } from "./googleclouddialogflowcxv3inputaudioconfig";
/**
 * Represents the natural speech audio to be processed.
 */
export declare class GoogleCloudDialogflowCxV3AudioInput extends SpeakeasyBase {
    /**
     * The natural language speech audio to be processed. A single request can contain up to 2 minutes of speech audio data. The transcribed text cannot contain more than 256 bytes. For non-streaming audio detect intent, both `config` and `audio` must be provided. For streaming audio detect intent, `config` must be provided in the first request and `audio` must be provided in all following requests.
     */
    audio?: string;
    /**
     * Instructs the speech recognizer on how to process the audio content.
     */
    config?: GoogleCloudDialogflowCxV3InputAudioConfig;
}
