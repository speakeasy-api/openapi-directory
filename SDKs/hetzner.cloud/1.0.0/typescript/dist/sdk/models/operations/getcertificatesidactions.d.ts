import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Can be used multiple times.
 */
export declare enum GetCertificatesIdActionsSortParameterSortEnum {
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
export declare enum GetCertificatesIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}
export declare class GetCertificatesIdActionsRequest extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Can be used multiple times.
     */
    sort?: GetCertificatesIdActionsSortParameterSortEnum;
    /**
     * Can be used multiple times, the response will contain only Actions with specified statuses
     */
    status?: GetCertificatesIdActionsStatusParameterStatusEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class GetCertificatesIdActionsActionsResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class GetCertificatesIdActionsActionsResponseActionResources extends SpeakeasyBase {
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
export declare enum GetCertificatesIdActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetCertificatesIdActionsActionsResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: GetCertificatesIdActionsActionsResponseActionError;
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
    resources: GetCertificatesIdActionsActionsResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: GetCertificatesIdActionsActionsResponseActionStatusEnum;
}
export declare class GetCertificatesIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
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
export declare class GetCertificatesIdActionsActionsResponseMeta extends SpeakeasyBase {
    pagination: GetCertificatesIdActionsActionsResponseMetaPagination;
}
/**
 * The `actions` key contains a list of Actions
 */
export declare class GetCertificatesIdActionsActionsResponse extends SpeakeasyBase {
    actions: GetCertificatesIdActionsActionsResponseAction[];
    meta?: GetCertificatesIdActionsActionsResponseMeta;
}
export declare class GetCertificatesIdActionsResponse extends SpeakeasyBase {
    /**
     * The `actions` key contains a list of Actions
     */
    actionsResponse?: GetCertificatesIdActionsActionsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
