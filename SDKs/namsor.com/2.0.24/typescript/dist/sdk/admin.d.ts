import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Administrative, system management.
 */
export declare class Admin {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Activate/deactivate anonymization for a source.
     */
    anonymize(req: operations.AnonymizeRequest, config?: AxiosRequestConfig): Promise<operations.AnonymizeResponse>;
    /**
     * Read API Key info.
     */
    apiKeyInfo(config?: AxiosRequestConfig): Promise<operations.ApiKeyInfoResponse>;
    /**
     * Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
     */
    apiStatus(config?: AxiosRequestConfig): Promise<operations.ApiStatusResponse>;
    /**
     * Print current API usage.
     */
    apiUsage(config?: AxiosRequestConfig): Promise<operations.ApiUsageResponse>;
    /**
     * Print historical API usage.
     */
    apiUsageHistory(config?: AxiosRequestConfig): Promise<operations.ApiUsageHistoryResponse>;
    /**
     * Print historical API usage (in an aggregated view, by service, by day/hour/min).
     */
    apiUsageHistoryAggregate(config?: AxiosRequestConfig): Promise<operations.ApiUsageHistoryAggregateResponse>;
    /**
     * List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
     */
    availableServices(config?: AxiosRequestConfig): Promise<operations.AvailableServicesResponse>;
    /**
     * Activate/deactivate learning from a source.
     */
    learnable(req: operations.LearnableRequest, config?: AxiosRequestConfig): Promise<operations.LearnableResponse>;
    /**
     * Print basic source statistics.
     */
    regions(config?: AxiosRequestConfig): Promise<operations.RegionsResponse>;
    /**
     * Get the current software version
     */
    softwareVersion(config?: AxiosRequestConfig): Promise<operations.SoftwareVersionResponse>;
    /**
     * Print the taxonomy classes valid for the given classifier.
     */
    taxonomyClasses(req: operations.TaxonomyClassesRequest, config?: AxiosRequestConfig): Promise<operations.TaxonomyClassesResponse>;
}
