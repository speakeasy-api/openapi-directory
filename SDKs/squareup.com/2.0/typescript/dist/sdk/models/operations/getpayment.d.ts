import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetPaymentRequest extends SpeakeasyBase {
    /**
     * A unique ID for the desired payment.
     */
    paymentId: string;
}
export declare class GetPaymentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPaymentResponse?: shared.GetPaymentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
