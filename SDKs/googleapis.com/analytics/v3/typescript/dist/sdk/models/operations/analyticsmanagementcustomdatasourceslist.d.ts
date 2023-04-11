import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementCustomDataSourcesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementCustomDataSourcesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementCustomDataSourcesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementCustomDataSourcesListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementCustomDataSourcesListSecurityOption1;
    option2?: AnalyticsManagementCustomDataSourcesListSecurityOption2;
    option3?: AnalyticsManagementCustomDataSourcesListSecurityOption3;
}
export declare class AnalyticsManagementCustomDataSourcesListRequest extends SpeakeasyBase {
    /**
     * Account Id for the custom data sources to retrieve.
     */
    accountId: string;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The maximum number of custom data sources to include in this response.
     */
    maxResults?: number;
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
     * A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    startIndex?: number;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * Web property Id for the custom data sources to retrieve.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomDataSourcesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    customDataSources?: shared.CustomDataSources;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
