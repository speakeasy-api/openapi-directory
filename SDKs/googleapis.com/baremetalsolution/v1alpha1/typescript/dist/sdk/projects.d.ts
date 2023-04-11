import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Submit a provisiong configuration for a given project.
     */
    baremetalsolutionProjectsLocationsSubmitProvisioningConfig(req: operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest, security: operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse>;
    /**
     * List the budget details to provision resources on a given project.
     */
    baremetalsolutionProjectsProvisioningQuotasList(req: operations.BaremetalsolutionProjectsProvisioningQuotasListRequest, security: operations.BaremetalsolutionProjectsProvisioningQuotasListSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsProvisioningQuotasListResponse>;
}
