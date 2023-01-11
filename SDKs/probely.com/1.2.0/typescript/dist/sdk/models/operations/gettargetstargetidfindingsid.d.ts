import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdFindingsIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdFindingsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsIdRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdFindingsIdPathParams;
}
export declare class GetTargetsTargetIdFindingsIdResponse extends SpeakeasyBase {
    contentType: string;
    finding?: shared.Finding;
    statusCode: number;
    getTargetsTargetIdFindingsId401ApplicationJSONObject?: GetTargetsTargetIdFindingsId401ApplicationJson;
    getTargetsTargetIdFindingsId404ApplicationJSONObject?: GetTargetsTargetIdFindingsId404ApplicationJson;
}
