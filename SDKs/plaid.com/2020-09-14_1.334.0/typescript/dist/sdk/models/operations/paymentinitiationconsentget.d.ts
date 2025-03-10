import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentInitiationConsentGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentInitiationConsentGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
