import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Model metadata that is specific to translation.
 */
export declare class TranslationModelMetadata extends SpeakeasyBase {
    /**
     * The resource name of the model to use as a baseline to train the custom model. If unset, we use the default base model provided by Google Translate. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}`
     */
    baseModel?: string;
    /**
     * Output only. Inferred from the dataset. The source languge (The BCP-47 language code) that is used for training.
     */
    sourceLanguageCode?: string;
    /**
     * Output only. The target languge (The BCP-47 language code) that is used for training.
     */
    targetLanguageCode?: string;
}
