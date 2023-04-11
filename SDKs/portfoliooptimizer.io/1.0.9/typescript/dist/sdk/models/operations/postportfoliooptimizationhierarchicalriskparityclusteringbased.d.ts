import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The allocation method to use across clusters
 */
export declare enum PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyAcrossClusterAllocationMethodEnum {
    EqualWeighting = "equalWeighting",
    InverseVolatility = "inverseVolatility",
    InverseVariance = "inverseVariance"
}
/**
 * The hierarchical clustering method to use
 */
export declare enum PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyClusteringMethodEnum {
    SingleLinkage = "singleLinkage",
    AverageLinkage = "averageLinkage",
    CompleteLinkage = "completeLinkage",
    WardLinkage = "wardLinkage"
}
/**
 * The order to impose on the hierarchical clustering tree leaves
 */
export declare enum PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyClusteringOrderingEnum {
    RHclust = "r-hclust",
    Optimal = "optimal"
}
export declare class PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyConstraints extends SpeakeasyBase {
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
/**
 * The allocation method to use within clusters
 */
export declare enum PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyWithinClusterAllocationMethodEnum {
    EqualWeighting = "equalWeighting",
    InverseVolatility = "inverseVolatility",
    InverseVariance = "inverseVariance"
}
export declare class PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBody extends SpeakeasyBase {
    /**
     * The allocation method to use across clusters
     */
    acrossClusterAllocationMethod?: PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyAcrossClusterAllocationMethodEnum;
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
    /**
     * The hierarchical clustering method to use
     */
    clusteringMethod?: PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyClusteringMethodEnum;
    /**
     * The order to impose on the hierarchical clustering tree leaves
     */
    clusteringOrdering?: PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyClusteringOrderingEnum;
    /**
     * The number of clusters to use in the hierarchical clustering tree; if not provided, the number of clusters to use is computed using the gap statistic method, as described in the first reference
     */
    clusters?: number;
    constraints?: PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyConstraints;
    /**
     * The allocation method to use within clusters
     */
    withinClusterAllocationMethod?: PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyWithinClusterAllocationMethodEnum;
}
/**
 * OK
 */
export declare class PostPortfolioOptimizationHierarchicalRiskParityClusteringBased200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioOptimizationHierarchicalRiskParityClusteringBased200ApplicationJSONObject?: PostPortfolioOptimizationHierarchicalRiskParityClusteringBased200ApplicationJSON;
}
