import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsTargetIdScansIdReportOwaspPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdScansIdReportOwasp401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdReportOwasp404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdReportOwaspRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdScansIdReportOwaspPathParams;
}
export declare class GetTargetsTargetIdScansIdReportOwaspResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdScansIdReportOwasp200ApplicationPdfBinaryString?: Uint8Array;
    getTargetsTargetIdScansIdReportOwasp401ApplicationJSONObject?: GetTargetsTargetIdScansIdReportOwasp401ApplicationJson;
    getTargetsTargetIdScansIdReportOwasp404ApplicationJSONObject?: GetTargetsTargetIdScansIdReportOwasp404ApplicationJson;
}
