import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Can be used multiple times.
 */
export declare enum GetVolumesSortEnum {
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
 * Can be used multiple times. The response will only contain Volumes matching the status.
 */
export declare enum GetVolumesStatusEnum {
    Available = "available",
    Creating = "creating"
}
export declare class GetVolumesRequest extends SpeakeasyBase {
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
    sort?: GetVolumesSortEnum;
    /**
     * Can be used multiple times. The response will only contain Volumes matching the status.
     */
    status?: GetVolumesStatusEnum;
}
export declare class GetVolumes200ApplicationJSONMetaPagination extends SpeakeasyBase {
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
export declare class GetVolumes200ApplicationJSONMeta extends SpeakeasyBase {
    pagination: GetVolumes200ApplicationJSONMetaPagination;
}
/**
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
 */
export declare class GetVolumes200ApplicationJSONVolumesLocation extends SpeakeasyBase {
    /**
     * City the Location is closest to
     */
    city: string;
    /**
     * ISO 3166-1 alpha-2 code of the country the Location resides in
     */
    country: string;
    /**
     * Description of the Location
     */
    description: string;
    /**
     * ID of the Location
     */
    id: number;
    /**
     * Latitude of the city closest to the Location
     */
    latitude: number;
    /**
     * Longitude of the city closest to the Location
     */
    longitude: number;
    /**
     * Unique identifier of the Location
     */
    name: string;
    /**
     * Name of network zone this Location resides in
     */
    networkZone: string;
}
/**
 * Protection configuration for the Resource
 */
export declare class GetVolumes200ApplicationJSONVolumesProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Current status of the Volume
 */
export declare enum GetVolumes200ApplicationJSONVolumesStatusEnum {
    Creating = "creating",
    Available = "available"
}
export declare class GetVolumes200ApplicationJSONVolumes extends SpeakeasyBase {
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * Filesystem of the Volume if formatted on creation, null if not formatted on creation
     */
    format: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;
    /**
     * Device path on the file system for the Volume
     */
    linuxDevice: string;
    /**
     * Location of the Volume. Volume can only be attached to Servers in the same Location.
     */
    location: GetVolumes200ApplicationJSONVolumesLocation;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    /**
     * Protection configuration for the Resource
     */
    protection: GetVolumes200ApplicationJSONVolumesProtection;
    /**
     * ID of the Server the Volume is attached to, null if it is not attached at all
     */
    server: number;
    /**
     * Size in GB of the Volume
     */
    size: number;
    /**
     * Current status of the Volume
     */
    status: GetVolumes200ApplicationJSONVolumesStatusEnum;
}
/**
 * The `volumes` key contains a list of volumes
 */
export declare class GetVolumes200ApplicationJSON extends SpeakeasyBase {
    meta?: GetVolumes200ApplicationJSONMeta;
    volumes: GetVolumes200ApplicationJSONVolumes[];
}
export declare class GetVolumesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `volumes` key contains a list of volumes
     */
    getVolumes200ApplicationJSONObject?: GetVolumes200ApplicationJSON;
}
