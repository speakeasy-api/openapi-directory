import { SpeakeasyBase } from "../../../internal/utils";
import { Variable } from "./variable";
/**
 * List Variables Response.
 */
export declare class ListVariablesResponse extends SpeakeasyBase {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
    /**
     * All GTM Variables of a GTM Container.
     */
    variable?: Variable[];
}
