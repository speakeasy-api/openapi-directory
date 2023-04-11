import { SpeakeasyBase } from "../../../internal/utils";
import { CdnSettings } from "./cdnsettings";
import { LiveStreamContentDetails } from "./livestreamcontentdetails";
import { LiveStreamSnippet } from "./livestreamsnippet";
import { LiveStreamStatus } from "./livestreamstatus";
/**
 * A live stream describes a live ingestion point.
 */
export declare class LiveStream extends SpeakeasyBase {
    /**
     * Brief description of the live stream cdn settings.
     */
    cdn?: CdnSettings;
    /**
     * Detailed settings of a stream.
     */
    contentDetails?: LiveStreamContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube assigns to uniquely identify the stream.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#liveStream".
     */
    kind?: string;
    snippet?: LiveStreamSnippet;
    /**
     * Brief description of the live stream status.
     */
    status?: LiveStreamStatus;
}
