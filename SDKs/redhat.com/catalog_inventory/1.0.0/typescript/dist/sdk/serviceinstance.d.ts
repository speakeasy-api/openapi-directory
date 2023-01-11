import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServiceInstance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listServiceInstances - List ServiceInstances
     *
     * Returns an array of ServiceInstance objects
    **/
    listServiceInstances(req: operations.ListServiceInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInstancesResponse>;
    /**
     * showServiceInstance - Show an existing ServiceInstance
     *
     * Returns a ServiceInstance object
    **/
    showServiceInstance(req: operations.ShowServiceInstanceRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceInstanceResponse>;
}
