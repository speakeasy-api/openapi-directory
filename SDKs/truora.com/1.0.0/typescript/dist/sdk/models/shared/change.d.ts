import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents changes in check scores between continuous checks
 */
export declare class Change extends SpeakeasyBase {
    /**
     * Old and new score map by dataset
     */
    datasetScoreChanges?: number;
    /**
     * Old and new score list
     */
    scoreChanges?: Change[];
}
