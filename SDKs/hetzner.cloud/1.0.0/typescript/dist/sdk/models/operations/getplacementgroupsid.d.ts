import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPlacementGroupsIdRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: number;
}
/**
 * Type of the Placement Group
 */
export declare enum GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum {
    Spread = "spread"
}
export declare class GetPlacementGroupsIdPlacementGroupResponsePlacementGroup extends SpeakeasyBase {
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
    type: GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum;
}
/**
 * The `placement_group` key contains a PlacementGroup object
 */
export declare class GetPlacementGroupsIdPlacementGroupResponse extends SpeakeasyBase {
    placementGroup: GetPlacementGroupsIdPlacementGroupResponsePlacementGroup;
}
export declare class GetPlacementGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The `placement_group` key contains a PlacementGroup object
     */
    placementGroupResponse?: GetPlacementGroupsIdPlacementGroupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
