import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The hierarchical clustering method to use
 */
export declare enum PostPortfolioOptimizationHierarchicalRiskParityRequestBodyClusteringMethodEnum {
    SingleLinkage = "singleLinkage",
    AverageLinkage = "averageLinkage",
    CompleteLinkage = "completeLinkage",
    WardLinkage = "wardLinkage"
}
/**
 * The order to impose on the hierarchical clustering tree leaves
 */
export declare enum PostPortfolioOptimizationHierarchicalRiskParityRequestBodyClusteringOrderingEnum {
    RHclust = "r-hclust",
    Optimal = "optimal"
}
export declare class PostPortfolioOptimizationHierarchicalRiskParityRequestBodyConstraints extends SpeakeasyBase {
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
export declare class PostPortfolioOptimizationHierarchicalRiskParityRequestBody extends SpeakeasyBase {
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
    clusteringMethod?: PostPortfolioOptimizationHierarchicalRiskParityRequestBodyClusteringMethodEnum;
    /**
     * The order to impose on the hierarchical clustering tree leaves
     */
    clusteringOrdering?: PostPortfolioOptimizationHierarchicalRiskParityRequestBodyClusteringOrderingEnum;
    constraints?: PostPortfolioOptimizationHierarchicalRiskParityRequestBodyConstraints;
}
/**
 * OK
 */
export declare class PostPortfolioOptimizationHierarchicalRiskParity200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationHierarchicalRiskParityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioOptimizationHierarchicalRiskParity200ApplicationJSONObject?: PostPortfolioOptimizationHierarchicalRiskParity200ApplicationJSON;
}
