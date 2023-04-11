import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisReturnsAverageRequestBody extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisReturnsAverage200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The arithmetic average return of the portfolio
     */
    portfolioAverageReturn: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisReturnsAverage200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisReturnsAverage200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisReturnsAverageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisReturnsAverage200ApplicationJSONObject?: PostPortfolioAnalysisReturnsAverage200ApplicationJSON;
}
