import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The confidence of the returned attribution.
 */
export declare enum GetIosPostInstallAttributionResponseAttributionConfidenceEnum {
    UnknownAttributionConfidence = "UNKNOWN_ATTRIBUTION_CONFIDENCE",
    Weak = "WEAK",
    Default = "DEFAULT",
    Unique = "UNIQUE"
}
/**
 * Which IP version the request was made from.
 */
export declare enum GetIosPostInstallAttributionResponseRequestIpVersionEnum {
    UnknownIpVersion = "UNKNOWN_IP_VERSION",
    IpV4 = "IP_V4",
    IpV6 = "IP_V6"
}
/**
 * Response for iSDK to execute strong match flow for post-install attribution.
 */
export declare class GetIosPostInstallAttributionResponse extends SpeakeasyBase {
    /**
     * The minimum version for app, specified by dev through ?imv= parameter. Return to iSDK to allow app to evaluate if current version meets this.
     */
    appMinimumVersion?: string;
    /**
     * The confidence of the returned attribution.
     */
    attributionConfidence?: GetIosPostInstallAttributionResponseAttributionConfidenceEnum;
    /**
     * The deep-link attributed post-install via one of several techniques (fingerprint, copy unique).
     */
    deepLink?: string;
    /**
     * User-agent specific custom-scheme URIs for iSDK to open. This will be set according to the user-agent tha the click was originally made in. There is no Safari-equivalent custom-scheme open URLs. ie: googlechrome://www.example.com ie: firefox://open-url?url=http://www.example.com ie: opera-http://example.com
     */
    externalBrowserDestinationLink?: string;
    /**
     * The link to navigate to update the app if min version is not met. This is either (in order): 1) fallback link (from ?ifl= parameter, if specified by developer) or 2) AppStore URL (from ?isi= parameter, if specified), or 3) the payload link (from required link= parameter).
     */
    fallbackLink?: string;
    /**
     * Invitation ID attributed post-install via one of several techniques (fingerprint, copy unique).
     */
    invitationId?: string;
    /**
     * Instruction for iSDK to attemmpt to perform strong match. For instance, if browser does not support/allow cookie or outside of support browsers, this will be false.
     */
    isStrongMatchExecutable?: boolean;
    /**
     * Describes why match failed, ie: "discarded due to low confidence". This message will be publicly visible.
     */
    matchMessage?: string;
    /**
     * Which IP version the request was made from.
     */
    requestIpVersion?: GetIosPostInstallAttributionResponseRequestIpVersionEnum;
    /**
     * Entire FDL (short or long) attributed post-install via one of several techniques (fingerprint, copy unique).
     */
    requestedLink?: string;
    /**
     * The entire FDL, expanded from a short link. It is the same as the requested_link, if it is long. Parameters from this should not be used directly (ie: server can default utm_[campaign|medium|source] to a value when requested_link lack them, server determine the best fallback_link when requested_link specifies >1 fallback links).
     */
    resolvedLink?: string;
    /**
     * Scion campaign value to be propagated by iSDK to Scion at post-install.
     */
    utmCampaign?: string;
    /**
     * Scion content value to be propagated by iSDK to Scion at app-reopen.
     */
    utmContent?: string;
    /**
     * Scion medium value to be propagated by iSDK to Scion at post-install.
     */
    utmMedium?: string;
    /**
     * Scion source value to be propagated by iSDK to Scion at post-install.
     */
    utmSource?: string;
    /**
     * Scion term value to be propagated by iSDK to Scion at app-reopen.
     */
    utmTerm?: string;
}
