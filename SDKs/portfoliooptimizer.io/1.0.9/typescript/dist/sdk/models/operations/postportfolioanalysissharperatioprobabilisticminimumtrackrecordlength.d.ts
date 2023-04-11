import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody2Portfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody2 extends SpeakeasyBase {
    /**
     * benchmarkValues[t] is the value of the benchmark at the time t; the benchmarkValues array must have the same length as all the portfolioValues arrays
     */
    benchmarkValues?: number[];
    /**
     * The confidence level of the minimum track record length, in percentage
     */
    confidenceLevel?: number;
    portfolios: PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody2Portfolios[];
    /**
     * The risk free rate
     */
    riskFreeRate: number;
}
export declare class PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1Portfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1 extends SpeakeasyBase {
    /**
     * The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values
     */
    benchmarkSharpeRatio: number;
    /**
     * The confidence level of the minimum track record length, in percentage
     */
    confidenceLevel?: number;
    portfolios: PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1Portfolios[];
    /**
     * The risk free rate
     */
    riskFreeRate: number;
}
export declare class PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The minimum track record length of the portfolio, in number of required arithmetic returns, possibly equal to null in case the minimum track record length does not exist
     */
    portfolioSharpeRatioMinimumTrackRecordLength: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength200ApplicationJSONObject?: PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength200ApplicationJSON;
}
