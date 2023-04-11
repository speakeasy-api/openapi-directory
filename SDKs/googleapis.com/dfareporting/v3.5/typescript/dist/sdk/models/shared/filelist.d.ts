import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
/**
 * List of files for a report.
 */
export declare class FileList extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The files returned in this response.
     */
    items?: File[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#fileList".
     */
    kind?: string;
    /**
     * Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
     */
    nextPageToken?: string;
}
