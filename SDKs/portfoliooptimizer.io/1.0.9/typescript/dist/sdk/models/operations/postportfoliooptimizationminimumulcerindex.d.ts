import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioOptimizationMinimumUlcerIndexRequestBodyAssets extends SpeakeasyBase {
    /**
     * assetPrices[t] is the price of the asset at the time t
     */
    assetPrices: number[];
}
export declare class PostPortfolioOptimizationMinimumUlcerIndexRequestBodyConstraints extends SpeakeasyBase {
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
export declare class PostPortfolioOptimizationMinimumUlcerIndexRequestBody extends SpeakeasyBase {
    assets: PostPortfolioOptimizationMinimumUlcerIndexRequestBodyAssets[];
    constraints?: PostPortfolioOptimizationMinimumUlcerIndexRequestBodyConstraints;
}
/**
 * OK
 */
export declare class PostPortfolioOptimizationMinimumUlcerIndex200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationMinimumUlcerIndexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioOptimizationMinimumUlcerIndex200ApplicationJSONObject?: PostPortfolioOptimizationMinimumUlcerIndex200ApplicationJSON;
}
