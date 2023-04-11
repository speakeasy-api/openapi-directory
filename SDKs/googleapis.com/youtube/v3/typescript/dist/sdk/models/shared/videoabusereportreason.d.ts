import { SpeakeasyBase } from "../../../internal/utils";
import { VideoAbuseReportReasonSnippet } from "./videoabusereportreasonsnippet";
/**
 * A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`.
 */
export declare class VideoAbuseReportReason extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID of this abuse report reason.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReason"`.
     */
    kind?: string;
    /**
     * Basic details about a video category, such as its localized title.
     */
    snippet?: VideoAbuseReportReasonSnippet;
}
