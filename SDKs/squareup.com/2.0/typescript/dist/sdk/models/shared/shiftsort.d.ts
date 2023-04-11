import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sets the sort order of search results.
 */
export declare class ShiftSort extends SpeakeasyBase {
    /**
     * The field to sort on.
     */
    field?: string;
    /**
     * The order in which results are returned. Defaults to DESC.
     */
    order?: string;
}
