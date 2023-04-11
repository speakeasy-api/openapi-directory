import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostLoadBalancersIdActionsDetachFromNetworkRequestBody extends SpeakeasyBase {
    /**
     * ID of an existing network to detach the Load Balancer from
     */
    network: number;
}
export declare class PostLoadBalancersIdActionsDetachFromNetworkRequest extends SpeakeasyBase {
    requestBody?: PostLoadBalancersIdActionsDetachFromNetworkRequestBody;
    /**
     * ID of the Load Balancer
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError;
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
    resources: PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `detach_from_network` Action
 */
export declare class PostLoadBalancersIdActionsDetachFromNetworkActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction;
}
export declare class PostLoadBalancersIdActionsDetachFromNetworkResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `detach_from_network` Action
     */
    actionResponse?: PostLoadBalancersIdActionsDetachFromNetworkActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
