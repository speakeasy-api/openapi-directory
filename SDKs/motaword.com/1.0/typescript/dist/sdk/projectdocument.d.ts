import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProjectDocument {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Upload a new document
     *
     * @remarks
     * Upload a new document
     */
    createProjectDocument(req: operations.CreateProjectDocumentRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectDocumentResponse>;
    /**
     * Delete the document
     *
     * @remarks
     * Delete the document
     */
    deleteProjectDocument(req: operations.DeleteProjectDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectDocumentResponse>;
    /**
     * Download a project source document
     *
     * @remarks
     * Download an actual source file you uploaded to be translated in your project.
     */
    downloadProjectDocument(req: operations.DownloadProjectDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DownloadProjectDocumentResponse>;
    /**
     * Download translated document
     *
     * @remarks
     * Download translated document in the given target language.
     */
    downloadTranslatedDocumentForLanguage(req: operations.DownloadTranslatedDocumentForLanguageRequest, config?: AxiosRequestConfig): Promise<operations.DownloadTranslatedDocumentForLanguageResponse>;
    /**
     * View a project source document
     *
     * @remarks
     * View the details of a source file you uploaded to be translated in your project.
     */
    getProjectDocument(req: operations.GetProjectDocumentRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectDocumentResponse>;
    /**
     * View project source documents
     *
     * @remarks
     * Get a list of source files you uploaded to be translated in your project.
     */
    getProjectDocuments(req: operations.GetProjectDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectDocumentsResponse>;
    /**
     * Update the document.
     *
     * @remarks
     * Update the document. File name and contents will replaced with the new one.
     */
    updateProjectDocumentJson(req: operations.UpdateProjectDocumentJsonRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectDocumentJsonResponse>;
    /**
     * Update the document.
     *
     * @remarks
     * Update the document. File name and contents will replaced with the new one.
     */
    updateProjectDocumentMultipart(req: operations.UpdateProjectDocumentMultipartRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectDocumentMultipartResponse>;
}
