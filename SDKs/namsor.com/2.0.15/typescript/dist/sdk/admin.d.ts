import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Admin {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * anonymize - Activate/deactivate anonymization for a source.
    **/
    anonymize(req: operations.AnonymizeRequest, config?: AxiosRequestConfig): Promise<operations.AnonymizeResponse>;
    /**
     * apiStatus - Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
    **/
    apiStatus(config?: AxiosRequestConfig): Promise<operations.ApiStatusResponse>;
    /**
     * apiUsage - Print current API usage.
    **/
    apiUsage(req: operations.ApiUsageRequest, config?: AxiosRequestConfig): Promise<operations.ApiUsageResponse>;
    /**
     * apiUsageHistory - Print historical API usage.
    **/
    apiUsageHistory(req: operations.ApiUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.ApiUsageHistoryResponse>;
    /**
     * apiUsageHistoryAggregate - Print historical API usage (in an aggregated view, by service, by day/hour/min).
    **/
    apiUsageHistoryAggregate(req: operations.ApiUsageHistoryAggregateRequest, config?: AxiosRequestConfig): Promise<operations.ApiUsageHistoryAggregateResponse>;
    /**
     * availableServices - List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
    **/
    availableServices(config?: AxiosRequestConfig): Promise<operations.AvailableServicesResponse>;
    /**
     * disable - Activate/deactivate an API Key.
    **/
    disable(req: operations.DisableRequest, config?: AxiosRequestConfig): Promise<operations.DisableResponse>;
    /**
     * learnable - Activate/deactivate learning from a source.
    **/
    learnable(req: operations.LearnableRequest, config?: AxiosRequestConfig): Promise<operations.LearnableResponse>;
    /**
     * softwareVersion - Get the current software version
    **/
    softwareVersion(config?: AxiosRequestConfig): Promise<operations.SoftwareVersionResponse>;
    /**
     * taxonomyClasses - Print the taxonomy classes valid for the given classifier.
    **/
    taxonomyClasses(req: operations.TaxonomyClassesRequest, config?: AxiosRequestConfig): Promise<operations.TaxonomyClassesResponse>;
}
