import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdAssetsIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdAssetsId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class GetTargetsTargetIdAssetsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdAssetsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdAssetsIdRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdAssetsIdPathParams;
}
export declare class GetTargetsTargetIdAssetsIdResponse extends SpeakeasyBase {
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
    getTargetsTargetIdAssetsId400ApplicationJSONObject?: GetTargetsTargetIdAssetsId400ApplicationJson;
    getTargetsTargetIdAssetsId401ApplicationJSONObject?: GetTargetsTargetIdAssetsId401ApplicationJson;
    getTargetsTargetIdAssetsId404ApplicationJSONObject?: GetTargetsTargetIdAssetsId404ApplicationJson;
}
