import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AssetsSkewness {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Skewness
     *
     * @remarks
     * Compute the skewness of one or several asset(s), from the asset returns.
     *
     * References
     * * [Wikipedia, Skewness](https://en.wikipedia.org/wiki/Skewness)
     *
     */
    postAssetsSkewness(req: operations.PostAssetsSkewnessRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsSkewnessResponse>;
}
