import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1beta1ErrorReport } from "./googleplaydeveloperreportingv1beta1errorreport";
/**
 * Response with a paginated list of error reports matching the search query.
 */
export declare class GooglePlayDeveloperReportingV1beta1SearchErrorReportsResponse extends SpeakeasyBase {
    /**
     * Error reports that were found.
     */
    errorReports?: GooglePlayDeveloperReportingV1beta1ErrorReport[];
    /**
     * Page token to fetch the next page of reports.
     */
    nextPageToken?: string;
}
