import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
     */
    securitycenterProjectsLocationsClustersGetContainerThreatDetectionSettings(req: operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest, security: operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse>;
    /**
     * Update the ContainerThreatDetectionSettings resource.
     */
    securitycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings(req: operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest, security: operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse>;
    /**
     * Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     */
    securitycenterProjectsWebSecurityScannerSettingsCalculate(req: operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest, security: operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse>;
}
