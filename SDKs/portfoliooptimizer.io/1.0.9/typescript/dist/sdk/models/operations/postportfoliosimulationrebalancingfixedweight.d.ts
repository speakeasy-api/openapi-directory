import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets extends SpeakeasyBase {
    /**
     * assetPrices[t] is the price of the asset at the time t
     */
    assetPrices: number[];
}
export declare class PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioSimulationRebalancingFixedWeightRequestBody extends SpeakeasyBase {
    assets: PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets[];
    portfolios: PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios[];
}
export declare class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
/**
 * OK
 */
export declare class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioSimulationRebalancingFixedWeightResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioSimulationRebalancingFixedWeight200ApplicationJSONObject?: PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSON;
}
