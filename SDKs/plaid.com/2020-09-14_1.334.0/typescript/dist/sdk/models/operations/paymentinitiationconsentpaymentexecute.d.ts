import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentInitiationConsentPaymentExecuteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentInitiationConsentPaymentExecuteResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
