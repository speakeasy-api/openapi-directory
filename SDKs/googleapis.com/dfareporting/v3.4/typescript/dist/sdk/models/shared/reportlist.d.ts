import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
/**
 * Represents the list of reports.
 */
export declare class ReportList extends SpeakeasyBase {
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The reports returned in this response.
     */
    items?: Report[];
    /**
     * The kind of list this is, in this case dfareporting#reportList.
     */
    kind?: string;
    /**
     * Continuation token used to page through reports. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
     */
    nextPageToken?: string;
}
