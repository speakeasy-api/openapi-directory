import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostLoadBalancersIdActionsEnablePublicInterfaceRequest extends SpeakeasyBase {
    /**
     * ID of the Load Balancer
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError;
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
    resources: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `enable_public_interface` Action
 */
export declare class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction;
}
export declare class PostLoadBalancersIdActionsEnablePublicInterfaceResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `enable_public_interface` Action
     */
    actionResponse?: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
