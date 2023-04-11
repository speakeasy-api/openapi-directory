import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceInfo } from "./deviceinfo";
/**
 * App post install attribution retrieval information. Disambiguates mechanism (iSDK or developer invoked) to retrieve payload from clicked link.
 */
export declare enum GetIosPostInstallAttributionRequestRetrievalMethodEnum {
    UnknownPayloadRetrievalMethod = "UNKNOWN_PAYLOAD_RETRIEVAL_METHOD",
    ImplicitWeakMatch = "IMPLICIT_WEAK_MATCH",
    ExplicitWeakMatch = "EXPLICIT_WEAK_MATCH",
    ExplicitStrongAfterWeakMatch = "EXPLICIT_STRONG_AFTER_WEAK_MATCH"
}
/**
 * Strong match page information. Disambiguates between default UI and custom page to present when strong match succeeds/fails to find cookie.
 */
export declare enum GetIosPostInstallAttributionRequestVisualStyleEnum {
    UnknownVisualStyle = "UNKNOWN_VISUAL_STYLE",
    DefaultStyle = "DEFAULT_STYLE",
    CustomStyle = "CUSTOM_STYLE"
}
/**
 * Request for iSDK to execute strong match flow for post-install attribution. This is meant for iOS requests only. Requests from other platforms will not be honored.
 */
export declare class GetIosPostInstallAttributionRequest extends SpeakeasyBase {
    /**
     * App installation epoch time (https://en.wikipedia.org/wiki/Unix_time). This is a client signal for a more accurate weak match.
     */
    appInstallationTime?: string;
    /**
     * APP bundle ID.
     */
    bundleId?: string;
    /**
     * Signals associated with the device making the request.
     */
    device?: DeviceInfo;
    /**
     * iOS version, ie: 9.3.5. Consider adding "build".
     */
    iosVersion?: string;
    /**
     * App post install attribution retrieval information. Disambiguates mechanism (iSDK or developer invoked) to retrieve payload from clicked link.
     */
    retrievalMethod?: GetIosPostInstallAttributionRequestRetrievalMethodEnum;
    /**
     * Google SDK version. Version takes the form "$major.$minor.$patch"
     */
    sdkVersion?: string;
    /**
     * Possible unique matched link that server need to check before performing fingerprint match. If passed link is short server need to expand the link. If link is long server need to vslidate the link.
     */
    uniqueMatchLinkToCheck?: string;
    /**
     * Strong match page information. Disambiguates between default UI and custom page to present when strong match succeeds/fails to find cookie.
     */
    visualStyle?: GetIosPostInstallAttributionRequestVisualStyleEnum;
}
