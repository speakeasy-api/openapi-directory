import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTargetsTargetIdScansIdCancelRequest extends SpeakeasyBase {
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
export declare class PostTargetsTargetIdScansIdCancel404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PostTargetsTargetIdScansIdCancel403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargetsTargetIdScansIdCancel401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdScansIdCancelResponse extends SpeakeasyBase {
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
    postTargetsTargetIdScansIdCancel401ApplicationJSONObject?: PostTargetsTargetIdScansIdCancel401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postTargetsTargetIdScansIdCancel403ApplicationJSONObject?: PostTargetsTargetIdScansIdCancel403ApplicationJSON;
    /**
     * Not found
     */
    postTargetsTargetIdScansIdCancel404ApplicationJSONObject?: PostTargetsTargetIdScansIdCancel404ApplicationJSON;
}
