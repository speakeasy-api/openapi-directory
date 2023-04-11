import { SpeakeasyBase } from "../../../internal/utils";
import { VersionFile } from "./versionfile";
/**
 * Successful response
 */
export declare class ListVersionFilesResponse extends SpeakeasyBase {
    /**
     *  The list of paths to the hashes of the files in the specified version.
     */
    files?: VersionFile[];
    /**
     * The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListVersionFiles`. Page tokens are short-lived and should not be stored.
     */
    nextPageToken?: string;
}
