import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GlobalPublicDelegatedPrefixes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified global PublicDelegatedPrefix.
     */
    computeGlobalPublicDelegatedPrefixesDelete(req: operations.ComputeGlobalPublicDelegatedPrefixesDeleteRequest, security: operations.ComputeGlobalPublicDelegatedPrefixesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalPublicDelegatedPrefixesDeleteResponse>;
    /**
     * Returns the specified global PublicDelegatedPrefix resource.
     */
    computeGlobalPublicDelegatedPrefixesGet(req: operations.ComputeGlobalPublicDelegatedPrefixesGetRequest, security: operations.ComputeGlobalPublicDelegatedPrefixesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalPublicDelegatedPrefixesGetResponse>;
    /**
     * Creates a global PublicDelegatedPrefix in the specified project using the parameters that are included in the request.
     */
    computeGlobalPublicDelegatedPrefixesInsert(req: operations.ComputeGlobalPublicDelegatedPrefixesInsertRequest, security: operations.ComputeGlobalPublicDelegatedPrefixesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalPublicDelegatedPrefixesInsertResponse>;
    /**
     * Lists the global PublicDelegatedPrefixes for a project.
     */
    computeGlobalPublicDelegatedPrefixesList(req: operations.ComputeGlobalPublicDelegatedPrefixesListRequest, security: operations.ComputeGlobalPublicDelegatedPrefixesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalPublicDelegatedPrefixesListResponse>;
    /**
     * Patches the specified global PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
     */
    computeGlobalPublicDelegatedPrefixesPatch(req: operations.ComputeGlobalPublicDelegatedPrefixesPatchRequest, security: operations.ComputeGlobalPublicDelegatedPrefixesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalPublicDelegatedPrefixesPatchResponse>;
}
