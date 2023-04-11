import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The type of the exit event.
 */
export declare enum ExitEventTypeEnum {
    ExitEventTypeUnspecified = "EXIT_EVENT_TYPE_UNSPECIFIED",
    ExitEventTypeDefault = "EXIT_EVENT_TYPE_DEFAULT",
    ExitEventTypeBackup = "EXIT_EVENT_TYPE_BACKUP"
}
/**
 * Exit event of the creative.
 */
export declare class ExitEvent extends SpeakeasyBase {
    /**
     * The name of the click tag of the exit event. The name must be unique within one creative. Leave it empty or unset for creatives containing image assets only.
     */
    name?: string;
    /**
     * The name used to identify this event in reports. Leave it empty or unset for creatives containing image assets only.
     */
    reportingName?: string;
    /**
     * Required. The type of the exit event.
     */
    type?: ExitEventTypeEnum;
    /**
     * Required. The click through URL of the exit event. This is required when type is: * `EXIT_EVENT_TYPE_DEFAULT` * `EXIT_EVENT_TYPE_BACKUP`
     */
    url?: string;
}
