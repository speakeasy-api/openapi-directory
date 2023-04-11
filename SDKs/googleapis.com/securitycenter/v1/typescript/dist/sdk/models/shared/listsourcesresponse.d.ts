import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * Response message for listing sources.
 */
export declare class ListSourcesResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string;
    /**
     * Sources belonging to the requested parent.
     */
    sources?: Source[];
}
