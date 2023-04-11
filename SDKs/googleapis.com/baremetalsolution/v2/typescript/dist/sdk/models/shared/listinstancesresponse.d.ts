import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * Response message for the list of servers.
 */
export declare class ListInstancesResponse extends SpeakeasyBase {
    /**
     * The list of servers.
     */
    instances?: Instance[];
    /**
     * A token identifying a page of results from the server.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
