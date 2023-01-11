import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV05HiServicesServiceId - Get bridge service details/profile by the serviceId provided.
     *
     * This API is meant for displaying the bridge service details by the serviceId provided .
     *
    **/
    getV05HiServicesServiceId(req: operations.GetV05HiServicesServiceIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV05HiServicesServiceIdResponse>;
}
