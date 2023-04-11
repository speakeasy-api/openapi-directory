import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostLoadBalancersIdActionsAttachToNetworkRequestBody extends SpeakeasyBase {
    /**
     * IP to request to be assigned to this Load Balancer; if you do not provide this then you will be auto assigned an IP address
     */
    ip?: string;
    /**
     * ID of an existing network to attach the Load Balancer to
     */
    network: number;
}
export declare class PostLoadBalancersIdActionsAttachToNetworkRequest extends SpeakeasyBase {
    requestBody?: PostLoadBalancersIdActionsAttachToNetworkRequestBody;
    /**
     * ID of the Load Balancer
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsAttachToNetworkActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError;
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
    resources: PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `attach_to_network` Action
 */
export declare class PostLoadBalancersIdActionsAttachToNetworkActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsAttachToNetworkActionResponseAction;
}
export declare class PostLoadBalancersIdActionsAttachToNetworkResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `attach_to_network` Action
     */
    actionResponse?: PostLoadBalancersIdActionsAttachToNetworkActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
