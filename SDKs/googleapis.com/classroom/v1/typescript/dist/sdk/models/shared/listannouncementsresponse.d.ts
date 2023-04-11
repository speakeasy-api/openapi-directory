import { SpeakeasyBase } from "../../../internal/utils";
import { Announcement } from "./announcement";
/**
 * Response when listing course work.
 */
export declare class ListAnnouncementsResponse extends SpeakeasyBase {
    /**
     * Announcement items that match the request.
     */
    announcements?: Announcement[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string;
}
