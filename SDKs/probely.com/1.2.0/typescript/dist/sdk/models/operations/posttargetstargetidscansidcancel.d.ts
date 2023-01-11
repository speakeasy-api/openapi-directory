import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTargetsTargetIdScansIdCancelPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PostTargetsTargetIdScansIdCancel401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdScansIdCancel403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdScansIdCancel404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdScansIdCancelRequest extends SpeakeasyBase {
    pathParams: PostTargetsTargetIdScansIdCancelPathParams;
}
export declare class PostTargetsTargetIdScansIdCancelResponse extends SpeakeasyBase {
    contentType: string;
    scan?: shared.Scan;
    statusCode: number;
    postTargetsTargetIdScansIdCancel401ApplicationJSONObject?: PostTargetsTargetIdScansIdCancel401ApplicationJson;
    postTargetsTargetIdScansIdCancel403ApplicationJSONObject?: PostTargetsTargetIdScansIdCancel403ApplicationJson;
    postTargetsTargetIdScansIdCancel404ApplicationJSONObject?: PostTargetsTargetIdScansIdCancel404ApplicationJson;
}
