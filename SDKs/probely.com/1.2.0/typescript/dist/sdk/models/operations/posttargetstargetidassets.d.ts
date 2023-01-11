import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTargetsTargetIdAssetsPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PostTargetsTargetIdAssets400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargetsTargetIdAssets401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdAssets403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdAssets404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdAssetsRequest extends SpeakeasyBase {
    pathParams: PostTargetsTargetIdAssetsPathParams;
    request: shared.AssetInput;
}
export declare class PostTargetsTargetIdAssetsResponse extends SpeakeasyBase {
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
    postTargetsTargetIdAssets400ApplicationJSONObject?: PostTargetsTargetIdAssets400ApplicationJson;
    postTargetsTargetIdAssets401ApplicationJSONObject?: PostTargetsTargetIdAssets401ApplicationJson;
    postTargetsTargetIdAssets403ApplicationJSONObject?: PostTargetsTargetIdAssets403ApplicationJson;
    postTargetsTargetIdAssets404ApplicationJSONObject?: PostTargetsTargetIdAssets404ApplicationJson;
}
