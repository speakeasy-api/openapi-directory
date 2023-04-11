import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdScansIdReportPciRequest extends SpeakeasyBase {
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
export declare class GetTargetsTargetIdScansIdReportPci404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdScansIdReportPci401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdReportPciResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Scan report PDF
     */
    getTargetsTargetIdScansIdReportPci200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdScansIdReportPci401ApplicationJSONObject?: GetTargetsTargetIdScansIdReportPci401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdScansIdReportPci404ApplicationJSONObject?: GetTargetsTargetIdScansIdReportPci404ApplicationJSON;
}
