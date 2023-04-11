import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateInvoiceSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateInvoiceRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    updateInvoiceRequest: shared.UpdateInvoiceRequest;
    /**
     * The ID of the invoice to update.
     */
    invoiceId: string;
}
export declare class UpdateInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateInvoiceResponse?: shared.UpdateInvoiceResponse;
}
