import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBody extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBodyPortfolios[];
    /**
     * The risk free rate
     */
    riskFreeRate: number;
}
export declare class PostPortfolioAnalysisSharpeRatioBiasAdjusted200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The bias-adjusted Sharpe ratio of the portfolio
     */
    portfolioBiasAdjustedSharpeRatio: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisSharpeRatioBiasAdjusted200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisSharpeRatioBiasAdjusted200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisSharpeRatioBiasAdjustedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisSharpeRatioBiasAdjusted200ApplicationJSONObject?: PostPortfolioAnalysisSharpeRatioBiasAdjusted200ApplicationJSON;
}
