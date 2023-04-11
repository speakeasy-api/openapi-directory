import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisAlphaRequestBody2Portfolios extends SpeakeasyBase {
    /**
     * portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the length of the benchmarkReturns array
     */
    portfolioReturns: number[];
}
export declare class PostPortfolioAnalysisAlphaRequestBody2 extends SpeakeasyBase {
    /**
     * benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays
     */
    benchmarkReturns: number[];
    portfolios: PostPortfolioAnalysisAlphaRequestBody2Portfolios[];
    /**
     * riskFreeReturns[t] is the risk free return at the time t; the riskFreeReturns array must have the same length as all the portfolioReturns arrays
     */
    riskFreeReturns?: number[];
}
export declare class PostPortfolioAnalysisAlphaRequestBody1Portfolios extends SpeakeasyBase {
    /**
     * portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the length of the benchmarkReturns array
     */
    portfolioReturns: number[];
}
export declare class PostPortfolioAnalysisAlphaRequestBody1 extends SpeakeasyBase {
    /**
     * benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays
     */
    benchmarkReturns: number[];
    portfolios: PostPortfolioAnalysisAlphaRequestBody1Portfolios[];
    /**
     * The risk free rate, assumed to be constant for any time t
     */
    riskFreeRate?: number;
}
export declare class PostPortfolioAnalysisAlpha200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The portfolio Jensen's alpha, which correponds to the portfolio excess return adjusted for the systematic risk in the Capital Asset Pricing Model (CAPM)
     */
    portfolioAlpha: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisAlpha200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisAlpha200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisAlphaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisAlpha200ApplicationJSONObject?: PostPortfolioAnalysisAlpha200ApplicationJSON;
}
