import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Adexchangebuyer2AccountsFinalizedProposalsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.
 */
export declare enum Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum {
    FilterSyntaxUnspecified = "FILTER_SYNTAX_UNSPECIFIED",
    Pql = "PQL",
    ListFilter = "LIST_FILTER"
}
export declare class Adexchangebuyer2AccountsFinalizedProposalsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Account ID of the buyer.
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
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.
     */
    filter?: string;
    /**
     * Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.
     */
    filterSyntax?: Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * The page token as returned from ListProposalsResponse.
     */
    pageToken?: string;
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
export declare class Adexchangebuyer2AccountsFinalizedProposalsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listProposalsResponse?: shared.ListProposalsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
