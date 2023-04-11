import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetIsosRequest extends SpeakeasyBase {
    /**
     * Can be used to filter ISOs by their name. The response will only contain the ISO matching the specified name.
     */
    name?: string;
}
/**
 * Type of the ISO
 */
export declare enum GetIsos200ApplicationJSONIsosTypeEnum {
    Public = "public",
    Private = "private"
}
export declare class GetIsos200ApplicationJSONIsos extends SpeakeasyBase {
    /**
     * ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.
     */
    deprecated: string;
    /**
     * Description of the ISO
     */
    description: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Unique identifier of the ISO. Only set for public ISOs
     */
    name: string;
    /**
     * Type of the ISO
     */
    type: GetIsos200ApplicationJSONIsosTypeEnum;
}
export declare class GetIsos200ApplicationJSONMetaPagination extends SpeakeasyBase {
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
export declare class GetIsos200ApplicationJSONMeta extends SpeakeasyBase {
    pagination: GetIsos200ApplicationJSONMetaPagination;
}
/**
 * The `isos` key in the reply contains an array of iso objects with this structure
 */
export declare class GetIsos200ApplicationJSON extends SpeakeasyBase {
    isos: GetIsos200ApplicationJSONIsos[];
    meta?: GetIsos200ApplicationJSONMeta;
}
export declare class GetIsosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `isos` key in the reply contains an array of iso objects with this structure
     */
    getIsos200ApplicationJSONObject?: GetIsos200ApplicationJSON;
}
