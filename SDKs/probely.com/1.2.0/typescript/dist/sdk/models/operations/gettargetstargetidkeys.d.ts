import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdKeysRequest extends SpeakeasyBase {
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
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class GetTargetsTargetIdKeys404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdKeys401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * API Key list
 */
export declare class GetTargetsTargetIdKeys200ApplicationJSON extends SpeakeasyBase {
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
export declare class GetTargetsTargetIdKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * API Key list
     */
    getTargetsTargetIdKeys200ApplicationJSONObject?: GetTargetsTargetIdKeys200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdKeys401ApplicationJSONObject?: GetTargetsTargetIdKeys401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdKeys404ApplicationJSONObject?: GetTargetsTargetIdKeys404ApplicationJSON;
}
