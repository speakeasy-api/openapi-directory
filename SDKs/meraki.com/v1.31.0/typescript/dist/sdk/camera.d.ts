import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Camera {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates new quality retention profile for this network.
     *
     * @remarks
     * Creates new quality retention profile for this network.
     */
    createNetworkCameraQualityRetentionProfile(req: operations.CreateNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkCameraQualityRetentionProfileResponse>;
    /**
     * Creates a new camera wireless profile for this network.
     *
     * @remarks
     * Creates a new camera wireless profile for this network.
     */
    createNetworkCameraWirelessProfile(req: operations.CreateNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkCameraWirelessProfileResponse>;
    /**
     * Create custom analytics artifact
     *
     * @remarks
     * Create custom analytics artifact. Returns an artifact upload URL with expiry time. Upload the artifact file with a put request to the returned upload URL before its expiry.
     */
    createOrganizationCameraCustomAnalyticsArtifact(req: operations.CreateOrganizationCameraCustomAnalyticsArtifactRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationCameraCustomAnalyticsArtifactResponse>;
    /**
     * Delete an existing quality retention profile for this network.
     *
     * @remarks
     * Delete an existing quality retention profile for this network.
     */
    deleteNetworkCameraQualityRetentionProfile(req: operations.DeleteNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkCameraQualityRetentionProfileResponse>;
    /**
     * Delete an existing camera wireless profile for this network.
     *
     * @remarks
     * Delete an existing camera wireless profile for this network.
     */
    deleteNetworkCameraWirelessProfile(req: operations.DeleteNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkCameraWirelessProfileResponse>;
    /**
     * Delete Custom Analytics Artifact
     *
     * @remarks
     * Delete Custom Analytics Artifact
     */
    deleteOrganizationCameraCustomAnalyticsArtifact(req: operations.DeleteOrganizationCameraCustomAnalyticsArtifactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationCameraCustomAnalyticsArtifactResponse>;
    /**
     * Generate a snapshot of what the camera sees at the specified time and return a link to that image.
     *
     * @remarks
     * Generate a snapshot of what the camera sees at the specified time and return a link to that image.
     */
    generateDeviceCameraSnapshot(req: operations.GenerateDeviceCameraSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GenerateDeviceCameraSnapshotResponse>;
    /**
     * Returns live state from camera of analytics zones
     *
     * @remarks
     * Returns live state from camera of analytics zones
     */
    getDeviceCameraAnalyticsLive(req: operations.GetDeviceCameraAnalyticsLiveRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsLiveResponse>;
    /**
     * Returns an overview of aggregate analytics data for a timespan
     *
     * @remarks
     * Returns an overview of aggregate analytics data for a timespan
     */
    getDeviceCameraAnalyticsOverview(req: operations.GetDeviceCameraAnalyticsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsOverviewResponse>;
    /**
     * Returns most recent record for analytics zones
     *
     * @remarks
     * Returns most recent record for analytics zones
     */
    getDeviceCameraAnalyticsRecent(req: operations.GetDeviceCameraAnalyticsRecentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsRecentResponse>;
    /**
     * Return historical records for analytic zones
     *
     * @remarks
     * Return historical records for analytic zones
     */
    getDeviceCameraAnalyticsZoneHistory(req: operations.GetDeviceCameraAnalyticsZoneHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsZoneHistoryResponse>;
    /**
     * Returns all configured analytic zones for this camera
     *
     * @remarks
     * Returns all configured analytic zones for this camera
     */
    getDeviceCameraAnalyticsZones(req: operations.GetDeviceCameraAnalyticsZonesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsZonesResponse>;
    /**
     * Return custom analytics settings for a camera
     *
     * @remarks
     * Return custom analytics settings for a camera
     */
    getDeviceCameraCustomAnalytics(req: operations.GetDeviceCameraCustomAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraCustomAnalyticsResponse>;
    /**
     * Returns quality and retention settings for the given camera
     *
     * @remarks
     * Returns quality and retention settings for the given camera
     */
    getDeviceCameraQualityAndRetention(req: operations.GetDeviceCameraQualityAndRetentionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraQualityAndRetentionResponse>;
    /**
     * Returns sense settings for a given camera
     *
     * @remarks
     * Returns sense settings for a given camera
     */
    getDeviceCameraSense(req: operations.GetDeviceCameraSenseRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraSenseResponse>;
    /**
     * Returns the MV Sense object detection model list for the given camera
     *
     * @remarks
     * Returns the MV Sense object detection model list for the given camera
     */
    getDeviceCameraSenseObjectDetectionModels(req: operations.GetDeviceCameraSenseObjectDetectionModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraSenseObjectDetectionModelsResponse>;
    /**
     * Returns video link to the specified camera
     *
     * @remarks
     * Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.
     */
    getDeviceCameraVideoLink(req: operations.GetDeviceCameraVideoLinkRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraVideoLinkResponse>;
    /**
     * Returns video settings for the given camera
     *
     * @remarks
     * Returns video settings for the given camera
     */
    getDeviceCameraVideoSettings(req: operations.GetDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraVideoSettingsResponse>;
    /**
     * Returns wireless profile assigned to the given camera
     *
     * @remarks
     * Returns wireless profile assigned to the given camera
     */
    getDeviceCameraWirelessProfiles(req: operations.GetDeviceCameraWirelessProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraWirelessProfilesResponse>;
    /**
     * Retrieve a single quality retention profile
     *
     * @remarks
     * Retrieve a single quality retention profile
     */
    getNetworkCameraQualityRetentionProfile(req: operations.GetNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraQualityRetentionProfileResponse>;
    /**
     * List the quality retention profiles for this network
     *
     * @remarks
     * List the quality retention profiles for this network
     */
    getNetworkCameraQualityRetentionProfiles(req: operations.GetNetworkCameraQualityRetentionProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraQualityRetentionProfilesResponse>;
    /**
     * Returns a list of all camera recording schedules.
     *
     * @remarks
     * Returns a list of all camera recording schedules.
     */
    getNetworkCameraSchedules(req: operations.GetNetworkCameraSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraSchedulesResponse>;
    /**
     * Retrieve a single camera wireless profile.
     *
     * @remarks
     * Retrieve a single camera wireless profile.
     */
    getNetworkCameraWirelessProfile(req: operations.GetNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraWirelessProfileResponse>;
    /**
     * List the camera wireless profiles for this network.
     *
     * @remarks
     * List the camera wireless profiles for this network.
     */
    getNetworkCameraWirelessProfiles(req: operations.GetNetworkCameraWirelessProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraWirelessProfilesResponse>;
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
     * Fetch onboarding status of cameras
     *
     * @remarks
     * Fetch onboarding status of cameras
     */
    getOrganizationCameraOnboardingStatuses(req: operations.GetOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCameraOnboardingStatusesResponse>;
    /**
     * Update custom analytics settings for a camera
     *
     * @remarks
     * Update custom analytics settings for a camera
     */
    updateDeviceCameraCustomAnalytics(req: operations.UpdateDeviceCameraCustomAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraCustomAnalyticsResponse>;
    /**
     * Update quality and retention settings for the given camera
     *
     * @remarks
     * Update quality and retention settings for the given camera
     */
    updateDeviceCameraQualityAndRetention(req: operations.UpdateDeviceCameraQualityAndRetentionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraQualityAndRetentionResponse>;
    /**
     * Update sense settings for the given camera
     *
     * @remarks
     * Update sense settings for the given camera
     */
    updateDeviceCameraSense(req: operations.UpdateDeviceCameraSenseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraSenseResponse>;
    /**
     * Update video settings for the given camera
     *
     * @remarks
     * Update video settings for the given camera
     */
    updateDeviceCameraVideoSettings(req: operations.UpdateDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraVideoSettingsResponse>;
    /**
     * Assign wireless profiles to the given camera
     *
     * @remarks
     * Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.
     */
    updateDeviceCameraWirelessProfiles(req: operations.UpdateDeviceCameraWirelessProfilesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraWirelessProfilesResponse>;
    /**
     * Update an existing quality retention profile for this network.
     *
     * @remarks
     * Update an existing quality retention profile for this network.
     */
    updateNetworkCameraQualityRetentionProfile(req: operations.UpdateNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCameraQualityRetentionProfileResponse>;
    /**
     * Update an existing camera wireless profile in this network.
     *
     * @remarks
     * Update an existing camera wireless profile in this network.
     */
    updateNetworkCameraWirelessProfile(req: operations.UpdateNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCameraWirelessProfileResponse>;
    /**
     * Notify that credential handoff to camera has completed
     *
     * @remarks
     * Notify that credential handoff to camera has completed
     */
    updateOrganizationCameraOnboardingStatuses(req: operations.UpdateOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationCameraOnboardingStatusesResponse>;
}
