import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostLoadBalancersIdActionsDisablePublicInterfaceRequest extends SpeakeasyBase {
    /**
     * ID of the Load Balancer
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError;
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
    resources: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `disable_public_interface` Action
 */
export declare class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction;
}
export declare class PostLoadBalancersIdActionsDisablePublicInterfaceResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `disable_public_interface` Action
     */
    actionResponse?: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
