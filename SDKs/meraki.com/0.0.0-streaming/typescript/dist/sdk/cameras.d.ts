import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Cameras {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate a snapshot of what the camera sees at the specified time and return a link to that image.
     *
     * @remarks
     * Generate a snapshot of what the camera sees at the specified time and return a link to that image.
     */
    generateNetworkCameraSnapshot(req: operations.GenerateNetworkCameraSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GenerateNetworkCameraSnapshotResponse>;
    /**
     * Returns quality and retention settings for the given camera
     *
     * @remarks
     * Returns quality and retention settings for the given camera
     */
    getDeviceCameraQualityAndRetentionSettings(req: operations.GetDeviceCameraQualityAndRetentionSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraQualityAndRetentionSettingsResponse>;
    /**
     * Returns video settings for the given camera
     *
     * @remarks
     * Returns video settings for the given camera
     */
    getDeviceCameraVideoSettings(req: operations.GetDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraVideoSettingsResponse>;
    /**
     * Returns a list of all camera recording schedules.
     *
     * @remarks
     * Returns a list of all camera recording schedules.
     */
    getNetworkCameraSchedules(req: operations.GetNetworkCameraSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraSchedulesResponse>;
    /**
     * Returns video link to the specified camera
     *
     * @remarks
     * Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.
     */
    getNetworkCameraVideoLink(req: operations.GetNetworkCameraVideoLinkRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraVideoLinkResponse>;
    /**
     * Update quality and retention settings for the given camera
     *
     * @remarks
     * Update quality and retention settings for the given camera
     */
    updateDeviceCameraQualityAndRetentionSettings(req: operations.UpdateDeviceCameraQualityAndRetentionSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraQualityAndRetentionSettingsResponse>;
    /**
     * Update video settings for the given camera
     *
     * @remarks
     * Update video settings for the given camera
     */
    updateDeviceCameraVideoSettings(req: operations.UpdateDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraVideoSettingsResponse>;
}
