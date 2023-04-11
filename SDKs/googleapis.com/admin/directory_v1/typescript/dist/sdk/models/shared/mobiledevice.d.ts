import { SpeakeasyBase } from "../../../internal/utils";
export declare class MobileDeviceApplications extends SpeakeasyBase {
    /**
     * The application's display name. An example is `Browser`.
     */
    displayName?: string;
    /**
     * The application's package name. An example is `com.android.browser`.
     */
    packageName?: string;
    /**
     * The list of permissions of this application. These can be either a standard Android permission or one defined by the application, and are found in an application's [Android manifest](https://developer.android.com/guide/topics/manifest/uses-permission-element.html). Examples of a Calendar application's permissions are `READ_CALENDAR`, or `MANAGE_ACCOUNTS`.
     */
    permission?: string[];
    /**
     * The application's version code. An example is `13`.
     */
    versionCode?: number;
    /**
     * The application's version name. An example is `3.2-140714`.
     */
    versionName?: string;
}
/**
 * Google Workspace Mobile Management includes Android, [Google Sync](https://support.google.com/a/answer/135937), and iOS devices. For more information about common group mobile device API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices.html).
 */
export declare class MobileDevice extends SpeakeasyBase {
    /**
     * Adb (USB debugging) enabled or disabled on device (Read-only)
     */
    adbStatus?: boolean;
    /**
     * The list of applications installed on an Android mobile device. It is not applicable to Google Sync and iOS devices. The list includes any Android applications that access Google Workspace data. When updating an applications list, it is important to note that updates replace the existing list. If the Android device has two existing applications and the API updates the list with five applications, the is now the updated list of five applications.
     */
    applications?: MobileDeviceApplications[];
    /**
     * The device's baseband version.
     */
    basebandVersion?: string;
    /**
     * Mobile Device Bootloader version (Read-only)
     */
    bootloaderVersion?: string;
    /**
     * Mobile Device Brand (Read-only)
     */
    brand?: string;
    /**
     * The device's operating system build number.
     */
    buildNumber?: string;
    /**
     * The default locale used on the device.
     */
    defaultLanguage?: string;
    /**
     * Developer options enabled or disabled on device (Read-only)
     */
    developerOptionsStatus?: boolean;
    /**
     * The compromised device status.
     */
    deviceCompromisedStatus?: string;
    /**
     * The serial number for a Google Sync mobile device. For Android and iOS devices, this is a software generated unique identifier.
     */
    deviceId?: string;
    /**
     * DevicePasswordStatus (Read-only)
     */
    devicePasswordStatus?: string;
    /**
     * The list of the owner's email addresses. If your application needs the current list of user emails, use the [get](/admin-sdk/directory/v1/reference/mobiledevices/get.html) method. For additional information, see the [retrieve a user](/admin-sdk/directory/v1/guides/manage-users#get_user) method.
     */
    email?: string[];
    /**
     * Mobile Device Encryption Status (Read-only)
     */
    encryptionStatus?: string;
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Date and time the device was first synchronized with the policy settings in the G Suite administrator control panel (Read-only)
     */
    firstSync?: Date;
    /**
     * Mobile Device Hardware (Read-only)
     */
    hardware?: string;
    /**
     * The IMEI/MEID unique identifier for Android hardware. It is not applicable to Google Sync devices. When adding an Android mobile device, this is an optional property. When updating one of these devices, this is a read-only property.
     */
    hardwareId?: string;
    /**
     * The device's IMEI number.
     */
    imei?: string;
    /**
     * The device's kernel version.
     */
    kernelVersion?: string;
    /**
     * The type of the API resource. For Mobiledevices resources, the value is `admin#directory#mobiledevice`.
     */
    kind?: string;
    /**
     * Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)
     */
    lastSync?: Date;
    /**
     * Boolean indicating if this account is on owner/primary profile or not.
     */
    managedAccountIsOnOwnerProfile?: boolean;
    /**
     * Mobile Device manufacturer (Read-only)
     */
    manufacturer?: string;
    /**
     * The device's MEID number.
     */
    meid?: string;
    /**
     * The mobile device's model name, for example Nexus S. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile=devices#update_mobile_device).
     */
    model?: string;
    /**
     * The list of the owner's user names. If your application needs the current list of device owner names, use the [get](/admin-sdk/directory/v1/reference/mobiledevices/get.html) method. For more information about retrieving mobile device user information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-users#get_user).
     */
    name?: string[];
    /**
     * Mobile Device mobile or network operator (if available) (Read-only)
     */
    networkOperator?: string;
    /**
     * The mobile device's operating system, for example IOS 4.3 or Android 2.3.5. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device).
     */
    os?: string;
    /**
     * The list of accounts added on device (Read-only)
     */
    otherAccountsInfo?: string[];
    /**
     * DMAgentPermission (Read-only)
     */
    privilege?: string;
    /**
     * Mobile Device release version version (Read-only)
     */
    releaseVersion?: string;
    /**
     * The unique ID the API service uses to identify the mobile device.
     */
    resourceId?: string;
    /**
     * Mobile Device Security patch level (Read-only)
     */
    securityPatchLevel?: string;
    /**
     * The device's serial number.
     */
    serialNumber?: string;
    /**
     * The device's status.
     */
    status?: string;
    /**
     * Work profile supported on device (Read-only)
     */
    supportsWorkProfile?: boolean;
    /**
     * The type of mobile device.
     */
    type?: string;
    /**
     * Unknown sources enabled or disabled on device (Read-only)
     */
    unknownSourcesStatus?: boolean;
    /**
     * Gives information about the device such as `os` version. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device).
     */
    userAgent?: string;
    /**
     * The device's MAC address on Wi-Fi networks.
     */
    wifiMacAddress?: string;
}
