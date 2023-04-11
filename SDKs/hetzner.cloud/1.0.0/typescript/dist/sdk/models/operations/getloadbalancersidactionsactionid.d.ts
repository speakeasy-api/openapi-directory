import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetLoadBalancersIdActionsActionIdRequest extends SpeakeasyBase {
    /**
     * ID of the Action
     */
    actionId: number;
    /**
     * ID of the Load Balancer
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class GetLoadBalancersIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class GetLoadBalancersIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
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
export declare enum GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetLoadBalancersIdActionsActionIdActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: GetLoadBalancersIdActionsActionIdActionResponseActionError;
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
    resources: GetLoadBalancersIdActionsActionIdActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the Load Balancer Action
 */
export declare class GetLoadBalancersIdActionsActionIdActionResponse extends SpeakeasyBase {
    action: GetLoadBalancersIdActionsActionIdActionResponseAction;
}
export declare class GetLoadBalancersIdActionsActionIdResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the Load Balancer Action
     */
    actionResponse?: GetLoadBalancersIdActionsActionIdActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
