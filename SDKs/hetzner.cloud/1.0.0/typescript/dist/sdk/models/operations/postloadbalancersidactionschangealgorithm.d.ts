import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Algorithm of the Load Balancer
 */
export declare enum PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
export declare class PostLoadBalancersIdActionsChangeAlgorithmRequestBody extends SpeakeasyBase {
    /**
     * Algorithm of the Load Balancer
     */
    type: PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum;
}
export declare class PostLoadBalancersIdActionsChangeAlgorithmRequest extends SpeakeasyBase {
    requestBody?: PostLoadBalancersIdActionsChangeAlgorithmRequestBody;
    /**
     * ID of the Load Balancer
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError;
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
    resources: PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `change_algorithm` Action
 */
export declare class PostLoadBalancersIdActionsChangeAlgorithmActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction;
}
export declare class PostLoadBalancersIdActionsChangeAlgorithmResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `change_algorithm` Action
     */
    actionResponse?: PostLoadBalancersIdActionsChangeAlgorithmActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
