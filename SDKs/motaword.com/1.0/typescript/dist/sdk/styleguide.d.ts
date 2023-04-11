import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class StyleGuide {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Upload a new style guide
     *
     * @remarks
     * Upload a new style guide
     */
    createStyleGuideJson(req: operations.CreateStyleGuideJsonRequest, config?: AxiosRequestConfig): Promise<operations.CreateStyleGuideJsonResponse>;
    /**
     * Upload a new style guide
     *
     * @remarks
     * Upload a new style guide
     */
    createStyleGuideMultipart(req: operations.CreateStyleGuideMultipartRequest, config?: AxiosRequestConfig): Promise<operations.CreateStyleGuideMultipartResponse>;
    /**
     * Delete a style guide
     *
     * @remarks
     * Delete the existing style guide from the project.
     */
    deleteStyleGuide(req: operations.DeleteStyleGuideRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStyleGuideResponse>;
    /**
     * Download account style guide
     *
     * @remarks
     * Download your account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.
     */
    downloadGlobalStyleGuide(config?: AxiosRequestConfig): Promise<operations.DownloadGlobalStyleGuideResponse>;
    /**
     * Download a style guide
     *
     * @remarks
     * Download a previously uploaded style guide file.
     */
    downloadStyleGuide(req: operations.DownloadStyleGuideRequest, config?: AxiosRequestConfig): Promise<operations.DownloadStyleGuideResponse>;
    /**
     * View a style guide
     *
     * @remarks
     * View the details of a style guide uploaded to a project
     */
    getStyleGuide(req: operations.GetStyleGuideRequest, config?: AxiosRequestConfig): Promise<operations.GetStyleGuideResponse>;
    /**
     * View style guides
     *
     * @remarks
     * View a list of style guides in your project.
     */
    getStyleGuides(req: operations.GetStyleGuidesRequest, config?: AxiosRequestConfig): Promise<operations.GetStyleGuidesResponse>;
    /**
     * Create or update the account style guide
     *
     * @remarks
     * Update your corporate account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.
     */
    updateGlobalStyleGuideJson(req: shared.AccountStyleGuideUploadRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalStyleGuideJsonResponse>;
    /**
     * Create or update the account style guide
     *
     * @remarks
     * Update your corporate account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.
     */
    updateGlobalStyleGuideMultipart(req: shared.AccountStyleGuideUploadRequest1, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalStyleGuideMultipartResponse>;
    /**
     * Update a style guide
     *
     * @remarks
     * Update the existing style guide in the project. Public users are allowed to have only 1 style guide per project and file name and contents will replaced with the new style guide that you are uploading via this endpoint.
     */
    updateStyleGuideJson(req: operations.UpdateStyleGuideJsonRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStyleGuideJsonResponse>;
    /**
     * Update a style guide
     *
     * @remarks
     * Update the existing style guide in the project. Public users are allowed to have only 1 style guide per project and file name and contents will replaced with the new style guide that you are uploading via this endpoint.
     */
    updateStyleGuideMultipart(req: operations.UpdateStyleGuideMultipartRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStyleGuideMultipartResponse>;
}
