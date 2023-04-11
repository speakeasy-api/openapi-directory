import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdScansIdReportRequest extends SpeakeasyBase {
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
export declare class GetTargetsTargetIdScansIdReport404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdScansIdReport401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Scan report PDF
     */
    getTargetsTargetIdScansIdReport200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdScansIdReport401ApplicationJSONObject?: GetTargetsTargetIdScansIdReport401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdScansIdReport404ApplicationJSONObject?: GetTargetsTargetIdScansIdReport404ApplicationJSON;
}
