import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MachineImages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified machine image. Deleting a machine image is permanent and cannot be undone.
     */
    computeMachineImagesDelete(req: operations.ComputeMachineImagesDeleteRequest, security: operations.ComputeMachineImagesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeMachineImagesDeleteResponse>;
    /**
     * Returns the specified machine image.
     */
    computeMachineImagesGet(req: operations.ComputeMachineImagesGetRequest, security: operations.ComputeMachineImagesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeMachineImagesGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeMachineImagesGetIamPolicy(req: operations.ComputeMachineImagesGetIamPolicyRequest, security: operations.ComputeMachineImagesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeMachineImagesGetIamPolicyResponse>;
    /**
     * Creates a machine image in the specified project using the data that is included in the request. If you are creating a new machine image to update an existing instance, your new machine image should use the same network or, if applicable, the same subnetwork as the original instance.
     */
    computeMachineImagesInsert(req: operations.ComputeMachineImagesInsertRequest, security: operations.ComputeMachineImagesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeMachineImagesInsertResponse>;
    /**
     * Retrieves a list of machine images that are contained within the specified project.
     */
    computeMachineImagesList(req: operations.ComputeMachineImagesListRequest, security: operations.ComputeMachineImagesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeMachineImagesListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeMachineImagesSetIamPolicy(req: operations.ComputeMachineImagesSetIamPolicyRequest, security: operations.ComputeMachineImagesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeMachineImagesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeMachineImagesTestIamPermissions(req: operations.ComputeMachineImagesTestIamPermissionsRequest, security: operations.ComputeMachineImagesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeMachineImagesTestIamPermissionsResponse>;
}
