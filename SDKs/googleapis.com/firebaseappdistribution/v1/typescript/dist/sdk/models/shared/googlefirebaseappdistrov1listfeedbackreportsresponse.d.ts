import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppdistroV1FeedbackReport } from "./googlefirebaseappdistrov1feedbackreport";
/**
 * The response message for `ListFeedbackReports`.
 */
export declare class GoogleFirebaseAppdistroV1ListFeedbackReportsResponse extends SpeakeasyBase {
    /**
     * The feedback reports
     */
    feedbackReports?: GoogleFirebaseAppdistroV1FeedbackReport[];
    /**
     * A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
