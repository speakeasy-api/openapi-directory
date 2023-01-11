import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssetContributorsPathParams extends SpeakeasyBase {
    assetId: string;
}
export declare class GetAssetContributorsQueryParams extends SpeakeasyBase {
    aliases?: boolean;
}
export declare class GetAssetContributorsSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetAssetContributorsRequest extends SpeakeasyBase {
    pathParams: GetAssetContributorsPathParams;
    queryParams: GetAssetContributorsQueryParams;
    security: GetAssetContributorsSecurity;
}
export declare class GetAssetContributorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAssetContributors200ApplicationJSONObject?: Record<string, any>;
}
