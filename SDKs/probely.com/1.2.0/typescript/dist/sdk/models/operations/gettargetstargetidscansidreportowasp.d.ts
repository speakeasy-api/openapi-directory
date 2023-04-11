import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdScansIdReportOwaspRequest extends SpeakeasyBase {
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
export declare class GetTargetsTargetIdScansIdReportOwasp404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdScansIdReportOwasp401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdReportOwaspResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Scan report PDF
     */
    getTargetsTargetIdScansIdReportOwasp200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdScansIdReportOwasp401ApplicationJSONObject?: GetTargetsTargetIdScansIdReportOwasp401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdScansIdReportOwasp404ApplicationJSONObject?: GetTargetsTargetIdScansIdReportOwasp404ApplicationJSON;
}
