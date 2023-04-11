import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioOptimizationMinimumCorrelationRequestBody extends SpeakeasyBase {
    assets: number;
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j; required if assetsReturns is not provided
     */
    assetsCorrelationMatrix: number[][];
    /**
     * assetsVariances[i] is the volatility of the asset i; required if assetsCorrelationMatrix is provided and assetsVariances is not provided
     */
    assetsVolatilities: number[];
}
/**
 * OK
 */
export declare class PostPortfolioOptimizationMinimumCorrelation200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationMinimumCorrelationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioOptimizationMinimumCorrelation200ApplicationJSONObject?: PostPortfolioOptimizationMinimumCorrelation200ApplicationJSON;
}
