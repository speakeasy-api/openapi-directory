import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.pdfblocks.com", "https://eu.api.pdfblocks.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * PDF Blocks is a secure, reliable, and fast API to work with PDF documents. Actions include: Merge PDF documents, add or remove passwords, add watermarks, remove, extract, reverse, and rotate pages, and more.
 *
 * @see {@link https://www.pdfblocks.com/docs/api/v1} - Documentation and examples
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Add an image watermark to a PDF
     *
     * @remarks
     * Add an image watermark to each page of a PDF document.
     *
     * @see {@link https://www.pdfblocks.com/docs/api/v1/add-watermark-image} - Documentation and examples
     */
    addImageWatermarkV1(req: operations.AddImageWatermarkV1RequestBody, config?: AxiosRequestConfig): Promise<operations.AddImageWatermarkV1Response>;
    /**
     * Add a password to a PDF
     *
     * @remarks
     * Protect a PDF document with a password. Encrypt the PDF document to prevent unauthorized access.
     *
     * @see {@link https://www.pdfblocks.com/docs/api/v1/add-password} - Documentation and examples
     */
    addPasswordV1(req: operations.AddPasswordV1RequestBody, config?: AxiosRequestConfig): Promise<operations.AddPasswordV1Response>;
    /**
     * Add restrictions to a PDF
     *
     * @remarks
     * Add restrictions to prevent copying, printing, and modifying a PDF document.
     *
     * @see {@link https://www.pdfblocks.com/docs/api/v1/add-restrictions} - Documentation and examples
     */
    addRestrictionsV1(req: operations.AddRestrictionsV1RequestBody, config?: AxiosRequestConfig): Promise<operations.AddRestrictionsV1Response>;
    /**
     * Add a text watermark to a PDF
     *
     * @remarks
     * Add a text watermark to each page of a PDF document. Choose from several watermark templates.
     *
     * @see {@link https://www.pdfblocks.com/docs/api/v1/add-watermark-text} - Documentation and examples
     */
    addTextWatermarkV1(req: operations.AddTextWatermarkV1RequestBody, config?: AxiosRequestConfig): Promise<operations.AddTextWatermarkV1Response>;
    /**
     * Extract pages from a PDF
     *
     * @remarks
     * Extract one or more pages from a PDF document.
     *
     * @see {@link https://www.pdfblocks.com/docs/api/v1/extract-pages} - Documentation and examples
     */
    extractPagesV1(req: operations.ExtractPagesV1RequestBody, config?: AxiosRequestConfig): Promise<operations.ExtractPagesV1Response>;
    /**
     * Merge PDF documents
     *
     * @remarks
     * Combine multiple PDF documents into a single PDF document.
     *
     * @see {@link https://www.pdfblocks.com/docs/api/v1/merge-documents} - Documentation and examples
     */
    mergeDocumentsV1(req: operations.MergeDocumentsV1RequestBody, config?: AxiosRequestConfig): Promise<operations.MergeDocumentsV1Response>;
    /**
     * Remove pages from a PDF
     *
     * @remarks
     * Remove one or more pages from a PDF document.
     *
     * @see {@link https://www.pdfblocks.com/docs/api/v1/remove-pages} - Documentation and examples
     */
    removePagesV1(req: operations.RemovePagesV1RequestBody, config?: AxiosRequestConfig): Promise<operations.RemovePagesV1Response>;
    /**
     * Remove the password from a PDF
     *
     * @remarks
     * Remove the password from an encrypted PDF document. The PDF document will no longer require a password to open.
     *
     * @see {@link https://www.pdfblocks.com/docs/api/v1/remove-password} - Documentation and examples
     */
    removePasswordV1(req: operations.RemovePasswordV1RequestBody, config?: AxiosRequestConfig): Promise<operations.RemovePasswordV1Response>;
    /**
     * Remove the restrictions from a PDF
     *
     * @remarks
     * Remove all the restrictions from a PDF document.
     *
     * @see {@link https://www.pdfblocks.com/docs/api/v1/remove-restrictions} - Documentation and examples
     */
    removeRestrictionsV1(req: operations.RemoveRestrictionsV1RequestBody, config?: AxiosRequestConfig): Promise<operations.RemoveRestrictionsV1Response>;
    /**
     * Remove the signatures from a PDF
     *
     * @remarks
     * Remove the cryptographic signatures and timestamps from a PDF document.
     *
     * @see {@link https://www.pdfblocks.com/docs/api/v1/remove-signatures} - Documentation and examples
     */
    removeSignaturesV1(req: operations.RemoveSignaturesV1RequestBody, config?: AxiosRequestConfig): Promise<operations.RemoveSignaturesV1Response>;
    /**
     * Reverse the pages of a PDF
     *
     * @remarks
     * Reverse the order of the pages of a PDF document.
     *
     * @see {@link https://www.pdfblocks.com/docs/api/v1/reverse-pages} - Documentation and examples
     */
    reversePagesV1(req: operations.ReversePagesV1RequestBody, config?: AxiosRequestConfig): Promise<operations.ReversePagesV1Response>;
    /**
     * Rotate pages in a PDF
     *
     * @remarks
     * Rotate one or more pages in a PDF document.
     *
     * @see {@link https://www.pdfblocks.com/docs/api/v1/rotate-pages} - Documentation and examples
     */
    rotatePagesV1(req: operations.RotatePagesV1RequestBody, config?: AxiosRequestConfig): Promise<operations.RotatePagesV1Response>;
}
