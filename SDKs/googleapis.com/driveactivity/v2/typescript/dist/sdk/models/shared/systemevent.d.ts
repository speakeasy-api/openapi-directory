import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the system event that may triggered activity.
 */
export declare enum SystemEventTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    UserDeletion = "USER_DELETION",
    TrashAutoPurge = "TRASH_AUTO_PURGE"
}
/**
 * Event triggered by system operations instead of end users.
 */
export declare class SystemEvent extends SpeakeasyBase {
    /**
     * The type of the system event that may triggered activity.
     */
    type?: SystemEventTypeEnum;
}
