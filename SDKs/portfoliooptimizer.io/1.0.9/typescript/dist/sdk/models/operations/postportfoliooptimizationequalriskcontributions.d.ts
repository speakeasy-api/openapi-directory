import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints extends SpeakeasyBase {
    /**
     * maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage
     */
    maximumAssetsWeights?: number[];
    /**
     * minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage
     */
    minimumAssetsWeights?: number[];
}
export declare class PostPortfolioOptimizationEqualRiskContributionsRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
    constraints?: PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints;
}
/**
 * OK
 */
export declare class PostPortfolioOptimizationEqualRiskContributions200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationEqualRiskContributionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioOptimizationEqualRiskContributions200ApplicationJSONObject?: PostPortfolioOptimizationEqualRiskContributions200ApplicationJSON;
}
