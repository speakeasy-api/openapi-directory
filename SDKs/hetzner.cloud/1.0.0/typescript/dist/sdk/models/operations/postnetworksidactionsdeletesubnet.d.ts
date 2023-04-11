import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest extends SpeakeasyBase {
    /**
     * IP range of subnet to delete
     */
    ipRange: string;
}
export declare class PostNetworksIdActionsDeleteSubnetRequest extends SpeakeasyBase {
    requestBody?: PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest;
    /**
     * ID of the Network
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostNetworksIdActionsDeleteSubnetActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostNetworksIdActionsDeleteSubnetActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostNetworksIdActionsDeleteSubnetActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostNetworksIdActionsDeleteSubnetActionResponseActionError;
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
    resources: PostNetworksIdActionsDeleteSubnetActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `delete_subnet` Action
 */
export declare class PostNetworksIdActionsDeleteSubnetActionResponse extends SpeakeasyBase {
    action: PostNetworksIdActionsDeleteSubnetActionResponseAction;
}
export declare class PostNetworksIdActionsDeleteSubnetResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `delete_subnet` Action
     */
    actionResponse?: PostNetworksIdActionsDeleteSubnetActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
