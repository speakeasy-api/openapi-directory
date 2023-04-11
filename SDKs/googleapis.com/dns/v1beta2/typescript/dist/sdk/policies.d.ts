import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Policies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new Policy.
     */
    dnsPoliciesCreate(req: operations.DnsPoliciesCreateRequest, security: operations.DnsPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DnsPoliciesCreateResponse>;
    /**
     * Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
     */
    dnsPoliciesDelete(req: operations.DnsPoliciesDeleteRequest, security: operations.DnsPoliciesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DnsPoliciesDeleteResponse>;
    /**
     * Fetches the representation of an existing Policy.
     */
    dnsPoliciesGet(req: operations.DnsPoliciesGetRequest, security: operations.DnsPoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DnsPoliciesGetResponse>;
    /**
     * Enumerates all Policies associated with a project.
     */
    dnsPoliciesList(req: operations.DnsPoliciesListRequest, security: operations.DnsPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.DnsPoliciesListResponse>;
    /**
     * Applies a partial update to an existing Policy.
     */
    dnsPoliciesPatch(req: operations.DnsPoliciesPatchRequest, security: operations.DnsPoliciesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DnsPoliciesPatchResponse>;
    /**
     * Updates an existing Policy.
     */
    dnsPoliciesUpdate(req: operations.DnsPoliciesUpdateRequest, security: operations.DnsPoliciesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DnsPoliciesUpdateResponse>;
}
