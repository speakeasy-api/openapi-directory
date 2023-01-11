import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTargetsTargetIdFindingsIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PutTargetsTargetIdFindingsId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutTargetsTargetIdFindingsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdFindingsId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdFindingsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdFindingsIdRequest extends SpeakeasyBase {
    pathParams: PutTargetsTargetIdFindingsIdPathParams;
    request: shared.FindingUpdateInput;
}
export declare class PutTargetsTargetIdFindingsIdResponse extends SpeakeasyBase {
    contentType: string;
    finding?: shared.Finding;
    statusCode: number;
    putTargetsTargetIdFindingsId400ApplicationJSONObject?: PutTargetsTargetIdFindingsId400ApplicationJson;
    putTargetsTargetIdFindingsId401ApplicationJSONObject?: PutTargetsTargetIdFindingsId401ApplicationJson;
    putTargetsTargetIdFindingsId403ApplicationJSONObject?: PutTargetsTargetIdFindingsId403ApplicationJson;
    putTargetsTargetIdFindingsId404ApplicationJSONObject?: PutTargetsTargetIdFindingsId404ApplicationJson;
}
