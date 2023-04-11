import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigqueryRowAccessPoliciesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryRowAccessPoliciesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryRowAccessPoliciesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryRowAccessPoliciesListSecurity extends SpeakeasyBase {
    option1?: BigqueryRowAccessPoliciesListSecurityOption1;
    option2?: BigqueryRowAccessPoliciesListSecurityOption2;
    option3?: BigqueryRowAccessPoliciesListSecurityOption3;
}
export declare class BigqueryRowAccessPoliciesListRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Required. Dataset ID of row access policies to list.
     */
    datasetId: string;
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
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    pageSize?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Required. Project ID of the row access policies to list.
     */
    projectId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Required. Table ID of the table to list row access policies.
     */
    tableId: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class BigqueryRowAccessPoliciesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listRowAccessPoliciesResponse?: shared.ListRowAccessPoliciesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
