import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServicePlan {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List ServicePlans
     *
     * @remarks
     * Returns an array of ServicePlan objects
     */
    listServicePlans(req: operations.ListServicePlansRequest, config?: AxiosRequestConfig): Promise<operations.ListServicePlansResponse>;
    /**
     * Show an existing ServicePlan
     *
     * @remarks
     * Returns a ServicePlan object
     */
    showServicePlan(req: operations.ShowServicePlanRequest, config?: AxiosRequestConfig): Promise<operations.ShowServicePlanResponse>;
}
