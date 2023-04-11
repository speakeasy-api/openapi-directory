import { SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";
/**
 * Sessions contain metadata, such as a user-friendly name and time interval information.
 */
export declare class Session extends SpeakeasyBase {
    /**
     * Session active time. While start_time_millis and end_time_millis define the full session time, the active time can be shorter and specified by active_time_millis. If the inactive time during the session is known, it should also be inserted via a com.google.activity.segment data point with a STILL activity value
     */
    activeTimeMillis?: string;
    /**
     * The type of activity this session represents.
     */
    activityType?: number;
    application?: Application;
    /**
     * A description for this session.
     */
    description?: string;
    /**
     * An end time, in milliseconds since epoch, inclusive.
     */
    endTimeMillis?: string;
    /**
     * A client-generated identifier that is unique across all sessions owned by this particular user.
     */
    id?: string;
    /**
     * A timestamp that indicates when the session was last modified.
     */
    modifiedTimeMillis?: string;
    /**
     * A human readable name of the session.
     */
    name?: string;
    /**
     * A start time, in milliseconds since epoch, inclusive.
     */
    startTimeMillis?: string;
}
