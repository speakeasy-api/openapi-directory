import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Orderinvoices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
     */
    contentOrderinvoicesCreatechargeinvoice(req: operations.ContentOrderinvoicesCreatechargeinvoiceRequest, security: operations.ContentOrderinvoicesCreatechargeinvoiceSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrderinvoicesCreatechargeinvoiceResponse>;
    /**
     * Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.
     */
    contentOrderinvoicesCreaterefundinvoice(req: operations.ContentOrderinvoicesCreaterefundinvoiceRequest, security: operations.ContentOrderinvoicesCreaterefundinvoiceSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrderinvoicesCreaterefundinvoiceResponse>;
}
