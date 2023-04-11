import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets extends SpeakeasyBase {
    /**
     * assetPrices[t] is the price of the asset at the time t
     */
    assetPrices: number[];
}
export declare class PostPortfolioSimulationRebalancingRandomWeightRequestBody extends SpeakeasyBase {
    assets: PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets[];
    /**
     * The number of portfolios to simulate
     */
    portfolios?: number;
}
export declare class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
/**
 * OK
 */
export declare class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioSimulationRebalancingRandomWeightResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioSimulationRebalancingRandomWeight200ApplicationJSONObject?: PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSON;
}
