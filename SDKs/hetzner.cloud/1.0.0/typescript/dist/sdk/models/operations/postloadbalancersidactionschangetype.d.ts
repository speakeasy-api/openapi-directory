import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostLoadBalancersIdActionsChangeTypeChangeTypeRequest extends SpeakeasyBase {
    /**
     * ID or name of Load Balancer type the Load Balancer should migrate to
     */
    loadBalancerType: string;
}
export declare class PostLoadBalancersIdActionsChangeTypeRequest extends SpeakeasyBase {
    requestBody?: PostLoadBalancersIdActionsChangeTypeChangeTypeRequest;
    /**
     * ID of the Load Balancer
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostLoadBalancersIdActionsChangeTypeActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostLoadBalancersIdActionsChangeTypeActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsChangeTypeActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostLoadBalancersIdActionsChangeTypeActionResponseActionError;
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
    resources: PostLoadBalancersIdActionsChangeTypeActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `change_load_balancer_type` Action
 */
export declare class PostLoadBalancersIdActionsChangeTypeActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsChangeTypeActionResponseAction;
}
export declare class PostLoadBalancersIdActionsChangeTypeResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `change_load_balancer_type` Action
     */
    actionResponse?: PostLoadBalancersIdActionsChangeTypeActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
