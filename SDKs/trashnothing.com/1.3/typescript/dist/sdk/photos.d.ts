import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Upload, delete and rotate photos.
 */
export declare class Photos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a photo
     */
    deletePhoto(req: operations.DeletePhotoRequest, config?: AxiosRequestConfig): Promise<operations.DeletePhotoResponse>;
    /**
     * Retrieve multiple photos
     */
    getPhotosByIds(req: operations.GetPhotosByIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetPhotosByIdsResponse>;
    /**
     * Rotate a photo
     */
    rotatePhoto(req: operations.RotatePhotoRequest, config?: AxiosRequestConfig): Promise<operations.RotatePhotoResponse>;
    /**
     * Create a photo
     */
    uploadPhoto(req: operations.UploadPhotoRequestBody, config?: AxiosRequestConfig): Promise<operations.UploadPhotoResponse>;
}
