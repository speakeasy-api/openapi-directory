import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsListSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1;
    option2?: BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2;
    option3?: BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3;
}
/**
 * Indicates how run attempts are to be pulled.
 */
export declare enum BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum {
    RunAttemptUnspecified = "RUN_ATTEMPT_UNSPECIFIED",
    Latest = "LATEST"
}
export declare enum BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum {
    TransferStateUnspecified = "TRANSFER_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsListRequest extends SpeakeasyBase {
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
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Required. Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
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
     * Indicates how run attempts are to be pulled.
     */
    runAttempt?: BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum;
    /**
     * When specified, only transfer runs with requested states are returned.
     */
    states?: BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listTransferRunsResponse?: shared.ListTransferRunsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
