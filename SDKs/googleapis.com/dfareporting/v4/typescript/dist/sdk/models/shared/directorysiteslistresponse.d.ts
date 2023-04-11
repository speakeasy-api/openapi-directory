import { SpeakeasyBase } from "../../../internal/utils";
import { DirectorySite } from "./directorysite";
/**
 * Directory Site List Response
 */
export declare class DirectorySitesListResponse extends SpeakeasyBase {
    /**
     * Directory site collection.
     */
    directorySites?: DirectorySite[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySitesListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
