import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProductAttachments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Product Attachment.
     */
    deleteProductsIdAttachmentsAttachmentIdJson(req: operations.DeleteProductsIdAttachmentsAttachmentIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsIdAttachmentsAttachmentIdJsonResponse>;
    /**
     * Retrieve all Product Attachments.
     */
    getProductsIdAttachmentsJson(req: operations.GetProductsIdAttachmentsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdAttachmentsJsonResponse>;
    /**
     * Count all Product Attachments.
     */
    getProductsIdAttachmentsCountJson(req: operations.GetProductsIdAttachmentsCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdAttachmentsCountJsonResponse>;
    /**
     * Retrieve a single Product Attachment.
     */
    getProductsIdAttachmentsAttachmentIdJson(req: operations.GetProductsIdAttachmentsAttachmentIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdAttachmentsAttachmentIdJsonResponse>;
    /**
     * Create a new Product Attachment.
     */
    postProductsIdAttachmentsJson(req: operations.PostProductsIdAttachmentsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsIdAttachmentsJsonResponse>;
}
