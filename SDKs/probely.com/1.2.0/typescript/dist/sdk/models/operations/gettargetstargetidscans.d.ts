import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdScansRequest extends SpeakeasyBase {
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
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class GetTargetsTargetIdScans404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdScans401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Scan list
 */
export declare class GetTargetsTargetIdScans200ApplicationJSON extends SpeakeasyBase {
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
export declare class GetTargetsTargetIdScansResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Scan list
     */
    getTargetsTargetIdScans200ApplicationJSONObject?: GetTargetsTargetIdScans200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdScans401ApplicationJSONObject?: GetTargetsTargetIdScans401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdScans404ApplicationJSONObject?: GetTargetsTargetIdScans404ApplicationJSON;
}
