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
     * Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`
     */
    serviceusageServicesBatchEnable(req: operations.ServiceusageServicesBatchEnableRequest, security: operations.ServiceusageServicesBatchEnableSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesBatchEnableResponse>;
    /**
     * Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
     */
    serviceusageServicesConsumerQuotaMetricsImportAdminOverrides(req: operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest, security: operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse>;
    /**
     * Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
     */
    serviceusageServicesConsumerQuotaMetricsImportConsumerOverrides(req: operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest, security: operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse>;
    /**
     * Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.
     */
    serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate(req: operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest, security: operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse>;
    /**
     * Lists all admin overrides on this limit.
     */
    serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList(req: operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest, security: operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse>;
    /**
     * Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.
     */
    serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate(req: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest, security: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse>;
    /**
     * Deletes a consumer override.
     */
    serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete(req: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest, security: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse>;
    /**
     * Lists all consumer overrides on this limit.
     */
    serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList(req: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest, security: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse>;
    /**
     * Updates a consumer override.
     */
    serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch(req: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest, security: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse>;
    /**
     * Retrieves a summary of quota information for a specific quota limit.
     */
    serviceusageServicesConsumerQuotaMetricsLimitsGet(req: operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetRequest, security: operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetResponse>;
    /**
     * Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
     */
    serviceusageServicesConsumerQuotaMetricsList(req: operations.ServiceusageServicesConsumerQuotaMetricsListRequest, security: operations.ServiceusageServicesConsumerQuotaMetricsListSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesConsumerQuotaMetricsListResponse>;
    /**
     * Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`
     */
    serviceusageServicesDisable(req: operations.ServiceusageServicesDisableRequest, security: operations.ServiceusageServicesDisableSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesDisableResponse>;
    /**
     * Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`
     */
    serviceusageServicesEnable(req: operations.ServiceusageServicesEnableRequest, security: operations.ServiceusageServicesEnableSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesEnableResponse>;
    /**
     * Generates service identity for service.
     */
    serviceusageServicesGenerateServiceIdentity(req: operations.ServiceusageServicesGenerateServiceIdentityRequest, security: operations.ServiceusageServicesGenerateServiceIdentitySecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesGenerateServiceIdentityResponse>;
    /**
     * Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.
     */
    serviceusageServicesList(req: operations.ServiceusageServicesListRequest, security: operations.ServiceusageServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesListResponse>;
}
