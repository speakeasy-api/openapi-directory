import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Brain consists of several software components with their own responsibilities, referred to as "services".
 *
 * @remarks
 * Some of these services have status information and/or configuration that can be managed using the `services` resource.
 *
 */
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get service
     */
    getServiceById(req: operations.GetServiceByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceByIdResponse>;
    /**
     * Get all services
     */
    getServices(req: operations.GetServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetServicesResponse>;
    /**
     * Update existing service
     */
    updateService(req: operations.UpdateServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
}
