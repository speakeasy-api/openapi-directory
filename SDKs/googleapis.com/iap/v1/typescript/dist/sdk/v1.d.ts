import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     */
    iapGetIamPolicy(req: operations.IapGetIamPolicyRequest, security: operations.IapGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.IapGetIamPolicyResponse>;
    /**
     * Gets the IAP settings on a particular IAP protected resource.
     */
    iapGetIapSettings(req: operations.IapGetIapSettingsRequest, security: operations.IapGetIapSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.IapGetIapSettingsResponse>;
    /**
     * Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     */
    iapSetIamPolicy(req: operations.IapSetIamPolicyRequest, security: operations.IapSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.IapSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     */
    iapTestIamPermissions(req: operations.IapTestIamPermissionsRequest, security: operations.IapTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.IapTestIamPermissionsResponse>;
    /**
     * Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.
     */
    iapUpdateIapSettings(req: operations.IapUpdateIapSettingsRequest, security: operations.IapUpdateIapSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.IapUpdateIapSettingsResponse>;
}
