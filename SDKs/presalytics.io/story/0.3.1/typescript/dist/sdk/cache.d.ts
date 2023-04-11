import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Cache {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cache: Get Subdocument
     *
     * @remarks
     * An endpoint for broswer retreive html documents that were cached durin the rendering process via a nonce (token)
     */
    cacheNonceGet(req: operations.CacheNonceGetRequest, config?: AxiosRequestConfig): Promise<operations.CacheNonceGetResponse>;
    /**
     * Cache: Store Subdocument
     *
     * @remarks
     * An endpoint for Presalytics Renderers to cache html subdocuments for subsequent retrieval by the browser.  Documents Are retrieved via token expire after 1 minute.
     */
    cachePost(req: shared.CachePostRequest, config?: AxiosRequestConfig): Promise<operations.CachePostResponse>;
}
