import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrievePaymentSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrievePaymentRequest extends SpeakeasyBase {
    /**
     * The ID of the payment's associated location.
     */
    locationId: string;
    /**
     * The Square-issued payment ID. payment_id comes from Payment objects returned by the List Payments endpoint, Settlement objects returned by the List Settlements endpoint, or Refund objects returned by the List Refunds endpoint.
     */
    paymentId: string;
}
export declare class RetrievePaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1Payment?: shared.V1Payment;
}
