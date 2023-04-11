import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisSharpeRatioRequestBody2Portfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisSharpeRatioRequestBody2 extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisSharpeRatioRequestBody2Portfolios[];
    /**
     * The risk free rate
     */
    riskFreeRate: number;
}
export declare class PostPortfolioAnalysisSharpeRatioRequestBody1Portfolios extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioAnalysisSharpeRatioRequestBody1 extends SpeakeasyBase {
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
    portfolios: PostPortfolioAnalysisSharpeRatioRequestBody1Portfolios[];
    /**
     * The risk free rate
     */
    riskFreeRate: number;
}
export declare class PostPortfolioAnalysisSharpeRatio200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The Sharpe ratio of the portfolio
     */
    portfolioSharpeRatio: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisSharpeRatio200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisSharpeRatio200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisSharpeRatioResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisSharpeRatio200ApplicationJSONObject?: PostPortfolioAnalysisSharpeRatio200ApplicationJSON;
}
