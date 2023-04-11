import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A sentence pair.
 */
export declare class Example extends SpeakeasyBase {
    /**
     * Output only. The resource name of the example, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}/examples/{example_id}'
     */
    name?: string;
    /**
     * Sentence in source language.
     */
    sourceText?: string;
    /**
     * Sentence in target language.
     */
    targetText?: string;
    /**
     * Output only. Usage of the sentence pair. Options are TRAIN|VALIDATION|TEST.
     */
    usage?: string;
}
