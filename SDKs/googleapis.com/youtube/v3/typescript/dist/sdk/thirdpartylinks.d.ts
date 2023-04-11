import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ThirdPartyLinks {
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
    youtubeThirdPartyLinksDelete(req: operations.YoutubeThirdPartyLinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeThirdPartyLinksDeleteResponse>;
    /**
     * Inserts a new resource into this collection.
     */
    youtubeThirdPartyLinksInsert(req: operations.YoutubeThirdPartyLinksInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeThirdPartyLinksInsertResponse>;
    /**
     * Retrieves a list of resources, possibly filtered.
     */
    youtubeThirdPartyLinksList(req: operations.YoutubeThirdPartyLinksListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeThirdPartyLinksListResponse>;
    /**
     * Updates an existing resource.
     */
    youtubeThirdPartyLinksUpdate(req: operations.YoutubeThirdPartyLinksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeThirdPartyLinksUpdateResponse>;
}
