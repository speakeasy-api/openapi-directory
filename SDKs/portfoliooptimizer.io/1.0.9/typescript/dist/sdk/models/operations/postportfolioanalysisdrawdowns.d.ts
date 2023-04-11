import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisDrawdownsRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisDrawdownsRequestBody extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisDrawdownsRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfoliosPortfolioWorstDrawdowns extends SpeakeasyBase {
    drawdownBottom: number;
    drawdownDepth: number;
    drawdownEnd: number;
    drawdownStart: number;
}
export declare class PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * portfolioDrawdowns[t] is the value of the drawdown function at the time t
     */
    portfolioDrawdowns: number[];
    portfolioWorstDrawdowns: PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfoliosPortfolioWorstDrawdowns[];
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisDrawdowns200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisDrawdownsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisDrawdowns200ApplicationJSONObject?: PostPortfolioAnalysisDrawdowns200ApplicationJSON;
}
