import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsCovarianceMatrixRequestBody3 extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
    /**
     * assetsVolatilities[i] is the volatility of the asset i
     */
    assetsVolatilities: number[];
}
export declare class PostAssetsCovarianceMatrixRequestBody2 extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
    /**
     * assetsVariances[i] is the variance of the asset i
     */
    assetsVariances: number[];
}
export declare class PostAssetsCovarianceMatrixRequestBody1Assets extends SpeakeasyBase {
    /**
     * assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length
     */
    assetReturns: number[];
}
export declare class PostAssetsCovarianceMatrixRequestBody1 extends SpeakeasyBase {
    assets: PostAssetsCovarianceMatrixRequestBody1Assets[];
}
/**
 * OK
 */
export declare class PostAssetsCovarianceMatrix200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
}
export declare class PostAssetsCovarianceMatrixResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCovarianceMatrix200ApplicationJSONObject?: PostAssetsCovarianceMatrix200ApplicationJSON;
}
