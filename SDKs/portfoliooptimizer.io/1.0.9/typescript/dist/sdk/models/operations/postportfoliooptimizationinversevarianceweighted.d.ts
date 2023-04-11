import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioOptimizationInverseVarianceWeightedRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsVariances[i] is the variance of the asset i
     */
    assetsVariances: number[];
}
/**
 * OK
 */
export declare class PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationInverseVarianceWeightedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioOptimizationInverseVarianceWeighted200ApplicationJSONObject?: PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSON;
}
