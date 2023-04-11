import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsMarketCapitalizations[i] is the market capitalization of the asset i
     */
    assetsMarketCapitalizations: number[];
}
/**
 * OK
 */
export declare class PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationMarketCapitalizationWeightedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSONObject?: PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSON;
}
