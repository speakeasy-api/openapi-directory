import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedSecurityOverrides } from "./advancedsecurityoverrides";
import { AlwaysOnVpnPackage } from "./alwaysonvpnpackage";
import { ApplicationPolicy } from "./applicationpolicy";
import { ChoosePrivateKeyRule } from "./chooseprivatekeyrule";
import { ComplianceRule } from "./compliancerule";
import { CrossProfilePolicies } from "./crossprofilepolicies";
import { KioskCustomization } from "./kioskcustomization";
import { OncCertificateProvider } from "./onccertificateprovider";
import { PackageNameList } from "./packagenamelist";
import { PasswordRequirements } from "./passwordrequirements";
import { PermissionGrant } from "./permissiongrant";
import { PersistentPreferredActivity } from "./persistentpreferredactivity";
import { PersonalUsagePolicies } from "./personalusagepolicies";
import { PolicyEnforcementRule } from "./policyenforcementrule";
import { ProxyInfo } from "./proxyinfo";
import { SetupAction } from "./setupaction";
import { StatusReportingSettings } from "./statusreportingsettings";
import { SystemUpdate } from "./systemupdate";
import { UsageLog } from "./usagelog";
import { UserFacingMessage } from "./userfacingmessage";
export declare enum PolicyAndroidDevicePolicyTracksEnum {
    AppTrackUnspecified = "APP_TRACK_UNSPECIFIED",
    Production = "PRODUCTION",
    Beta = "BETA"
}
/**
 * Deprecated. Use autoUpdateMode instead.When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect.The app auto update policy, which controls when automatic app updates can be applied.
 */
export declare enum PolicyAppAutoUpdatePolicyEnum {
    AppAutoUpdatePolicyUnspecified = "APP_AUTO_UPDATE_POLICY_UNSPECIFIED",
    ChoiceToTheUser = "CHOICE_TO_THE_USER",
    Never = "NEVER",
    WifiOnly = "WIFI_ONLY",
    Always = "ALWAYS"
}
/**
 * Whether auto date, time, and time zone are enabled on a company-owned device. If this is set, then autoTimeRequired is ignored.
 */
export declare enum PolicyAutoDateAndTimeZoneEnum {
    AutoDateAndTimeZoneUnspecified = "AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED",
    AutoDateAndTimeZoneUserChoice = "AUTO_DATE_AND_TIME_ZONE_USER_CHOICE",
    AutoDateAndTimeZoneEnforced = "AUTO_DATE_AND_TIME_ZONE_ENFORCED"
}
/**
 * Controls the use of the camera and whether the user has access to the camera access toggle.
 */
export declare enum PolicyCameraAccessEnum {
    CameraAccessUnspecified = "CAMERA_ACCESS_UNSPECIFIED",
    CameraAccessUserChoice = "CAMERA_ACCESS_USER_CHOICE",
    CameraAccessDisabled = "CAMERA_ACCESS_DISABLED",
    CameraAccessEnforced = "CAMERA_ACCESS_ENFORCED"
}
/**
 * The default permission policy for runtime permission requests.
 */
export declare enum PolicyDefaultPermissionPolicyEnum {
    PermissionPolicyUnspecified = "PERMISSION_POLICY_UNSPECIFIED",
    Prompt = "PROMPT",
    Grant = "GRANT",
    Deny = "DENY"
}
/**
 * Whether encryption is enabled
 */
export declare enum PolicyEncryptionPolicyEnum {
    EncryptionPolicyUnspecified = "ENCRYPTION_POLICY_UNSPECIFIED",
    EnabledWithoutPassword = "ENABLED_WITHOUT_PASSWORD",
    EnabledWithPassword = "ENABLED_WITH_PASSWORD"
}
export declare enum PolicyKeyguardDisabledFeaturesEnum {
    KeyguardDisabledFeatureUnspecified = "KEYGUARD_DISABLED_FEATURE_UNSPECIFIED",
    Camera = "CAMERA",
    Notifications = "NOTIFICATIONS",
    UnredactedNotifications = "UNREDACTED_NOTIFICATIONS",
    TrustAgents = "TRUST_AGENTS",
    DisableFingerprint = "DISABLE_FINGERPRINT",
    DisableRemoteInput = "DISABLE_REMOTE_INPUT",
    Face = "FACE",
    Iris = "IRIS",
    Biometrics = "BIOMETRICS",
    AllFeatures = "ALL_FEATURES"
}
/**
 * The degree of location detection enabled.
 */
export declare enum PolicyLocationModeEnum {
    LocationModeUnspecified = "LOCATION_MODE_UNSPECIFIED",
    HighAccuracy = "HIGH_ACCURACY",
    SensorsOnly = "SENSORS_ONLY",
    BatterySaving = "BATTERY_SAVING",
    Off = "OFF",
    LocationUserChoice = "LOCATION_USER_CHOICE",
    LocationEnforced = "LOCATION_ENFORCED",
    LocationDisabled = "LOCATION_DISABLED"
}
/**
 * Controls the use of the microphone and whether the user has access to the microphone access toggle. This applies only on fully managed devices.
 */
export declare enum PolicyMicrophoneAccessEnum {
    MicrophoneAccessUnspecified = "MICROPHONE_ACCESS_UNSPECIFIED",
    MicrophoneAccessUserChoice = "MICROPHONE_ACCESS_USER_CHOICE",
    MicrophoneAccessDisabled = "MICROPHONE_ACCESS_DISABLED",
    MicrophoneAccessEnforced = "MICROPHONE_ACCESS_ENFORCED"
}
/**
 * This mode controls which apps are available to the user in the Play Store and the behavior on the device when apps are removed from the policy.
 */
export declare enum PolicyPlayStoreModeEnum {
    PlayStoreModeUnspecified = "PLAY_STORE_MODE_UNSPECIFIED",
    Whitelist = "WHITELIST",
    Blacklist = "BLACKLIST"
}
/**
 * Controls whether preferential network service is enabled on the work profile. For example, an organization may have an agreement with a carrier that all of the work data from its employees' devices will be sent via a network service dedicated for enterprise use. An example of a supported preferential network service is the enterprise slice on 5G networks. This has no effect on fully managed devices.
 */
export declare enum PolicyPreferentialNetworkServiceEnum {
    PreferentialNetworkServiceUnspecified = "PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED",
    PreferentialNetworkServiceDisabled = "PREFERENTIAL_NETWORK_SERVICE_DISABLED",
    PreferentialNetworkServiceEnabled = "PREFERENTIAL_NETWORK_SERVICE_ENABLED"
}
export declare enum PolicyStayOnPluggedModesEnum {
    BatteryPluggedModeUnspecified = "BATTERY_PLUGGED_MODE_UNSPECIFIED",
    Ac = "AC",
    Usb = "USB",
    Wireless = "WIRELESS"
}
/**
 * A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it.
 */
export declare class Policy extends SpeakeasyBase {
    /**
     * Account types that can't be managed by the user.
     */
    accountTypesWithManagementDisabled?: string[];
    /**
     * Whether adding new users and profiles is disabled.
     */
    addUserDisabled?: boolean;
    /**
     * Whether adjusting the master volume is disabled. Also mutes the device.
     */
    adjustVolumeDisabled?: boolean;
    /**
     * Security policies set to secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values.
     */
    advancedSecurityOverrides?: AdvancedSecurityOverrides;
    /**
     * Configuration for an always-on VPN connection.
     */
    alwaysOnVpnPackage?: AlwaysOnVpnPackage;
    /**
     * The app tracks for Android Device Policy the device can access. The device receives the latest version among all accessible tracks. If no tracks are specified, then the device only uses the production track.
     */
    androidDevicePolicyTracks?: PolicyAndroidDevicePolicyTracksEnum[];
    /**
     * Deprecated. Use autoUpdateMode instead.When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect.The app auto update policy, which controls when automatic app updates can be applied.
     */
    appAutoUpdatePolicy?: PolicyAppAutoUpdatePolicyEnum;
    /**
     * Policy applied to apps.
     */
    applications?: ApplicationPolicy[];
    /**
     * Whether auto date, time, and time zone are enabled on a company-owned device. If this is set, then autoTimeRequired is ignored.
     */
    autoDateAndTimeZone?: PolicyAutoDateAndTimeZoneEnum;
    /**
     * Whether auto time is required, which prevents the user from manually setting the date and time. If autoDateAndTimeZone is set, this field is ignored.
     */
    autoTimeRequired?: boolean;
    /**
     * Whether applications other than the ones configured in applications are blocked from being installed. When set, applications that were installed under a previous policy but no longer appear in the policy are automatically uninstalled.
     */
    blockApplicationsEnabled?: boolean;
    /**
     * Whether configuring bluetooth is disabled.
     */
    bluetoothConfigDisabled?: boolean;
    /**
     * Whether bluetooth contact sharing is disabled.
     */
    bluetoothContactSharingDisabled?: boolean;
    /**
     * Whether bluetooth is disabled. Prefer this setting over bluetooth_config_disabled because bluetooth_config_disabled can be bypassed by the user.
     */
    bluetoothDisabled?: boolean;
    /**
     * Controls the use of the camera and whether the user has access to the camera access toggle.
     */
    cameraAccess?: PolicyCameraAccessEnum;
    /**
     * If camera_access is set to any value other than CAMERA_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether cameras are disabled: If true, all cameras are disabled, otherwise they are available. For fully managed devices this field applies for all apps on the device. For work profiles, this field applies only to apps in the work profile, and the camera access of apps outside the work profile is unaffected.
     */
    cameraDisabled?: boolean;
    /**
     * Whether configuring cell broadcast is disabled.
     */
    cellBroadcastsConfigDisabled?: boolean;
    /**
     * Rules for determining apps' access to private keys. See ChoosePrivateKeyRule for details.
     */
    choosePrivateKeyRules?: ChoosePrivateKeyRule[];
    /**
     * Rules declaring which mitigating actions to take when a device is not compliant with its policy. When the conditions for multiple rules are satisfied, all of the mitigating actions for the rules are taken. There is a maximum limit of 100 rules. Use policy enforcement rules instead.
     */
    complianceRules?: ComplianceRule[];
    /**
     * Whether creating windows besides app windows is disabled.
     */
    createWindowsDisabled?: boolean;
    /**
     * Whether configuring user credentials is disabled.
     */
    credentialsConfigDisabled?: boolean;
    /**
     * Cross-profile policies applied on the device.
     */
    crossProfilePolicies?: CrossProfilePolicies;
    /**
     * Whether roaming data services are disabled.
     */
    dataRoamingDisabled?: boolean;
    /**
     * Whether the user is allowed to enable debugging features.
     */
    debuggingFeaturesAllowed?: boolean;
    /**
     * The default permission policy for runtime permission requests.
     */
    defaultPermissionPolicy?: PolicyDefaultPermissionPolicyEnum;
    /**
     * Provides a user-facing message with locale info. The maximum message length is 4096 characters.
     */
    deviceOwnerLockScreenInfo?: UserFacingMessage;
    /**
     * Whether encryption is enabled
     */
    encryptionPolicy?: PolicyEncryptionPolicyEnum;
    /**
     * Whether app verification is force-enabled.
     */
    ensureVerifyAppsEnabled?: boolean;
    /**
     * Whether factory resetting from settings is disabled.
     */
    factoryResetDisabled?: boolean;
    /**
     * Email addresses of device administrators for factory reset protection. When the device is factory reset, it will require one of these admins to log in with the Google account email and password to unlock the device. If no admins are specified, the device won't provide factory reset protection.
     */
    frpAdminEmails?: string[];
    /**
     * Whether the user is allowed to have fun. Controls whether the Easter egg game in Settings is disabled.
     */
    funDisabled?: boolean;
    /**
     * Whether user installation of apps is disabled.
     */
    installAppsDisabled?: boolean;
    /**
     * This field has no effect.
     */
    installUnknownSourcesAllowed?: boolean;
    /**
     * If true, this disables the Lock Screen (https://source.android.com/docs/core/display/multi_display/lock-screen) for primary and/or secondary displays.
     */
    keyguardDisabled?: boolean;
    /**
     * Disabled keyguard customizations, such as widgets.
     */
    keyguardDisabledFeatures?: PolicyKeyguardDisabledFeaturesEnum[];
    /**
     * Whether the kiosk custom launcher is enabled. This replaces the home screen with a launcher that locks down the device to the apps installed via the applications setting. Apps appear on a single page in alphabetical order. Use kioskCustomization to further configure the kiosk device behavior.
     */
    kioskCustomLauncherEnabled?: boolean;
    /**
     * Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.
     */
    kioskCustomization?: KioskCustomization;
    /**
     * The degree of location detection enabled.
     */
    locationMode?: PolicyLocationModeEnum;
    /**
     * Provides a user-facing message with locale info. The maximum message length is 4096 characters.
     */
    longSupportMessage?: UserFacingMessage;
    /**
     * Maximum time in milliseconds for user activity until the device locks. A value of 0 means there is no restriction.
     */
    maximumTimeToLock?: string;
    /**
     * Controls the use of the microphone and whether the user has access to the microphone access toggle. This applies only on fully managed devices.
     */
    microphoneAccess?: PolicyMicrophoneAccessEnum;
    /**
     * The minimum allowed Android API level.
     */
    minimumApiLevel?: number;
    /**
     * Whether configuring mobile networks is disabled.
     */
    mobileNetworksConfigDisabled?: boolean;
    /**
     * Whether adding or removing accounts is disabled.
     */
    modifyAccountsDisabled?: boolean;
    /**
     * Whether the user mounting physical external media is disabled.
     */
    mountPhysicalMediaDisabled?: boolean;
    /**
     * The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}.
     */
    name?: string;
    /**
     * Whether the network escape hatch is enabled. If a network connection can't be made at boot time, the escape hatch prompts the user to temporarily connect to a network in order to refresh the device policy. After applying policy, the temporary network will be forgotten and the device will continue booting. This prevents being unable to connect to a network if there is no suitable network in the last policy and the device boots into an app in lock task mode, or the user is otherwise unable to reach device settings.Note: Setting wifiConfigDisabled to true will override this setting under specific circumstances. Please see wifiConfigDisabled for further details.
     */
    networkEscapeHatchEnabled?: boolean;
    /**
     * Whether resetting network settings is disabled.
     */
    networkResetDisabled?: boolean;
    /**
     * This feature is not generally available.
     */
    oncCertificateProviders?: OncCertificateProvider[];
    /**
     * Network configuration for the device. See configure networks for more information.
     */
    openNetworkConfiguration?: Record<string, any>;
    /**
     * Whether using NFC to beam data from apps is disabled.
     */
    outgoingBeamDisabled?: boolean;
    /**
     * Whether outgoing calls are disabled.
     */
    outgoingCallsDisabled?: boolean;
    /**
     * Password requirement policies. Different policies can be set for work profile or fully managed devices by setting the password_scope field in the policy.
     */
    passwordPolicies?: PasswordRequirements[];
    /**
     * Requirements for the password used to unlock a device.
     */
    passwordRequirements?: PasswordRequirements;
    /**
     * Explicit permission or group grants or denials for all apps. These values override the default_permission_policy.
     */
    permissionGrants?: PermissionGrant[];
    /**
     * A list of package names.
     */
    permittedAccessibilityServices?: PackageNameList;
    /**
     * A list of package names.
     */
    permittedInputMethods?: PackageNameList;
    /**
     * Default intent handler activities.
     */
    persistentPreferredActivities?: PersistentPreferredActivity[];
    /**
     * Policies controlling personal usage on a company-owned device with a work profile.
     */
    personalUsagePolicies?: PersonalUsagePolicies;
    /**
     * This mode controls which apps are available to the user in the Play Store and the behavior on the device when apps are removed from the policy.
     */
    playStoreMode?: PolicyPlayStoreModeEnum;
    /**
     * Rules that define the behavior when a particular policy can not be applied on device
     */
    policyEnforcementRules?: PolicyEnforcementRule[];
    /**
     * Controls whether preferential network service is enabled on the work profile. For example, an organization may have an agreement with a carrier that all of the work data from its employees' devices will be sent via a network service dedicated for enterprise use. An example of a supported preferential network service is the enterprise slice on 5G networks. This has no effect on fully managed devices.
     */
    preferentialNetworkService?: PolicyPreferentialNetworkServiceEnum;
    /**
     * Allows showing UI on a device for a user to choose a private key alias if there are no matching rules in ChoosePrivateKeyRules. For devices below Android P, setting this may leave enterprise keys vulnerable.
     */
    privateKeySelectionEnabled?: boolean;
    /**
     * Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field.
     */
    recommendedGlobalProxy?: ProxyInfo;
    /**
     * Whether removing other users is disabled.
     */
    removeUserDisabled?: boolean;
    /**
     * Whether rebooting the device into safe boot is disabled.
     */
    safeBootDisabled?: boolean;
    /**
     * Whether screen capture is disabled.
     */
    screenCaptureDisabled?: boolean;
    /**
     * Whether changing the user icon is disabled.
     */
    setUserIconDisabled?: boolean;
    /**
     * Whether changing the wallpaper is disabled.
     */
    setWallpaperDisabled?: boolean;
    /**
     * Action to take during the setup process. At most one action may be specified.
     */
    setupActions?: SetupAction[];
    /**
     * Whether location sharing is disabled. share_location_disabled is supported for both fully managed devices and personally owned work profiles.
     */
    shareLocationDisabled?: boolean;
    /**
     * Provides a user-facing message with locale info. The maximum message length is 4096 characters.
     */
    shortSupportMessage?: UserFacingMessage;
    /**
     * Flag to skip hints on the first use. Enterprise admin can enable the system recommendation for apps to skip their user tutorial and other introductory hints on first start-up.
     */
    skipFirstUseHintsEnabled?: boolean;
    /**
     * Whether sending and receiving SMS messages is disabled.
     */
    smsDisabled?: boolean;
    /**
     * Whether the status bar is disabled. This disables notifications, quick settings, and other screen overlays that allow escape from full-screen mode. DEPRECATED. To disable the status bar on a kiosk device, use InstallType KIOSK or kioskCustomLauncherEnabled.
     */
    statusBarDisabled?: boolean;
    /**
     * Settings controlling the behavior of status reports.
     */
    statusReportingSettings?: StatusReportingSettings;
    /**
     * The battery plugged in modes for which the device stays on. When using this setting, it is recommended to clear maximum_time_to_lock so that the device doesn't lock itself while it stays on.
     */
    stayOnPluggedModes?: PolicyStayOnPluggedModesEnum[];
    /**
     * Configuration for managing system updates
     */
    systemUpdate?: SystemUpdate;
    /**
     * Whether configuring tethering and portable hotspots is disabled.
     */
    tetheringConfigDisabled?: boolean;
    /**
     * Whether user uninstallation of applications is disabled. This prevents apps from being uninstalled, even those removed using applications
     */
    uninstallAppsDisabled?: boolean;
    /**
     * If microphone_access is set to any value other than MICROPHONE_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether microphones are disabled: If true, all microphones are disabled, otherwise they are available. This is available only on fully managed devices.
     */
    unmuteMicrophoneDisabled?: boolean;
    /**
     * Controls types of device activity logs collected from the device and reported via Pub/Sub notification (https://developers.google.com/android/management/notifications).
     */
    usageLog?: UsageLog;
    /**
     * Whether transferring files over USB is disabled. This is supported only on company-owned devices.
     */
    usbFileTransferDisabled?: boolean;
    /**
     * Whether USB storage is enabled. Deprecated.
     */
    usbMassStorageEnabled?: boolean;
    /**
     * The version of the policy. This is a read-only field. The version is incremented each time the policy is updated.
     */
    version?: string;
    /**
     * Whether configuring VPN is disabled.
     */
    vpnConfigDisabled?: boolean;
    /**
     * Whether configuring Wi-Fi access points is disabled. Note: If a network connection can't be made at boot time and configuring Wi-Fi is disabled then network escape hatch will be shown in order to refresh the device policy (see networkEscapeHatchEnabled).
     */
    wifiConfigDisabled?: boolean;
    /**
     * DEPRECATED - Use wifi_config_disabled.
     */
    wifiConfigsLockdownEnabled?: boolean;
}
