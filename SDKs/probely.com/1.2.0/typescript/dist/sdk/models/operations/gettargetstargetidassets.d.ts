import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdAssetsPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdAssetsQueryParams extends SpeakeasyBase {
    length?: number;
    ordering?: string;
    page?: number;
    search?: string;
}
export declare class GetTargetsTargetIdAssets200ApplicationJson extends SpeakeasyBase {
    count?: number;
    length?: number;
    page?: number;
    pageTotal?: number;
    results?: shared.Asset[];
}
export declare class GetTargetsTargetIdAssets401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdAssets404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdAssetsRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdAssetsPathParams;
    queryParams: GetTargetsTargetIdAssetsQueryParams;
}
export declare class GetTargetsTargetIdAssetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdAssets200ApplicationJSONObject?: GetTargetsTargetIdAssets200ApplicationJson;
    getTargetsTargetIdAssets401ApplicationJSONObject?: GetTargetsTargetIdAssets401ApplicationJson;
    getTargetsTargetIdAssets404ApplicationJSONObject?: GetTargetsTargetIdAssets404ApplicationJson;
}
