import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdScheduledscansRequest extends SpeakeasyBase {
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
export declare class GetTargetsTargetIdScheduledscans404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdScheduledscans401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Scheduled scan list
 */
export declare class GetTargetsTargetIdScheduledscans200ApplicationJSON extends SpeakeasyBase {
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
     * Scheduled scan objects
     */
    results?: shared.Scheduled[];
}
export declare class GetTargetsTargetIdScheduledscansResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Scheduled scan list
     */
    getTargetsTargetIdScheduledscans200ApplicationJSONObject?: GetTargetsTargetIdScheduledscans200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdScheduledscans401ApplicationJSONObject?: GetTargetsTargetIdScheduledscans401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdScheduledscans404ApplicationJSONObject?: GetTargetsTargetIdScheduledscans404ApplicationJSON;
}
