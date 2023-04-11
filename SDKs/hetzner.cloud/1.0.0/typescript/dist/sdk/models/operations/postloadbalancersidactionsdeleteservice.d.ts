import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostLoadBalancersIdActionsDeleteServiceRequestBody extends SpeakeasyBase {
    /**
     * The listen port of the service you want to delete
     */
    listenPort: number;
}
export declare class PostLoadBalancersIdActionsDeleteServiceRequest extends SpeakeasyBase {
    requestBody?: PostLoadBalancersIdActionsDeleteServiceRequestBody;
    /**
     * ID of the Load Balancer
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostLoadBalancersIdActionsDeleteServiceActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsDeleteServiceActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostLoadBalancersIdActionsDeleteServiceActionResponseActionError;
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
    resources: PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `delete_service` Action
 */
export declare class PostLoadBalancersIdActionsDeleteServiceActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsDeleteServiceActionResponseAction;
}
export declare class PostLoadBalancersIdActionsDeleteServiceResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `delete_service` Action
     */
    actionResponse?: PostLoadBalancersIdActionsDeleteServiceActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
