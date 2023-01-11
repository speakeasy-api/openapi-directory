import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProjectDocument {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createProjectDocument - Upload a new document
     *
     * Upload a new document
    **/
    createProjectDocument(req: operations.CreateProjectDocumentRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectDocumentResponse>;
    /**
     * deleteProjectDocument - Delete the document
     *
     * Delete the document
    **/
    deleteProjectDocument(req: operations.DeleteProjectDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectDocumentResponse>;
    /**
     * downloadProjectDocument - Download a document
     *
     * Download a document
    **/
    downloadProjectDocument(req: operations.DownloadProjectDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DownloadProjectDocumentResponse>;
    /**
     * downloadTranslatedDocumentForLanguage - Download single translated file
    **/
    downloadTranslatedDocumentForLanguage(req: operations.DownloadTranslatedDocumentForLanguageRequest, config?: AxiosRequestConfig): Promise<operations.DownloadTranslatedDocumentForLanguageResponse>;
    /**
     * getProjectDocument - Get single document
     *
     * Get single document
    **/
    getProjectDocument(req: operations.GetProjectDocumentRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectDocumentResponse>;
    /**
     * getProjectDocuments - Get a list of documents
     *
     * Get a list of documents
    **/
    getProjectDocuments(req: operations.GetProjectDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectDocumentsResponse>;
    /**
     * updateProjectDocument - Update the document.
     *
     * Update the document. File name and contents will replaced with the new one.
    **/
    updateProjectDocument(req: operations.UpdateProjectDocumentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectDocumentResponse>;
}
