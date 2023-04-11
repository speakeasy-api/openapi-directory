import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdScansIdEndpointsRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class GetTargetsTargetIdScansIdEndpoints404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdScansIdEndpoints401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Endpoint list CSV file
     */
    getTargetsTargetIdScansIdEndpoints200ApplicationCsvBinaryString?: Uint8Array;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdScansIdEndpoints401ApplicationJSONObject?: GetTargetsTargetIdScansIdEndpoints401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdScansIdEndpoints404ApplicationJSONObject?: GetTargetsTargetIdScansIdEndpoints404ApplicationJSON;
}
