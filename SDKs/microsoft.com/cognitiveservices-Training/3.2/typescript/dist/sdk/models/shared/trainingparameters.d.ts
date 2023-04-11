import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters used for training.
 */
export declare class TrainingParameters extends SpeakeasyBase {
    /**
     * List of tags selected for this training session, other tags in the project will be ignored.
     */
    selectedTags?: string[];
}
