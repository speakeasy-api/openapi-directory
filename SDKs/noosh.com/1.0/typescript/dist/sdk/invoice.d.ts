import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Invoice {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List a specific invoice of project Level
     *
     * @remarks
     * List a specific invoice of project Level
     */
    getInvoice(req: operations.GetInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoiceResponse>;
    /**
     * List files of invoice Level
     *
     * @remarks
     * List files of invoice Level
     */
    getInvoiceFiles(req: operations.GetInvoiceFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoiceFilesResponse>;
    /**
     * List invoices by a specific order
     *
     * @remarks
     * List invoices by a specific order
     */
    getInvoices(req: operations.GetInvoicesRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoicesResponse>;
}
