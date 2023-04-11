import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisUlcerIndexRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisUlcerIndexRequestBody extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisUlcerIndexRequestBodyPortfolios[];
    /**
     * The risk free rate
     */
    riskFreeRate: number;
}
export declare class PostPortfolioAnalysisUlcerIndex200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The Ulcer Index of the portfolio
     */
    portfolioUlcerIndex: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisUlcerIndex200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisUlcerIndex200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisUlcerIndexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisUlcerIndex200ApplicationJSONObject?: PostPortfolioAnalysisUlcerIndex200ApplicationJSON;
}
