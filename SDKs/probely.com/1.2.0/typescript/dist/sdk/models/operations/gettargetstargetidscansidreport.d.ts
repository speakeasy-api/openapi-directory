import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsTargetIdScansIdReportPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdScansIdReport401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdReport404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdReportRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdScansIdReportPathParams;
}
export declare class GetTargetsTargetIdScansIdReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdScansIdReport200ApplicationPdfBinaryString?: Uint8Array;
    getTargetsTargetIdScansIdReport401ApplicationJSONObject?: GetTargetsTargetIdScansIdReport401ApplicationJson;
    getTargetsTargetIdScansIdReport404ApplicationJSONObject?: GetTargetsTargetIdScansIdReport404ApplicationJson;
}
