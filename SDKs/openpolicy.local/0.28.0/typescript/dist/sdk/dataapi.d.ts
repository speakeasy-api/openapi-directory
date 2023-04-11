import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Exposes endpoints for reading and writing documents in OPA. For an explanation of the different types of documents, see [the OPA document model](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)
 */
export declare class DataAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a document
     *
     * @remarks
     * This API endpoint deletes an existing document from the server
     */
    deleteDocument(req: operations.DeleteDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDocumentResponse>;
    /**
     * Get a document
     *
     * @remarks
     * This API endpoint returns the document specified by `path`.
     *
     * The server will return a *bad request* (400) response if either:
     * - The query requires an input document and you do not provide it
     * - You provide the input document but the query has already defined it.
     */
    getDocument(req: operations.GetDocumentRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentResponse>;
    /**
     * Get a document (with input)
     *
     * @remarks
     * The server will return a *bad request* (400) response if either:
     * - The query requires an input document and you do not provide it
     * - You provided an input document but the query has already defined it.
     *
     * If `path` indexes into an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, a *not found* response (404) will be returned.
     */
    getDocumentWithPath(req: operations.GetDocumentWithPathRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentWithPathResponse>;
    /**
     * Get a document (with webhook)
     *
     * @remarks
     * The example given here assumes you have created a policy (with `PUT /v1/policies/{path}`), such as:
     *
     *   ```yaml
     *   package opa.examples
     *   import input.example.flag
     *   allow_request { flag == true }
     *   ```
     *
     * The server will return a *not found* (404) response if the requested document is missing or undefined.
     *
     */
    getDocumentWithWebHook(req: operations.GetDocumentWithWebHookRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentWithWebHookResponse>;
    /**
     * Update a document
     *
     * @remarks
     * This API endpoint updates an existing document on the server by describing the changes required (using [JSON patch operations](http://jsonpatch.com/))
     */
    patchDocument(req: operations.PatchDocumentRequest, config?: AxiosRequestConfig): Promise<operations.PatchDocumentResponse>;
    /**
     * Create or overwrite a document
     *
     * @remarks
     * If the path does not refer to an existing document (for example *us-west/servers*), the server will attempt to create all the necessary containing documents.
     *
     * This behavior is similar to the Unix command [mkdir -p](https://en.wikipedia.org/wiki/Mkdir#Options).
     */
    putDocument(req: operations.PutDocumentRequest, config?: AxiosRequestConfig): Promise<operations.PutDocumentResponse>;
}
