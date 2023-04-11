import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi service descriptors
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
     * Get all services
     *
     * @remarks
     * Get all services
     */
    allServices(config?: AxiosRequestConfig): Promise<operations.AllServicesResponse>;
    /**
     * Create a new service descriptor
     *
     * @remarks
     * Create a new service descriptor
     */
    createService(req: shared.Service, security: operations.CreateServiceSecurity, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * Create a service descriptor error template
     *
     * @remarks
     * Update a service descriptor targets
     */
    createServiceTemplate(req: operations.CreateServiceTemplateRequest, security: operations.CreateServiceTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.CreateServiceTemplateResponse>;
    /**
     * Delete a service descriptor
     *
     * @remarks
     * Delete a service descriptor
     */
    deleteService(req: operations.DeleteServiceRequest, security: operations.DeleteServiceSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    /**
     * Delete a service descriptor error template
     *
     * @remarks
     * Delete a service descriptor error template
     */
    deleteServiceTemplate(req: operations.DeleteServiceTemplateRequest, security: operations.DeleteServiceTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteServiceTemplateResponse>;
    /**
     * Update a service descriptor with a diff
     *
     * @remarks
     * Update a service descriptor with a diff
     */
    patchService(req: operations.PatchServiceRequest, security: operations.PatchServiceSecurity, config?: AxiosRequestConfig): Promise<operations.PatchServiceResponse>;
    /**
     * Get a service descriptor
     *
     * @remarks
     * Get a service descriptor
     */
    service(req: operations.ServiceRequest, security: operations.ServiceSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceResponse>;
    /**
     * Add a target to a service descriptor
     *
     * @remarks
     * Add a target to a service descriptor
     */
    serviceAddTarget(req: operations.ServiceAddTargetRequest, security: operations.ServiceAddTargetSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceAddTargetResponse>;
    /**
     * Delete a service descriptor target
     *
     * @remarks
     * Delete a service descriptor target
     */
    serviceDeleteTarget(req: operations.ServiceDeleteTargetRequest, security: operations.ServiceDeleteTargetSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceDeleteTargetResponse>;
    /**
     * Get all services descriptor for a group
     *
     * @remarks
     * Get all services descriptor for a group
     */
    serviceGroupServices(req: operations.ServiceGroupServicesRequest, security: operations.ServiceGroupServicesSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceGroupServicesResponse>;
    /**
     * Get a service descriptor targets
     *
     * @remarks
     * Get a service descriptor targets
     */
    serviceTargets(req: operations.ServiceTargetsRequest, security: operations.ServiceTargetsSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceTargetsResponse>;
    /**
     * Get a service descriptor error template
     *
     * @remarks
     * Get a service descriptor error template
     */
    serviceTemplate(req: operations.ServiceTemplateRequest, security: operations.ServiceTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceTemplateResponse>;
    /**
     * Update a service descriptor
     *
     * @remarks
     * Update a service descriptor
     */
    updateService(req: operations.UpdateServiceRequest, security: operations.UpdateServiceSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    /**
     * Update a service descriptor targets
     *
     * @remarks
     * Update a service descriptor targets
     */
    updateServiceTargets(req: operations.UpdateServiceTargetsRequest, security: operations.UpdateServiceTargetsSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateServiceTargetsResponse>;
    /**
     * Update an error template to a service descriptor
     *
     * @remarks
     * Update an error template to a service descriptor
     */
    updateServiceTemplate(req: operations.UpdateServiceTemplateRequest, security: operations.UpdateServiceTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateServiceTemplateResponse>;
}
