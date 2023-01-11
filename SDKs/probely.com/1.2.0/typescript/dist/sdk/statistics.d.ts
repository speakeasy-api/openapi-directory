import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Statistics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getTargetsAllAverageFixTime - Average fix time graph data (all targets)
    **/
    getTargetsAllAverageFixTime(config?: AxiosRequestConfig): Promise<operations.GetTargetsAllAverageFixTimeResponse>;
    /**
     * getTargetsAllNeedsAttentionPie - Targets with open vulnerabilities pie chart data
    **/
    getTargetsAllNeedsAttentionPie(config?: AxiosRequestConfig): Promise<operations.GetTargetsAllNeedsAttentionPieResponse>;
    /**
     * getTargetsAllNeedsAttentionTop - Targets with open vulnerabilities
    **/
    getTargetsAllNeedsAttentionTop(config?: AxiosRequestConfig): Promise<operations.GetTargetsAllNeedsAttentionTopResponse>;
    /**
     * getTargetsAllRiskTrend - Risk trend graph data (all targets)
    **/
    getTargetsAllRiskTrend(config?: AxiosRequestConfig): Promise<operations.GetTargetsAllRiskTrendResponse>;
    /**
     * getTargetsAllSeverityTrend - Severity trend graph data (all targets)
    **/
    getTargetsAllSeverityTrend(config?: AxiosRequestConfig): Promise<operations.GetTargetsAllSeverityTrendResponse>;
    /**
     * getTargetsAllTopVulns - Top 5 vulnerabilities (all targets).
    **/
    getTargetsAllTopVulns(config?: AxiosRequestConfig): Promise<operations.GetTargetsAllTopVulnsResponse>;
    /**
     * getTargetsTargetIdAverageFixTime - Average vulnerability trend graph data
    **/
    getTargetsTargetIdAverageFixTime(req: operations.GetTargetsTargetIdAverageFixTimeRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdAverageFixTimeResponse>;
    /**
     * getTargetsTargetIdRiskTrend - Risk trend graph data
    **/
    getTargetsTargetIdRiskTrend(req: operations.GetTargetsTargetIdRiskTrendRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdRiskTrendResponse>;
    /**
     * getTargetsTargetIdSeverityTrend - Severity trend graph data.
    **/
    getTargetsTargetIdSeverityTrend(req: operations.GetTargetsTargetIdSeverityTrendRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdSeverityTrendResponse>;
    /**
     * getTargetsTargetIdTopVulns - Top 5 vulnerabilities
    **/
    getTargetsTargetIdTopVulns(req: operations.GetTargetsTargetIdTopVulnsRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdTopVulnsResponse>;
}
