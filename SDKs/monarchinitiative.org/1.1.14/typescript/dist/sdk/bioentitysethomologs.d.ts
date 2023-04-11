import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Map gene IDs to their homologs
 */
export declare class BioentitysetHomologs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns homology associations for a given input set of genes
     */
    getEntitySetHomologs(req: operations.GetEntitySetHomologsRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitySetHomologsResponse>;
}
