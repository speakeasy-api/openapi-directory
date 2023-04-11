import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
     */
    firebasedynamiclinksGetLinkStats(req: operations.FirebasedynamiclinksGetLinkStatsRequest, security: operations.FirebasedynamiclinksGetLinkStatsSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasedynamiclinksGetLinkStatsResponse>;
    /**
     * Get iOS strong/weak-match info for post-install attribution.
     */
    firebasedynamiclinksInstallAttribution(req: operations.FirebasedynamiclinksInstallAttributionRequest, security: operations.FirebasedynamiclinksInstallAttributionSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasedynamiclinksInstallAttributionResponse>;
    /**
     * Get iOS reopen attribution for app universal link open deeplinking.
     */
    firebasedynamiclinksReopenAttribution(req: operations.FirebasedynamiclinksReopenAttributionRequest, security: operations.FirebasedynamiclinksReopenAttributionSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasedynamiclinksReopenAttributionResponse>;
}
