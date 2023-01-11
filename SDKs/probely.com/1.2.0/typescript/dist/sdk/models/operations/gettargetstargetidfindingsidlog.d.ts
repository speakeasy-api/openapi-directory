import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdFindingsIdLogPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdFindingsIdLog401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsIdLog404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsIdLogRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdFindingsIdLogPathParams;
}
export declare class GetTargetsTargetIdFindingsIdLogResponse extends SpeakeasyBase {
    activities?: shared.Activity[];
    contentType: string;
    statusCode: number;
    getTargetsTargetIdFindingsIdLog401ApplicationJSONObject?: GetTargetsTargetIdFindingsIdLog401ApplicationJson;
    getTargetsTargetIdFindingsIdLog404ApplicationJSONObject?: GetTargetsTargetIdFindingsIdLog404ApplicationJson;
}
