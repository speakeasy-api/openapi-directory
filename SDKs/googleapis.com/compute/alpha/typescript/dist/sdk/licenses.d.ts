import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Licenses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified license. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
     */
    computeLicensesDelete(req: operations.ComputeLicensesDeleteRequest, security: operations.ComputeLicensesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeLicensesDeleteResponse>;
    /**
     * Returns the specified License resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
     */
    computeLicensesGet(req: operations.ComputeLicensesGetRequest, security: operations.ComputeLicensesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeLicensesGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
     */
    computeLicensesGetIamPolicy(req: operations.ComputeLicensesGetIamPolicyRequest, security: operations.ComputeLicensesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeLicensesGetIamPolicyResponse>;
    /**
     * Create a License resource in the specified project. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
     */
    computeLicensesInsert(req: operations.ComputeLicensesInsertRequest, security: operations.ComputeLicensesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeLicensesInsertResponse>;
    /**
     * Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
     */
    computeLicensesList(req: operations.ComputeLicensesListRequest, security: operations.ComputeLicensesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeLicensesListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
     */
    computeLicensesSetIamPolicy(req: operations.ComputeLicensesSetIamPolicyRequest, security: operations.ComputeLicensesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeLicensesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
     */
    computeLicensesTestIamPermissions(req: operations.ComputeLicensesTestIamPermissionsRequest, security: operations.ComputeLicensesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeLicensesTestIamPermissionsResponse>;
}
