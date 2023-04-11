import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Vitals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Searches all error issues in which reports have been grouped.
     */
    playdeveloperreportingVitalsErrorsIssuesSearch(req: operations.PlaydeveloperreportingVitalsErrorsIssuesSearchRequest, security: operations.PlaydeveloperreportingVitalsErrorsIssuesSearchSecurity, config?: AxiosRequestConfig): Promise<operations.PlaydeveloperreportingVitalsErrorsIssuesSearchResponse>;
    /**
     * Searches all error reports received for an app.
     */
    playdeveloperreportingVitalsErrorsReportsSearch(req: operations.PlaydeveloperreportingVitalsErrorsReportsSearchRequest, security: operations.PlaydeveloperreportingVitalsErrorsReportsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.PlaydeveloperreportingVitalsErrorsReportsSearchResponse>;
    /**
     * Describes the properties of the metric set.
     */
    playdeveloperreportingVitalsStuckbackgroundwakelockrateGet(req: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest, security: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetSecurity, config?: AxiosRequestConfig): Promise<operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse>;
    /**
     * Queries the metrics in the metric set.
     */
    playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery(req: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest, security: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuerySecurity, config?: AxiosRequestConfig): Promise<operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse>;
}
