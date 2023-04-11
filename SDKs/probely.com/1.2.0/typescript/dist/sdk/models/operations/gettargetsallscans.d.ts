import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsAllScansRequest extends SpeakeasyBase {
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
     * Filter by scan start dates
     */
    started?: Date[];
    /**
     * Filter by scan statuses
     */
    status?: shared.ScanStatusEnum;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsAllScans401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Scan list
 */
export declare class GetTargetsAllScans200ApplicationJSON extends SpeakeasyBase {
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
     * Scan objects
     */
    results?: shared.Scan[];
}
export declare class GetTargetsAllScansResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Scan list
     */
    getTargetsAllScans200ApplicationJSONObject?: GetTargetsAllScans200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getTargetsAllScans401ApplicationJSONObject?: GetTargetsAllScans401ApplicationJSON;
}
