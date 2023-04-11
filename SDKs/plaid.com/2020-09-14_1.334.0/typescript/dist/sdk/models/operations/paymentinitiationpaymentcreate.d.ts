import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentInitiationPaymentCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentInitiationPaymentCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
