import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AssetsVolatility {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Volatility
     *
     * @remarks
     * Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:
     * * The asset returns
     * * The asset covariance matrix
     * * The asset variance(s)
     *
     * References
     * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
     *
     */
    postAssetsVolatility(req: any, config?: AxiosRequestConfig): Promise<operations.PostAssetsVolatilityResponse>;
}
