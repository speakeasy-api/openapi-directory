import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssetsQueryParams extends SpeakeasyBase {
    aliases?: boolean;
    limit?: number;
    updatedAfter?: string;
}
export declare class ListAssetsSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ListAssetsRequest extends SpeakeasyBase {
    queryParams: ListAssetsQueryParams;
    security: ListAssetsSecurity;
}
export declare class ListAssetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAssets200ApplicationJSONObject?: Record<string, any>;
}
