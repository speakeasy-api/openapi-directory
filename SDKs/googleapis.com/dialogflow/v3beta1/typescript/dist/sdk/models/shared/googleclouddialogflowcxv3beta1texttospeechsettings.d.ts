import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig } from "./googleclouddialogflowcxv3beta1synthesizespeechconfig";
/**
 * Settings related to speech generating.
 */
export declare class GoogleCloudDialogflowCxV3beta1TextToSpeechSettings extends SpeakeasyBase {
    /**
     * Configuration of how speech should be synthesized, mapping from language (https://dialogflow.com/docs/reference/language) to SynthesizeSpeechConfig.
     */
    synthesizeSpeechConfigs?: Record<string, GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig>;
}
