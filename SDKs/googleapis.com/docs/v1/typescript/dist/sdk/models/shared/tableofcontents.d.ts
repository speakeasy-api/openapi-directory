import { SpeakeasyBase } from "../../../internal/utils";
import { StructuralElement } from "./structuralelement";
/**
 * A StructuralElement representing a table of contents.
 */
export declare class TableOfContents extends SpeakeasyBase {
    /**
     * The content of the table of contents.
     */
    content?: StructuralElement[];
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[];
    /**
     * The suggested insertion IDs. A TableOfContents may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[];
}
