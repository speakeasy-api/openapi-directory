import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPaymentChangesV4Request extends SpeakeasyBase {
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
export declare class ListPaymentChangesV4Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Details of Payment Changes
     */
    paymentDeltaResponse?: shared.PaymentDeltaResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
