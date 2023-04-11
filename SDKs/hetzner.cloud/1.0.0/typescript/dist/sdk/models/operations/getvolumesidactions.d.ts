import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Can be used multiple times.
 */
export declare enum GetVolumesIdActionsSortParameterSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Command = "command",
    CommandAsc = "command:asc",
    CommandDesc = "command:desc",
    Status = "status",
    StatusAsc = "status:asc",
    StatusDesc = "status:desc",
    Progress = "progress",
    ProgressAsc = "progress:asc",
    ProgressDesc = "progress:desc",
    Started = "started",
    StartedAsc = "started:asc",
    StartedDesc = "started:desc",
    Finished = "finished",
    FinishedAsc = "finished:asc",
    FinishedDesc = "finished:desc"
}
/**
 * Can be used multiple times, the response will contain only Actions with specified statuses
 */
export declare enum GetVolumesIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}
export declare class GetVolumesIdActionsRequest extends SpeakeasyBase {
    /**
     * ID of the Volume
     */
    id: number;
    /**
     * Can be used multiple times.
     */
    sort?: GetVolumesIdActionsSortParameterSortEnum;
    /**
     * Can be used multiple times, the response will contain only Actions with specified statuses
     */
    status?: GetVolumesIdActionsStatusParameterStatusEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class GetVolumesIdActionsActionsResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class GetVolumesIdActionsActionsResponseActionResources extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Type of resource referenced
     */
    type: string;
}
/**
 * Status of the Action
 */
export declare enum GetVolumesIdActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetVolumesIdActionsActionsResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: GetVolumesIdActionsActionsResponseActionError;
    /**
     * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
     */
    finished: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Progress of Action in percent
     */
    progress: number;
    /**
     * Resources the Action relates to
     */
    resources: GetVolumesIdActionsActionsResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: GetVolumesIdActionsActionsResponseActionStatusEnum;
}
export declare class GetVolumesIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
    /**
     * ID of the last page available. Can be null if the current page is the last one.
     */
    lastPage: number;
    /**
     * ID of the next page. Can be null if the current page is the last one.
     */
    nextPage: number;
    /**
     * Current page number
     */
    page: number;
    /**
     * Maximum number of items shown per page in the response
     */
    perPage: number;
    /**
     * ID of the previous page. Can be null if the current page is the first one.
     */
    previousPage: number;
    /**
     * The total number of entries that exist in the database for this query. Nullable if unknown.
     */
    totalEntries: number;
}
export declare class GetVolumesIdActionsActionsResponseMeta extends SpeakeasyBase {
    pagination: GetVolumesIdActionsActionsResponseMetaPagination;
}
/**
 * The `actions` key contains a list of Actions
 */
export declare class GetVolumesIdActionsActionsResponse extends SpeakeasyBase {
    actions: GetVolumesIdActionsActionsResponseAction[];
    meta?: GetVolumesIdActionsActionsResponseMeta;
}
export declare class GetVolumesIdActionsResponse extends SpeakeasyBase {
    /**
     * The `actions` key contains a list of Actions
     */
    actionsResponse?: GetVolumesIdActionsActionsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
