import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccessPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
     */
    accesscontextmanagerAccessPoliciesAccessLevelsCreate(req: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest, security: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse>;
    /**
     * List all Access Levels for an access policy.
     */
    accesscontextmanagerAccessPoliciesAccessLevelsList(req: operations.AccesscontextmanagerAccessPoliciesAccessLevelsListRequest, security: operations.AccesscontextmanagerAccessPoliciesAccessLevelsListSecurity, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesAccessLevelsListResponse>;
    /**
     * Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
     */
    accesscontextmanagerAccessPoliciesCreate(req: operations.AccesscontextmanagerAccessPoliciesCreateRequest, security: operations.AccesscontextmanagerAccessPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesCreateResponse>;
    /**
     * List all AccessPolicies under a container.
     */
    accesscontextmanagerAccessPoliciesList(req: operations.AccesscontextmanagerAccessPoliciesListRequest, security: operations.AccesscontextmanagerAccessPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesListResponse>;
    /**
     * Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
     */
    accesscontextmanagerAccessPoliciesServicePerimetersCreate(req: operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest, security: operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse>;
    /**
     * Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
     */
    accesscontextmanagerAccessPoliciesServicePerimetersDelete(req: operations.AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest, security: operations.AccesscontextmanagerAccessPoliciesServicePerimetersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesServicePerimetersDeleteResponse>;
    /**
     * List all Service Perimeters for an access policy.
     */
    accesscontextmanagerAccessPoliciesServicePerimetersList(req: operations.AccesscontextmanagerAccessPoliciesServicePerimetersListRequest, security: operations.AccesscontextmanagerAccessPoliciesServicePerimetersListSecurity, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesServicePerimetersListResponse>;
    /**
     * Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.
     */
    accesscontextmanagerAccessPoliciesServicePerimetersPatch(req: operations.AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest, security: operations.AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse>;
}
