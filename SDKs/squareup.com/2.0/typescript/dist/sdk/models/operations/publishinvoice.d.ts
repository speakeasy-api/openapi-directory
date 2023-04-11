import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishInvoiceSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class PublishInvoiceRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    publishInvoiceRequest: shared.PublishInvoiceRequest;
    /**
     * The ID of the invoice to publish.
     */
    invoiceId: string;
}
export declare class PublishInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    publishInvoiceResponse?: shared.PublishInvoiceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
