import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTargetsTargetIdAssetsIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PutTargetsTargetIdAssetsId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutTargetsTargetIdAssetsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdAssetsId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdAssetsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdAssetsIdRequest extends SpeakeasyBase {
    pathParams: PutTargetsTargetIdAssetsIdPathParams;
    request: shared.AssetInput;
}
export declare class PutTargetsTargetIdAssetsIdResponse extends SpeakeasyBase {
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
    putTargetsTargetIdAssetsId400ApplicationJSONObject?: PutTargetsTargetIdAssetsId400ApplicationJson;
    putTargetsTargetIdAssetsId401ApplicationJSONObject?: PutTargetsTargetIdAssetsId401ApplicationJson;
    putTargetsTargetIdAssetsId403ApplicationJSONObject?: PutTargetsTargetIdAssetsId403ApplicationJson;
    putTargetsTargetIdAssetsId404ApplicationJSONObject?: PutTargetsTargetIdAssetsId404ApplicationJson;
}
