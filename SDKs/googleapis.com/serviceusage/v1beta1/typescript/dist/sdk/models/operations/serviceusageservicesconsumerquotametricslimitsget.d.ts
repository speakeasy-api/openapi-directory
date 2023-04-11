import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption1;
    option2?: ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption2;
}
/**
 * Specifies the level of detail for quota information in the response.
 */
export declare enum ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum {
    QuotaViewUnspecified = "QUOTA_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsGetRequest extends SpeakeasyBase {
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
     * The resource name of the quota limit. Use the quota limit resource name returned by previous ListConsumerQuotaMetrics and GetConsumerQuotaMetric API calls.
     */
    name: string;
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
    /**
     * Specifies the level of detail for quota information in the response.
     */
    view?: ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsGetResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    consumerQuotaLimit?: shared.ConsumerQuotaLimit;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
