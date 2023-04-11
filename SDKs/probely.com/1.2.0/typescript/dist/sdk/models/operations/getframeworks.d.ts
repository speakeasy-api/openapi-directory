import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFrameworksRequest extends SpeakeasyBase {
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
export declare class GetFrameworks401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Framework list
 */
export declare class GetFrameworks200ApplicationJSON extends SpeakeasyBase {
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
     * Framework objects
     */
    results?: shared.Framework[];
}
export declare class GetFrameworksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Framework list
     */
    getFrameworks200ApplicationJSONObject?: GetFrameworks200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getFrameworks401ApplicationJSONObject?: GetFrameworks401ApplicationJSON;
}
