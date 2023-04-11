import { SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";
/**
 * ListBackupsResponse is the response message for ListBackups method.
 */
export declare class ListBackupsResponse extends SpeakeasyBase {
    /**
     * A list of Cloud AD backups in the domain.
     */
    backups?: Backup[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
