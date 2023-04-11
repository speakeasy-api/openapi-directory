import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentInitiationPaymentGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentInitiationPaymentGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
