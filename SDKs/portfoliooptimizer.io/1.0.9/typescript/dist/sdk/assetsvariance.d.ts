import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AssetsVariance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Variance
     *
     * @remarks
     * Compute the variance of one or several asset(s) from either:
     * * The asset returns
     * * The asset covariance matrix
     * * The asset volatility(ies)
     *
     * References
     * * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)
     *
     */
    postAssetsVariance(req: any, config?: AxiosRequestConfig): Promise<operations.PostAssetsVarianceResponse>;
}
