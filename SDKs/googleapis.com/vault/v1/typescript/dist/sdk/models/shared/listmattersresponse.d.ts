import { SpeakeasyBase } from "../../../internal/utils";
import { Matter } from "./matter";
/**
 * Provides the list of matters.
 */
export declare class ListMattersResponse extends SpeakeasyBase {
    /**
     * List of matters.
     */
    matters?: Matter[];
    /**
     * Page token to retrieve the next page of results in the list.
     */
    nextPageToken?: string;
}
