import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2OutputAudioConfig } from "./googleclouddialogflowv2outputaudioconfig";
/**
 * Represents the natural language speech audio to be played to the end user.
 */
export declare class GoogleCloudDialogflowV2OutputAudio extends SpeakeasyBase {
    /**
     * The natural language speech audio.
     */
    audio?: string;
    /**
     * Instructs the speech synthesizer on how to generate the output audio content. If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent.
     */
    config?: GoogleCloudDialogflowV2OutputAudioConfig;
}
