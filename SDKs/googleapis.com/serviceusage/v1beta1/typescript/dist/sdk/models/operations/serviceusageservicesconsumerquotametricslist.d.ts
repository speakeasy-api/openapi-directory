import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServiceusageServicesConsumerQuotaMetricsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServiceusageServicesConsumerQuotaMetricsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServiceusageServicesConsumerQuotaMetricsListSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesConsumerQuotaMetricsListSecurityOption1;
    option2?: ServiceusageServicesConsumerQuotaMetricsListSecurityOption2;
}
/**
 * Specifies the level of detail for quota information in the response.
 */
export declare enum ServiceusageServicesConsumerQuotaMetricsListViewEnum {
    QuotaViewUnspecified = "QUOTA_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class ServiceusageServicesConsumerQuotaMetricsListRequest extends SpeakeasyBase {
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
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Requested size of the next page of data.
     */
    pageSize?: number;
    /**
     * Token identifying which result to start with; returned by a previous list call.
     */
    pageToken?: string;
    /**
     * Parent of the quotas resource. Some example names would be: `projects/123/services/serviceconsumermanagement.googleapis.com` `folders/345/services/serviceconsumermanagement.googleapis.com` `organizations/456/services/serviceconsumermanagement.googleapis.com`
     */
    parent: string;
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
     * Specifies the level of detail for quota information in the response.
     */
    view?: ServiceusageServicesConsumerQuotaMetricsListViewEnum;
}
export declare class ServiceusageServicesConsumerQuotaMetricsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listConsumerQuotaMetricsResponse?: shared.ListConsumerQuotaMetricsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
