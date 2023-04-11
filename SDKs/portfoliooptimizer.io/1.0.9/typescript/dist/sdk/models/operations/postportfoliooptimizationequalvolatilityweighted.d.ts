import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioOptimizationEqualVolatilityWeightedRequestBody extends SpeakeasyBase {
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
export declare class PostPortfolioOptimizationEqualVolatilityWeighted200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationEqualVolatilityWeightedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioOptimizationEqualVolatilityWeighted200ApplicationJSONObject?: PostPortfolioOptimizationEqualVolatilityWeighted200ApplicationJSON;
}
