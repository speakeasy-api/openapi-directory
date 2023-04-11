import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LicenseCodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return a specified license code. License codes are mirrored across all projects that have permissions to read the License Code. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
     */
    computeLicenseCodesGet(req: operations.ComputeLicenseCodesGetRequest, security: operations.ComputeLicenseCodesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeLicenseCodesGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
     */
    computeLicenseCodesGetIamPolicy(req: operations.ComputeLicenseCodesGetIamPolicyRequest, security: operations.ComputeLicenseCodesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeLicenseCodesGetIamPolicyResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
     */
    computeLicenseCodesSetIamPolicy(req: operations.ComputeLicenseCodesSetIamPolicyRequest, security: operations.ComputeLicenseCodesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeLicenseCodesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
     */
    computeLicenseCodesTestIamPermissions(req: operations.ComputeLicenseCodesTestIamPermissionsRequest, security: operations.ComputeLicenseCodesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeLicenseCodesTestIamPermissionsResponse>;
}
