import { SpeakeasyBase } from "../../../internal/utils";
import { SavedReport } from "./savedreport";
/**
 * Response definition for the saved reports list rpc.
 */
export declare class ListSavedReportsResponse extends SpeakeasyBase {
    /**
     * Continuation token used to page through reports. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string;
    /**
     * The reports returned in this list response.
     */
    savedReports?: SavedReport[];
}
