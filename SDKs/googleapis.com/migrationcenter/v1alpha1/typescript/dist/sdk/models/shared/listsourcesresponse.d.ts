import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * Response message for listing sources.
 */
export declare class ListSourcesResponse extends SpeakeasyBase {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string;
    /**
     * The list of sources.
     */
    sources?: Source[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
