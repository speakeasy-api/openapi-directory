import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ClientScopes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete the client scope
     */
    deleteRealmClientScopesId(req: operations.DeleteRealmClientScopesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientScopesIdResponse>;
    /**
     * Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
     */
    getRealmClientScopes(req: operations.GetRealmClientScopesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesResponse>;
    /**
     * Get representation of the client scope
     */
    getRealmClientScopesId(req: operations.GetRealmClientScopesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdResponse>;
    /**
     * Create a new client scope   Client Scope’s name must be unique!
     */
    postRealmClientScopes(req: operations.PostRealmClientScopesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientScopesResponse>;
    /**
     * Update the client scope
     */
    putRealmClientScopesId(req: operations.PutRealmClientScopesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmClientScopesIdResponse>;
}
