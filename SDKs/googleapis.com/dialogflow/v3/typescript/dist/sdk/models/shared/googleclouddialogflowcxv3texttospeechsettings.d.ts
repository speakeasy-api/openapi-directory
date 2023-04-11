import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3SynthesizeSpeechConfig } from "./googleclouddialogflowcxv3synthesizespeechconfig";
/**
 * Settings related to speech generating.
 */
export declare class GoogleCloudDialogflowCxV3TextToSpeechSettings extends SpeakeasyBase {
    /**
     * Configuration of how speech should be synthesized, mapping from language (https://dialogflow.com/docs/reference/language) to SynthesizeSpeechConfig.
     */
    synthesizeSpeechConfigs?: Record<string, GoogleCloudDialogflowCxV3SynthesizeSpeechConfig>;
}
