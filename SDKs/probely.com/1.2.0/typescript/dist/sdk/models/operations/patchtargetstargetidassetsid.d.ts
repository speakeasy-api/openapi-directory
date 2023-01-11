import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchTargetsTargetIdAssetsIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PatchTargetsTargetIdAssetsId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchTargetsTargetIdAssetsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdAssetsId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdAssetsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdAssetsIdRequest extends SpeakeasyBase {
    pathParams: PatchTargetsTargetIdAssetsIdPathParams;
    request: shared.AssetInput;
}
export declare class PatchTargetsTargetIdAssetsIdResponse extends SpeakeasyBase {
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
    patchTargetsTargetIdAssetsId400ApplicationJSONObject?: PatchTargetsTargetIdAssetsId400ApplicationJson;
    patchTargetsTargetIdAssetsId401ApplicationJSONObject?: PatchTargetsTargetIdAssetsId401ApplicationJson;
    patchTargetsTargetIdAssetsId403ApplicationJSONObject?: PatchTargetsTargetIdAssetsId403ApplicationJson;
    patchTargetsTargetIdAssetsId404ApplicationJSONObject?: PatchTargetsTargetIdAssetsId404ApplicationJson;
}
