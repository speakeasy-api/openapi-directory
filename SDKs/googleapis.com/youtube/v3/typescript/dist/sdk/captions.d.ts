import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Captions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a resource.
     */
    youtubeCaptionsDelete(req: operations.YoutubeCaptionsDeleteRequest, security: operations.YoutubeCaptionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeCaptionsDeleteResponse>;
    /**
     * Downloads a caption track.
     */
    youtubeCaptionsDownload(req: operations.YoutubeCaptionsDownloadRequest, security: operations.YoutubeCaptionsDownloadSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeCaptionsDownloadResponse>;
    /**
     * Inserts a new resource into this collection.
     */
    youtubeCaptionsInsert(req: operations.YoutubeCaptionsInsertRequest, security: operations.YoutubeCaptionsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeCaptionsInsertResponse>;
    /**
     * Retrieves a list of resources, possibly filtered.
     */
    youtubeCaptionsList(req: operations.YoutubeCaptionsListRequest, security: operations.YoutubeCaptionsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeCaptionsListResponse>;
    /**
     * Updates an existing resource.
     */
    youtubeCaptionsUpdate(req: operations.YoutubeCaptionsUpdateRequest, security: operations.YoutubeCaptionsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeCaptionsUpdateResponse>;
}
