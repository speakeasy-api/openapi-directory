import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Media {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Uploads a binary. Uploading a binary can result in a new release being created, an update to an existing release, or a no-op if a release with the same binary already exists.
     */
    firebaseappdistributionMediaUpload(req: operations.FirebaseappdistributionMediaUploadRequest, security: operations.FirebaseappdistributionMediaUploadSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionMediaUploadResponse>;
}
