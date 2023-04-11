import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ScriptProcessesListScriptProcessesSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare enum ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum {
    ProcessStatusUnspecified = "PROCESS_STATUS_UNSPECIFIED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Completed = "COMPLETED",
    Canceled = "CANCELED",
    Failed = "FAILED",
    TimedOut = "TIMED_OUT",
    Unknown = "UNKNOWN",
    Delayed = "DELAYED"
}
export declare enum ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum {
    ProcessTypeUnspecified = "PROCESS_TYPE_UNSPECIFIED",
    AddOn = "ADD_ON",
    ExecutionApi = "EXECUTION_API",
    TimeDriven = "TIME_DRIVEN",
    Trigger = "TRIGGER",
    Webapp = "WEBAPP",
    Editor = "EDITOR",
    SimpleTrigger = "SIMPLE_TRIGGER",
    Menu = "MENU",
    BatchTask = "BATCH_TASK"
}
export declare enum ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum {
    UserAccessLevelUnspecified = "USER_ACCESS_LEVEL_UNSPECIFIED",
    None = "NONE",
    Read = "READ",
    Write = "WRITE",
    Owner = "OWNER"
}
export declare class ScriptProcessesListScriptProcessesRequest extends SpeakeasyBase {
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
     * The maximum number of returned processes per page of results. Defaults to 50.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
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
     * The script ID of the project whose processes are listed.
     */
    scriptId?: string;
    /**
     * Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
     */
    scriptProcessFilterDeploymentId?: string;
    /**
     * Optional field used to limit returned processes to those that completed on or before the given timestamp.
     */
    scriptProcessFilterEndTime?: string;
    /**
     * Optional field used to limit returned processes to those originating from a script function with the given function name.
     */
    scriptProcessFilterFunctionName?: string;
    /**
     * Optional field used to limit returned processes to those that were started on or after the given timestamp.
     */
    scriptProcessFilterStartTime?: string;
    /**
     * Optional field used to limit returned processes to those having one of the specified process statuses.
     */
    scriptProcessFilterStatuses?: ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum[];
    /**
     * Optional field used to limit returned processes to those having one of the specified process types.
     */
    scriptProcessFilterTypes?: ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum[];
    /**
     * Optional field used to limit returned processes to those having one of the specified user access levels.
     */
    scriptProcessFilterUserAccessLevels?: ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ScriptProcessesListScriptProcessesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listScriptProcessesResponse?: shared.ListScriptProcessesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
