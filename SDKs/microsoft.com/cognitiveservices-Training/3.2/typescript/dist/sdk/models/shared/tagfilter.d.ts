import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Model that query for counting of images whose suggested tags match given tags and their probability are greater than or equal to the given threshold.
 */
export declare class TagFilter extends SpeakeasyBase {
    /**
     * Existing TagIds in project to get suggested tags count for.
     */
    tagIds?: string[];
    /**
     * Confidence threshold to filter suggested tags on.
     */
    threshold?: number;
}
