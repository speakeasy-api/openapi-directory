import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
 */
export declare class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp extends SpeakeasyBase {
    /**
     * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
     */
    ip: string;
}
/**
 * Configuration for label selector targets, required if type is `label_selector`
 */
export declare class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector extends SpeakeasyBase {
    /**
     * Label selector
     */
    selector: string;
}
/**
 * Configuration for type Server, required if type is `server`
 */
export declare class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Type of the resource
 */
export declare enum PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}
export declare class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest extends SpeakeasyBase {
    /**
     * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
     */
    ip?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp;
    /**
     * Configuration for label selector targets, required if type is `label_selector`
     */
    labelSelector?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector;
    /**
     * Configuration for type Server, required if type is `server`
     */
    server?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer;
    /**
     * Type of the resource
     */
    type: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum;
}
export declare class PostLoadBalancersIdActionsRemoveTargetRequest extends SpeakeasyBase {
    requestBody?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest;
    /**
     * ID of the Load Balancer
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostLoadBalancersIdActionsRemoveTargetActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsRemoveTargetActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostLoadBalancersIdActionsRemoveTargetActionResponseActionError;
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
    resources: PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `remove_target` Action
 */
export declare class PostLoadBalancersIdActionsRemoveTargetActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsRemoveTargetActionResponseAction;
}
export declare class PostLoadBalancersIdActionsRemoveTargetResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `remove_target` Action
     */
    actionResponse?: PostLoadBalancersIdActionsRemoveTargetActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
