import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Computed attributes management
 */
export declare class Attributes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an Attribute
     */
    deleteAttributesComputedId(req: operations.DeleteAttributesComputedIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttributesComputedIdResponse>;
    /**
     * Fetch a list of Attributes
     *
     * @remarks
     * Without params, it returns a list of Attributes the user has access to
     */
    getAttributesComputed(req: operations.GetAttributesComputedRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributesComputedResponse>;
    /**
     * Create an Attribute
     */
    postAttributesComputed(req: shared.Attribute, config?: AxiosRequestConfig): Promise<operations.PostAttributesComputedResponse>;
    /**
     * Update an Attribute
     */
    putAttributesComputedId(req: operations.PutAttributesComputedIdRequest, config?: AxiosRequestConfig): Promise<operations.PutAttributesComputedIdResponse>;
}
