import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssetPathParams extends SpeakeasyBase {
    assetId: string;
}
export declare class GetAssetQueryParams extends SpeakeasyBase {
    aliases?: boolean;
}
export declare class GetAssetSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetAssetRequest extends SpeakeasyBase {
    pathParams: GetAssetPathParams;
    queryParams: GetAssetQueryParams;
    security: GetAssetSecurity;
}
export declare class GetAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAsset200ApplicationJSONObject?: Record<string, any>;
}
