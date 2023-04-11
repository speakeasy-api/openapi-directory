import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadPdfInvoiceRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    id: number;
}
export declare class DownloadPdfInvoiceResponse extends SpeakeasyBase {
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
    downloadPdfInvoice200ApplicationPdfBinaryString?: Uint8Array;
}
