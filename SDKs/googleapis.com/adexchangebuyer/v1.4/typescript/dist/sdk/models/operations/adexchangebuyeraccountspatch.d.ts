import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdexchangebuyerAccountsPatchSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdexchangebuyerAccountsPatchRequest extends SpeakeasyBase {
    account?: shared.Account;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Confirmation for erasing bidder and cookie matching urls.
     */
    confirmUnsafeAccountChange?: boolean;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The account id
     */
    id: number;
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
export declare class AdexchangebuyerAccountsPatchResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    account?: shared.Account;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
