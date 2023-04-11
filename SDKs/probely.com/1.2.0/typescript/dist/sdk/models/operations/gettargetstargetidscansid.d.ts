import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdScansIdRequest extends SpeakeasyBase {
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
export declare class GetTargetsTargetIdScansId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdScansId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Scan object
     */
    scan?: shared.Scan;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdScansId401ApplicationJSONObject?: GetTargetsTargetIdScansId401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdScansId404ApplicationJSONObject?: GetTargetsTargetIdScansId404ApplicationJSON;
}
