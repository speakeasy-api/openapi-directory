import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets extends SpeakeasyBase {
    /**
     * assetPrices[t] is the price of the asset at the time t
     */
    assetPrices: number[];
}
export declare class PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioSimulationRebalancingDriftWeightRequestBody extends SpeakeasyBase {
    assets: PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets[];
    portfolios: PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios[];
}
export declare class PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
/**
 * OK
 */
export declare class PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioSimulationRebalancingDriftWeightResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioSimulationRebalancingDriftWeight200ApplicationJSONObject?: PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSON;
}
