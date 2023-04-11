import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CameraQualityRetentionProfiles {
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
     * Delete an existing quality retention profile for this network.
     *
     * @remarks
     * Delete an existing quality retention profile for this network.
     */
    deleteNetworkCameraQualityRetentionProfile(req: operations.DeleteNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkCameraQualityRetentionProfileResponse>;
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
     * Update an existing quality retention profile for this network.
     *
     * @remarks
     * Update an existing quality retention profile for this network.
     */
    updateNetworkCameraQualityRetentionProfile(req: operations.UpdateNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCameraQualityRetentionProfileResponse>;
}
