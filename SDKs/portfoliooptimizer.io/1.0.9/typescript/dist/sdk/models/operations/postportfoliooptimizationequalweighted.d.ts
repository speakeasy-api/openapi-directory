import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioOptimizationEqualWeightedRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
}
/**
 * OK
 */
export declare class PostPortfolioOptimizationEqualWeighted200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationEqualWeightedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioOptimizationEqualWeighted200ApplicationJSONObject?: PostPortfolioOptimizationEqualWeighted200ApplicationJSON;
}
