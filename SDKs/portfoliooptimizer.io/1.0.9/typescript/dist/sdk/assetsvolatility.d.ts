import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AssetsVolatility {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postAssetsVolatility - Volatility
     *
     * Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:
     * * The asset(s) returns
     * * The assets covariance matrix
     * * The asset(s) variance
     *
     * References
     * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
     *
    **/
    postAssetsVolatility(req: operations.PostAssetsVolatilityRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsVolatilityResponse>;
    /**
     * postAssetsVolatilitySample - Sample volatility
     *
     * Compute the sample volatility (i.e., sample standard deviation) of one or several asset(s) from the asset(s) returns.
     *
     * > This endpoint is similar to the endpoint [`/assets/volatility`](#post-/assets/volatility), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the volatility.
     *
     * References
     * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
     *
    **/
    postAssetsVolatilitySample(req: operations.PostAssetsVolatilitySampleRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsVolatilitySampleResponse>;
}
