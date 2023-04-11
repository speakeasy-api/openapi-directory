import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisCorrelationSpectrumRequestBody2Assets extends SpeakeasyBase {
    /**
     * assetPrices[t] is the price of the asset at the time t; all the assetPrices arrays must have the same length
     */
    assetPrices: number[];
}
export declare class PostPortfolioAnalysisCorrelationSpectrumRequestBody2Portfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t; all the portfolioValues arrays must have the same length, equal to the common length of the assetPrices arrays
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisCorrelationSpectrumRequestBody2 extends SpeakeasyBase {
    assets: PostPortfolioAnalysisCorrelationSpectrumRequestBody2Assets[];
    portfolios: PostPortfolioAnalysisCorrelationSpectrumRequestBody2Portfolios[];
}
export declare class PostPortfolioAnalysisCorrelationSpectrumRequestBody1Portfolios extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioAnalysisCorrelationSpectrumRequestBody1 extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
    portfolios: PostPortfolioAnalysisCorrelationSpectrumRequestBody1Portfolios[];
}
export declare class PostPortfolioAnalysisCorrelationSpectrum200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The correlation spectrum of the portfolio
     */
    portfolioCorrelationSpectrum: number[];
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisCorrelationSpectrum200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisCorrelationSpectrum200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisCorrelationSpectrumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisCorrelationSpectrum200ApplicationJSONObject?: PostPortfolioAnalysisCorrelationSpectrum200ApplicationJSON;
}
