import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutPlacementGroupsIdUpdatePlacementGroupRequest extends SpeakeasyBase {
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    /**
     * New PlacementGroup name
     */
    name?: string;
}
export declare class PutPlacementGroupsIdRequest extends SpeakeasyBase {
    requestBody?: PutPlacementGroupsIdUpdatePlacementGroupRequest;
    /**
     * ID of the resource
     */
    id: number;
}
/**
 * Type of the Placement Group
 */
export declare enum PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum {
    Spread = "spread"
}
export declare class PutPlacementGroupsIdPlacementGroupResponsePlacementGroup extends SpeakeasyBase {
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
    type: PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum;
}
/**
 * The `certificate` key contains the PlacementGroup that was just updated
 */
export declare class PutPlacementGroupsIdPlacementGroupResponse extends SpeakeasyBase {
    placementGroup: PutPlacementGroupsIdPlacementGroupResponsePlacementGroup;
}
export declare class PutPlacementGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The `certificate` key contains the PlacementGroup that was just updated
     */
    placementGroupResponse?: PutPlacementGroupsIdPlacementGroupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
