import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdScheduledscansPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdScheduledscansQueryParams extends SpeakeasyBase {
    length?: number;
    ordering?: string;
    page?: number;
    search?: string;
}
export declare class GetTargetsTargetIdScheduledscans200ApplicationJson extends SpeakeasyBase {
    count?: number;
    length?: number;
    page?: number;
    pageTotal?: number;
    results?: shared.Scheduled[];
}
export declare class GetTargetsTargetIdScheduledscans401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScheduledscans404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScheduledscansRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdScheduledscansPathParams;
    queryParams: GetTargetsTargetIdScheduledscansQueryParams;
}
export declare class GetTargetsTargetIdScheduledscansResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdScheduledscans200ApplicationJSONObject?: GetTargetsTargetIdScheduledscans200ApplicationJson;
    getTargetsTargetIdScheduledscans401ApplicationJSONObject?: GetTargetsTargetIdScheduledscans401ApplicationJson;
    getTargetsTargetIdScheduledscans404ApplicationJSONObject?: GetTargetsTargetIdScheduledscans404ApplicationJson;
}
