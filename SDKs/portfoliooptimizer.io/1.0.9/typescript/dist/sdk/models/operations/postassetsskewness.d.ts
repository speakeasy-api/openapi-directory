import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsSkewnessRequestBodyAssets extends SpeakeasyBase {
    /**
     * assetReturns[t] is the return of the asset at the time t
     */
    assetReturns: number[];
}
export declare class PostAssetsSkewnessRequestBody extends SpeakeasyBase {
    assets: PostAssetsSkewnessRequestBodyAssets[];
}
export declare class PostAssetsSkewness200ApplicationJSONAssets extends SpeakeasyBase {
    /**
     * The skewness of the asset
     */
    assetSkewness: number;
}
/**
 * OK
 */
export declare class PostAssetsSkewness200ApplicationJSON extends SpeakeasyBase {
    assets: PostAssetsSkewness200ApplicationJSONAssets[];
}
export declare class PostAssetsSkewnessResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsSkewness200ApplicationJSONObject?: PostAssetsSkewness200ApplicationJSON;
}
