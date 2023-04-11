import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The `kvpairs` resource provides a service for storing generic JSON key/value pairs on the Brain.
 *
 * @remarks
 * Intended for applications that interact with the Brain but do not or cannot have their own (centralized) persistent storage.
 *
 * See also the `blobs` resource.
 *
 */
export declare class Kvpairs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create key-value pair
     */
    addKvPairs(req: shared.KeyValuePairInput, config?: AxiosRequestConfig): Promise<operations.AddKvPairsResponse>;
    /**
     * Delete key-value pair
     */
    deleteKvPair(req: operations.DeleteKvPairRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKvPairResponse>;
    /**
     * Get all key-value pairs
     */
    getKvPairs(req: operations.GetKvPairsRequest, config?: AxiosRequestConfig): Promise<operations.GetKvPairsResponse>;
    /**
     * Get key-value pair
     */
    getKvPairsById(req: operations.GetKvPairsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetKvPairsByIdResponse>;
    /**
     * Update existing Key-value pair
     */
    updateKvPair(req: operations.UpdateKvPairRequest, config?: AxiosRequestConfig): Promise<operations.UpdateKvPairResponse>;
}
