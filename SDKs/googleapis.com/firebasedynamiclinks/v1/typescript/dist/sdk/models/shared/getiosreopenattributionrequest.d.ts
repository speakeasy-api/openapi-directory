import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
 */
export declare class GetIosReopenAttributionRequest extends SpeakeasyBase {
    /**
     * APP bundle ID.
     */
    bundleId?: string;
    /**
     * FDL link to be verified from an app universal link open. The FDL link can be one of: 1) short FDL. e.g. .page.link/, or 2) long FDL. e.g. .page.link/?{query params}, or 3) Invite FDL. e.g. .page.link/i/
     */
    requestedLink?: string;
    /**
     * Google SDK version. Version takes the form "$major.$minor.$patch"
     */
    sdkVersion?: string;
}
