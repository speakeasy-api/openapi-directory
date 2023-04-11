import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdScansIdReportDefaultRequest extends SpeakeasyBase {
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
export declare class GetTargetsTargetIdScansIdReportDefault404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdScansIdReportDefault401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdReportDefaultResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Scan report PDF
     */
    getTargetsTargetIdScansIdReportDefault200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdScansIdReportDefault401ApplicationJSONObject?: GetTargetsTargetIdScansIdReportDefault401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdScansIdReportDefault404ApplicationJSONObject?: GetTargetsTargetIdScansIdReportDefault404ApplicationJSON;
}
