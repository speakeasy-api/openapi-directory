import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisDiversificationRatioRequestBody2Assets extends SpeakeasyBase {
    /**
     * assetPrices[t] is the price of the asset at the time t; all the assetPrices arrays must have the same length
     */
    assetPrices: number[];
}
export declare class PostPortfolioAnalysisDiversificationRatioRequestBody2Portfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t; all the portfolioValues arrays must have the same length, equal to the common length of the assetPrices arrays
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisDiversificationRatioRequestBody2 extends SpeakeasyBase {
    assets: PostPortfolioAnalysisDiversificationRatioRequestBody2Assets[];
    portfolios: PostPortfolioAnalysisDiversificationRatioRequestBody2Portfolios[];
}
export declare class PostPortfolioAnalysisDiversificationRatioRequestBody1Portfolios extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioAnalysisDiversificationRatioRequestBody1 extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
    portfolios: PostPortfolioAnalysisDiversificationRatioRequestBody1Portfolios[];
}
export declare class PostPortfolioAnalysisDiversificationRatio200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The diversification ratio of the portfolio
     */
    portfolioDiversificationRatio: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisDiversificationRatio200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisDiversificationRatio200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisDiversificationRatioResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisDiversificationRatio200ApplicationJSONObject?: PostPortfolioAnalysisDiversificationRatio200ApplicationJSON;
}
