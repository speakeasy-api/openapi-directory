import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A dataset that hosts the examples (sentence pairs) used for translation models.
 */
export declare class Dataset extends SpeakeasyBase {
    /**
     * Output only. Timestamp when this dataset was created.
     */
    createTime?: string;
    /**
     * The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.
     */
    displayName?: string;
    /**
     * Output only. The number of examples in the dataset.
     */
    exampleCount?: number;
    /**
     * The resource name of the dataset, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}`
     */
    name?: string;
    /**
     * The BCP-47 language code of the source language.
     */
    sourceLanguageCode?: string;
    /**
     * The BCP-47 language code of the target language.
     */
    targetLanguageCode?: string;
    /**
     * Output only. Number of test examples (sentence pairs).
     */
    testExampleCount?: number;
    /**
     * Output only. Number of training examples (sentence pairs).
     */
    trainExampleCount?: number;
    /**
     * Output only. Timestamp when this dataset was last updated.
     */
    updateTime?: string;
    /**
     * Output only. Number of validation examples (sentence pairs).
     */
    validateExampleCount?: number;
}
/**
 * A dataset that hosts the examples (sentence pairs) used for translation models.
 */
export declare class DatasetInput extends SpeakeasyBase {
    /**
     * The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.
     */
    displayName?: string;
    /**
     * The resource name of the dataset, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}`
     */
    name?: string;
    /**
     * The BCP-47 language code of the source language.
     */
    sourceLanguageCode?: string;
    /**
     * The BCP-47 language code of the target language.
     */
    targetLanguageCode?: string;
}
