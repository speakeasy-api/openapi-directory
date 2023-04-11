import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Detecting nodes to use for submitting transactions
 */
export declare class PeerDetection {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists known peers sorted by block height
     */
    getPeersList(req: operations.GetPeersListRequest, config?: AxiosRequestConfig): Promise<operations.GetPeersListResponse>;
}
