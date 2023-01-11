import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdScansIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdScansId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansIdRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdScansIdPathParams;
}
export declare class GetTargetsTargetIdScansIdResponse extends SpeakeasyBase {
    contentType: string;
    scan?: shared.Scan;
    statusCode: number;
    getTargetsTargetIdScansId401ApplicationJSONObject?: GetTargetsTargetIdScansId401ApplicationJson;
    getTargetsTargetIdScansId404ApplicationJSONObject?: GetTargetsTargetIdScansId404ApplicationJson;
}
