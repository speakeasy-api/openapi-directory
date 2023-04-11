import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworksIdActionsActionIdRequest extends SpeakeasyBase {
    /**
     * ID of the Action
     */
    actionId: number;
    /**
     * ID of the Network
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class GetNetworksIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class GetNetworksIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
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
export declare enum GetNetworksIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetNetworksIdActionsActionIdActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: GetNetworksIdActionsActionIdActionResponseActionError;
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
    resources: GetNetworksIdActionsActionIdActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: GetNetworksIdActionsActionIdActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the Network Action
 */
export declare class GetNetworksIdActionsActionIdActionResponse extends SpeakeasyBase {
    action: GetNetworksIdActionsActionIdActionResponseAction;
}
export declare class GetNetworksIdActionsActionIdResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the Network Action
     */
    actionResponse?: GetNetworksIdActionsActionIdActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
