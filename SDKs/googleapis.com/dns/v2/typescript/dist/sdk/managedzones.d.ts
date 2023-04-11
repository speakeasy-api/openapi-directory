import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ManagedZones {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new ManagedZone.
     */
    dnsManagedZonesCreate(req: operations.DnsManagedZonesCreateRequest, security: operations.DnsManagedZonesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesCreateResponse>;
    /**
     * Deletes a previously created ManagedZone.
     */
    dnsManagedZonesDelete(req: operations.DnsManagedZonesDeleteRequest, security: operations.DnsManagedZonesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesDeleteResponse>;
    /**
     * Fetches the representation of an existing ManagedZone.
     */
    dnsManagedZonesGet(req: operations.DnsManagedZonesGetRequest, security: operations.DnsManagedZonesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesGetResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    dnsManagedZonesGetIamPolicy(req: operations.DnsManagedZonesGetIamPolicyRequest, security: operations.DnsManagedZonesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesGetIamPolicyResponse>;
    /**
     * Enumerates ManagedZones that have been created but not yet deleted.
     */
    dnsManagedZonesList(req: operations.DnsManagedZonesListRequest, security: operations.DnsManagedZonesListSecurity, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesListResponse>;
    /**
     * Applies a partial update to an existing ManagedZone.
     */
    dnsManagedZonesPatch(req: operations.DnsManagedZonesPatchRequest, security: operations.DnsManagedZonesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    dnsManagedZonesSetIamPolicy(req: operations.DnsManagedZonesSetIamPolicyRequest, security: operations.DnsManagedZonesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    dnsManagedZonesTestIamPermissions(req: operations.DnsManagedZonesTestIamPermissionsRequest, security: operations.DnsManagedZonesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesTestIamPermissionsResponse>;
    /**
     * Updates an existing ManagedZone.
     */
    dnsManagedZonesUpdate(req: operations.DnsManagedZonesUpdateRequest, security: operations.DnsManagedZonesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesUpdateResponse>;
}
