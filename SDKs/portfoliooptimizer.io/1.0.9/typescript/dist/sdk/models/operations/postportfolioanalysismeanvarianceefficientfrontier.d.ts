import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints extends SpeakeasyBase {
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
export declare class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody extends SpeakeasyBase {
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
    constraints?: PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints;
    /**
     * The number of portfolios to compute on the mean-variance efficient frontier
     */
    portfolios?: number;
}
export declare class PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
    /**
     * The arithmetic return of the portfolio
     */
    portfolioReturn: number;
    /**
     * The volatility of the portfolio
     */
    portfolioVolatility: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONObject?: PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSON;
}
