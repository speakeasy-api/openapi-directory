import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets extends SpeakeasyBase {
    /**
     * assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length
     */
    assetReturns: number[];
}
export declare class PostAssetsCovarianceMatrixExponentiallyWeightedRequestBody extends SpeakeasyBase {
    assets: PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets[];
    /**
     * The exponential decay factor
     */
    decayFactor?: number;
}
/**
 * OK
 */
export declare class PostAssetsCovarianceMatrixExponentiallyWeighted200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsCovarianceMatrix[i][j] is the sample covariance between the asset i returns and the asset j returns
     */
    assetsCovarianceMatrix: number[][];
}
export declare class PostAssetsCovarianceMatrixExponentiallyWeightedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCovarianceMatrixExponentiallyWeighted200ApplicationJSONObject?: PostAssetsCovarianceMatrixExponentiallyWeighted200ApplicationJSON;
}
