import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchTargetsTargetIdFindingsBulkUpdatePathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PatchTargetsTargetIdFindingsBulkUpdate400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchTargetsTargetIdFindingsBulkUpdate401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdFindingsBulkUpdate404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdFindingsBulkUpdateRequest extends SpeakeasyBase {
    pathParams: PatchTargetsTargetIdFindingsBulkUpdatePathParams;
    request: shared.FindingBulkUpdateInput;
}
export declare class PatchTargetsTargetIdFindingsBulkUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patchTargetsTargetIdFindingsBulkUpdate400ApplicationJSONObject?: PatchTargetsTargetIdFindingsBulkUpdate400ApplicationJson;
    patchTargetsTargetIdFindingsBulkUpdate401ApplicationJSONObject?: PatchTargetsTargetIdFindingsBulkUpdate401ApplicationJson;
    patchTargetsTargetIdFindingsBulkUpdate404ApplicationJSONObject?: PatchTargetsTargetIdFindingsBulkUpdate404ApplicationJson;
}
