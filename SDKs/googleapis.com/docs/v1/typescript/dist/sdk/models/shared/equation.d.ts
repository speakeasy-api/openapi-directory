import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A ParagraphElement representing an equation.
 */
export declare class Equation extends SpeakeasyBase {
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[];
    /**
     * The suggested insertion IDs. An Equation may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[];
}
