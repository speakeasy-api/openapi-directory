import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
/**
 * A response for listing groups.
 */
export declare class ListGroupsResponse extends SpeakeasyBase {
    /**
     * The list of Group
     */
    groups?: Group[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
