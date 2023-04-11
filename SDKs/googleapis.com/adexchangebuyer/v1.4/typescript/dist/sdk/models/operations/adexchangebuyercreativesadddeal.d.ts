import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdexchangebuyerCreativesAddDealSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdexchangebuyerCreativesAddDealRequest extends SpeakeasyBase {
    /**
     * The id for the account that will serve this creative.
     */
    accountId: number;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * The buyer-specific id for this creative.
     */
    buyerCreativeId: string;
    /**
     * The id of the deal id to associate with this creative.
     */
    dealId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AdexchangebuyerCreativesAddDealResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
