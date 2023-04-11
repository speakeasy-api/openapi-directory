import { SpeakeasyBase } from "../../../internal/utils";
import { WatchTarget } from "./watchtarget";
/**
 * Output only. The most recent error type for an attempted delivery. To begin watching the form again a call can be made to watches.renew which also clears this error information.
 */
export declare enum WatchErrorTypeEnum {
    ErrorTypeUnspecified = "ERROR_TYPE_UNSPECIFIED",
    ProjectNotAuthorized = "PROJECT_NOT_AUTHORIZED",
    NoUserAccess = "NO_USER_ACCESS",
    OtherErrors = "OTHER_ERRORS"
}
/**
 * Required. Which event type to watch for.
 */
export declare enum WatchEventTypeEnum {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED",
    Schema = "SCHEMA",
    Responses = "RESPONSES"
}
/**
 * Output only. The current state of the watch. Additional details about suspended watches can be found by checking the `error_type`.
 */
export declare enum WatchStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Suspended = "SUSPENDED"
}
/**
 * A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew
 */
export declare class Watch extends SpeakeasyBase {
    /**
     * Output only. Timestamp of when this was created.
     */
    createTime?: string;
    /**
     * Output only. The most recent error type for an attempted delivery. To begin watching the form again a call can be made to watches.renew which also clears this error information.
     */
    errorType?: WatchErrorTypeEnum;
    /**
     * Required. Which event type to watch for.
     */
    eventType?: WatchEventTypeEnum;
    /**
     * Output only. Timestamp for when this will expire. Each watches.renew call resets this to seven days in the future.
     */
    expireTime?: string;
    /**
     * Output only. The ID of this watch. See notes on CreateWatchRequest.watch_id.
     */
    id?: string;
    /**
     * Output only. The current state of the watch. Additional details about suspended watches can be found by checking the `error_type`.
     */
    state?: WatchStateEnum;
    /**
     * The target for notification delivery.
     */
    target?: WatchTarget;
}
/**
 * A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew
 */
export declare class WatchInput extends SpeakeasyBase {
    /**
     * Required. Which event type to watch for.
     */
    eventType?: WatchEventTypeEnum;
    /**
     * The target for notification delivery.
     */
    target?: WatchTarget;
}
