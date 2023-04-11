import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentInitiationConsentRevokeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentInitiationConsentRevokeResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
