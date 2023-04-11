import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Images {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified image.
     */
    computeImagesDelete(req: operations.ComputeImagesDeleteRequest, security: operations.ComputeImagesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeImagesDeleteResponse>;
    /**
     * Sets the deprecation status of an image. If an empty request body is given, clears the deprecation status instead.
     */
    computeImagesDeprecate(req: operations.ComputeImagesDeprecateRequest, security: operations.ComputeImagesDeprecateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeImagesDeprecateResponse>;
    /**
     * Returns the specified image.
     */
    computeImagesGet(req: operations.ComputeImagesGetRequest, security: operations.ComputeImagesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeImagesGetResponse>;
    /**
     * Returns the latest image that is part of an image family and is not deprecated. For more information on image families, see Public image families documentation.
     */
    computeImagesGetFromFamily(req: operations.ComputeImagesGetFromFamilyRequest, security: operations.ComputeImagesGetFromFamilySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeImagesGetFromFamilyResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeImagesGetIamPolicy(req: operations.ComputeImagesGetIamPolicyRequest, security: operations.ComputeImagesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeImagesGetIamPolicyResponse>;
    /**
     * Creates an image in the specified project using the data included in the request.
     */
    computeImagesInsert(req: operations.ComputeImagesInsertRequest, security: operations.ComputeImagesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeImagesInsertResponse>;
    /**
     * Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.
     */
    computeImagesList(req: operations.ComputeImagesListRequest, security: operations.ComputeImagesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeImagesListResponse>;
    /**
     * Patches the specified image with the data included in the request. Only the following fields can be modified: family, description, deprecation status.
     */
    computeImagesPatch(req: operations.ComputeImagesPatchRequest, security: operations.ComputeImagesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeImagesPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeImagesSetIamPolicy(req: operations.ComputeImagesSetIamPolicyRequest, security: operations.ComputeImagesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeImagesSetIamPolicyResponse>;
    /**
     * Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.
     */
    computeImagesSetLabels(req: operations.ComputeImagesSetLabelsRequest, security: operations.ComputeImagesSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeImagesSetLabelsResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeImagesTestIamPermissions(req: operations.ComputeImagesTestIamPermissionsRequest, security: operations.ComputeImagesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeImagesTestIamPermissionsResponse>;
}
