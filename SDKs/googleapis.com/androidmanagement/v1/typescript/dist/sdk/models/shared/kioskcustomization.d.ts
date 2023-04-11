import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies whether the Settings app is allowed in kiosk mode.
 */
export declare enum KioskCustomizationDeviceSettingsEnum {
    DeviceSettingsUnspecified = "DEVICE_SETTINGS_UNSPECIFIED",
    SettingsAccessAllowed = "SETTINGS_ACCESS_ALLOWED",
    SettingsAccessBlocked = "SETTINGS_ACCESS_BLOCKED"
}
/**
 * Sets the behavior of a device in kiosk mode when a user presses and holds (long-presses) the Power button.
 */
export declare enum KioskCustomizationPowerButtonActionsEnum {
    PowerButtonActionsUnspecified = "POWER_BUTTON_ACTIONS_UNSPECIFIED",
    PowerButtonAvailable = "POWER_BUTTON_AVAILABLE",
    PowerButtonBlocked = "POWER_BUTTON_BLOCKED"
}
/**
 * Specifies whether system info and notifications are disabled in kiosk mode.
 */
export declare enum KioskCustomizationStatusBarEnum {
    StatusBarUnspecified = "STATUS_BAR_UNSPECIFIED",
    NotificationsAndSystemInfoEnabled = "NOTIFICATIONS_AND_SYSTEM_INFO_ENABLED",
    NotificationsAndSystemInfoDisabled = "NOTIFICATIONS_AND_SYSTEM_INFO_DISABLED",
    SystemInfoOnly = "SYSTEM_INFO_ONLY"
}
/**
 * Specifies whether system error dialogs for crashed or unresponsive apps are blocked in kiosk mode. When blocked, the system will force-stop the app as if the user chooses the "close app" option on the UI.
 */
export declare enum KioskCustomizationSystemErrorWarningsEnum {
    SystemErrorWarningsUnspecified = "SYSTEM_ERROR_WARNINGS_UNSPECIFIED",
    ErrorAndWarningsEnabled = "ERROR_AND_WARNINGS_ENABLED",
    ErrorAndWarningsMuted = "ERROR_AND_WARNINGS_MUTED"
}
/**
 * Specifies which navigation features are enabled (e.g. Home, Overview buttons) in kiosk mode.
 */
export declare enum KioskCustomizationSystemNavigationEnum {
    SystemNavigationUnspecified = "SYSTEM_NAVIGATION_UNSPECIFIED",
    NavigationEnabled = "NAVIGATION_ENABLED",
    NavigationDisabled = "NAVIGATION_DISABLED",
    HomeButtonOnly = "HOME_BUTTON_ONLY"
}
/**
 * Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.
 */
export declare class KioskCustomization extends SpeakeasyBase {
    /**
     * Specifies whether the Settings app is allowed in kiosk mode.
     */
    deviceSettings?: KioskCustomizationDeviceSettingsEnum;
    /**
     * Sets the behavior of a device in kiosk mode when a user presses and holds (long-presses) the Power button.
     */
    powerButtonActions?: KioskCustomizationPowerButtonActionsEnum;
    /**
     * Specifies whether system info and notifications are disabled in kiosk mode.
     */
    statusBar?: KioskCustomizationStatusBarEnum;
    /**
     * Specifies whether system error dialogs for crashed or unresponsive apps are blocked in kiosk mode. When blocked, the system will force-stop the app as if the user chooses the "close app" option on the UI.
     */
    systemErrorWarnings?: KioskCustomizationSystemErrorWarningsEnum;
    /**
     * Specifies which navigation features are enabled (e.g. Home, Overview buttons) in kiosk mode.
     */
    systemNavigation?: KioskCustomizationSystemNavigationEnum;
}
