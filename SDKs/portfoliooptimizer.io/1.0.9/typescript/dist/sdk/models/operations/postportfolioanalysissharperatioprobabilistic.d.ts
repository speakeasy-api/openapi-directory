import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t; all the portfolioValues arrays must have the same length as the benchmarkValues array
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2 extends SpeakeasyBase {
    /**
     * benchmarkValues[t] is the value of the benchmark at the time t; the benchmarkValues array must have the same length as all the portfolioValues arrays
     */
    benchmarkValues: number[];
    portfolios: PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios[];
    /**
     * The risk free rate
     */
    riskFreeRate: number;
}
export declare class PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody1Portfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody1 extends SpeakeasyBase {
    /**
     * The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values
     */
    benchmarkSharpeRatio: number;
    portfolios: PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody1Portfolios[];
    /**
     * The risk free rate
     */
    riskFreeRate: number;
}
export declare class PostPortfolioAnalysisSharpeRatioProbabilistic200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The probabilistic Sharpe ratio of the portfolio, in percentage
     */
    portfolioProbabilisticSharpeRatio: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisSharpeRatioProbabilistic200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisSharpeRatioProbabilistic200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisSharpeRatioProbabilisticResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisSharpeRatioProbabilistic200ApplicationJSONObject?: PostPortfolioAnalysisSharpeRatioProbabilistic200ApplicationJSON;
}
