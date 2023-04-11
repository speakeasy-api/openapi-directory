import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostLoadBalancersIdActionsChangeProtectionRequestBody extends SpeakeasyBase {
    /**
     * If true, prevents the Load Balancer from being deleted
     */
    delete?: boolean;
}
export declare class PostLoadBalancersIdActionsChangeProtectionRequest extends SpeakeasyBase {
    requestBody?: PostLoadBalancersIdActionsChangeProtectionRequestBody;
    /**
     * ID of the Load Balancer
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostLoadBalancersIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostLoadBalancersIdActionsChangeProtectionActionResponseActionError;
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
    resources: PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `change_protection` Action
 */
export declare class PostLoadBalancersIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsChangeProtectionActionResponseAction;
}
export declare class PostLoadBalancersIdActionsChangeProtectionResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `change_protection` Action
     */
    actionResponse?: PostLoadBalancersIdActionsChangeProtectionActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
