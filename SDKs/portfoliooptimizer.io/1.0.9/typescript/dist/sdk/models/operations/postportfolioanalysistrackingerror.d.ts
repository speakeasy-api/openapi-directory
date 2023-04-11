import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * portfolioReturns[t] is the return of the portfolio at the time t, the portfolioReturns must have the same length as the benchmarkReturns array
     */
    portfolioReturns: number[];
}
export declare class PostPortfolioAnalysisTrackingErrorRequestBody extends SpeakeasyBase {
    /**
     * benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays
     */
    benchmarkReturns: number[];
    portfolios: PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisTrackingError200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The tracking error of the portfolio
     */
    portfolioTrackingError: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisTrackingError200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisTrackingError200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisTrackingErrorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisTrackingError200ApplicationJSONObject?: PostPortfolioAnalysisTrackingError200ApplicationJSON;
}
