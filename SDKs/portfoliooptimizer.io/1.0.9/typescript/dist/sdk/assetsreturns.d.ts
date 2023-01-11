import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AssetsReturns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postAssetsReturns - Arithmetic Returns
     *
     * Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).
     *
     * References
     * * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
     *
    **/
    postAssetsReturns(req: operations.PostAssetsReturnsRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsReturnsResponse>;
    /**
     * postAssetsReturnsAverage - Arithmetic Average Return
     *
     * Compute the arithmetic average of the return(s) of one or several asset(s).
     *
     * References
     * * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
     *
    **/
    postAssetsReturnsAverage(req: operations.PostAssetsReturnsAverageRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsReturnsAverageResponse>;
}
