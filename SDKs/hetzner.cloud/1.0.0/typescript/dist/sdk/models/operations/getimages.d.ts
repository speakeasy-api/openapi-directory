import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Can be used multiple times.
 */
export declare enum GetImagesSortEnum {
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
 * Can be used multiple times. The response will only contain Images matching the status.
 */
export declare enum GetImagesStatusEnum {
    Available = "available",
    Creating = "creating"
}
/**
 * Can be used multiple times.
 */
export declare enum GetImagesTypeEnum {
    System = "system",
    Snapshot = "snapshot",
    Backup = "backup",
    App = "app"
}
export declare class GetImagesRequest extends SpeakeasyBase {
    /**
     * Can be used multiple times. Server ID linked to the Image. Only available for Images of type `backup`
     */
    boundTo?: string;
    /**
     * Can be used multiple times.
     */
    includeDeprecated?: boolean;
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
    sort?: GetImagesSortEnum;
    /**
     * Can be used multiple times. The response will only contain Images matching the status.
     */
    status?: GetImagesStatusEnum;
    /**
     * Can be used multiple times.
     */
    type?: GetImagesTypeEnum;
}
/**
 * Information about the Server the Image was created from
 */
export declare class GetImages200ApplicationJSONImagesCreatedFrom extends SpeakeasyBase {
    /**
     * ID of the Server the Image was created from
     */
    id: number;
    /**
     * Server name at the time the Image was created
     */
    name: string;
}
/**
 * Flavor of operating system contained in the Image
 */
export declare enum GetImages200ApplicationJSONImagesOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}
/**
 * Protection configuration for the Resource
 */
export declare class GetImages200ApplicationJSONImagesProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Whether the Image can be used or if it's still being created or unavailable
 */
export declare enum GetImages200ApplicationJSONImagesStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}
/**
 * Type of the Image
 */
export declare enum GetImages200ApplicationJSONImagesTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}
export declare class GetImages200ApplicationJSONImages extends SpeakeasyBase {
    /**
     * ID of Server the Image is bound to. Only set for Images of type `backup`.
     */
    boundTo: number;
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * Information about the Server the Image was created from
     */
    createdFrom: GetImages200ApplicationJSONImagesCreatedFrom;
    /**
     * Point in time where the Image was deleted (in ISO-8601 format)
     */
    deleted: string;
    /**
     * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
     */
    deprecated: string;
    /**
     * Description of the Image
     */
    description: string;
    /**
     * Size of the disk contained in the Image in GB
     */
    diskSize: number;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
     */
    imageSize: number;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;
    /**
     * Unique identifier of the Image. This value is only set for system Images.
     */
    name: string;
    /**
     * Flavor of operating system contained in the Image
     */
    osFlavor: GetImages200ApplicationJSONImagesOsFlavorEnum;
    /**
     * Operating system version
     */
    osVersion: string;
    /**
     * Protection configuration for the Resource
     */
    protection: GetImages200ApplicationJSONImagesProtection;
    /**
     * Indicates that rapid deploy of the Image is available
     */
    rapidDeploy?: boolean;
    /**
     * Whether the Image can be used or if it's still being created or unavailable
     */
    status: GetImages200ApplicationJSONImagesStatusEnum;
    /**
     * Type of the Image
     */
    type: GetImages200ApplicationJSONImagesTypeEnum;
}
export declare class GetImages200ApplicationJSONMetaPagination extends SpeakeasyBase {
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
export declare class GetImages200ApplicationJSONMeta extends SpeakeasyBase {
    pagination: GetImages200ApplicationJSONMetaPagination;
}
/**
 * The `images` key in the reply contains an array of Image objects with this structure
 */
export declare class GetImages200ApplicationJSON extends SpeakeasyBase {
    images: GetImages200ApplicationJSONImages[];
    meta?: GetImages200ApplicationJSONMeta;
}
export declare class GetImagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `images` key in the reply contains an array of Image objects with this structure
     */
    getImages200ApplicationJSONObject?: GetImages200ApplicationJSON;
}
