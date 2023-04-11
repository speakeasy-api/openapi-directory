import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * **Operations:** Create, Get, Update, Delete, Get List
 */
export declare class Alias {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create alias
     *
     * @remarks
     * This POST method creates a new alias under a specified domain. If no domain is specified in the request the alias will be attached to the default domain Short.fyi
     *
     *  **NOTE:** You can override the domain level Meta Tags and Tracking Snippets by specifying them for each URL. Any variables you add to a specific URL will always override domain level settings.
     */
    createAlias(req: operations.CreateAliasRequest, security: operations.CreateAliasSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAliasResponse>;
    /**
     * Delete alias
     *
     * @remarks
     * Deletes a single alias by providing alias and domain. If no domain is provided the API will search for the matching alias within the Short.fyi domain
     */
    deleteAlias(req: operations.DeleteAliasRequest, security: operations.DeleteAliasSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteAliasResponse>;
    /**
     * Get alias
     *
     * @remarks
     * Get detailed information for a single alias by providing its alias and domain name
     */
    getAlias(req: operations.GetAliasRequest, security: operations.GetAliasSecurity, config?: AxiosRequestConfig): Promise<operations.GetAliasResponse>;
    /**
     * Get aliases by domain
     *
     * @remarks
     * Obtain a list of all alias names associated with your account and given domain. Result array is in descending order by creation date.
     *
     *  If no domain is specified you will receive a list of all the alias names you have created using the Short.fyi domain.
     *
     *  If there are more results than the limit for the request the response will return you a value in lastId property you can specify it in the continueFrom query parameter to get the next batch of records.
     */
    getAliases(req: operations.GetAliasesRequest, security: operations.GetAliasesSecurity, config?: AxiosRequestConfig): Promise<operations.GetAliasesResponse>;
    /**
     * Update alias
     *
     * @remarks
     * Update a single short URL by providing its alias and domain as a parameter, and the data you wish to update in the body of the request. If no domain is provided you will receive the alias found attached to the Short.fyi domain (if it exists and is linked to your account!)
     *
     *  ### NOTE:
     *
     *  ( * )If you add a metatag or a snippet with a same name to an alias and the domain it's related to, the value will be taken from the alias and not the domain
     *
     *  ( ** ) When you update any array property (like destinations) the block is updated **completely** so you have to specify the old records to avoid deleting them
     *
     *  ( *** ) The method updates only the specified properties so if there was no change in one of them you don't have to send it.
     */
    updateAlias(req: operations.UpdateAliasRequest, security: operations.UpdateAliasSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAliasResponse>;
}
