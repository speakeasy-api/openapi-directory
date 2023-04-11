import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostNetworksIdActionsChangeIPRangeChangeIPRangeRequest extends SpeakeasyBase {
    /**
     * The new prefix for the whole Network
     */
    ipRange: string;
}
export declare class PostNetworksIdActionsChangeIpRangeRequest extends SpeakeasyBase {
    requestBody?: PostNetworksIdActionsChangeIPRangeChangeIPRangeRequest;
    /**
     * ID of the Network
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostNetworksIdActionsChangeIpRangeActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostNetworksIdActionsChangeIpRangeActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostNetworksIdActionsChangeIpRangeActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostNetworksIdActionsChangeIpRangeActionResponseActionError;
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
    resources: PostNetworksIdActionsChangeIpRangeActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `change_ip_range` Action
 */
export declare class PostNetworksIdActionsChangeIpRangeActionResponse extends SpeakeasyBase {
    action: PostNetworksIdActionsChangeIpRangeActionResponseAction;
}
export declare class PostNetworksIdActionsChangeIpRangeResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `change_ip_range` Action
     */
    actionResponse?: PostNetworksIdActionsChangeIpRangeActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
