import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelPaymentSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CancelPaymentRequest extends SpeakeasyBase {
    /**
     * The ID of the payment to cancel.
     */
    paymentId: string;
}
export declare class CancelPaymentResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelPaymentResponse?: shared.CancelPaymentResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
