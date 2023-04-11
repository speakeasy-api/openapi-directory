import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomAnalytics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create custom analytics artifact
     *
     * @remarks
     * Create custom analytics artifact. Returns an artifact upload URL with expiry time. Upload the artifact file with a put request to the returned upload URL before its expiry.
     */
    createOrganizationCameraCustomAnalyticsArtifact(req: operations.CreateOrganizationCameraCustomAnalyticsArtifactRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationCameraCustomAnalyticsArtifactResponse>;
    /**
     * Delete Custom Analytics Artifact
     *
     * @remarks
     * Delete Custom Analytics Artifact
     */
    deleteOrganizationCameraCustomAnalyticsArtifact(req: operations.DeleteOrganizationCameraCustomAnalyticsArtifactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationCameraCustomAnalyticsArtifactResponse>;
    /**
     * Return custom analytics settings for a camera
     *
     * @remarks
     * Return custom analytics settings for a camera
     */
    getDeviceCameraCustomAnalytics(req: operations.GetDeviceCameraCustomAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraCustomAnalyticsResponse>;
    /**
     * Get Custom Analytics Artifact
     *
     * @remarks
     * Get Custom Analytics Artifact
     */
    getOrganizationCameraCustomAnalyticsArtifact(req: operations.GetOrganizationCameraCustomAnalyticsArtifactRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCameraCustomAnalyticsArtifactResponse>;
    /**
     * List Custom Analytics Artifacts
     *
     * @remarks
     * List Custom Analytics Artifacts
     */
    getOrganizationCameraCustomAnalyticsArtifacts(req: operations.GetOrganizationCameraCustomAnalyticsArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCameraCustomAnalyticsArtifactsResponse>;
    /**
     * Update custom analytics settings for a camera
     *
     * @remarks
     * Update custom analytics settings for a camera
     */
    updateDeviceCameraCustomAnalytics(req: operations.UpdateDeviceCameraCustomAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraCustomAnalyticsResponse>;
}
