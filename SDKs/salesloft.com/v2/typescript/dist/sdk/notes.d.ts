import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Note Management
 */
export declare class Notes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a note
     *
     * @remarks
     * Deletes a note owned by authorized account.
     * This operation is not reversible without contacting support.
     * This operation can be called multiple times successfully.
     *
     */
    deleteV2NotesIdJson(req: operations.DeleteV2NotesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV2NotesIdJsonResponse>;
    /**
     * List notes
     *
     * @remarks
     * Fetches multiple note records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2NotesJson(req: operations.GetV2NotesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2NotesJsonResponse>;
    /**
     * Fetch a note
     *
     * @remarks
     * Fetches a note, by ID only.
     *
     */
    getV2NotesIdJson(req: operations.GetV2NotesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2NotesIdJsonResponse>;
    /**
     * Create a note
     *
     * @remarks
     * Creates a note.
     *
     */
    postV2NotesJson(req: operations.PostV2NotesJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2NotesJsonResponse>;
    /**
     * Update a note
     *
     * @remarks
     * Updates a note. Any changes to the note or associated records will not reflect in your CRM.
     *
     */
    putV2NotesIdJson(req: operations.PutV2NotesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutV2NotesIdJsonResponse>;
}
