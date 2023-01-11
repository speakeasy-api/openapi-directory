import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchTargetsTargetIdFindingsIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PatchTargetsTargetIdFindingsId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchTargetsTargetIdFindingsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdFindingsId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdFindingsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdFindingsIdRequest extends SpeakeasyBase {
    pathParams: PatchTargetsTargetIdFindingsIdPathParams;
    request: shared.FindingUpdateInput;
}
export declare class PatchTargetsTargetIdFindingsIdResponse extends SpeakeasyBase {
    contentType: string;
    finding?: shared.Finding;
    statusCode: number;
    patchTargetsTargetIdFindingsId400ApplicationJSONObject?: PatchTargetsTargetIdFindingsId400ApplicationJson;
    patchTargetsTargetIdFindingsId401ApplicationJSONObject?: PatchTargetsTargetIdFindingsId401ApplicationJson;
    patchTargetsTargetIdFindingsId403ApplicationJSONObject?: PatchTargetsTargetIdFindingsId403ApplicationJson;
    patchTargetsTargetIdFindingsId404ApplicationJSONObject?: PatchTargetsTargetIdFindingsId404ApplicationJson;
}
