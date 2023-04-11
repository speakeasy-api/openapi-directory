import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Document {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of subjects of projects
     *
     * @remarks
     * Get a list of subjects of projects
     */
    getAllDocumentSubjects(config?: AxiosRequestConfig): Promise<operations.GetAllDocumentSubjectsResponse>;
    /**
     * View a single document
     *
     * @remarks
     * View a single document from your MotaWord account with its translation info.
     */
    getDocument(req: operations.GetDocumentRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentResponse>;
    /**
     * View a document translation progress
     *
     * @remarks
     * View the translation or proofreading progress of a document in your account. You can also track the progress of a document under the project that it was ordered with.
     */
    getDocumentProgress(req: operations.GetDocumentProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentProgressResponse>;
    /**
     * View your documents
     *
     * @remarks
     * View a list of files and documents that you have translations for. This endpoint lets you view your MotaWord account as a multilingual translated file repository, without needing to go through your projects to interact with files in them.
     */
    getDocuments(req: operations.GetDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentsResponse>;
    /**
     * Find documents similar to this document.
     *
     * @remarks
     * Find documents similar to this document. Optionally, include translation information.
     */
    getSimilarDocuments(req: operations.GetSimilarDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSimilarDocumentsResponse>;
    /**
     * Get a list of your documents
     *
     * @remarks
     * Get a list of your documents
     */
    getUserDocuments(req: operations.GetUserDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserDocumentsResponse>;
    /**
     * Regenerate preview and return preview URL for given file
     *
     * @remarks
     * Regenerate preview and return preview URL for given file
     */
    regeneratePreview(req: operations.RegeneratePreviewRequest, config?: AxiosRequestConfig): Promise<operations.RegeneratePreviewResponse>;
    /**
     * Use the translation of given source manual document as manual draft source for the given target document.
     *
     * @remarks
     * Use the translation of given source manual document as manual draft source for the given target document.
     */
    useAsDraft(req: operations.UseAsDraftRequest, config?: AxiosRequestConfig): Promise<operations.UseAsDraftResponse>;
    /**
     * Use the translation of the given manual document as a regular file.
     *
     * @remarks
     * Use the translation of the given manual document as a regular file.
     */
    useAsRegular(req: operations.UseAsRegularRequest, config?: AxiosRequestConfig): Promise<operations.UseAsRegularResponse>;
}
