import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostNetworksIdActionsAddRouteAddDeleteRouteRequest extends SpeakeasyBase {
    /**
     * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
     */
    destination: string;
    /**
     * Gateway for the route. Cannot be the first IP of the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP is being used as a gateway for the public network interface of Servers.
     */
    gateway: string;
}
export declare class PostNetworksIdActionsAddRouteRequest extends SpeakeasyBase {
    requestBody?: PostNetworksIdActionsAddRouteAddDeleteRouteRequest;
    /**
     * ID of the Network
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostNetworksIdActionsAddRouteActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostNetworksIdActionsAddRouteActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostNetworksIdActionsAddRouteActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostNetworksIdActionsAddRouteActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostNetworksIdActionsAddRouteActionResponseActionError;
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
    resources: PostNetworksIdActionsAddRouteActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostNetworksIdActionsAddRouteActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `add_route` Action
 */
export declare class PostNetworksIdActionsAddRouteActionResponse extends SpeakeasyBase {
    action: PostNetworksIdActionsAddRouteActionResponseAction;
}
export declare class PostNetworksIdActionsAddRouteResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `add_route` Action
     */
    actionResponse?: PostNetworksIdActionsAddRouteActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
