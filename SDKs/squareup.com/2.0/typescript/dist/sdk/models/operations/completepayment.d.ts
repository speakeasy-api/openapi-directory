import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompletePaymentSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CompletePaymentRequest extends SpeakeasyBase {
    /**
     * The unique ID identifying the payment to be completed.
     */
    paymentId: string;
}
export declare class CompletePaymentResponse extends SpeakeasyBase {
    /**
     * Success
     */
    completePaymentResponse?: shared.CompletePaymentResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
