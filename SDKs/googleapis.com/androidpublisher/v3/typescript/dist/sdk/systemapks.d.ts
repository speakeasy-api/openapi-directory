import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Systemapks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
     */
    androidpublisherSystemapksVariantsCreate(req: operations.AndroidpublisherSystemapksVariantsCreateRequest, security: operations.AndroidpublisherSystemapksVariantsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherSystemapksVariantsCreateResponse>;
    /**
     * Downloads a previously created system APK which is suitable for inclusion in a system image.
     */
    androidpublisherSystemapksVariantsDownload(req: operations.AndroidpublisherSystemapksVariantsDownloadRequest, security: operations.AndroidpublisherSystemapksVariantsDownloadSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherSystemapksVariantsDownloadResponse>;
    /**
     * Returns a previously created system APK variant.
     */
    androidpublisherSystemapksVariantsGet(req: operations.AndroidpublisherSystemapksVariantsGetRequest, security: operations.AndroidpublisherSystemapksVariantsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherSystemapksVariantsGetResponse>;
    /**
     * Returns the list of previously created system APK variants.
     */
    androidpublisherSystemapksVariantsList(req: operations.AndroidpublisherSystemapksVariantsListRequest, security: operations.AndroidpublisherSystemapksVariantsListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherSystemapksVariantsListResponse>;
}
