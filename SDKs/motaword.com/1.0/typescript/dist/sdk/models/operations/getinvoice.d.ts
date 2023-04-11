import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInvoiceRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    id: number;
}
export declare class GetInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound or InvoiceNotFound
     */
    error?: shared.ErrorT;
    /**
     * Invoice
     */
    invoice?: shared.Invoice;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
