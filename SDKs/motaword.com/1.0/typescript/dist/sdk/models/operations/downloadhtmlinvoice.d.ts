import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadHtmlInvoiceRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    id: number;
}
export declare class DownloadHtmlInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound or InvoiceNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invoice
     */
    downloadHTMLInvoice200TextHTMLString?: string;
}
