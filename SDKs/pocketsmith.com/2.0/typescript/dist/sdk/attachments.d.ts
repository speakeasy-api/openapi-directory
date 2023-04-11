import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Attachments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete attachment
     *
     * @remarks
     * Deletes a particular attachment by its ID.
     */
    deleteAttachmentsId(req: operations.DeleteAttachmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttachmentsIdResponse>;
    /**
     * Unassigns attachment in transaction
     *
     * @remarks
     * Unassigns a particular attachment by its ID from the transaction ID. This does not delete the attachment, it only removes its association from the transaction.
     */
    deleteTransactionsTransactionIdAttachmentsAttachmentId(req: operations.DeleteTransactionsTransactionIdAttachmentsAttachmentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTransactionsTransactionIdAttachmentsAttachmentIdResponse>;
    /**
     * Get attachment
     *
     * @remarks
     * Gets a particular attachment by its ID.
     */
    getAttachmentsId(req: operations.GetAttachmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAttachmentsIdResponse>;
    /**
     * List attachments in transaction
     *
     * @remarks
     * Lists attachments belonging to a transaction by their ID.
     */
    getTransactionsIdAttachments(req: operations.GetTransactionsIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsIdAttachmentsResponse>;
    /**
     * Lists attachments in user
     *
     * @remarks
     * Lists attachments belonging to a user by their ID.
     */
    getUsersIdAttachments(req: operations.GetUsersIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdAttachmentsResponse>;
    /**
     * Assigns attachment to transaction
     *
     * @remarks
     * Assigns an attachment to the transaction by their ID.
     */
    postTransactionsIdAttachments(req: operations.PostTransactionsIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.PostTransactionsIdAttachmentsResponse>;
    /**
     * Create attachment in user
     *
     * @remarks
     * Creates an attachment belonging to the user by their ID.
     */
    postUsersIdAttachments(req: operations.PostUsersIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdAttachmentsResponse>;
    /**
     * Update attachment
     *
     * @remarks
     * Updates the title of the attachment.
     */
    putAttachmentsId(req: operations.PutAttachmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutAttachmentsIdResponse>;
}
