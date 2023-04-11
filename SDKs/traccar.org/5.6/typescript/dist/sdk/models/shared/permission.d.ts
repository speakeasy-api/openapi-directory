import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 }
 */
export declare class Permission extends SpeakeasyBase {
    /**
     * Computed Attribute Id, can be second parameter only
     */
    attributeId?: number;
    /**
     * Calendar Id, can be second parameter only and only in combination with userId
     */
    calendarId?: number;
    /**
     * Device Id, can be first parameter or second only in combination with userId
     */
    deviceId?: number;
    /**
     * Driver Id, can be second parameter only
     */
    driverId?: number;
    /**
     * Geofence Id, can be second parameter only
     */
    geofenceId?: number;
    /**
     * Group Id, can be first parameter or second only in combination with userId
     */
    groupId?: number;
    /**
     * User Id, can be second parameter only and only in combination with userId
     */
    managedUserId?: number;
    /**
     * Notification Id, can be second parameter only
     */
    notificationId?: number;
    /**
     * User Id, can be only first parameter
     */
    userId?: number;
}
