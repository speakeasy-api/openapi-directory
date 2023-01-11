import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioOptimizationMinimumCorrelationRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCorrelationMatrix: number[][];
    assetsVolatilities: number[];
}
export declare class PostPortfolioOptimizationMinimumCorrelation200ApplicationJson extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationMinimumCorrelationRequest extends SpeakeasyBase {
    request: PostPortfolioOptimizationMinimumCorrelationRequestBody;
}
export declare class PostPortfolioOptimizationMinimumCorrelationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postPortfolioOptimizationMinimumCorrelation200ApplicationJSONObject?: PostPortfolioOptimizationMinimumCorrelation200ApplicationJson;
}
