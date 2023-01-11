import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdScheduledscansExpandedPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdScheduledscansExpandedQueryParams extends SpeakeasyBase {
    length?: number;
}
export declare class GetTargetsTargetIdScheduledscansExpanded200ApplicationJson extends SpeakeasyBase {
    results?: shared.Scheduled[];
}
export declare class GetTargetsTargetIdScheduledscansExpanded404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScheduledscansExpandedRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdScheduledscansExpandedPathParams;
    queryParams: GetTargetsTargetIdScheduledscansExpandedQueryParams;
}
export declare class GetTargetsTargetIdScheduledscansExpandedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdScheduledscansExpanded200ApplicationJSONObject?: GetTargetsTargetIdScheduledscansExpanded200ApplicationJson;
    getTargetsTargetIdScheduledscansExpanded404ApplicationJSONObject?: GetTargetsTargetIdScheduledscansExpanded404ApplicationJson;
}
