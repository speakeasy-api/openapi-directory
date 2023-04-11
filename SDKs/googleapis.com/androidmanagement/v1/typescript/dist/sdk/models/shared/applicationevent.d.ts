import { SpeakeasyBase } from "../../../internal/utils";
/**
 * App event type.
 */
export declare enum ApplicationEventEventTypeEnum {
    ApplicationEventTypeUnspecified = "APPLICATION_EVENT_TYPE_UNSPECIFIED",
    Installed = "INSTALLED",
    Changed = "CHANGED",
    DataCleared = "DATA_CLEARED",
    Removed = "REMOVED",
    Replaced = "REPLACED",
    Restarted = "RESTARTED",
    Pinned = "PINNED",
    Unpinned = "UNPINNED"
}
/**
 * An app-related event.
 */
export declare class ApplicationEvent extends SpeakeasyBase {
    /**
     * The creation time of the event.
     */
    createTime?: string;
    /**
     * App event type.
     */
    eventType?: ApplicationEventEventTypeEnum;
}
