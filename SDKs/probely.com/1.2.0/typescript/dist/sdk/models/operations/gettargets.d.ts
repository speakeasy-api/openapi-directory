import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsRequest extends SpeakeasyBase {
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
 * Internal server error
 */
export declare class GetTargets500ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Not found
 */
export declare class GetTargets404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargets401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * List of targets
 */
export declare class GetTargets200ApplicationJSON extends SpeakeasyBase {
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
     * Number of objects in the response.
     */
    paginationCount?: number;
    /**
     * Target objects
     */
    results?: shared.Target[];
}
export declare class GetTargetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of targets
     */
    getTargets200ApplicationJSONObject?: GetTargets200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getTargets401ApplicationJSONObject?: GetTargets401ApplicationJSON;
    /**
     * Not found
     */
    getTargets404ApplicationJSONObject?: GetTargets404ApplicationJSON;
    /**
     * Internal server error
     */
    getTargets500ApplicationJSONObject?: GetTargets500ApplicationJSON;
}
