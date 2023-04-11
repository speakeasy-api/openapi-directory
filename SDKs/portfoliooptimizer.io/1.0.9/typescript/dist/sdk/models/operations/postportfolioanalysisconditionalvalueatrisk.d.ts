import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisConditionalValueAtRiskRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisConditionalValueAtRiskRequestBody extends SpeakeasyBase {
    /**
     * The conditional value at risk level
     */
    alpha: number;
    portfolios: PostPortfolioAnalysisConditionalValueAtRiskRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisConditionalValueAtRisk200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The conditional value at risk of the portfolio
     */
    portfolioConditionalValueAtRisk: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisConditionalValueAtRisk200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisConditionalValueAtRisk200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisConditionalValueAtRiskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisConditionalValueAtRisk200ApplicationJSONObject?: PostPortfolioAnalysisConditionalValueAtRisk200ApplicationJSON;
}
