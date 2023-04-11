import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisUlcerPerformanceIndexRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisUlcerPerformanceIndexRequestBody extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisUlcerPerformanceIndexRequestBodyPortfolios[];
    /**
     * The risk free rate
     */
    riskFreeRate: number;
}
export declare class PostPortfolioAnalysisUlcerPerformanceIndex200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The Ulcer Performance Index of the portfolio
     */
    portfolioUlcerPerformanceIndex: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisUlcerPerformanceIndex200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisUlcerPerformanceIndex200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisUlcerPerformanceIndexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisUlcerPerformanceIndex200ApplicationJSONObject?: PostPortfolioAnalysisUlcerPerformanceIndex200ApplicationJSON;
}
