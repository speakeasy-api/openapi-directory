import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sense {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
     * Update sense settings for the given camera
     *
     * @remarks
     * Update sense settings for the given camera
     */
    updateDeviceCameraSense(req: operations.UpdateDeviceCameraSenseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraSenseResponse>;
}
