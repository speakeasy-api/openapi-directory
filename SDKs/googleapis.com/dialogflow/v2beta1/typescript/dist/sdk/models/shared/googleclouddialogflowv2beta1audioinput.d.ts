import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1InputAudioConfig } from "./googleclouddialogflowv2beta1inputaudioconfig";
/**
 * Represents the natural language speech audio to be processed.
 */
export declare class GoogleCloudDialogflowV2beta1AudioInput extends SpeakeasyBase {
    /**
     * Required. The natural language speech audio to be processed. A single request can contain up to 1 minute of speech audio data. The transcribed text cannot contain more than 256 bytes for virtual agent interactions.
     */
    audio?: string;
    /**
     * Instructs the speech recognizer on how to process the audio content.
     */
    config?: GoogleCloudDialogflowV2beta1InputAudioConfig;
}
