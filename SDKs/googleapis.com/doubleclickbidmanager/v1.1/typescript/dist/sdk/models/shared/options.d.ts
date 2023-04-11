import { SpeakeasyBase } from "../../../internal/utils";
import { PathQueryOptions } from "./pathqueryoptions";
/**
 * Additional query options.
 */
export declare class Options extends SpeakeasyBase {
    /**
     * Set to true and filter your report by `FILTER_INSERTION_ORDER` or `FILTER_LINE_ITEM` to include data for audience lists specifically targeted by those items.
     */
    includeOnlyTargetedUserLists?: boolean;
    /**
     * Path Query Options for Report Options.
     */
    pathQueryOptions?: PathQueryOptions;
}
