import { SpeakeasyBase } from "../../../internal/utils";
import { LiveBroadcastContentDetails } from "./livebroadcastcontentdetails";
import { LiveBroadcastSnippet } from "./livebroadcastsnippet";
import { LiveBroadcastStatistics } from "./livebroadcaststatistics";
import { LiveBroadcastStatus } from "./livebroadcaststatus";
/**
 * A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube.
 */
export declare class LiveBroadcast extends SpeakeasyBase {
    /**
     * Detailed settings of a broadcast.
     */
    contentDetails?: LiveBroadcastContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube assigns to uniquely identify the broadcast.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcast".
     */
    kind?: string;
    /**
     * Basic broadcast information.
     */
    snippet?: LiveBroadcastSnippet;
    /**
     * Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.
     */
    statistics?: LiveBroadcastStatistics;
    /**
     * Live broadcast state.
     */
    status?: LiveBroadcastStatus;
}
