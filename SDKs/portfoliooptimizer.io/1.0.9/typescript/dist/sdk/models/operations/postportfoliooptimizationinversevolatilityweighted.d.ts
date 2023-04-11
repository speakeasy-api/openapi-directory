import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioOptimizationInverseVolatilityWeightedRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsVolatilities[i] is the volatility of the asset i
     */
    assetsVolatilities: number[];
}
/**
 * OK
 */
export declare class PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationInverseVolatilityWeightedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSONObject?: PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSON;
}
