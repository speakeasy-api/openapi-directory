import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A feedback report submitted by a tester for a release.
 */
export declare class GoogleFirebaseAppdistroV1FeedbackReport extends SpeakeasyBase {
    /**
     * Output only. The time when the feedback report was created.
     */
    createTime?: string;
    /**
     * Output only. A link to the Firebase console displaying the feedback report.
     */
    firebaseConsoleUri?: string;
    /**
     * The name of the feedback report resource. Format: `projects/{project_number}/apps/{app}/releases/{release}/feedbackReports/{feedback_report}`
     */
    name?: string;
    /**
     * Output only. A signed link (which expires in one hour) that lets you directly download the screenshot.
     */
    screenshotUri?: string;
    /**
     * Output only. The resource name of the tester who submitted the feedback report.
     */
    tester?: string;
    /**
     * Output only. The text of the feedback report.
     */
    text?: string;
}
