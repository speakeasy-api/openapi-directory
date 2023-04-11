import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Probely has several graphs and tables that it uses to
 *
 * @remarks
 * display statistics of the current state of a target or account.
 *
 */
export declare class Statistics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Average fix time graph data (all targets)
     */
    getTargetsAllAverageFixTime(config?: AxiosRequestConfig): Promise<operations.GetTargetsAllAverageFixTimeResponse>;
    /**
     * Targets with open vulnerabilities pie chart data
     */
    getTargetsAllNeedsAttentionPie(config?: AxiosRequestConfig): Promise<operations.GetTargetsAllNeedsAttentionPieResponse>;
    /**
     * Targets with open vulnerabilities
     */
    getTargetsAllNeedsAttentionTop(config?: AxiosRequestConfig): Promise<operations.GetTargetsAllNeedsAttentionTopResponse>;
    /**
     * Risk trend graph data (all targets)
     */
    getTargetsAllRiskTrend(config?: AxiosRequestConfig): Promise<operations.GetTargetsAllRiskTrendResponse>;
    /**
     * Severity trend graph data (all targets)
     */
    getTargetsAllSeverityTrend(config?: AxiosRequestConfig): Promise<operations.GetTargetsAllSeverityTrendResponse>;
    /**
     * Top 5 vulnerabilities (all targets).
     */
    getTargetsAllTopVulns(config?: AxiosRequestConfig): Promise<operations.GetTargetsAllTopVulnsResponse>;
    /**
     * Average vulnerability trend graph data
     */
    getTargetsTargetIdAverageFixTime(req: operations.GetTargetsTargetIdAverageFixTimeRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdAverageFixTimeResponse>;
    /**
     * Risk trend graph data
     */
    getTargetsTargetIdRiskTrend(req: operations.GetTargetsTargetIdRiskTrendRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdRiskTrendResponse>;
    /**
     * Severity trend graph data.
     */
    getTargetsTargetIdSeverityTrend(req: operations.GetTargetsTargetIdSeverityTrendRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdSeverityTrendResponse>;
    /**
     * Top 5 vulnerabilities
     */
    getTargetsTargetIdTopVulns(req: operations.GetTargetsTargetIdTopVulnsRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdTopVulnsResponse>;
}
