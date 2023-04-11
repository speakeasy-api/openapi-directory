import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1OutputAudioConfig } from "./googleclouddialogflowv2beta1outputaudioconfig";
/**
 * Represents the natural language speech audio to be played to the end user.
 */
export declare class GoogleCloudDialogflowV2beta1OutputAudio extends SpeakeasyBase {
    /**
     * Required. The natural language speech audio.
     */
    audio?: string;
    /**
     * Instructs the speech synthesizer how to generate the output audio content. If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent.
     */
    config?: GoogleCloudDialogflowV2beta1OutputAudioConfig;
}
