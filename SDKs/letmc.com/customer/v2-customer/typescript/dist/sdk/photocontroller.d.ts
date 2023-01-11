import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PhotoController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * photoControllerGetPhotoDownload - Downloads the photo of a property given the photo ID.
    **/
    photoControllerGetPhotoDownload(req: operations.PhotoControllerGetPhotoDownloadRequest, config?: AxiosRequestConfig): Promise<operations.PhotoControllerGetPhotoDownloadResponse>;
}
