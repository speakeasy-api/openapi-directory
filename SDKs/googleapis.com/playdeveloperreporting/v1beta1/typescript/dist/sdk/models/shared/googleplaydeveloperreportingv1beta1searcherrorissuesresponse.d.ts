import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1beta1ErrorIssue } from "./googleplaydeveloperreportingv1beta1errorissue";
/**
 * Response with a paginated list of issues that matched the request.
 */
export declare class GooglePlayDeveloperReportingV1beta1SearchErrorIssuesResponse extends SpeakeasyBase {
    /**
     * ErrorIssues that were found.
     */
    errorIssues?: GooglePlayDeveloperReportingV1beta1ErrorIssue[];
    /**
     * Continuation token to fetch the next page of data.
     */
    nextPageToken?: string;
}
