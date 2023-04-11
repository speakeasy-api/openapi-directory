import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetServersIdActionsActionIdRequest extends SpeakeasyBase {
    /**
     * ID of the Action
     */
    actionId: number;
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class GetServersIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class GetServersIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
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
export declare enum GetServersIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetServersIdActionsActionIdActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: GetServersIdActionsActionIdActionResponseActionError;
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
    resources: GetServersIdActionsActionIdActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: GetServersIdActionsActionIdActionResponseActionStatusEnum;
}
/**
 * The `action` key in the reply has this structure
 */
export declare class GetServersIdActionsActionIdActionResponse extends SpeakeasyBase {
    action: GetServersIdActionsActionIdActionResponseAction;
}
export declare class GetServersIdActionsActionIdResponse extends SpeakeasyBase {
    /**
     * The `action` key in the reply has this structure
     */
    actionResponse?: GetServersIdActionsActionIdActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
