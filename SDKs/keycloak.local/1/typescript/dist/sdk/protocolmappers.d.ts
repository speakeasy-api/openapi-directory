import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProtocolMappers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete the mapper
     */
    deleteRealmClientScopesId1ProtocolMappersModelsId2(req: operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Request, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Response>;
    /**
     * Delete the mapper
     */
    deleteRealmClientsId1ProtocolMappersModelsId2(req: operations.DeleteRealmClientsId1ProtocolMappersModelsId2Request, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsId1ProtocolMappersModelsId2Response>;
    /**
     * Get mapper by id
     */
    getRealmClientScopesId1ProtocolMappersModelsId2(req: operations.GetRealmClientScopesId1ProtocolMappersModelsId2Request, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesId1ProtocolMappersModelsId2Response>;
    /**
     * Get mappers
     */
    getRealmClientScopesIdProtocolMappersModels(req: operations.GetRealmClientScopesIdProtocolMappersModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdProtocolMappersModelsResponse>;
    /**
     * Get mappers by name for a specific protocol
     */
    getRealmClientScopesIdProtocolMappersProtocolProtocol(req: operations.GetRealmClientScopesIdProtocolMappersProtocolProtocolRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdProtocolMappersProtocolProtocolResponse>;
    /**
     * Get mapper by id
     */
    getRealmClientsId1ProtocolMappersModelsId2(req: operations.GetRealmClientsId1ProtocolMappersModelsId2Request, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsId1ProtocolMappersModelsId2Response>;
    /**
     * Get mappers
     */
    getRealmClientsIdProtocolMappersModels(req: operations.GetRealmClientsIdProtocolMappersModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdProtocolMappersModelsResponse>;
    /**
     * Get mappers by name for a specific protocol
     */
    getRealmClientsIdProtocolMappersProtocolProtocol(req: operations.GetRealmClientsIdProtocolMappersProtocolProtocolRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdProtocolMappersProtocolProtocolResponse>;
    /**
     * Create multiple mappers
     */
    postRealmClientScopesIdProtocolMappersAddModels(req: operations.PostRealmClientScopesIdProtocolMappersAddModelsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientScopesIdProtocolMappersAddModelsResponse>;
    /**
     * Create a mapper
     */
    postRealmClientScopesIdProtocolMappersModels(req: operations.PostRealmClientScopesIdProtocolMappersModelsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientScopesIdProtocolMappersModelsResponse>;
    /**
     * Create multiple mappers
     */
    postRealmClientsIdProtocolMappersAddModels(req: operations.PostRealmClientsIdProtocolMappersAddModelsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdProtocolMappersAddModelsResponse>;
    /**
     * Create a mapper
     */
    postRealmClientsIdProtocolMappersModels(req: operations.PostRealmClientsIdProtocolMappersModelsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdProtocolMappersModelsResponse>;
    /**
     * Update the mapper
     */
    putRealmClientScopesId1ProtocolMappersModelsId2(req: operations.PutRealmClientScopesId1ProtocolMappersModelsId2Request, config?: AxiosRequestConfig): Promise<operations.PutRealmClientScopesId1ProtocolMappersModelsId2Response>;
    /**
     * Update the mapper
     */
    putRealmClientsId1ProtocolMappersModelsId2(req: operations.PutRealmClientsId1ProtocolMappersModelsId2Request, config?: AxiosRequestConfig): Promise<operations.PutRealmClientsId1ProtocolMappersModelsId2Response>;
}
