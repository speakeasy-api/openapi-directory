import { SpeakeasyBase } from "../../../internal/utils";
import { Drive } from "./drive";
/**
 * A list of shared drives.
 */
export declare class DriveList extends SpeakeasyBase {
    /**
     * The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    items?: Drive[];
    /**
     * This is always drive#driveList
     */
    kind?: string;
    /**
     * The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
}
