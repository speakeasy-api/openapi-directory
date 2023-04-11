import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInvoiceSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetInvoiceRequest extends SpeakeasyBase {
    /**
     * The ID of the invoice to retrieve.
     */
    invoiceId: string;
}
export declare class GetInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getInvoiceResponse?: shared.GetInvoiceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
