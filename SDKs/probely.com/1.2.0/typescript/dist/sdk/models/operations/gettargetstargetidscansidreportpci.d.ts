import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsTargetIdScansIdReportPciPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdScansIdReportPci401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdReportPci404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdReportPciRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdScansIdReportPciPathParams;
}
export declare class GetTargetsTargetIdScansIdReportPciResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdScansIdReportPci200ApplicationPdfBinaryString?: Uint8Array;
    getTargetsTargetIdScansIdReportPci401ApplicationJSONObject?: GetTargetsTargetIdScansIdReportPci401ApplicationJson;
    getTargetsTargetIdScansIdReportPci404ApplicationJSONObject?: GetTargetsTargetIdScansIdReportPci404ApplicationJson;
}
