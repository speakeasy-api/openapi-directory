import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1;
    option2?: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2;
    option3?: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3;
}
export declare enum BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum {
    MessageSeverityUnspecified = "MESSAGE_SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR"
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest extends SpeakeasyBase {
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
     * Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
     */
    messageTypes?: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum[];
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Required. Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
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
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listTransferLogsResponse?: shared.ListTransferLogsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
