import { SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
export declare class ActivityWithMember extends SpeakeasyBase {
    /**
     * The type of activity - what action was done by the member. This is a legacy field, use activity_type_key instead.
     */
    activityType?: string;
    /**
     * The key for a custom activity type for the workspace. Will create a new activity type if it does not exist.
     */
    activityTypeKey?: string;
    /**
     * A description of the activity; displayed in the timeline
     */
    description?: string;
    /**
     * Supply a key that must be unique or leave blank to have one generated.
     */
    key?: string;
    /**
     * A URL for the activity; displayed in the timeline
     */
    link?: string;
    /**
     * The text for the timeline link
     */
    linkText?: string;
    member?: Member;
    /**
     * The date and time the activity occurred; defaults to now
     */
    occurredAt?: string;
    /**
     * Key-value pairs to provide contextual metadata about an activity.
     */
    properties?: Record<string, any>;
    /**
     * A title for the activity; displayed in the timeline
     */
    title: string;
    /**
     * A custom weight to be used in filters and reports; defaults to 1.
     */
    weight?: string;
}
