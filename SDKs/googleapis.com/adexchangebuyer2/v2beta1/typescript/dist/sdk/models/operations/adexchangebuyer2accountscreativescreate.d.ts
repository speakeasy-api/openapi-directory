import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Adexchangebuyer2AccountsCreativesCreateSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).
 */
export declare enum Adexchangebuyer2AccountsCreativesCreateDuplicateIDModeEnum {
    NoDuplicates = "NO_DUPLICATES",
    ForceEnableDuplicateIds = "FORCE_ENABLE_DUPLICATE_IDS"
}
export declare class Adexchangebuyer2AccountsCreativesCreateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    creative?: shared.Creative;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
     */
    accountId: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).
     */
    duplicateIdMode?: Adexchangebuyer2AccountsCreativesCreateDuplicateIDModeEnum;
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
}
export declare class Adexchangebuyer2AccountsCreativesCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    creative?: shared.Creative;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
