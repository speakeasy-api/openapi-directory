import { SpeakeasyBase } from "../../../internal/utils";
import { VideoAbuseReportSecondaryReason } from "./videoabusereportsecondaryreason";
/**
 * Basic details about a video category, such as its localized title.
 */
export declare class VideoAbuseReportReasonSnippet extends SpeakeasyBase {
    /**
     * The localized label belonging to this abuse report reason.
     */
    label?: string;
    /**
     * The secondary reasons associated with this reason, if any are available. (There might be 0 or more.)
     */
    secondaryReasons?: VideoAbuseReportSecondaryReason[];
}
