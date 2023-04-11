import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
/**
 * A list of files.
 */
export declare class FileList extends SpeakeasyBase {
    /**
     * The ETag of the list.
     */
    etag?: string;
    /**
     * Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "default" or "drive".
     */
    incompleteSearch?: boolean;
    /**
     * The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    items?: File[];
    /**
     * This is always drive#fileList.
     */
    kind?: string;
    /**
     * A link to the next page of files.
     */
    nextLink?: string;
    /**
     * The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
    /**
     * A link back to this list.
     */
    selfLink?: string;
}
