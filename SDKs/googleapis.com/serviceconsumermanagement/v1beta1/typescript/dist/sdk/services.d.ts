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
     * Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
     */
    serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides(req: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest, security: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesResponse>;
    /**
     * Retrieves a summary of quota information for a specific quota limit.
     */
    serviceconsumermanagementServicesConsumerQuotaMetricsLimitsGet(req: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetRequest, security: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetResponse>;
    /**
     * Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
     */
    serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate(req: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateRequest, security: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateResponse>;
    /**
     * Deletes a producer override.
     */
    serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete(req: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteRequest, security: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteResponse>;
    /**
     * Lists all producer overrides on this limit.
     */
    serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList(req: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListRequest, security: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListResponse>;
    /**
     * Updates a producer override.
     */
    serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch(req: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchRequest, security: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchResponse>;
    /**
     * Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
     */
    serviceconsumermanagementServicesConsumerQuotaMetricsList(req: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsListRequest, security: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsListSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesConsumerQuotaMetricsListResponse>;
}
