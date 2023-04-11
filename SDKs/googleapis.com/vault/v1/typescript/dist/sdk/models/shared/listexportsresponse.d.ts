import { SpeakeasyBase } from "../../../internal/utils";
import { Export } from "./export";
/**
 * The exports for a matter.
 */
export declare class ListExportsResponse extends SpeakeasyBase {
    /**
     * The list of exports.
     */
    exports?: Export[];
    /**
     * Page token to retrieve the next page of results in the list.
     */
    nextPageToken?: string;
}
