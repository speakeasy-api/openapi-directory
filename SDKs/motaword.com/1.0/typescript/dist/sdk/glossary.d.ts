import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Glossary {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Upload a glossary file
     *
     * @remarks
     * Upload a new glossary file to your project to be used during translation. Glossaries can be CSV or TBX files.
     */
    createGlossaryJson(req: operations.CreateGlossaryJsonRequest, config?: AxiosRequestConfig): Promise<operations.CreateGlossaryJsonResponse>;
    /**
     * Upload a glossary file
     *
     * @remarks
     * Upload a new glossary file to your project to be used during translation. Glossaries can be CSV or TBX files.
     */
    createGlossaryMultipart(req: operations.CreateGlossaryMultipartRequest, config?: AxiosRequestConfig): Promise<operations.CreateGlossaryMultipartResponse>;
    /**
     * Delete a glossary
     *
     * @remarks
     * Delete the existing glossary from the project.
     */
    deleteGlossary(req: operations.DeleteGlossaryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGlossaryResponse>;
    /**
     * Download account glossary.
     *
     * @remarks
     * Download your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.
     */
    downloadGlobalGlossary(config?: AxiosRequestConfig): Promise<operations.DownloadGlobalGlossaryResponse>;
    /**
     * Download a glossary
     *
     * @remarks
     * Download a previously uploaded glossary file.
     */
    downloadGlossary(req: operations.DownloadGlossaryRequest, config?: AxiosRequestConfig): Promise<operations.DownloadGlossaryResponse>;
    /**
     * View glossaries
     *
     * @remarks
     * View a list of glossaries previously uploaded to the project.
     */
    getGlossaries(req: operations.GetGlossariesRequest, config?: AxiosRequestConfig): Promise<operations.GetGlossariesResponse>;
    /**
     * View a glossary
     *
     * @remarks
     * View the details of a glossary file uploaded to a project.
     */
    getGlossary(req: operations.GetGlossaryRequest, config?: AxiosRequestConfig): Promise<operations.GetGlossaryResponse>;
    /**
     * Create or update the account glossary
     *
     * @remarks
     * Update your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.
     */
    updateGlobalGlossaryJson(req: shared.AccountGlossaryUploadRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalGlossaryJsonResponse>;
    /**
     * Create or update the account glossary
     *
     * @remarks
     * Update your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.
     */
    updateGlobalGlossaryMultipart(req: shared.AccountGlossaryUploadRequest1, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalGlossaryMultipartResponse>;
    /**
     * Update a glossary
     *
     * @remarks
     * Update the existing glossary file in the project. Public users are allowed to have only 1 glossary per project and file name and contents will replaced with the new glossary file that you are uploading via this endpoint.
     */
    updateGlossaryJson(req: operations.UpdateGlossaryJsonRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGlossaryJsonResponse>;
    /**
     * Update a glossary
     *
     * @remarks
     * Update the existing glossary file in the project. Public users are allowed to have only 1 glossary per project and file name and contents will replaced with the new glossary file that you are uploading via this endpoint.
     */
    updateGlossaryMultipart(req: operations.UpdateGlossaryMultipartRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGlossaryMultipartResponse>;
}
