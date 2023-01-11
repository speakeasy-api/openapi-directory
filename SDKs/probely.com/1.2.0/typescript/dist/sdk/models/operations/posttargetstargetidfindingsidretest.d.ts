import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTargetsTargetIdFindingsIdRetestPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PostTargetsTargetIdFindingsIdRetest401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdFindingsIdRetest403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdFindingsIdRetest404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdFindingsIdRetestRequest extends SpeakeasyBase {
    pathParams: PostTargetsTargetIdFindingsIdRetestPathParams;
}
export declare class PostTargetsTargetIdFindingsIdRetestResponse extends SpeakeasyBase {
    contentType: string;
    scan?: shared.Scan;
    statusCode: number;
    postTargetsTargetIdFindingsIdRetest401ApplicationJSONObject?: PostTargetsTargetIdFindingsIdRetest401ApplicationJson;
    postTargetsTargetIdFindingsIdRetest403ApplicationJSONObject?: PostTargetsTargetIdFindingsIdRetest403ApplicationJson;
    postTargetsTargetIdFindingsIdRetest404ApplicationJSONObject?: PostTargetsTargetIdFindingsIdRetest404ApplicationJson;
}
