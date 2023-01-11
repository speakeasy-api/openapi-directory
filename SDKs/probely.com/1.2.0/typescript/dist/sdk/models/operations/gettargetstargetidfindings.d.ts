import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdFindingsPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdFindingsQueryParams extends SpeakeasyBase {
    assignee?: string[];
    label?: string[];
    length?: number;
    ordering?: string;
    page?: number;
    scan?: string[];
    search?: string;
    severity?: shared.FindingSeverityEnum;
    state?: shared.FindingStateEnum;
}
export declare class GetTargetsTargetIdFindings200ApplicationJson extends SpeakeasyBase {
    count?: number;
    length?: number;
    page?: number;
    pageTotal?: number;
    results?: shared.Finding[];
}
export declare class GetTargetsTargetIdFindings401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindings404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdFindingsPathParams;
    queryParams: GetTargetsTargetIdFindingsQueryParams;
}
export declare class GetTargetsTargetIdFindingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdFindings200ApplicationJSONObject?: GetTargetsTargetIdFindings200ApplicationJson;
    getTargetsTargetIdFindings401ApplicationJSONObject?: GetTargetsTargetIdFindings401ApplicationJson;
    getTargetsTargetIdFindings404ApplicationJSONObject?: GetTargetsTargetIdFindings404ApplicationJson;
}
