import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServicePlan {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listServicePlans - List ServicePlans
     *
     * Returns an array of ServicePlan objects
    **/
    listServicePlans(req: operations.ListServicePlansRequest, config?: AxiosRequestConfig): Promise<operations.ListServicePlansResponse>;
    /**
     * showServicePlan - Show an existing ServicePlan
     *
     * Returns a ServicePlan object
    **/
    showServicePlan(req: operations.ShowServicePlanRequest, config?: AxiosRequestConfig): Promise<operations.ShowServicePlanResponse>;
}
