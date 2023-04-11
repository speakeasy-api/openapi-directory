import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ApplicationDocuments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create new Application Document
     *
     * @remarks
     * Create a new document submission attached to an application. This endpoint provisions a new document upload and creates a new application document to be attached to the application. Use this endpoint to submit any files not already requested by the application.
     */
    createApplicationDocument(req: operations.CreateApplicationDocumentRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationDocumentResponse>;
    /**
     * Edit an Application Document
     *
     * @remarks
     * Edit an application document based on the ID provided. The version parameter must match the latest application document version. When the `group_file_id` is not present, this method will update properties and metadata about an existing application document.
     */
    editApplicationDocument(req: operations.EditApplicationDocumentRequest, config?: AxiosRequestConfig): Promise<operations.EditApplicationDocumentResponse>;
    /**
     * Get Application Document
     *
     * @remarks
     * Returns the latest version of a single application document based on the ID provided.
     */
    getApplicationDocument(req: operations.GetApplicationDocumentRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationDocumentResponse>;
    /**
     * Get all Application Documents
     *
     * @remarks
     * Get a list of all documents associated with a carrier application.
     */
    getApplicationDocuments(req: operations.GetApplicationDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationDocumentsResponse>;
    /**
     * Submit new Application Document
     *
     * @remarks
     * Each group application will ask for a list of optional or required application documents. This endpoint provisions a new file upload and associates the uploaded file with the existing application document with the given ID. This endpoint can be used to replace a file that you uploaded earlier with a newer version.
     */
    submitApplicationDocument(req: operations.SubmitApplicationDocumentRequest, config?: AxiosRequestConfig): Promise<operations.SubmitApplicationDocumentResponse>;
}
