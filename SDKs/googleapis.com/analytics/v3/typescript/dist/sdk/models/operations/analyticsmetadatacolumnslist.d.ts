import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsMetadataColumnsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsMetadataColumnsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsMetadataColumnsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsMetadataColumnsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsMetadataColumnsListSecurityOption1;
    option2?: AnalyticsMetadataColumnsListSecurityOption2;
    option3?: AnalyticsMetadataColumnsListSecurityOption3;
}
export declare class AnalyticsMetadataColumnsListRequest extends SpeakeasyBase {
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
     * Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API
     */
    reportType: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AnalyticsMetadataColumnsListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    columns?: shared.Columns;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
