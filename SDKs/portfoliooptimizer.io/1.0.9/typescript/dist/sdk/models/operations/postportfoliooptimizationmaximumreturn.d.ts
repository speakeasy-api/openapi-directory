import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioOptimizationMaximumReturnRequestBodyConstraints extends SpeakeasyBase {
    assetsGroups?: number[][];
    /**
     * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
     */
    assetsGroupsMatrix?: number[][];
    /**
     * maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided
     */
    maximumAssetsGroupsWeights?: number[];
    /**
     * maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage
     */
    maximumAssetsWeights?: number[];
    /**
     * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
     */
    maximumPortfolioExposure?: number;
    /**
     * minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage
     */
    minimumAssetsWeights?: number[];
    /**
     * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
     */
    minimumPortfolioExposure?: number;
}
export declare class PostPortfolioOptimizationMaximumReturnRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix?: number[][];
    /**
     * assetsReturns[i] is the arithmetic return of asset i
     */
    assetsReturns: number[];
    constraints?: PostPortfolioOptimizationMaximumReturnRequestBodyConstraints;
}
/**
 * OK
 */
export declare class PostPortfolioOptimizationMaximumReturn200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationMaximumReturnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioOptimizationMaximumReturn200ApplicationJSONObject?: PostPortfolioOptimizationMaximumReturn200ApplicationJSON;
}
