import { SpeakeasyBase } from "../../../internal/utils";
import { VideoAbuseReportReason } from "./videoabusereportreason";
/**
 * Successful response
 */
export declare class VideoAbuseReportReasonListResponse extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string;
    /**
     * A list of valid abuse reasons that are used with `video.ReportAbuse`.
     */
    items?: VideoAbuseReportReason[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReasonListResponse"`.
     */
    kind?: string;
    /**
     * The `visitorId` identifies the visitor.
     */
    visitorId?: string;
}
