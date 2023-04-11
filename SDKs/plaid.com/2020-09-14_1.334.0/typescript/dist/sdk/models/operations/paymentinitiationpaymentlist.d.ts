import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentInitiationPaymentListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentInitiationPaymentListResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
