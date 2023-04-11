import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest extends SpeakeasyBase {
    /**
     * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
     */
    destination: string;
    /**
     * Gateway for the route. Cannot be the first IP of the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP is being used as a gateway for the public network interface of Servers.
     */
    gateway: string;
}
export declare class PostNetworksIdActionsDeleteRouteRequest extends SpeakeasyBase {
    requestBody?: PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest;
    /**
     * ID of the Network
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostNetworksIdActionsDeleteRouteActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostNetworksIdActionsDeleteRouteActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostNetworksIdActionsDeleteRouteActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostNetworksIdActionsDeleteRouteActionResponseActionError;
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
    resources: PostNetworksIdActionsDeleteRouteActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `delete_route` Action
 */
export declare class PostNetworksIdActionsDeleteRouteActionResponse extends SpeakeasyBase {
    action: PostNetworksIdActionsDeleteRouteActionResponseAction;
}
export declare class PostNetworksIdActionsDeleteRouteResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `delete_route` Action
     */
    actionResponse?: PostNetworksIdActionsDeleteRouteActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
