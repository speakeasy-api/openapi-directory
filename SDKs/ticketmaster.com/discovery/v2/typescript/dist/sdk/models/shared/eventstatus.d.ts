import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The event's status code
 */
export declare enum EventStatusCodeEnum {
    Onsale = "onsale",
    Offsale = "offsale",
    Canceled = "canceled",
    Postponed = "postponed",
    Rescheduled = "rescheduled"
}
/**
 * Event's Status
 */
export declare class EventStatus extends SpeakeasyBase {
    /**
     * The event's status code
     */
    code?: EventStatusCodeEnum;
}
