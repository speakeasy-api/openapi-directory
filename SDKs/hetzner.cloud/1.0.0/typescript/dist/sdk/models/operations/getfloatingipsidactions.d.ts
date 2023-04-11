import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Can be used multiple times.
 */
export declare enum GetFloatingIpsIdActionsSortParameterSortEnum {
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
export declare enum GetFloatingIpsIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}
export declare class GetFloatingIpsIdActionsRequest extends SpeakeasyBase {
    /**
     * ID of the Floating IP
     */
    id: number;
    /**
     * Can be used multiple times.
     */
    sort?: GetFloatingIpsIdActionsSortParameterSortEnum;
    /**
     * Can be used multiple times, the response will contain only Actions with specified statuses
     */
    status?: GetFloatingIpsIdActionsStatusParameterStatusEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class GetFloatingIpsIdActions200ApplicationJSONActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class GetFloatingIpsIdActions200ApplicationJSONActionResources extends SpeakeasyBase {
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
export declare enum GetFloatingIpsIdActions200ApplicationJSONActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetFloatingIpsIdActions200ApplicationJSONAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: GetFloatingIpsIdActions200ApplicationJSONActionError;
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
    resources: GetFloatingIpsIdActions200ApplicationJSONActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: GetFloatingIpsIdActions200ApplicationJSONActionStatusEnum;
}
/**
 * The `actions` key contains a list of Actions
 */
export declare class GetFloatingIpsIdActions200ApplicationJSON extends SpeakeasyBase {
    actions: GetFloatingIpsIdActions200ApplicationJSONAction[];
}
export declare class GetFloatingIpsIdActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `actions` key contains a list of Actions
     */
    getFloatingIpsIdActions200ApplicationJSONObject?: GetFloatingIpsIdActions200ApplicationJSON;
}
