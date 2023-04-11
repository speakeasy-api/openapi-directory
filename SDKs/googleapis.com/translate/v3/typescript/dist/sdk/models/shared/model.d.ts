import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A trained translation model.
 */
export declare class Model extends SpeakeasyBase {
    /**
     * Output only. Timestamp when the model resource was created, which is also when the training started.
     */
    createTime?: string;
    /**
     * The dataset from which the model is trained, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}`
     */
    dataset?: string;
    /**
     * Output only. Timestamp when the model training finished and ready to be used for translation.
     */
    deployTime?: string;
    /**
     * The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.
     */
    displayName?: string;
    /**
     * The resource name of the model, in form of `projects/{project-number-or-id}/locations/{location_id}/models/{model_id}`
     */
    name?: string;
    /**
     * Output only. The BCP-47 language code of the source language.
     */
    sourceLanguageCode?: string;
    /**
     * Output only. The BCP-47 language code of the target language.
     */
    targetLanguageCode?: string;
    /**
     * Output only. Number of examples (sentence pairs) used to test the model.
     */
    testExampleCount?: number;
    /**
     * Output only. Number of examples (sentence pairs) used to train the model.
     */
    trainExampleCount?: number;
    /**
     * Output only. Timestamp when this model was last updated.
     */
    updateTime?: string;
    /**
     * Output only. Number of examples (sentence pairs) used to validate the model.
     */
    validateExampleCount?: number;
}
/**
 * A trained translation model.
 */
export declare class ModelInput extends SpeakeasyBase {
    /**
     * The dataset from which the model is trained, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}`
     */
    dataset?: string;
    /**
     * The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.
     */
    displayName?: string;
    /**
     * The resource name of the model, in form of `projects/{project-number-or-id}/locations/{location_id}/models/{model_id}`
     */
    name?: string;
}
