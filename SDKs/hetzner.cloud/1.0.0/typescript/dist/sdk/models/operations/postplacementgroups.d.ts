import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Define the Placement Group Type.
 */
export declare enum PostPlacementGroupsCreatePlacementGroupRequestTypeEnum {
    Spread = "spread"
}
export declare class PostPlacementGroupsCreatePlacementGroupRequest extends SpeakeasyBase {
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    /**
     * Name of the PlacementGroup
     */
    name: string;
    /**
     * Define the Placement Group Type.
     */
    type: PostPlacementGroupsCreatePlacementGroupRequestTypeEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostPlacementGroupsCreatePlacementGroupResponseNullableActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources extends SpeakeasyBase {
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
export declare enum PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostPlacementGroupsCreatePlacementGroupResponseNullableAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostPlacementGroupsCreatePlacementGroupResponseNullableActionError;
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
    resources: PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum;
}
/**
 * Type of the Placement Group
 */
export declare enum PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum {
    Spread = "spread"
}
export declare class PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup extends SpeakeasyBase {
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    /**
     * Array of IDs of Servers that are part of this Placement Group
     */
    servers: number[];
    /**
     * Type of the Placement Group
     */
    type: PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum;
}
/**
 * The `PlacementGroup` key contains the PlacementGroup that was just created.
 */
export declare class PostPlacementGroupsCreatePlacementGroupResponse extends SpeakeasyBase {
    action?: PostPlacementGroupsCreatePlacementGroupResponseNullableAction;
    placementGroup: PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup;
}
export declare class PostPlacementGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The `PlacementGroup` key contains the PlacementGroup that was just created.
     */
    createPlacementGroupResponse?: PostPlacementGroupsCreatePlacementGroupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
