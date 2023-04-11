import { SpeakeasyBase } from "../../../internal/utils";
import { SavedReport } from "./savedreport";
/**
 * Successful response
 */
export declare class SavedReports extends SpeakeasyBase {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The saved reports returned in this list response.
     */
    items?: SavedReport[];
    /**
     * Kind of list this is, in this case adsense#savedReports.
     */
    kind?: string;
    /**
     * Continuation token used to page through saved reports. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
}
