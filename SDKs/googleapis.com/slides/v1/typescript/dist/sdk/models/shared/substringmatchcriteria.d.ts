import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A criteria that matches a specific string of text in a shape or table.
 */
export declare class SubstringMatchCriteria extends SpeakeasyBase {
    /**
     * Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case insensitive.
     */
    matchCase?: boolean;
    /**
     * The text to search for in the shape or table.
     */
    text?: string;
}
