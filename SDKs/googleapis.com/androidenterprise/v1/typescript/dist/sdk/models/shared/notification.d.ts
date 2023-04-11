import { SpeakeasyBase } from "../../../internal/utils";
import { AppRestrictionsSchemaChangeEvent } from "./apprestrictionsschemachangeevent";
import { AppUpdateEvent } from "./appupdateevent";
import { DeviceReportUpdateEvent } from "./devicereportupdateevent";
import { InstallFailureEvent } from "./installfailureevent";
import { NewDeviceEvent } from "./newdeviceevent";
import { NewPermissionsEvent } from "./newpermissionsevent";
import { ProductApprovalEvent } from "./productapprovalevent";
import { ProductAvailabilityChangeEvent } from "./productavailabilitychangeevent";
/**
 * Type of the notification.
 */
export declare enum NotificationNotificationTypeEnum {
    Unknown = "unknown",
    TestNotification = "testNotification",
    ProductApproval = "productApproval",
    InstallFailure = "installFailure",
    AppUpdate = "appUpdate",
    NewPermissions = "newPermissions",
    AppRestricionsSchemaChange = "appRestricionsSchemaChange",
    ProductAvailabilityChange = "productAvailabilityChange",
    NewDevice = "newDevice",
    DeviceReportUpdate = "deviceReportUpdate"
}
/**
 * A notification of one event relating to an enterprise.
 */
export declare class Notification extends SpeakeasyBase {
    /**
     * An event generated when a new app version is uploaded to Google Play and its app restrictions schema changed. To fetch the app restrictions schema for an app, use Products.getAppRestrictionsSchema on the EMM API.
     */
    appRestrictionsSchemaChangeEvent?: AppRestrictionsSchemaChangeEvent;
    /**
     * An event generated when a new version of an app is uploaded to Google Play. Notifications are sent for new public versions only: alpha, beta, or canary versions do not generate this event. To fetch up-to-date version history for an app, use Products.Get on the EMM API.
     */
    appUpdateEvent?: AppUpdateEvent;
    /**
     * An event generated when an updated device report is available.
     */
    deviceReportUpdateEvent?: DeviceReportUpdateEvent;
    /**
     * The ID of the enterprise for which the notification is sent. This will always be present.
     */
    enterpriseId?: string;
    /**
     * An event generated when an app installation failed on a device
     */
    installFailureEvent?: InstallFailureEvent;
    /**
     * An event generated when a new device is ready to be managed.
     */
    newDeviceEvent?: NewDeviceEvent;
    /**
     * An event generated when new permissions are added to an app.
     */
    newPermissionsEvent?: NewPermissionsEvent;
    /**
     * Type of the notification.
     */
    notificationType?: NotificationNotificationTypeEnum;
    /**
     * An event generated when a product's approval status is changed.
     */
    productApprovalEvent?: ProductApprovalEvent;
    /**
     * An event generated whenever a product's availability changes.
     */
    productAvailabilityChangeEvent?: ProductAvailabilityChangeEvent;
    /**
     * The time when the notification was published in milliseconds since 1970-01-01T00:00:00Z. This will always be present.
     */
    timestampMillis?: string;
}
