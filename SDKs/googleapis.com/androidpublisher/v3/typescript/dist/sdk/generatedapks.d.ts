import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Generatedapks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Downloads a single signed APK generated from an app bundle.
     */
    androidpublisherGeneratedapksDownload(req: operations.AndroidpublisherGeneratedapksDownloadRequest, security: operations.AndroidpublisherGeneratedapksDownloadSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherGeneratedapksDownloadResponse>;
    /**
     * Returns download metadata for all APKs that were generated from a given app bundle.
     */
    androidpublisherGeneratedapksList(req: operations.AndroidpublisherGeneratedapksListRequest, security: operations.AndroidpublisherGeneratedapksListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherGeneratedapksListResponse>;
}
