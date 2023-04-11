import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementUploadsDeleteUploadDataSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementUploadsDeleteUploadDataSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementUploadsDeleteUploadDataSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementUploadsDeleteUploadDataSecurityOption1;
    option2?: AnalyticsManagementUploadsDeleteUploadDataSecurityOption2;
}
export declare class AnalyticsManagementUploadsDeleteUploadDataRequest extends SpeakeasyBase {
    analyticsDataimportDeleteUploadDataRequest?: shared.AnalyticsDataimportDeleteUploadDataRequest;
    /**
     * Account Id for the uploads to be deleted.
     */
    accountId: string;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Custom data source Id for the uploads to be deleted.
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
     * Web property Id for the uploads to be deleted.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementUploadsDeleteUploadDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
