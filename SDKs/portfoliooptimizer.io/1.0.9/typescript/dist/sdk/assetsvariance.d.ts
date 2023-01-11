import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AssetsVariance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postAssetsVariance - Variance
     *
     * Compute the variance of one or several asset(s) from either:
     * * The asset(s) returns
     * * The assets covariance matrix
     * * The asset(s) volatility
     *
     * References
     * * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)
     *
    **/
    postAssetsVariance(req: operations.PostAssetsVarianceRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsVarianceResponse>;
    /**
     * postAssetsVarianceSample - Sample variance
     *
     * Compute the sample variance of one or several asset(s) from the asset(s) returns.
     *
     * > This endpoint is similar to the endpoint [`/assets/variance`](#post-/assets/variance), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the variance.
     *
     * References
     * * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)
     *
    **/
    postAssetsVarianceSample(req: operations.PostAssetsVarianceSampleRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsVarianceSampleResponse>;
}
