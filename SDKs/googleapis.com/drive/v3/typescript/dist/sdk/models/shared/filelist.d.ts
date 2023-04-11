import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
/**
 * A list of files.
 */
export declare class FileList extends SpeakeasyBase {
    /**
     * The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    files?: File[];
    /**
     * Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "user" or "drive".
     */
    incompleteSearch?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#fileList".
     */
    kind?: string;
    /**
     * The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
}
