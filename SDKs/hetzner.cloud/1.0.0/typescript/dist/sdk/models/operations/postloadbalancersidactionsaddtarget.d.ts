import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
 */
export declare class PostLoadBalancersIdActionsAddTargetAddTargetRequestIp extends SpeakeasyBase {
    /**
     * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
     */
    ip: string;
}
/**
 * Configuration for label selector targets, required if type is `label_selector`
 */
export declare class PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector extends SpeakeasyBase {
    /**
     * Label selector
     */
    selector: string;
}
/**
 * Configuration for type Server, required if type is `server`
 */
export declare class PostLoadBalancersIdActionsAddTargetAddTargetRequestServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Type of the resource
 */
export declare enum PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}
export declare class PostLoadBalancersIdActionsAddTargetAddTargetRequest extends SpeakeasyBase {
    /**
     * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
     */
    ip?: PostLoadBalancersIdActionsAddTargetAddTargetRequestIp;
    /**
     * Configuration for label selector targets, required if type is `label_selector`
     */
    labelSelector?: PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector;
    /**
     * Configuration for type Server, required if type is `server`
     */
    server?: PostLoadBalancersIdActionsAddTargetAddTargetRequestServer;
    /**
     * Type of the resource
     */
    type: PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum;
    /**
     * Use the private network IP instead of the public IP of the Server, requires the Server and Load Balancer to be in the same network. Default value is false.
     */
    usePrivateIp?: boolean;
}
export declare class PostLoadBalancersIdActionsAddTargetRequest extends SpeakeasyBase {
    requestBody?: PostLoadBalancersIdActionsAddTargetAddTargetRequest;
    /**
     * ID of the Load Balancer
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostLoadBalancersIdActionsAddTargetActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostLoadBalancersIdActionsAddTargetActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsAddTargetActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostLoadBalancersIdActionsAddTargetActionResponseActionError;
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
    resources: PostLoadBalancersIdActionsAddTargetActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `add_target` Action
 */
export declare class PostLoadBalancersIdActionsAddTargetActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsAddTargetActionResponseAction;
}
export declare class PostLoadBalancersIdActionsAddTargetResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `add_target` Action
     */
    actionResponse?: PostLoadBalancersIdActionsAddTargetActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
