import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsVolatilityRequestBody3Assets extends SpeakeasyBase {
    /**
     * The asset variance
     */
    assetVariance: number;
}
export declare class PostAssetsVolatilityRequestBody3 extends SpeakeasyBase {
    assets: PostAssetsVolatilityRequestBody3Assets[];
}
export declare class PostAssetsVolatilityRequestBody2 extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
}
export declare class PostAssetsVolatilityRequestBody1Assets extends SpeakeasyBase {
    /**
     * assetReturns[t] is the return of the asset at the time t
     */
    assetReturns: number[];
}
export declare class PostAssetsVolatilityRequestBody1 extends SpeakeasyBase {
    assets: PostAssetsVolatilityRequestBody1Assets[];
}
export declare class PostAssetsVolatility200ApplicationJSONAssets extends SpeakeasyBase {
    /**
     * The volatility of the asset
     */
    assetVolatility: number;
}
/**
 * OK
 */
export declare class PostAssetsVolatility200ApplicationJSON extends SpeakeasyBase {
    assets: PostAssetsVolatility200ApplicationJSONAssets[];
}
export declare class PostAssetsVolatilityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsVolatility200ApplicationJSONObject?: PostAssetsVolatility200ApplicationJSON;
}
