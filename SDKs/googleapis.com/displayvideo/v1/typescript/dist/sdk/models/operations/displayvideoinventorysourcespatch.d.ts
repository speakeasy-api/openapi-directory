import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisplayvideoInventorySourcesPatchSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DisplayvideoInventorySourcesPatchRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    inventorySourceInput?: shared.InventorySourceInput;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * The ID of the advertiser that the request is being made within.
     */
    advertiserId?: string;
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
     * Output only. The unique ID of the inventory source. Assigned by the system.
     */
    inventorySourceId: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The ID of the partner that the request is being made within.
     */
    partnerId?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Required. The mask to control which fields to update.
     */
    updateMask?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DisplayvideoInventorySourcesPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    inventorySource?: shared.InventorySource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
