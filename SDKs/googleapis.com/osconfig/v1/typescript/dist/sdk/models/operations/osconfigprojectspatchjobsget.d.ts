import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OsconfigProjectsPatchJobsGetSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC.
 */
export declare enum OsconfigProjectsPatchJobsGetViewEnum {
    InventoryViewUnspecified = "INVENTORY_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class OsconfigProjectsPatchJobsGetRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Required. Name of the patch in the form `projects/* /patchJobs/*`
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC.
     */
    view?: OsconfigProjectsPatchJobsGetViewEnum;
}
export declare class OsconfigProjectsPatchJobsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    patchJob?: shared.PatchJob;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
