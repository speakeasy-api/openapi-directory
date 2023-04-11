import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetKeysRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page
     */
    length?: number;
    /**
     * Which field to use when ordering the results, prefix with `-` to invert ordering.
     *
     * @remarks
     *
     */
    ordering?: string;
    /**
     * Page number within the paginated result set
     */
    page?: number;
    /**
     * Search term
     */
    search?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetKeys403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetKeys401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * API Key list
 */
export declare class GetKeys200ApplicationJSON extends SpeakeasyBase {
    /**
     * Number of objects in the response.
     */
    count?: number;
    /**
     * Number of objects per page.
     */
    length?: number;
    /**
     * Current page.
     */
    page?: number;
    /**
     * Number of pages.
     */
    pageTotal?: number;
    /**
     * API key objects
     */
    results?: shared.Key[];
}
export declare class GetKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * API Key list
     */
    getKeys200ApplicationJSONObject?: GetKeys200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getKeys401ApplicationJSONObject?: GetKeys401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getKeys403ApplicationJSONObject?: GetKeys403ApplicationJSON;
}
