import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementUploadsUploadDataSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementUploadsUploadDataSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementUploadsUploadDataSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementUploadsUploadDataSecurityOption1;
    option2?: AnalyticsManagementUploadsUploadDataSecurityOption2;
}
export declare class AnalyticsManagementUploadsUploadDataRequest extends SpeakeasyBase {
    /**
     * Account Id associated with the upload.
     */
    accountId: string;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Custom data source Id to which the data being uploaded belongs.
     */
    customDataSourceId: string;
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
    /**
     * Web property UA-string associated with the upload.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementUploadsUploadDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    upload?: shared.Upload;
}
