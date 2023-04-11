import { SpeakeasyBase } from "../../../internal/utils";
export declare class VideoAbuseReport extends SpeakeasyBase {
    /**
     * Additional comments regarding the abuse report.
     */
    comments?: string;
    /**
     * The language that the content was viewed in.
     */
    language?: string;
    /**
     * The high-level, or primary, reason that the content is abusive. The value is an abuse report reason ID.
     */
    reasonId?: string;
    /**
     * The specific, or secondary, reason that this content is abusive (if available). The value is an abuse report reason ID that is a valid secondary reason for the primary reason.
     */
    secondaryReasonId?: string;
    /**
     * The ID that YouTube uses to uniquely identify the video.
     */
    videoId?: string;
}
