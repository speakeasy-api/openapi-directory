import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ScopeMappings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove client-level roles from the client’s scope.
     */
    deleteRealmClientScopesIdScopeMappingsClientsClient(req: operations.DeleteRealmClientScopesIdScopeMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientScopesIdScopeMappingsClientsClientResponse>;
    /**
     * Remove a set of realm-level roles from the client’s scope
     */
    deleteRealmClientScopesIdScopeMappingsRealm(req: operations.DeleteRealmClientScopesIdScopeMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientScopesIdScopeMappingsRealmResponse>;
    /**
     * Remove client-level roles from the client’s scope.
     */
    deleteRealmClientsIdScopeMappingsClientsClient(req: operations.DeleteRealmClientsIdScopeMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdScopeMappingsClientsClientResponse>;
    /**
     * Remove a set of realm-level roles from the client’s scope
     */
    deleteRealmClientsIdScopeMappingsRealm(req: operations.DeleteRealmClientsIdScopeMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdScopeMappingsRealmResponse>;
    /**
     * Get all scope mappings for the client
     */
    getRealmClientScopesIdScopeMappings(req: operations.GetRealmClientScopesIdScopeMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdScopeMappingsResponse>;
    /**
     * Get the roles associated with a client’s scope   Returns roles for the client.
     */
    getRealmClientScopesIdScopeMappingsClientsClient(req: operations.GetRealmClientScopesIdScopeMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdScopeMappingsClientsClientResponse>;
    /**
     * The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
     */
    getRealmClientScopesIdScopeMappingsClientsClientAvailable(req: operations.GetRealmClientScopesIdScopeMappingsClientsClientAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdScopeMappingsClientsClientAvailableResponse>;
    /**
     * Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
     */
    getRealmClientScopesIdScopeMappingsClientsClientComposite(req: operations.GetRealmClientScopesIdScopeMappingsClientsClientCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdScopeMappingsClientsClientCompositeResponse>;
    /**
     * Get realm-level roles associated with the client’s scope
     */
    getRealmClientScopesIdScopeMappingsRealm(req: operations.GetRealmClientScopesIdScopeMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdScopeMappingsRealmResponse>;
    /**
     * Get realm-level roles that are available to attach to this client’s scope
     */
    getRealmClientScopesIdScopeMappingsRealmAvailable(req: operations.GetRealmClientScopesIdScopeMappingsRealmAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdScopeMappingsRealmAvailableResponse>;
    /**
     * Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
     */
    getRealmClientScopesIdScopeMappingsRealmComposite(req: operations.GetRealmClientScopesIdScopeMappingsRealmCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdScopeMappingsRealmCompositeResponse>;
    /**
     * Get all scope mappings for the client
     */
    getRealmClientsIdScopeMappings(req: operations.GetRealmClientsIdScopeMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdScopeMappingsResponse>;
    /**
     * Get the roles associated with a client’s scope   Returns roles for the client.
     */
    getRealmClientsIdScopeMappingsClientsClient(req: operations.GetRealmClientsIdScopeMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdScopeMappingsClientsClientResponse>;
    /**
     * The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
     */
    getRealmClientsIdScopeMappingsClientsClientAvailable(req: operations.GetRealmClientsIdScopeMappingsClientsClientAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdScopeMappingsClientsClientAvailableResponse>;
    /**
     * Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
     */
    getRealmClientsIdScopeMappingsClientsClientComposite(req: operations.GetRealmClientsIdScopeMappingsClientsClientCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdScopeMappingsClientsClientCompositeResponse>;
    /**
     * Get realm-level roles associated with the client’s scope
     */
    getRealmClientsIdScopeMappingsRealm(req: operations.GetRealmClientsIdScopeMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdScopeMappingsRealmResponse>;
    /**
     * Get realm-level roles that are available to attach to this client’s scope
     */
    getRealmClientsIdScopeMappingsRealmAvailable(req: operations.GetRealmClientsIdScopeMappingsRealmAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdScopeMappingsRealmAvailableResponse>;
    /**
     * Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
     */
    getRealmClientsIdScopeMappingsRealmComposite(req: operations.GetRealmClientsIdScopeMappingsRealmCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdScopeMappingsRealmCompositeResponse>;
    /**
     * Add client-level roles to the client’s scope
     */
    postRealmClientScopesIdScopeMappingsClientsClient(req: operations.PostRealmClientScopesIdScopeMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientScopesIdScopeMappingsClientsClientResponse>;
    /**
     * Add a set of realm-level roles to the client’s scope
     */
    postRealmClientScopesIdScopeMappingsRealm(req: operations.PostRealmClientScopesIdScopeMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientScopesIdScopeMappingsRealmResponse>;
    /**
     * Add client-level roles to the client’s scope
     */
    postRealmClientsIdScopeMappingsClientsClient(req: operations.PostRealmClientsIdScopeMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdScopeMappingsClientsClientResponse>;
    /**
     * Add a set of realm-level roles to the client’s scope
     */
    postRealmClientsIdScopeMappingsRealm(req: operations.PostRealmClientsIdScopeMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdScopeMappingsRealmResponse>;
}
