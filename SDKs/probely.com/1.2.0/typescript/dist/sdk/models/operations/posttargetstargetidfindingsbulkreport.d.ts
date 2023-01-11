import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTargetsTargetIdFindingsBulkReportPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PostTargetsTargetIdFindingsBulkReport400ApplicationJson extends SpeakeasyBase {
    error?: string;
}
export declare class PostTargetsTargetIdFindingsBulkReport401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdFindingsBulkReport404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdFindingsBulkReportRequest extends SpeakeasyBase {
    pathParams: PostTargetsTargetIdFindingsBulkReportPathParams;
    request: shared.FindingBulkIds;
}
export declare class PostTargetsTargetIdFindingsBulkReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postTargetsTargetIdFindingsBulkReport400ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkReport400ApplicationJson;
    postTargetsTargetIdFindingsBulkReport401ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkReport401ApplicationJson;
    postTargetsTargetIdFindingsBulkReport404ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkReport404ApplicationJson;
}
