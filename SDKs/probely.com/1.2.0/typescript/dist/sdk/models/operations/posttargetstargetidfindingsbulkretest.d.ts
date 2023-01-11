import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTargetsTargetIdFindingsBulkRetestPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PostTargetsTargetIdFindingsBulkRetest400ApplicationJson extends SpeakeasyBase {
    error?: string;
}
export declare class PostTargetsTargetIdFindingsBulkRetest401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdFindingsBulkRetest404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdFindingsBulkRetestRequest extends SpeakeasyBase {
    pathParams: PostTargetsTargetIdFindingsBulkRetestPathParams;
    request: shared.FindingBulkRetest;
}
export declare class PostTargetsTargetIdFindingsBulkRetestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postTargetsTargetIdFindingsBulkRetest400ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkRetest400ApplicationJson;
    postTargetsTargetIdFindingsBulkRetest401ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkRetest401ApplicationJson;
    postTargetsTargetIdFindingsBulkRetest404ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkRetest404ApplicationJson;
}
