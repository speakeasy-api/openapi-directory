import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisVolatilityRequestBody2Portfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisVolatilityRequestBody2 extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisVolatilityRequestBody2Portfolios[];
}
export declare class PostPortfolioAnalysisVolatilityRequestBody1Portfolios extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioAnalysisVolatilityRequestBody1 extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
    portfolios: PostPortfolioAnalysisVolatilityRequestBody1Portfolios[];
}
export declare class PostPortfolioAnalysisVolatility200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The volatility of the portfolio
     */
    portfolioVolatility: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisVolatility200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisVolatility200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisVolatilityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisVolatility200ApplicationJSONObject?: PostPortfolioAnalysisVolatility200ApplicationJSON;
}
