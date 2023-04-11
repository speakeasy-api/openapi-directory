import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPaymentChangesRequest extends SpeakeasyBase {
    /**
     * Page number. Default is 1.
     */
    page?: number;
    /**
     * The number of results to return in a page
     */
    pageSize?: number;
    /**
     * The Payor ID to find associated Payments
     */
    payorId: string;
    /**
     * The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
     */
    updatedSince: Date;
}
export declare class ListPaymentChangesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Details of Payment Changes
     */
    paymentDeltaResponseV1?: shared.PaymentDeltaResponseV1;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
