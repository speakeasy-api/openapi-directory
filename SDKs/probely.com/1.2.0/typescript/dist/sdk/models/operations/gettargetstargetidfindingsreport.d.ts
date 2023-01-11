import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsTargetIdFindingsReportPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdFindingsReportQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class GetTargetsTargetIdFindingsReport400ApplicationJson extends SpeakeasyBase {
    error?: string;
}
export declare class GetTargetsTargetIdFindingsReport401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsReport404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsReportRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdFindingsReportPathParams;
    queryParams: GetTargetsTargetIdFindingsReportQueryParams;
}
export declare class GetTargetsTargetIdFindingsReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdFindingsReport200ApplicationPdfBinaryString?: Uint8Array;
    getTargetsTargetIdFindingsReport400ApplicationJSONObject?: GetTargetsTargetIdFindingsReport400ApplicationJson;
    getTargetsTargetIdFindingsReport401ApplicationJSONObject?: GetTargetsTargetIdFindingsReport401ApplicationJson;
    getTargetsTargetIdFindingsReport404ApplicationJSONObject?: GetTargetsTargetIdFindingsReport404ApplicationJson;
}
