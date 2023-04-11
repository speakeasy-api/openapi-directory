import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodyConstraints extends SpeakeasyBase {
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
    /**
     * The portfolio return; exclusive with portfolioVolatility and riskTolerance
     */
    portfolioReturn?: number;
    /**
     * The portfolio volatility; exclusive with portfolioReturn and riskTolerance
     */
    portfolioVolatility?: number;
    /**
     * The portfolio risk tolerance; exclusive with portfolioReturn and portfolioVolatility
     */
    riskTolerance?: number;
}
/**
 * The method to aggregate the subset portfolios
 */
export declare enum PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum {
    Average = "average",
    Median = "median"
}
/**
 * The method to enumerate the subset portfolios
 */
export declare enum PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum {
    Complete = "complete",
    RandomSampling = "randomSampling"
}
export declare class PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBody extends SpeakeasyBase {
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
    constraints: PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodyConstraints;
    /**
     * The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling
     */
    subsetPortfolios?: number;
    /**
     * The method to aggregate the subset portfolios
     */
    subsetPortfoliosAggregationMethod?: PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum;
    /**
     * The method to enumerate the subset portfolios
     */
    subsetPortfoliosEnumerationMethod?: PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum;
    /**
     * The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets
     */
    subsetSize?: number;
}
/**
 * OK
 */
export declare class PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased200ApplicationJSONObject?: PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased200ApplicationJSON;
}
