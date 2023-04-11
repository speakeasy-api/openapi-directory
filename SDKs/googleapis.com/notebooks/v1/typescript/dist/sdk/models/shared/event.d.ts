import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Event type.
 */
export declare enum EventTypeEnum {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED",
    Idle = "IDLE",
    Heartbeat = "HEARTBEAT",
    Health = "HEALTH",
    Maintenance = "MAINTENANCE"
}
/**
 * The definition of an Event for a managed / semi-managed notebook instance.
 */
export declare class Event extends SpeakeasyBase {
    /**
     * Optional. Event details. This field is used to pass event information.
     */
    details?: Record<string, string>;
    /**
     * Event report time.
     */
    reportTime?: string;
    /**
     * Event type.
     */
    type?: EventTypeEnum;
}
