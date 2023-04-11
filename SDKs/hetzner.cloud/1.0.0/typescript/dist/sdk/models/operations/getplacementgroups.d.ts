import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Can be used multiple times.
 */
export declare enum GetPlacementGroupsSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Name = "name",
    NameAsc = "name:asc",
    NameDesc = "name:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}
/**
 * Can be used multiple times. The response will only contain PlacementGroups matching the type.
 */
export declare enum GetPlacementGroupsTypeParameterTypeEnum {
    Spread = "spread"
}
export declare class GetPlacementGroupsRequest extends SpeakeasyBase {
    /**
     * Can be used to filter resources by labels. The response will only contain resources matching the label selector.
     */
    labelSelector?: string;
    /**
     * Can be used to filter resources by their name. The response will only contain the resources matching the specified name
     */
    name?: string;
    /**
     * Can be used multiple times.
     */
    sort?: GetPlacementGroupsSortEnum;
    /**
     * Can be used multiple times. The response will only contain PlacementGroups matching the type.
     */
    type?: GetPlacementGroupsTypeParameterTypeEnum;
}
export declare class GetPlacementGroupsPlacementGroupsResponseMetaPagination extends SpeakeasyBase {
    /**
     * ID of the last page available. Can be null if the current page is the last one.
     */
    lastPage: number;
    /**
     * ID of the next page. Can be null if the current page is the last one.
     */
    nextPage: number;
    /**
     * Current page number
     */
    page: number;
    /**
     * Maximum number of items shown per page in the response
     */
    perPage: number;
    /**
     * ID of the previous page. Can be null if the current page is the first one.
     */
    previousPage: number;
    /**
     * The total number of entries that exist in the database for this query. Nullable if unknown.
     */
    totalEntries: number;
}
export declare class GetPlacementGroupsPlacementGroupsResponseMeta extends SpeakeasyBase {
    pagination: GetPlacementGroupsPlacementGroupsResponseMetaPagination;
}
/**
 * Type of the Placement Group
 */
export declare enum GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum {
    Spread = "spread"
}
export declare class GetPlacementGroupsPlacementGroupsResponsePlacementGroup extends SpeakeasyBase {
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
    type: GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum;
}
/**
 * The `placement_groups` key contains an array of PlacementGroup objects
 */
export declare class GetPlacementGroupsPlacementGroupsResponse extends SpeakeasyBase {
    meta?: GetPlacementGroupsPlacementGroupsResponseMeta;
    placementGroups: GetPlacementGroupsPlacementGroupsResponsePlacementGroup[];
}
export declare class GetPlacementGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The `placement_groups` key contains an array of PlacementGroup objects
     */
    placementGroupsResponse?: GetPlacementGroupsPlacementGroupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
