import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Type of Subnetwork
 */
export declare enum PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}
export declare class PostNetworksIdActionsAddSubnetAddSubnetRequest extends SpeakeasyBase {
    /**
     * Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. If the Subnet is of type vSwitch, it also can not overlap with any gateway in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask.
     */
    ipRange?: string;
    /**
     * Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.
     */
    networkZone: string;
    /**
     * Type of Subnetwork
     */
    type: PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum;
    /**
     * ID of the robot vSwitch. Must be supplied if the subnet is of type vswitch.
     */
    vswitchId?: number;
}
export declare class PostNetworksIdActionsAddSubnetRequest extends SpeakeasyBase {
    requestBody?: PostNetworksIdActionsAddSubnetAddSubnetRequest;
    /**
     * ID of the Network
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostNetworksIdActionsAddSubnetActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostNetworksIdActionsAddSubnetActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostNetworksIdActionsAddSubnetActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostNetworksIdActionsAddSubnetActionResponseActionError;
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
    resources: PostNetworksIdActionsAddSubnetActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `add_subnet` Action
 */
export declare class PostNetworksIdActionsAddSubnetActionResponse extends SpeakeasyBase {
    action: PostNetworksIdActionsAddSubnetActionResponseAction;
}
export declare class PostNetworksIdActionsAddSubnetResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `add_subnet` Action
     */
    actionResponse?: PostNetworksIdActionsAddSubnetActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
