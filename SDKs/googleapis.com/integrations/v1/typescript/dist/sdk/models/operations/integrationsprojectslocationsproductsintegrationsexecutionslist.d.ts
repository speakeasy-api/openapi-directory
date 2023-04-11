import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest extends SpeakeasyBase {
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
     * Optional. Standard filter field, we support filtering on following fields: workflow_name: the name of the integration. CreateTimestamp: the execution created time. event_execution_state: the state of the executions. execution_id: the id of the execution. trigger_id: the id of the trigger. parameter_type: the type of the parameters involved in the execution. All fields support for EQUALS, in additional: CreateTimestamp support for LESS_THAN, GREATER_THAN ParameterType support for HAS For example: "parameter_type" HAS \"string\" Also supports operators like AND, OR, NOT For example, trigger_id=\"id1\" AND workflow_name=\"testWorkflow\"
     */
    filter?: string;
    /**
     * Optional user-provided custom filter.
     */
    filterParamsCustomFilter?: string;
    /**
     * End timestamp.
     */
    filterParamsEndTime?: string;
    /**
     * List of possible event statuses.
     */
    filterParamsEventStatuses?: string[];
    /**
     * Execution id.
     */
    filterParamsExecutionId?: string;
    /**
     * Param key. DEPRECATED. User parameter_pair_key instead.
     */
    filterParamsParameterKey?: string;
    /**
     * Param key in the key value pair filter.
     */
    filterParamsParameterPairKey?: string;
    /**
     * Param value in the key value pair filter.
     */
    filterParamsParameterPairValue?: string;
    /**
     * Param type.
     */
    filterParamsParameterType?: string;
    /**
     * Param value. DEPRECATED. User parameter_pair_value instead.
     */
    filterParamsParameterValue?: string;
    /**
     * Start timestamp.
     */
    filterParamsStartTime?: string;
    /**
     * List of possible task statuses.
     */
    filterParamsTaskStatuses?: string[];
    /**
     * Workflow name.
     */
    filterParamsWorkflowName?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Optional. The results would be returned in order you specified here. Currently supporting "last_modified_time" and "create_time".
     */
    orderBy?: string;
    /**
     * Optional. The size of entries in the response.
     */
    pageSize?: number;
    /**
     * Optional. The token returned in the previous response.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name of the integration execution.
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
     * Optional. View mask for the response data. If set, only the field specified will be returned as part of the result. If not set, all fields in event execution info will be filled and returned.
     */
    readMask?: string;
    /**
     * Optional. If true, the service will use the most recent acl information to list event execution infos and renew the acl cache. Note that fetching the most recent acl is synchronous, so it will increase RPC call latency.
     */
    refreshAcl?: boolean;
    /**
     * Optional. If true, the service will truncate the params to only keep the first 1000 characters of string params and empty the executions in order to make response smaller. Only works for UI and when the params fields are not filtered out.
     */
    truncateParams?: boolean;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudIntegrationsV1alphaListExecutionsResponse?: shared.GoogleCloudIntegrationsV1alphaListExecutionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
