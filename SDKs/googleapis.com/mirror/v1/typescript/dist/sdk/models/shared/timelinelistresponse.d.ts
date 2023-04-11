import { SpeakeasyBase } from "../../../internal/utils";
import { TimelineItem } from "./timelineitem";
/**
 * A list of timeline items. This is the response from the server to GET requests on the timeline collection.
 */
export declare class TimelineListResponse extends SpeakeasyBase {
    /**
     * Items in the timeline.
     */
    items?: TimelineItem[];
    /**
     * The type of resource. This is always mirror#timeline.
     */
    kind?: string;
    /**
     * The next page token. Provide this as the pageToken parameter in the request to retrieve the next page of results.
     */
    nextPageToken?: string;
}
