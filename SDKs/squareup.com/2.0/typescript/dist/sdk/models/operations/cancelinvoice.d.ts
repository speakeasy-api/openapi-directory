import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelInvoiceSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CancelInvoiceRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    cancelInvoiceRequest: shared.CancelInvoiceRequest;
    /**
     * The ID of the [invoice](https://developer.squareup.com/reference/square_2021-08-18/objects/Invoice) to cancel.
     */
    invoiceId: string;
}
export declare class CancelInvoiceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelInvoiceResponse?: shared.CancelInvoiceResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
