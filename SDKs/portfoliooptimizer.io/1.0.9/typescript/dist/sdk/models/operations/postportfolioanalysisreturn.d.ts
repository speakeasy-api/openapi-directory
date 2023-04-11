import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisReturnRequestBody2Portfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisReturnRequestBody2 extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisReturnRequestBody2Portfolios[];
}
export declare class PostPortfolioAnalysisReturnRequestBody1Portfolios extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioAnalysisReturnRequestBody1 extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsReturns[i] is the arithmetic return of asset i
     */
    assetsReturns: number[];
    portfolios: PostPortfolioAnalysisReturnRequestBody1Portfolios[];
}
export declare class PostPortfolioAnalysisReturn200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The arithmetic return of the portfolio
     */
    portfolioReturn: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisReturn200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisReturn200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisReturnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisReturn200ApplicationJSONObject?: PostPortfolioAnalysisReturn200ApplicationJSON;
}
