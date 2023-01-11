import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsTargetIdScansIdReportDefaultPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdScansIdReportDefault401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdReportDefault404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdReportDefaultRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdScansIdReportDefaultPathParams;
}
export declare class GetTargetsTargetIdScansIdReportDefaultResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdScansIdReportDefault200ApplicationPdfBinaryString?: Uint8Array;
    getTargetsTargetIdScansIdReportDefault401ApplicationJSONObject?: GetTargetsTargetIdScansIdReportDefault401ApplicationJson;
    getTargetsTargetIdScansIdReportDefault404ApplicationJSONObject?: GetTargetsTargetIdScansIdReportDefault404ApplicationJson;
}
