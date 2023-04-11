import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Can be used multiple times.
 */
export declare enum GetSshKeysSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Name = "name",
    NameAsc = "name:asc",
    NameDesc = "name:desc"
}
export declare class GetSshKeysRequest extends SpeakeasyBase {
    /**
     * Can be used to filter SSH keys by their fingerprint. The response will only contain the SSH key matching the specified fingerprint.
     */
    fingerprint?: string;
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
    sort?: GetSshKeysSortEnum;
}
export declare class GetSshKeys200ApplicationJSONMetaPagination extends SpeakeasyBase {
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
export declare class GetSshKeys200ApplicationJSONMeta extends SpeakeasyBase {
    pagination: GetSshKeys200ApplicationJSONMetaPagination;
}
export declare class GetSshKeys200ApplicationJSONSshKeys extends SpeakeasyBase {
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * Fingerprint of public key
     */
    fingerprint: string;
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
     * Public key
     */
    publicKey: string;
}
/**
 * The `ssh_keys` key in the reply contains an array of SSH key objects with this structure
 */
export declare class GetSshKeys200ApplicationJSON extends SpeakeasyBase {
    meta?: GetSshKeys200ApplicationJSONMeta;
    sshKeys: GetSshKeys200ApplicationJSONSshKeys[];
}
export declare class GetSshKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `ssh_keys` key in the reply contains an array of SSH key objects with this structure
     */
    getSshKeys200ApplicationJSONObject?: GetSshKeys200ApplicationJSON;
}
