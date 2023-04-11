import { SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";
/**
 * ListBackupsResponse is the result of ListBackupsRequest.
 */
export declare class ListBackupsResponse extends SpeakeasyBase {
    /**
     * A list of backups in the project for the specified location. If the `{location}` value in the request is "-", the response contains a list of backups from all locations. If any location is unreachable, the response will only return backups in reachable locations and the "unreachable" field will be populated with a list of unreachable locations.
     */
    backups?: Backup[];
    /**
     * The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
