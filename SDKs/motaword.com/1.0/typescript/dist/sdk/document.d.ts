import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Document {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDocuments - Get a list of your documents
     *
     * Get a list of your documents
    **/
    getDocuments(req: operations.GetDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentsResponse>;
    /**
     * getSimilarDocuments - Find documents similar to this document.
     *
     * Find documents similar to this document. Optionally, include translation information.
    **/
    getSimilarDocuments(req: operations.GetSimilarDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSimilarDocumentsResponse>;
    /**
     * getUserDocuments - Get a list of your documents
     *
     * Get a list of your documents
    **/
    getUserDocuments(req: operations.GetUserDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserDocumentsResponse>;
    /**
     * regeneratePreview - Regenerate preview and return preview URL for given file
     *
     * Regenerate preview and return preview URL for given file
    **/
    regeneratePreview(req: operations.RegeneratePreviewRequest, config?: AxiosRequestConfig): Promise<operations.RegeneratePreviewResponse>;
    /**
     * useAsDraft - Use the translation of given source manual document as manual draft source for the given target document.
     *
     * Use the translation of given source manual document as manual draft source for the given target document.
    **/
    useAsDraft(req: operations.UseAsDraftRequest, config?: AxiosRequestConfig): Promise<operations.UseAsDraftResponse>;
    /**
     * useAsRegular - Use the translation of the given manual document as a regular file.
     *
     * Use the translation of the given manual document as a regular file.
    **/
    useAsRegular(req: operations.UseAsRegularRequest, config?: AxiosRequestConfig): Promise<operations.UseAsRegularResponse>;
}
