import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApplicationDocuments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createApplicationDocument - Create new Application Document
     *
     * Create a new document submission attached to an application. This endpoint provisions a new document upload and creates a new application document to be attached to the application. Use this endpoint to submit any files not already requested by the application.
    **/
    createApplicationDocument(req: operations.CreateApplicationDocumentRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationDocumentResponse>;
    /**
     * editApplicationDocument - Edit an Application Document
     *
     * Edit an application document based on the ID provided. The version parameter must match the latest application document version. When the `group_file_id` is not present, this method will update properties and metadata about an existing application document.
    **/
    editApplicationDocument(req: operations.EditApplicationDocumentRequest, config?: AxiosRequestConfig): Promise<operations.EditApplicationDocumentResponse>;
    /**
     * getApplicationDocument - Get Application Document
     *
     * Returns the latest version of a single application document based on the ID provided.
    **/
    getApplicationDocument(req: operations.GetApplicationDocumentRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationDocumentResponse>;
    /**
     * getApplicationDocuments - Get all Application Documents
     *
     * Get a list of all documents associated with a carrier application.
    **/
    getApplicationDocuments(req: operations.GetApplicationDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationDocumentsResponse>;
    /**
     * submitApplicationDocument - Submit new Application Document
     *
     * Each group application will ask for a list of optional or required application documents. This endpoint provisions a new file upload and associates the uploaded file with the existing application document with the given ID. This endpoint can be used to replace a file that you uploaded earlier with a newer version.
    **/
    submitApplicationDocument(req: operations.SubmitApplicationDocumentRequest, config?: AxiosRequestConfig): Promise<operations.SubmitApplicationDocumentResponse>;
}
