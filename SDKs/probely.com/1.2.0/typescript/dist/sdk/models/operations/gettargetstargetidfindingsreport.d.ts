import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdFindingsReportRequest extends SpeakeasyBase {
    /**
     * Target id
     */
    targetId: string;
    /**
     * Token received from the finding report endpoint.
     */
    token: string;
}
/**
 * Not found
 */
export declare class GetTargetsTargetIdFindingsReport404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdFindingsReport401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class GetTargetsTargetIdFindingsReport400ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message
     */
    error?: string;
}
export declare class GetTargetsTargetIdFindingsReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Scan report PDF
     */
    getTargetsTargetIdFindingsReport200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Bad Request
     */
    getTargetsTargetIdFindingsReport400ApplicationJSONObject?: GetTargetsTargetIdFindingsReport400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdFindingsReport401ApplicationJSONObject?: GetTargetsTargetIdFindingsReport401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdFindingsReport404ApplicationJSONObject?: GetTargetsTargetIdFindingsReport404ApplicationJSON;
}
