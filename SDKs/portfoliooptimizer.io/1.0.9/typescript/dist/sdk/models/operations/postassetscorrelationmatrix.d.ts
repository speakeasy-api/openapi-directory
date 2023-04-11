import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsCorrelationMatrixRequestBody2 extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
}
export declare class PostAssetsCorrelationMatrixRequestBody1Assets extends SpeakeasyBase {
    /**
     * assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length
     */
    assetReturns: number[];
}
export declare class PostAssetsCorrelationMatrixRequestBody1 extends SpeakeasyBase {
    assets: PostAssetsCorrelationMatrixRequestBody1Assets[];
}
/**
 * OK
 */
export declare class PostAssetsCorrelationMatrix200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
}
export declare class PostAssetsCorrelationMatrixResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCorrelationMatrix200ApplicationJSONObject?: PostAssetsCorrelationMatrix200ApplicationJSON;
}
