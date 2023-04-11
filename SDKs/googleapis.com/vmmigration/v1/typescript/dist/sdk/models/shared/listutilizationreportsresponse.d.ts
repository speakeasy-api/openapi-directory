import { SpeakeasyBase } from "../../../internal/utils";
import { UtilizationReport } from "./utilizationreport";
/**
 * Response message for 'ListUtilizationReports' request.
 */
export declare class ListUtilizationReportsResponse extends SpeakeasyBase {
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[];
    /**
     * Output only. The list of reports.
     */
    utilizationReports?: UtilizationReport[];
}
