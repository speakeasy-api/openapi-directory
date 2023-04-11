import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentInitiationConsentCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentInitiationConsentCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
