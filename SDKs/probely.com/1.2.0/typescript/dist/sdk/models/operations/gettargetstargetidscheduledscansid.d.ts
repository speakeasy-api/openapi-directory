import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdScheduledscansIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdScheduledscansId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScheduledscansId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScheduledscansIdRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdScheduledscansIdPathParams;
}
export declare class GetTargetsTargetIdScheduledscansIdResponse extends SpeakeasyBase {
    contentType: string;
    scheduled?: shared.Scheduled;
    statusCode: number;
    getTargetsTargetIdScheduledscansId401ApplicationJSONObject?: GetTargetsTargetIdScheduledscansId401ApplicationJson;
    getTargetsTargetIdScheduledscansId404ApplicationJSONObject?: GetTargetsTargetIdScheduledscansId404ApplicationJson;
}
