import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServiceInstance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List ServiceInstances
     *
     * @remarks
     * Returns an array of ServiceInstance objects
     */
    listServiceInstances(req: operations.ListServiceInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInstancesResponse>;
    /**
     * Show an existing ServiceInstance
     *
     * @remarks
     * Returns a ServiceInstance object
     */
    showServiceInstance(req: operations.ShowServiceInstanceRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceInstanceResponse>;
}
