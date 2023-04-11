import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWirelessSsidSplashSettingsRequest extends SpeakeasyBase {
    networkId: string;
    number: string;
}
/**
 * Details associated with a free access plan with limits
 */
export declare class GetNetworkWirelessSsidSplashSettings200ApplicationJSONBillingFreeAccess extends SpeakeasyBase {
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
export declare class GetNetworkWirelessSsidSplashSettings200ApplicationJSONBilling extends SpeakeasyBase {
    /**
     * Details associated with a free access plan with limits
     */
    freeAccess?: GetNetworkWirelessSsidSplashSettings200ApplicationJSONBillingFreeAccess;
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
export declare class GetNetworkWirelessSsidSplashSettings200ApplicationJSONGuestSponsorship extends SpeakeasyBase {
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
export declare enum GetNetworkWirelessSsidSplashSettings200ApplicationJSONSelfRegistrationAuthorizationTypeEnum {
    Admin = "admin",
    Auto = "auto",
    SelfEmail = "self_email"
}
/**
 * Self-registration for splash with Meraki authentication.
 */
export declare class GetNetworkWirelessSsidSplashSettings200ApplicationJSONSelfRegistration extends SpeakeasyBase {
    /**
     * How created user accounts should be authorized.
     */
    authorizationType?: GetNetworkWirelessSsidSplashSettings200ApplicationJSONSelfRegistrationAuthorizationTypeEnum;
    /**
     * Whether or not to allow users to create their own account on the network.
     */
    enabled?: boolean;
}
/**
 * The strength of the enforcement of selected system types.
 */
export declare enum GetNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollmentStrengthEnum {
    ClickThrough = "click-through",
    Focused = "focused",
    Strict = "strict"
}
/**
 * Systems Manager network targeted for sentry enrollment.
 */
export declare class GetNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollmentSystemsManagerNetwork extends SpeakeasyBase {
    /**
     * The network ID of the Systems Manager network.
     */
    id?: string;
}
/**
 * Systems Manager sentry enrollment splash settings.
 */
export declare class GetNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollment extends SpeakeasyBase {
    /**
     * The system types that the Sentry enforces.
     */
    enforcedSystems?: string[];
    /**
     * The strength of the enforcement of selected system types.
     */
    strength?: GetNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollmentStrengthEnum;
    /**
     * Systems Manager network targeted for sentry enrollment.
     */
    systemsManagerNetwork?: GetNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollmentSystemsManagerNetwork;
}
/**
 * The image used in the splash page.
 */
export declare class GetNetworkWirelessSsidSplashSettings200ApplicationJSONSplashImage extends SpeakeasyBase {
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
export declare class GetNetworkWirelessSsidSplashSettings200ApplicationJSONSplashLogo extends SpeakeasyBase {
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
export declare class GetNetworkWirelessSsidSplashSettings200ApplicationJSONSplashPrepaidFront extends SpeakeasyBase {
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
export declare class GetNetworkWirelessSsidSplashSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Whether or not to allow simultaneous logins from different devices.
     */
    allowSimultaneousLogins?: boolean;
    /**
     * Details associated with billing splash
     */
    billing?: GetNetworkWirelessSsidSplashSettings200ApplicationJSONBilling;
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
    guestSponsorship?: GetNetworkWirelessSsidSplashSettings200ApplicationJSONGuestSponsorship;
    /**
     * The custom redirect URL where the users will go after the splash page.
     */
    redirectUrl?: string;
    /**
     * Self-registration for splash with Meraki authentication.
     */
    selfRegistration?: GetNetworkWirelessSsidSplashSettings200ApplicationJSONSelfRegistration;
    /**
     * Systems Manager sentry enrollment splash settings.
     */
    sentryEnrollment?: GetNetworkWirelessSsidSplashSettings200ApplicationJSONSentryEnrollment;
    /**
     * The image used in the splash page.
     */
    splashImage?: GetNetworkWirelessSsidSplashSettings200ApplicationJSONSplashImage;
    /**
     * The logo used in the splash page.
     */
    splashLogo?: GetNetworkWirelessSsidSplashSettings200ApplicationJSONSplashLogo;
    /**
     * The type of splash page for this SSID
     */
    splashPage?: string;
    /**
     * The prepaid front image used in the splash page.
     */
    splashPrepaidFront?: GetNetworkWirelessSsidSplashSettings200ApplicationJSONSplashPrepaidFront;
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
export declare class GetNetworkWirelessSsidSplashSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessSsidSplashSettings200ApplicationJSONObject?: GetNetworkWirelessSsidSplashSettings200ApplicationJSON;
}
