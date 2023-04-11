import { SpeakeasyBase } from "../../../internal/utils";
import { ReportRow } from "./reportrow";
/**
 * Response message for the ReportService.Search method.
 */
export declare class SearchResponse extends SpeakeasyBase {
    /**
     * Token which can be sent as `page_token` to retrieve the next page. If omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Rows that matched the search query.
     */
    results?: ReportRow[];
}
