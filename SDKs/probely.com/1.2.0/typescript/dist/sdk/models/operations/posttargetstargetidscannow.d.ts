import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Override the target's `scan_profile`.
 *
 * @remarks
 *
 */
export declare enum PostTargetsTargetIdScanNowRequestBodyScanProfileEnum {
    Safe = "safe",
    Normal = "normal",
    Full = "full",
    Lightning = "lightning"
}
export declare class PostTargetsTargetIdScanNowRequestBody extends SpeakeasyBase {
    /**
     * Override the target's `scan_profile`.
     *
     * @remarks
     *
     */
    scanProfile?: PostTargetsTargetIdScanNowRequestBodyScanProfileEnum;
}
export declare class PostTargetsTargetIdScanNowRequest extends SpeakeasyBase {
    requestBody?: PostTargetsTargetIdScanNowRequestBody;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PostTargetsTargetIdScanNow404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PostTargetsTargetIdScanNow403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargetsTargetIdScanNow401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostTargetsTargetIdScanNow400ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message
     */
    error?: string;
}
export declare class PostTargetsTargetIdScanNowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Scan object
     */
    scan?: shared.Scan;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    postTargetsTargetIdScanNow400ApplicationJSONObject?: PostTargetsTargetIdScanNow400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postTargetsTargetIdScanNow401ApplicationJSONObject?: PostTargetsTargetIdScanNow401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postTargetsTargetIdScanNow403ApplicationJSONObject?: PostTargetsTargetIdScanNow403ApplicationJSON;
    /**
     * Not found
     */
    postTargetsTargetIdScanNow404ApplicationJSONObject?: PostTargetsTargetIdScanNow404ApplicationJSON;
}
