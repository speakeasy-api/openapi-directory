import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsVarianceRequestBody3Assets extends SpeakeasyBase {
    /**
     * The asset volatility
     */
    assetVolatility: number;
}
export declare class PostAssetsVarianceRequestBody3 extends SpeakeasyBase {
    assets: PostAssetsVarianceRequestBody3Assets[];
}
export declare class PostAssetsVarianceRequestBody2 extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
}
export declare class PostAssetsVarianceRequestBody1Assets extends SpeakeasyBase {
    /**
     * assetReturns[t] is the return of the asset at the time t
     */
    assetReturns: number[];
}
export declare class PostAssetsVarianceRequestBody1 extends SpeakeasyBase {
    assets: PostAssetsVarianceRequestBody1Assets[];
}
export declare class PostAssetsVariance200ApplicationJSONAssets extends SpeakeasyBase {
    /**
     * The variance of the asset
     */
    assetVariance: number;
}
/**
 * OK
 */
export declare class PostAssetsVariance200ApplicationJSON extends SpeakeasyBase {
    assets: PostAssetsVariance200ApplicationJSONAssets[];
}
export declare class PostAssetsVarianceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsVariance200ApplicationJSONObject?: PostAssetsVariance200ApplicationJSON;
}
