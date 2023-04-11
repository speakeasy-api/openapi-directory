import { SpeakeasyBase } from "../../../internal/utils";
import { Revision } from "./revision";
/**
 * A list of revisions of a file.
 */
export declare class RevisionList extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#revisionList".
     */
    kind?: string;
    /**
     * The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
    /**
     * The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    revisions?: Revision[];
}
