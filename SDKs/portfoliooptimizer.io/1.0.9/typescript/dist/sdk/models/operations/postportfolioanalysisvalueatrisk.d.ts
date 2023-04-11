import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisValueAtRiskRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisValueAtRiskRequestBody extends SpeakeasyBase {
    /**
     * The value at risk level
     */
    alpha: number;
    portfolios: PostPortfolioAnalysisValueAtRiskRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisValueAtRisk200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The value at risk of the portfolio
     */
    portfolioValueAtRisk: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisValueAtRisk200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisValueAtRisk200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisValueAtRiskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisValueAtRisk200ApplicationJSONObject?: PostPortfolioAnalysisValueAtRisk200ApplicationJSON;
}
