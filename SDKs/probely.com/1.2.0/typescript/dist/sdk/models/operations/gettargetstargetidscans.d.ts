import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdScansPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdScansQueryParams extends SpeakeasyBase {
    length?: number;
    ordering?: string;
    page?: number;
    search?: string;
    started?: Date[];
    status?: shared.ScanStatusEnum;
}
export declare class GetTargetsTargetIdScans200ApplicationJson extends SpeakeasyBase {
    count?: number;
    length?: number;
    page?: number;
    pageTotal?: number;
    results?: shared.Scan[];
}
export declare class GetTargetsTargetIdScans401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScans404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdScansPathParams;
    queryParams: GetTargetsTargetIdScansQueryParams;
}
export declare class GetTargetsTargetIdScansResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdScans200ApplicationJSONObject?: GetTargetsTargetIdScans200ApplicationJson;
    getTargetsTargetIdScans401ApplicationJSONObject?: GetTargetsTargetIdScans401ApplicationJson;
    getTargetsTargetIdScans404ApplicationJSONObject?: GetTargetsTargetIdScans404ApplicationJson;
}
