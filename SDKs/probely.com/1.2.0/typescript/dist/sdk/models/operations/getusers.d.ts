import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersRequest extends SpeakeasyBase {
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
 * Access token is missing or invalid
 */
export declare class GetUsers401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * User list
 */
export declare class GetUsers200ApplicationJSON extends SpeakeasyBase {
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
     * User objects
     */
    results?: shared.User[];
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User list
     */
    getUsers200ApplicationJSONObject?: GetUsers200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getUsers401ApplicationJSONObject?: GetUsers401ApplicationJSON;
}
