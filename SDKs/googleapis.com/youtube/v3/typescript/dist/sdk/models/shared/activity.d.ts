import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityContentDetails } from "./activitycontentdetails";
import { ActivitySnippet } from "./activitysnippet";
/**
 * An *activity* resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.
 */
export declare class Activity extends SpeakeasyBase {
    /**
     * Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.
     */
    contentDetails?: ActivityContentDetails;
    /**
     * Etag of this resource
     */
    etag?: string;
    /**
     * The ID that YouTube uses to uniquely identify the activity.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#activity".
     */
    kind?: string;
    /**
     * Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12
     */
    snippet?: ActivitySnippet;
}
