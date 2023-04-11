import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdScansRetrievePageRequest extends SpeakeasyBase {
    /**
     * Date
     */
    date: Date;
    /**
     * Number of results to return per page
     */
    length?: number;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class GetTargetsTargetIdScansRetrievePage404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdScansRetrievePage401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class GetTargetsTargetIdScansRetrievePage400ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message
     */
    error?: string;
}
/**
 * Page number for supplied date
 */
export declare class GetTargetsTargetIdScansRetrievePage200ApplicationJSON extends SpeakeasyBase {
    /**
     * Page number
     */
    page?: number;
}
export declare class GetTargetsTargetIdScansRetrievePageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Page number for supplied date
     */
    getTargetsTargetIdScansRetrievePage200ApplicationJSONObject?: GetTargetsTargetIdScansRetrievePage200ApplicationJSON;
    /**
     * Bad Request
     */
    getTargetsTargetIdScansRetrievePage400ApplicationJSONObject?: GetTargetsTargetIdScansRetrievePage400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdScansRetrievePage401ApplicationJSONObject?: GetTargetsTargetIdScansRetrievePage401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdScansRetrievePage404ApplicationJSONObject?: GetTargetsTargetIdScansRetrievePage404ApplicationJSON;
}
