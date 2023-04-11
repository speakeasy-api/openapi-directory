import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single replacement configuration.
 */
export declare class Entry extends SpeakeasyBase {
    /**
     * Whether the search is case sensitive.
     */
    caseSensitive?: boolean;
    /**
     * What to replace with. Max length is 100 characters.
     */
    replace?: string;
    /**
     * What to replace. Max length is 100 characters.
     */
    search?: string;
}
