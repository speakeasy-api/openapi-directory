import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.
 */
export declare enum WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum {
    ExecutionViewUnspecified = "EXECUTION_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest extends SpeakeasyBase {
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
     * Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 10000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Name of the workflow for which the executions should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow}
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
     * Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.
     */
    view?: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listExecutionsResponse?: shared.ListExecutionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
