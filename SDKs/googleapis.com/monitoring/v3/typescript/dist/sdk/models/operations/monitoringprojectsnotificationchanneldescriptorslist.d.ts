import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsNotificationChannelDescriptorsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsNotificationChannelDescriptorsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsNotificationChannelDescriptorsListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1;
    option2?: MonitoringProjectsNotificationChannelDescriptorsListSecurityOption2;
    option3?: MonitoringProjectsNotificationChannelDescriptorsListSecurityOption3;
}
export declare class MonitoringProjectsNotificationChannelDescriptorsListRequest extends SpeakeasyBase {
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
     * Required. The REST resource name of the parent from which to retrieve the notification channel descriptors. The expected syntax is: projects/[PROJECT_ID_OR_NUMBER] Note that this names (https://cloud.google.com/monitoring/api/v3#project_name) the parent container in which to look for the descriptors; to retrieve a single descriptor by name, use the GetNotificationChannelDescriptor operation, instead.
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of results to return in a single response. If not set to a positive number, a reasonable value will be chosen by the service.
     */
    pageSize?: number;
    /**
     * If non-empty, page_token must contain a value returned as the next_page_token in a previous response to request the next set of results.
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
export declare class MonitoringProjectsNotificationChannelDescriptorsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listNotificationChannelDescriptorsResponse?: shared.ListNotificationChannelDescriptorsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
