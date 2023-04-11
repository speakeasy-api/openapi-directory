import { SpeakeasyBase } from "../../../internal/utils";
import { ShiftFilter } from "./shiftfilter";
import { ShiftSort } from "./shiftsort";
/**
 * The parameters of a `Shift` search query, which includes filter and sort options.
 */
export declare class ShiftQuery extends SpeakeasyBase {
    /**
     * Defines a filter used in a search for `Shift` records. `AND` logic is
     *
     * @remarks
     * used by Square's servers to apply each filter property specified.
     */
    filter?: ShiftFilter;
    /**
     * Sets the sort order of search results.
     */
    sort?: ShiftSort;
}
