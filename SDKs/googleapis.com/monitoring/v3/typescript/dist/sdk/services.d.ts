import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a Service.
     */
    monitoringServicesCreate(req: operations.MonitoringServicesCreateRequest, security: operations.MonitoringServicesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringServicesCreateResponse>;
    /**
     * List Services for this Metrics Scope.
     */
    monitoringServicesList(req: operations.MonitoringServicesListRequest, security: operations.MonitoringServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringServicesListResponse>;
    /**
     * Create a ServiceLevelObjective for the given Service.
     */
    monitoringServicesServiceLevelObjectivesCreate(req: operations.MonitoringServicesServiceLevelObjectivesCreateRequest, security: operations.MonitoringServicesServiceLevelObjectivesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringServicesServiceLevelObjectivesCreateResponse>;
    /**
     * Delete the given ServiceLevelObjective.
     */
    monitoringServicesServiceLevelObjectivesDelete(req: operations.MonitoringServicesServiceLevelObjectivesDeleteRequest, security: operations.MonitoringServicesServiceLevelObjectivesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringServicesServiceLevelObjectivesDeleteResponse>;
    /**
     * Get a ServiceLevelObjective by name.
     */
    monitoringServicesServiceLevelObjectivesGet(req: operations.MonitoringServicesServiceLevelObjectivesGetRequest, security: operations.MonitoringServicesServiceLevelObjectivesGetSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringServicesServiceLevelObjectivesGetResponse>;
    /**
     * List the ServiceLevelObjectives for the given Service.
     */
    monitoringServicesServiceLevelObjectivesList(req: operations.MonitoringServicesServiceLevelObjectivesListRequest, security: operations.MonitoringServicesServiceLevelObjectivesListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringServicesServiceLevelObjectivesListResponse>;
    /**
     * Update the given ServiceLevelObjective.
     */
    monitoringServicesServiceLevelObjectivesPatch(req: operations.MonitoringServicesServiceLevelObjectivesPatchRequest, security: operations.MonitoringServicesServiceLevelObjectivesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringServicesServiceLevelObjectivesPatchResponse>;
}
