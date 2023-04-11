import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
 */
export declare class GetIosReopenAttributionResponse extends SpeakeasyBase {
    /**
     * The deep-link attributed the app universal link open. For both regular FDL links and invite FDL links.
     */
    deepLink?: string;
    /**
     * Optional invitation ID, for only invite typed requested FDL links.
     */
    invitationId?: string;
    /**
     * FDL input value of the "&imv=" parameter, minimum app version to be returned to Google Firebase SDK running on iOS-9.
     */
    iosMinAppVersion?: string;
    /**
     * The entire FDL, expanded from a short link. It is the same as the requested_link, if it is long.
     */
    resolvedLink?: string;
    /**
     * Scion campaign value to be propagated by iSDK to Scion at app-reopen.
     */
    utmCampaign?: string;
    /**
     * Scion content value to be propagated by iSDK to Scion at app-reopen.
     */
    utmContent?: string;
    /**
     * Scion medium value to be propagated by iSDK to Scion at app-reopen.
     */
    utmMedium?: string;
    /**
     * Scion source value to be propagated by iSDK to Scion at app-reopen.
     */
    utmSource?: string;
    /**
     * Scion term value to be propagated by iSDK to Scion at app-reopen.
     */
    utmTerm?: string;
}
