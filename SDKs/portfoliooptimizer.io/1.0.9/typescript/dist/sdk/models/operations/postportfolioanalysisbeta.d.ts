import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisBetaRequestBody2Portfolios extends SpeakeasyBase {
    /**
     * portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the length of the benchmarkReturns array
     */
    portfolioReturns: number[];
}
export declare class PostPortfolioAnalysisBetaRequestBody2 extends SpeakeasyBase {
    /**
     * benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays
     */
    benchmarkReturns: number[];
    portfolios: PostPortfolioAnalysisBetaRequestBody2Portfolios[];
    /**
     * riskFreeReturns[t] is the risk free return at the time t; the riskFreeReturns array must have the same length as all the portfolioReturns arrays
     */
    riskFreeReturns?: number[];
}
export declare class PostPortfolioAnalysisBetaRequestBody1Portfolios extends SpeakeasyBase {
    /**
     * portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the length of the benchmarkReturns array
     */
    portfolioReturns: number[];
}
export declare class PostPortfolioAnalysisBetaRequestBody1 extends SpeakeasyBase {
    /**
     * benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays
     */
    benchmarkReturns: number[];
    portfolios: PostPortfolioAnalysisBetaRequestBody1Portfolios[];
    /**
     * The risk free rate, assumed to be constant for any time t
     */
    riskFreeRate?: number;
}
export declare class PostPortfolioAnalysisBeta200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The portfolio beta, which correponds to the portfolio systematic risk in the Capital Asset Pricing Model (CAPM)
     */
    portfolioBeta: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisBeta200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisBeta200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisBetaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisBeta200ApplicationJSONObject?: PostPortfolioAnalysisBeta200ApplicationJSON;
}
