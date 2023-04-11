import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentInitiationPaymentReverseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentInitiationPaymentReverseResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
