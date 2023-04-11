import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Details associated with a free access plan with limits.
 */
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess extends SpeakeasyBase {
    /**
     * How long a device can use a network for free.
     */
    durationInMinutes?: number;
    /**
     * Whether or not free access is enabled.
     */
    enabled?: boolean;
}
/**
 * Details associated with billing splash.
 */
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling extends SpeakeasyBase {
    /**
     * Details associated with a free access plan with limits.
     */
    freeAccess?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess;
    /**
     * Whether or not billing uses the fast login prepaid access option.
     */
    prepaidAccessFastLoginEnabled?: boolean;
    /**
     * The email address that receives replies from clients.
     */
    replyToEmailAddress?: string;
}
/**
 * How login attempts should be handled when the controller is unreachable. Can be either 'open', 'restricted', or 'default'.
 */
export declare enum UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum {
    Default = "default",
    Open = "open",
    Restricted = "restricted"
}
/**
 * Details associated with guest sponsored splash.
 */
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship extends SpeakeasyBase {
    /**
     * Duration in minutes of sponsored guest authorization. Must be between 1 and 60480 (6 weeks)
     */
    durationInMinutes?: number;
    /**
     * Whether or not guests can specify how much time they are requesting.
     */
    guestCanRequestTimeframe?: boolean;
}
/**
 * The strength of the enforcement of selected system types. Must be one of: 'focused', 'click-through', and 'strict'.
 */
export declare enum UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum {
    ClickThrough = "click-through",
    Focused = "focused",
    Strict = "strict"
}
/**
 * Systems Manager network targeted for sentry enrollment.
 */
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork extends SpeakeasyBase {
    /**
     * The network ID of the Systems Manager network.
     */
    id: string;
}
/**
 * Systems Manager sentry enrollment splash settings.
 */
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment extends SpeakeasyBase {
    /**
     * The system types that the Sentry enforces. Must be included in: 'iOS, 'Android', 'macOS', and 'Windows'.
     */
    enforcedSystems?: string[];
    /**
     * The strength of the enforcement of selected system types. Must be one of: 'focused', 'click-through', and 'strict'.
     */
    strength?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum;
    /**
     * Systems Manager network targeted for sentry enrollment.
     */
    systemsManagerNetwork?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork;
}
/**
 * The format of the encoded contents. Supported formats are 'png', 'gif', and jpg'.
 */
export declare enum UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum {
    Gif = "gif",
    Jpg = "jpg",
    Png = "png"
}
/**
 * Properties for setting a new image.
 */
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage extends SpeakeasyBase {
    /**
     * The file contents (a base 64 encoded string) of your new image.
     */
    contents?: string;
    /**
     * The format of the encoded contents. Supported formats are 'png', 'gif', and jpg'.
     */
    format?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum;
}
/**
 * The image used in the splash page.
 */
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage extends SpeakeasyBase {
    /**
     * The extension of the image file.
     */
    extension?: string;
    /**
     * Properties for setting a new image.
     */
    image?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage;
    /**
     * The MD5 value of the image file. Setting this to null will remove the image from the splash page.
     */
    md5?: string;
}
/**
 * The format of the encoded contents. Supported formats are 'png', 'gif', and jpg'.
 */
export declare enum UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum {
    Gif = "gif",
    Jpg = "jpg",
    Png = "png"
}
/**
 * Properties for setting a new image.
 */
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage extends SpeakeasyBase {
    /**
     * The file contents (a base 64 encoded string) of your new logo.
     */
    contents?: string;
    /**
     * The format of the encoded contents. Supported formats are 'png', 'gif', and jpg'.
     */
    format?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum;
}
/**
 * The logo used in the splash page.
 */
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo extends SpeakeasyBase {
    /**
     * The extension of the logo file.
     */
    extension?: string;
    /**
     * Properties for setting a new image.
     */
    image?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage;
    /**
     * The MD5 value of the logo file. Setting this to null will remove the logo from the splash page.
     */
    md5?: string;
}
/**
 * The format of the encoded contents. Supported formats are 'png', 'gif', and jpg'.
 */
export declare enum UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum {
    Gif = "gif",
    Jpg = "jpg",
    Png = "png"
}
/**
 * Properties for setting a new image.
 */
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage extends SpeakeasyBase {
    /**
     * The file contents (a base 64 encoded string) of your new prepaid front.
     */
    contents?: string;
    /**
     * The format of the encoded contents. Supported formats are 'png', 'gif', and jpg'.
     */
    format?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum;
}
/**
 * The prepaid front image used in the splash page.
 */
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront extends SpeakeasyBase {
    /**
     * The extension of the prepaid front image file.
     */
    extension?: string;
    /**
     * Properties for setting a new image.
     */
    image?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage;
    /**
     * The MD5 value of the prepaid front image file. Setting this to null will remove the prepaid front from the splash page.
     */
    md5?: string;
}
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBody extends SpeakeasyBase {
    /**
     * Whether or not to allow simultaneous logins from different devices.
     */
    allowSimultaneousLogins?: boolean;
    /**
     * Details associated with billing splash.
     */
    billing?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling;
    /**
     * How restricted allowing traffic should be. If true, all traffic types are blocked until the splash page is acknowledged. If false, all non-HTTP traffic is allowed before the splash page is acknowledged.
     */
    blockAllTrafficBeforeSignOn?: boolean;
    /**
     * How login attempts should be handled when the controller is unreachable. Can be either 'open', 'restricted', or 'default'.
     */
    controllerDisconnectionBehavior?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum;
    /**
     * Details associated with guest sponsored splash.
     */
    guestSponsorship?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship;
    /**
     * The custom redirect URL where the users will go after the splash page.
     */
    redirectUrl?: string;
    /**
     * Systems Manager sentry enrollment splash settings.
     */
    sentryEnrollment?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment;
    /**
     * The image used in the splash page.
     */
    splashImage?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage;
    /**
     * The logo used in the splash page.
     */
    splashLogo?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo;
    /**
     * The prepaid front image used in the splash page.
     */
    splashPrepaidFront?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront;
    /**
     * Splash timeout in minutes. This will determine how often users will see the splash page.
     */
    splashTimeout?: number;
    /**
     * [optional] The custom splash URL of the click-through splash page. Note that the URL can be configured without necessarily being used. In order to enable the custom URL, see 'useSplashUrl'
     */
    splashUrl?: string;
    /**
     * The Boolean indicating whether the the user will be redirected to the custom redirect URL after the splash page. A custom redirect URL must be set if this is true.
     */
    useRedirectUrl?: boolean;
    /**
     * [optional] Boolean indicating whether the users will be redirected to the custom splash url. A custom splash URL must be set if this is true. Note that depending on your SSID's access control settings, it may not be possible to use the custom splash URL.
     */
    useSplashUrl?: boolean;
    /**
     * The welcome message for the users on the splash page.
     */
    welcomeMessage?: string;
}
export declare class UpdateNetworkWirelessSsidSplashSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessSsidSplashSettingsRequestBody;
    networkId: string;
    number: string;
}
/**
 * Details associated with a free access plan with limits
 */
export declare class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONBillingFreeAccess extends SpeakeasyBase {
    /**
     * How long a device can use a network for free.
     */
    durationInMinutes?: number;
    /**
     * Whether or not free access is enabled.
     */
    enabled?: boolean;
}
/**
 * Details associated with billing splash
 */
export declare class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONBilling extends SpeakeasyBase {
    /**
     * Details associated with a free access plan with limits
     */
    freeAccess?: UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONBillingFreeAccess;
    /**
     * Whether or not billing uses the fast login prepaid access option.
     */
    prepaidAccessFastLoginEnabled?: boolean;
    /**
     * The email address that reeceives replies from clients
     */
    replyToEmailAddress?: string;
}
/**
 * Details associated with guest sponsored splash
 */
export declare class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONGuestSponsorship extends SpeakeasyBase {
    /**
     * Duration in minutes of sponsored guest authorization.
     */
    durationInMinutes?: number;
    /**
     * Whether or not guests can specify how much time they are requesting.
     */
    guestCanRequestTimeframe?: boolean;
}
/**
 * How created user accounts should be authorized.
 */
export declare enum UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSelfRegistrationAuthorizationTypeEnum {
    Admin = "admin",
    Auto = "auto",
    SelfEmail = "self_email"
}
/**
 * Self-registration for splash with Meraki authentication.
 */
export declare class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSelfRegistration extends SpeakeasyBase {
    /**
     * How created user accounts should be authorized.
     */
    authorizationType?: UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSelfRegistrationAuthorizationTypeEnum;
    /**
     * Whether or not to allow users to create their own account on the network.
     */
    enabled?: boolean;
}
/**
 * The strength of the enforcement of selected system types.
 */
export declare enum UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollmentStrengthEnum {
    ClickThrough = "click-through",
    Focused = "focused",
    Strict = "strict"
}
/**
 * Systems Manager network targeted for sentry enrollment.
 */
export declare class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollmentSystemsManagerNetwork extends SpeakeasyBase {
    /**
     * The network ID of the Systems Manager network.
     */
    id?: string;
}
/**
 * Systems Manager sentry enrollment splash settings.
 */
export declare class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollment extends SpeakeasyBase {
    /**
     * The system types that the Sentry enforces.
     */
    enforcedSystems?: string[];
    /**
     * The strength of the enforcement of selected system types.
     */
    strength?: UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollmentStrengthEnum;
    /**
     * Systems Manager network targeted for sentry enrollment.
     */
    systemsManagerNetwork?: UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollmentSystemsManagerNetwork;
}
/**
 * The image used in the splash page.
 */
export declare class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSplashImage extends SpeakeasyBase {
    /**
     * The extension of the image file.
     */
    extension?: string;
    /**
     * The MD5 value of the image file.
     */
    md5?: string;
}
/**
 * The logo used in the splash page.
 */
export declare class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSplashLogo extends SpeakeasyBase {
    /**
     * The extension of the logo file.
     */
    extension?: string;
    /**
     * The MD5 value of the logo file.
     */
    md5?: string;
}
/**
 * The prepaid front image used in the splash page.
 */
export declare class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSplashPrepaidFront extends SpeakeasyBase {
    /**
     * The extension of the prepaid front image file.
     */
    extension?: string;
    /**
     * The MD5 value of the prepaid front image file.
     */
    md5?: string;
}
/**
 * Successful operation
 */
export declare class UpdateNetworkWirelessSsidSplashSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Whether or not to allow simultaneous logins from different devices.
     */
    allowSimultaneousLogins?: boolean;
    /**
     * Details associated with billing splash
     */
    billing?: UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONBilling;
    /**
     * How restricted allowing traffic should be. If true, all traffic types are blocked until the splash page is acknowledged. If false, all non-HTTP traffic is allowed before the splash page is acknowledged.
     */
    blockAllTrafficBeforeSignOn?: boolean;
    /**
     * How login attempts should be handled when the controller is unreachable.
     */
    controllerDisconnectionBehavior?: string;
    /**
     * Details associated with guest sponsored splash
     */
    guestSponsorship?: UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONGuestSponsorship;
    /**
     * The custom redirect URL where the users will go after the splash page.
     */
    redirectUrl?: string;
    /**
     * Self-registration for splash with Meraki authentication.
     */
    selfRegistration?: UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSelfRegistration;
    /**
     * Systems Manager sentry enrollment splash settings.
     */
    sentryEnrollment?: UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollment;
    /**
     * The image used in the splash page.
     */
    splashImage?: UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSplashImage;
    /**
     * The logo used in the splash page.
     */
    splashLogo?: UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSplashLogo;
    /**
     * The type of splash page for this SSID
     */
    splashPage?: string;
    /**
     * The prepaid front image used in the splash page.
     */
    splashPrepaidFront?: UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONSplashPrepaidFront;
    /**
     * Splash timeout in minutes.
     */
    splashTimeout?: number;
    /**
     * The custom splash URL of the click-through splash page.
     */
    splashUrl?: string;
    /**
     * SSID number
     */
    ssidNumber?: number;
    /**
     * The Boolean indicating whether the the user will be redirected to the custom redirect URL after the splash page.
     */
    useRedirectUrl?: boolean;
    /**
     * Boolean indicating whether the users will be redirected to the custom splash url
     */
    useSplashUrl?: boolean;
    /**
     * The welcome message for the users on the splash page.
     */
    welcomeMessage?: string;
}
export declare class UpdateNetworkWirelessSsidSplashSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessSsidSplashSettings200ApplicationJSONObject?: UpdateNetworkWirelessSsidSplashSettings200ApplicationJSON;
}
