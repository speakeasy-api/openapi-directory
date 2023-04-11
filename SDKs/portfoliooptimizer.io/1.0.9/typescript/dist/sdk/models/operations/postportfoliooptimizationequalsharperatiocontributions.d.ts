import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
    /**
     * assetsReturns[i] is the arithmetic return of asset i
     */
    assetsReturns: number[];
    /**
     * The risk free rate
     */
    riskFreeRate: number;
}
/**
 * OK
 */
export declare class PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationEqualSharpeRatioContributionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSONObject?: PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSON;
}
