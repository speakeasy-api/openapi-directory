import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VaultMattersHoldsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class VaultMattersHoldsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class VaultMattersHoldsGetSecurity extends SpeakeasyBase {
    option1?: VaultMattersHoldsGetSecurityOption1;
    option2?: VaultMattersHoldsGetSecurityOption2;
}
/**
 * The amount of detail to return for a hold.
 */
export declare enum VaultMattersHoldsGetViewEnum {
    HoldViewUnspecified = "HOLD_VIEW_UNSPECIFIED",
    BasicHold = "BASIC_HOLD",
    FullHold = "FULL_HOLD"
}
export declare class VaultMattersHoldsGetRequest extends SpeakeasyBase {
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
     * The hold ID.
     */
    holdId: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The matter ID.
     */
    matterId: string;
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
     * The amount of detail to return for a hold.
     */
    view?: VaultMattersHoldsGetViewEnum;
}
export declare class VaultMattersHoldsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    hold?: shared.Hold;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
