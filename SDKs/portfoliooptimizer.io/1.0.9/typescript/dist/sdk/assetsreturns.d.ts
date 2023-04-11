import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AssetsReturns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Arithmetic Returns
     *
     * @remarks
     * Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).
     *
     * References
     * * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
     *
     */
    postAssetsReturns(req: operations.PostAssetsReturnsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsReturnsResponse>;
    /**
     * Arithmetic Average Return
     *
     * @remarks
     * Compute the arithmetic average of the return(s) of one or several asset(s).
     *
     * References
     * * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
     *
     */
    postAssetsReturnsAverage(req: operations.PostAssetsReturnsAverageRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsReturnsAverageResponse>;
}
